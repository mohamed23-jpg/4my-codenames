/**
 * 4M-Y CODENAMES — P2P Module (WebRTC via PeerJS)
 * Star topology: Host relays all messages
 * Room discovery: P2P registry peer (4mycn-rooms-registry-v2)
 */
const P2P = (() => {
  let peer = null;
  let myId = '';
  let roomCode = '';
  let isHost = false;
  let connections = {};
  let onMessageCallback = null;
  let onPlayerLeaveCallback = null;
  let onConnectedCallback = null;
  let onErrorCallback = null;
  let registryConn = null;
  let isRegistry = false;
  let registryData = {};

  const REGISTRY_ID = '4mycn-rooms-registry-v2';

  function generateRoomCode() {
    return Array.from({length:6}, () =>
      'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'[Math.floor(Math.random()*32)]
    ).join('');
  }

  function getHostPeerId(code) { return '4mycn-' + code + '-host'; }
  function getGuestPeerId(code, name) {
    const safe = name.replace(/[^a-zA-Z0-9]/g, '').substring(0, 6) || 'g';
    const rand = Math.random().toString(36).substring(2, 6);
    return '4mycn-' + code + '-' + safe + '-' + rand;
  }

  /* ─── CREATE ROOM ─── */
  function createRoom(playerInfo, roomOptions) {
    roomCode = generateRoomCode();
    isHost   = true;
    const peerId = getHostPeerId(roomCode);
    myId = peerId;

    peer = new Peer(peerId, { debug: 0, config: { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }, { urls: 'stun:stun1.l.google.com:19302' }] } });

    peer.on('open', () => {
      if (onConnectedCallback) onConnectedCallback({ roomCode, isHost: true });
      if (roomOptions && roomOptions.isPublic) {
        _registerRoom(roomCode, playerInfo, roomOptions);
      }
    });

    peer.on('connection', conn => { _setupConn(conn, false); });

    peer.on('error', err => {
      if (err.type === 'unavailable-id') {
        peer.destroy();
        createRoom(playerInfo, roomOptions);
        return;
      }
      if (onErrorCallback) onErrorCallback(err.message || 'خطأ في الاتصال');
    });
  }

  /* ─── JOIN ROOM ─── */
  function joinRoom(code, playerInfo, password) {
    roomCode = (code || '').toUpperCase().trim();
    isHost   = false;
    const peerId = getGuestPeerId(roomCode, (playerInfo && playerInfo.name) || 'guest');
    myId = peerId;

    peer = new Peer(peerId, { debug: 0, config: { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }, { urls: 'stun:stun1.l.google.com:19302' }] } });

    peer.on('open', () => {
      const hostId = getHostPeerId(roomCode);
      const conn = peer.connect(hostId, { reliable: true, metadata: { player: playerInfo, password } });
      _setupConn(conn, true);
    });

    peer.on('connection', conn => { _setupConn(conn, false); });

    peer.on('error', () => {
      if (onErrorCallback) onErrorCallback('لم يتم العثور على الغرفة: ' + roomCode);
    });
  }

  function _setupConn(conn, isToHost) {
    conn.on('open', () => {
      connections[conn.peer] = conn;
      if (isToHost && onConnectedCallback) {
        onConnectedCallback({ roomCode, isHost: false });
      }
    });
    conn.on('data', data => { _handleMsg(data, conn.peer); });
    conn.on('close', () => {
      delete connections[conn.peer];
      if (onPlayerLeaveCallback) onPlayerLeaveCallback(conn.peer);
    });
    conn.on('error', () => { delete connections[conn.peer]; });
  }

  function _handleMsg(data, fromPeerId) {
    // Host auto-relays most messages to all other peers
    if (isHost && data.type !== 'PONG') {
      broadcastExcept(data, fromPeerId);
    }
    if (onMessageCallback) onMessageCallback(data, fromPeerId);
  }

  /* ─── SEND / BROADCAST ─── */
  function send(data) {
    if (isHost) {
      broadcast(data);
    } else {
      const hostId = getHostPeerId(roomCode);
      const c = connections[hostId];
      if (c && c.open) { try { c.send(data); } catch(e) {} }
    }
  }
  function broadcast(data) {
    Object.values(connections).forEach(c => { if (c && c.open) try { c.send(data); } catch(e) {} });
  }
  function broadcastExcept(data, excludeId) {
    Object.entries(connections).forEach(([id, c]) => {
      if (id !== excludeId && c && c.open) try { c.send(data); } catch(e) {}
    });
  }
  function sendTo(peerId, data) {
    const c = connections[peerId];
    if (c && c.open) try { c.send(data); } catch(e) {}
  }

  /* ─── ROOM REGISTRY ─── */
  function _registerRoom(code, playerInfo, opts) {
    const roomInfo = {
      code,
      hostName: playerInfo.name,
      mode: opts.mode || 'team',
      maxPlayers: opts.maxPlayers || 10,
      hasPassword: !!(opts.password),
      playerCount: 1,
      createdAt: Date.now()
    };

    // Try connecting to existing registry
    const tmpPeer = new Peer(null, { debug: 0 });
    tmpPeer.on('open', () => {
      const conn = tmpPeer.connect(REGISTRY_ID, { reliable: true });
      let sent = false;
      conn.on('open', () => {
        sent = true;
        conn.send({ type: 'REGISTER_ROOM', room: roomInfo });
        registryConn = conn;
      });
      setTimeout(() => {
        if (!sent) {
          tmpPeer.destroy();
          _becomeRegistry(code, roomInfo);
        }
      }, 3000);
      conn.on('error', () => { tmpPeer.destroy(); _becomeRegistry(code, roomInfo); });
    });
    tmpPeer.on('error', () => { _becomeRegistry(code, roomInfo); });
  }

  function _becomeRegistry(code, roomInfo) {
    const regPeer = new Peer(REGISTRY_ID, { debug: 0 });
    regPeer.on('open', () => {
      isRegistry = true;
      registryData[code] = roomInfo;
      regPeer.on('connection', conn => {
        conn.on('data', data => {
          if (data.type === 'REGISTER_ROOM') {
            registryData[data.room.code] = data.room;
          } else if (data.type === 'UNREGISTER_ROOM') {
            delete registryData[data.code];
          } else if (data.type === 'GET_ROOMS') {
            const now = Date.now();
            const valid = Object.values(registryData).filter(r => now - r.createdAt < 3 * 60 * 60 * 1000);
            conn.send({ type: 'ROOM_LIST', rooms: valid });
          } else if (data.type === 'UPDATE_PLAYER_COUNT') {
            if (registryData[data.code]) registryData[data.code].playerCount = data.count;
          }
        });
      });
    });
    regPeer.on('error', () => {
      // Another peer became registry first — try connecting again after brief delay
      setTimeout(() => _registerRoom(code, { name: roomInfo.hostName }, {
        mode: roomInfo.mode, maxPlayers: roomInfo.maxPlayers, password: roomInfo.hasPassword ? '1' : ''
      }), 2000);
    });
  }

  function getPublicRooms(callback) {
    const tmpPeer = new Peer(null, { debug: 0 });
    let done = false;

    const finish = (rooms) => {
      if (done) return;
      done = true;
      try { tmpPeer.destroy(); } catch(e) {}
      callback(rooms || []);
    };

    const timer = setTimeout(() => finish([]), 6000);

    tmpPeer.on('open', () => {
      const conn = tmpPeer.connect(REGISTRY_ID, { reliable: true });
      conn.on('open', () => { conn.send({ type: 'GET_ROOMS' }); });
      conn.on('data', data => {
        if (data.type === 'ROOM_LIST') { clearTimeout(timer); finish(data.rooms); }
      });
      conn.on('error', () => { clearTimeout(timer); finish([]); });
    });
    tmpPeer.on('error', () => { clearTimeout(timer); finish([]); });
  }

  function updateRoomPlayerCount(count) {
    if (registryConn && registryConn.open) {
      registryConn.send({ type: 'UPDATE_PLAYER_COUNT', code: roomCode, count });
    } else if (isRegistry && registryData[roomCode]) {
      registryData[roomCode].playerCount = count;
    }
  }

  function unregisterRoom() {
    if (registryConn && registryConn.open) {
      try { registryConn.send({ type: 'UNREGISTER_ROOM', code: roomCode }); } catch(e) {}
    } else if (isRegistry && roomCode) {
      delete registryData[roomCode];
    }
  }

  /* ─── DISCONNECT ─── */
  function disconnect() {
    unregisterRoom();
    Object.values(connections).forEach(c => { try { c.close(); } catch(e) {} });
    connections = {};
    if (peer) { try { peer.destroy(); } catch(e) {} peer = null; }
    isHost = false; roomCode = ''; myId = '';
    registryConn = null;
  }

  /* ─── HELPERS ─── */
  function getMyId()    { return myId; }
  function _getPeer()   { return peer; }
  function getRoomCode(){ return roomCode; }
  function getIsHost()  { return isHost; }

  /* ─── EVENTS ─── */
  function onConnected(cb)   { onConnectedCallback   = cb; }
  function onMessage(cb)     { onMessageCallback     = cb; }
  function onError(cb)       { onErrorCallback       = cb; }
  function onPlayerLeave(cb) { onPlayerLeaveCallback = cb; }

  return {
    createRoom, joinRoom,
    send, broadcast, broadcastExcept, sendTo,
    getMyId, _getPeer, getRoomCode, getIsHost,
    disconnect,
    getPublicRooms, updateRoomPlayerCount, unregisterRoom,
    onConnected, onMessage, onError, onPlayerLeave,
  };
})();
