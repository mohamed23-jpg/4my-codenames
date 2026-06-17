/**
 * 4M-Y CODENAMES — Voice Module (WebRTC via PeerJS)
 * Full-mesh audio — listeners receive without mic permission
 */
const Voice = (() => {
  let myStream    = null;
  let peer        = null;
  let calls       = {};     // remotePeerId → MediaConnection
  let audioEls    = {};     // remotePeerId → <audio>
  let volumes     = {};     // remotePeerId → 0-1
  let micMuted    = false;
  let available   = false;
  let statusCb    = null;
  let _allMuted   = false;  // host global mute

  /* ─── Microphone — only requested when user taps Talk ─── */
  async function requestMic() {
    try {
      myStream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation:true, noiseSuppression:true, sampleRate:44100 },
        video: false
      });
      available = true;
      // Re-upgrade existing receive-only calls to send audio too
      Object.entries(calls).forEach(([pid, c]) => {
        try {
          myStream.getAudioTracks().forEach(track => {
            c.peerConnection?.getSenders().forEach(s => {
              if(s.track?.kind === 'audio') s.replaceTrack(track).catch(()=>{});
            });
          });
        } catch(e){}
      });
      _emit();
      return true;
    } catch(e) {
      console.warn('[Voice] mic error:', e.name, e.message);
      return false;
    }
  }

  /* ─── Init (must be called after PeerJS peer is ready) ─── */
  function init(peerInstance) {
    if (!peerInstance || peer === peerInstance) return;
    peer = peerInstance;

    peer.on('call', incomingCall => {
      // Always answer — listeners get empty stream, talkers get their mic stream
      // This way LISTENERS can receive audio WITHOUT granting mic permission
      incomingCall.answer(myStream || new MediaStream());
      _bindCall(incomingCall);
    });
  }

  /* ─── Initiate call to a remote peer (receive-only if no mic) ─── */
  function callPeer(remotePeerId) {
    if (!peer || !remotePeerId) return;
    if (remotePeerId === peer.id) return;
    if (calls[remotePeerId]) return;

    // Use empty stream for receive-only — no mic permission needed to join mesh
    const stream = myStream || new MediaStream();

    try {
      const c = peer.call(remotePeerId, stream, {
        metadata: { from: peer.id }
      });
      if (!c) return;
      _bindCall(c);
    } catch(e) {
      console.warn('[Voice] callPeer error:', e);
    }
  }

  function _bindCall(c) {
    calls[c.peer] = c;

    c.on('stream', remoteStream => {
      _attachAudio(c.peer, remoteStream);
      _emit();
    });

    c.on('close', () => {
      _detachAudio(c.peer);
      delete calls[c.peer];
      _emit();
    });

    c.on('error', e => {
      console.warn('[Voice] call error:', e);
      _detachAudio(c.peer);
      delete calls[c.peer];
    });
  }

  function _attachAudio(pid, stream) {
    _detachAudio(pid);
    const audio = document.createElement('audio');
    audio.id = `va-${pid}`;
    audio.autoplay = true;
    audio.setAttribute('playsinline', '');
    audio.volume = volumes[pid] !== undefined ? volumes[pid] : 1;
    audio.muted = _allMuted;
    audio.srcObject = stream;
    document.body.appendChild(audio);
    audioEls[pid] = audio;
    audio.play().catch(()=>{});
  }

  function _detachAudio(pid) {
    const el = audioEls[pid];
    if (el) { el.srcObject = null; el.remove(); delete audioEls[pid]; }
  }

  /* ─── Mic mute — only relevant for users who enabled mic ─── */
  function setMicMuted(muted) {
    micMuted = muted;
    if (myStream) myStream.getAudioTracks().forEach(t => t.enabled = !muted);
    _emit();
  }
  function getMicMuted() { return micMuted; }

  /* ─── Host: mute everyone's OUTPUT (they still transmit) ─── */
  function setAllOutputMuted(muted) {
    _allMuted = muted;
    Object.values(audioEls).forEach(el => el.muted = muted);
  }
  function getAllMuted() { return _allMuted; }

  /* ─── Per-peer volume ─── */
  function setPeerVolume(pid, v) {
    volumes[pid] = Math.max(0, Math.min(1, parseFloat(v)||0));
    const el = audioEls[pid]; if (el) el.volume = volumes[pid];
  }
  function getPeerVolume(pid) {
    return volumes[pid] !== undefined ? volumes[pid] : 1;
  }

  /* ─── Status ─── */
  function onStatus(cb) { statusCb = cb; }
  function _emit()      { if (statusCb) statusCb(); }
  function isAvailable(){ return available; }

  /* ─── Cleanup ─── */
  function disconnect() {
    Object.values(calls).forEach(c => { try { c.close(); } catch(e){} });
    calls = {};
    Object.keys(audioEls).forEach(id => _detachAudio(id));
    if (myStream) { myStream.getTracks().forEach(t => t.stop()); myStream = null; }
    peer = null; available = false; _emit();
  }

  return { requestMic, init, callPeer, setMicMuted, getMicMuted,
           setAllOutputMuted, getAllMuted, setPeerVolume, getPeerVolume,
           onStatus, isAvailable, disconnect };
})();
