/**
 * 4M-Y CODENAMES — Audio Module (SFX only, no background music)
 */
const Audio = (() => {
  let sfxEnabled = true;
  let sfxVolume  = 0.7;
  const sounds   = {};

  function _load(name, src) {
    const a = new window.Audio(src);
    a.preload = 'auto';
    sounds[name] = a;
  }

  function init() {
    _load('click',    'sounds/click.mp3');
    _load('hint',     'sounds/hint.mp3');
    _load('correct',  'sounds/correct.mp3');
    _load('wrong',    'sounds/wrong.mp3');
    _load('black',    'sounds/black.mp3');
    _load('win',      'sounds/win.mp3');
    _load('lose',     'sounds/lose.mp3');
    _load('cardFlip', 'sounds/card-flip.mp3');
    _load('kick',     'sounds/kick.mp3');

    const saved = localStorage.getItem('4mycn_audio_v2');
    if (saved) {
      try {
        const s = JSON.parse(saved);
        sfxEnabled = s.sfxEnabled !== false;
        sfxVolume  = s.sfxVolume  ?? 0.7;
      } catch(e) {}
    }
  }

  function play(name) {
    if (!sfxEnabled) return;
    const s = sounds[name];
    if (!s) return;
    try {
      const c = s.cloneNode();
      c.volume = sfxVolume;
      c.play().catch(() => {});
    } catch(e) {}
  }

  function setSfxEnabled(val) { sfxEnabled = val; _save(); }
  function setSfxVolume(val)  { sfxVolume  = val; _save(); }
  function getSettings()      { return { sfxEnabled, sfxVolume }; }

  function _save() {
    localStorage.setItem('4mycn_audio_v2', JSON.stringify({ sfxEnabled, sfxVolume }));
  }

  return { init, play, setSfxEnabled, setSfxVolume, getSettings };
})();
