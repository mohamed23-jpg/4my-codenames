/**
 * 4M-Y CODENAMES — App v4
 * © 2026 4M-Y  |  Standalone HTML/CSS/JS  |  P2P via PeerJS
 */

// ══════════════════════════════════════════════════════
//  CONSTANTS
// ══════════════════════════════════════════════════════
const AVATARS = [
  { id:'dog',    svg:`<svg viewBox="0 0 60 60"><rect width="60" height="60" rx="10" fill="#C8912A"/><ellipse cx="30" cy="38" rx="16" ry="13" fill="#E8B040"/><ellipse cx="30" cy="27" rx="13" ry="12" fill="#E8B040"/><ellipse cx="20" cy="17" rx="7" ry="9" fill="#C8912A" transform="rotate(-12 20 17)"/><ellipse cx="40" cy="17" rx="7" ry="9" fill="#C8912A" transform="rotate(12 40 17)"/><circle cx="25" cy="26" r="3" fill="#111"/><circle cx="35" cy="26" r="3" fill="#111"/><circle cx="26" cy="25" r="1.2" fill="#fff"/><circle cx="36" cy="25" r="1.2" fill="#fff"/><ellipse cx="30" cy="32" rx="5" ry="3" fill="#C8912A"/><circle cx="30" cy="33" r="2" fill="#222"/></svg>` },
  { id:'cat',    svg:`<svg viewBox="0 0 60 60"><rect width="60" height="60" rx="10" fill="#9B9B9B"/><ellipse cx="30" cy="36" rx="15" ry="13" fill="#BCBCBC"/><ellipse cx="30" cy="26" rx="12" ry="11" fill="#BCBCBC"/><polygon points="17,15 22,28 11,22" fill="#9B9B9B"/><polygon points="43,15 38,28 49,22" fill="#9B9B9B"/><circle cx="25" cy="26" r="3" fill="#222"/><circle cx="35" cy="26" r="3" fill="#222"/><ellipse cx="30" cy="31" rx="3" ry="2" fill="#9B9B9B"/><line x1="22" y1="29" x2="12" y2="27" stroke="#aaa" stroke-width="1"/><line x1="22" y1="31" x2="12" y2="33" stroke="#aaa" stroke-width="1"/><line x1="38" y1="29" x2="48" y2="27" stroke="#aaa" stroke-width="1"/><line x1="38" y1="31" x2="48" y2="33" stroke="#aaa" stroke-width="1"/></svg>` },
  { id:'fox',    svg:`<svg viewBox="0 0 60 60"><rect width="60" height="60" rx="10" fill="#D2580A"/><ellipse cx="30" cy="37" rx="15" ry="12" fill="#E87A2A"/><ellipse cx="30" cy="26" rx="12" ry="11" fill="#E87A2A"/><polygon points="17,13 24,27 9,22" fill="#D2580A"/><polygon points="43,13 36,27 51,22" fill="#D2580A"/><circle cx="25" cy="25" r="3" fill="#111"/><circle cx="35" cy="25" r="3" fill="#111"/><ellipse cx="30" cy="31" rx="6" ry="4" fill="#fff"/><circle cx="30" cy="32" r="2" fill="#222"/></svg>` },
  { id:'lion',   svg:`<svg viewBox="0 0 60 60"><rect width="60" height="60" rx="10" fill="#8B5E0A"/><circle cx="30" cy="30" r="18" fill="#C4872A" opacity=".5"/><ellipse cx="30" cy="36" rx="14" ry="12" fill="#E5AA40"/><ellipse cx="30" cy="26" rx="12" ry="11" fill="#E5AA40"/><circle cx="25" cy="25" r="3.5" fill="#111"/><circle cx="35" cy="25" r="3.5" fill="#111"/><circle cx="26" cy="24" r="1.2" fill="#fff"/><circle cx="36" cy="24" r="1.2" fill="#fff"/><ellipse cx="30" cy="31" rx="5" ry="4" fill="#C4872A"/><ellipse cx="30" cy="33" rx="3" ry="2" fill="#222"/></svg>` },
  { id:'bear',   svg:`<svg viewBox="0 0 60 60"><rect width="60" height="60" rx="10" fill="#5C3D1E"/><ellipse cx="30" cy="37" rx="15" ry="13" fill="#7B5030"/><ellipse cx="30" cy="26" rx="12" ry="11" fill="#7B5030"/><circle cx="19" cy="17" r="6" fill="#5C3D1E"/><circle cx="41" cy="17" r="6" fill="#5C3D1E"/><circle cx="25" cy="25" r="3.5" fill="#111"/><circle cx="35" cy="25" r="3.5" fill="#111"/><ellipse cx="30" cy="31" rx="6" ry="4" fill="#5C3D1E"/><ellipse cx="30" cy="33" rx="3" ry="2" fill="#111"/></svg>` },
  { id:'dino',   svg:`<svg viewBox="0 0 60 60"><rect width="60" height="60" rx="10" fill="#1a5e27"/><ellipse cx="30" cy="36" rx="15" ry="13" fill="#2d8c3e"/><ellipse cx="30" cy="25" rx="12" ry="11" fill="#2d8c3e"/><rect x="23" y="11" width="5" height="10" rx="2" fill="#1a5e27"/><rect x="32" y="9" width="5" height="9" rx="2" fill="#1a5e27"/><ellipse cx="25" cy="24" rx="3.5" ry="4" fill="#111"/><ellipse cx="35" cy="24" rx="3.5" ry="4" fill="#111"/><circle cx="26" cy="23" r="1.2" fill="#4ddd70"/><circle cx="36" cy="23" r="1.2" fill="#4ddd70"/><path d="M23 32 Q30 38 37 32" stroke="#1a5e27" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>` },
  { id:'panda',  svg:`<svg viewBox="0 0 60 60"><rect width="60" height="60" rx="10" fill="#f0f0f0"/><ellipse cx="30" cy="37" rx="15" ry="13" fill="#f8f8f8"/><ellipse cx="30" cy="26" rx="12" ry="11" fill="#f8f8f8"/><circle cx="18" cy="16" r="7" fill="#222"/><circle cx="42" cy="16" r="7" fill="#222"/><ellipse cx="24" cy="26" rx="5" ry="5.5" fill="#111"/><ellipse cx="36" cy="26" rx="5" ry="5.5" fill="#111"/><circle cx="24" cy="25" r="2.5" fill="#111"/><circle cx="36" cy="25" r="2.5" fill="#111"/><circle cx="25" cy="24" r="1.2" fill="#fff"/><circle cx="37" cy="24" r="1.2" fill="#fff"/><ellipse cx="30" cy="32" rx="5" ry="3" fill="#ddd"/><circle cx="30" cy="33" r="2" fill="#555"/></svg>` },
  { id:'penguin',svg:`<svg viewBox="0 0 60 60"><rect width="60" height="60" rx="10" fill="#1a1a2e"/><ellipse cx="30" cy="36" rx="14" ry="14" fill="#1a1a2e"/><ellipse cx="30" cy="34" rx="10" ry="11" fill="#f5f5f5"/><ellipse cx="30" cy="22" rx="11" ry="10" fill="#1a1a2e"/><circle cx="26" cy="20" r="3.5" fill="#fff"/><circle cx="34" cy="20" r="3.5" fill="#fff"/><circle cx="26" cy="20" r="2" fill="#111"/><circle cx="34" cy="20" r="2" fill="#111"/><circle cx="27" cy="19" r=".8" fill="#fff"/><circle cx="35" cy="19" r=".8" fill="#fff"/><ellipse cx="30" cy="26" rx="4" ry="3" fill="#F59E0B"/><ellipse cx="30" cy="28" rx="3" ry="2" fill="#F59E0B"/></svg>` },
  { id:'owl',    svg:`<svg viewBox="0 0 60 60"><rect width="60" height="60" rx="10" fill="#6B4226"/><ellipse cx="30" cy="35" rx="14" ry="14" fill="#8B5E3C"/><ellipse cx="30" cy="23" rx="13" ry="11" fill="#8B5E3C"/><circle cx="23" cy="23" r="8" fill="#f5f0dc"/><circle cx="37" cy="23" r="8" fill="#f5f0dc"/><circle cx="23" cy="23" r="5" fill="#F59E0B"/><circle cx="37" cy="23" r="5" fill="#F59E0B"/><circle cx="23" cy="23" r="3" fill="#111"/><circle cx="37" cy="23" r="3" fill="#111"/><circle cx="24" cy="22" r="1.2" fill="#fff"/><circle cx="38" cy="22" r="1.2" fill="#fff"/><polygon points="30,26 28,30 32,30" fill="#D2680A"/><polygon points="15,12 20,22 10,20" fill="#6B4226"/><polygon points="45,12 50,20 40,22" fill="#6B4226"/></svg>` },
  { id:'ninja',  svg:`<svg viewBox="0 0 60 60"><rect width="60" height="60" rx="10" fill="#1a1a1a"/><ellipse cx="30" cy="35" rx="15" ry="13" fill="#2a2a2a"/><ellipse cx="30" cy="24" rx="13" ry="12" fill="#2a2a2a"/><rect x="5" y="20" width="50" height="12" rx="4" fill="#c0392b"/><rect x="5" y="23" width="50" height="3" fill="#e74c3c"/><circle cx="25" cy="22" r="4" fill="#1a1a1a"/><circle cx="35" cy="22" r="4" fill="#1a1a1a"/><circle cx="25" cy="22" r="2.5" fill="#e8f0fe"/><circle cx="35" cy="22" r="2.5" fill="#e8f0fe"/><circle cx="25.8" cy="21.2" r="1" fill="#1a1a1a"/><circle cx="35.8" cy="21.2" r="1" fill="#1a1a1a"/></svg>` },
  { id:'mafia',  svg:`<svg viewBox="0 0 60 60"><rect width="60" height="60" rx="10" fill="#2c2c3e"/><ellipse cx="30" cy="37" rx="14" ry="12" fill="#e8c9a0"/><ellipse cx="30" cy="27" rx="12" ry="11" fill="#e8c9a0"/><rect x="10" y="6" width="40" height="22" rx="20" fill="#111"/><rect x="8" y="18" width="44" height="5" rx="2" fill="#111"/><circle cx="25" cy="27" r="3" fill="#333"/><circle cx="35" cy="27" r="3" fill="#333"/><circle cx="26" cy="26" r="1.2" fill="#666"/><circle cx="36" cy="26" r="1.2" fill="#666"/><path d="M24 33 Q30 38 36 33" stroke="#c4a080" stroke-width="2" fill="none" stroke-linecap="round"/><rect x="18" y="37" width="24" height="3" rx="1.5" fill="#c4a080"/></svg>` },
  { id:'alien',  svg:`<svg viewBox="0 0 60 60"><rect width="60" height="60" rx="10" fill="#0f3d1a"/><ellipse cx="30" cy="35" rx="13" ry="11" fill="#2ddc5a"/><ellipse cx="30" cy="23" rx="15" ry="14" fill="#2ddc5a"/><ellipse cx="22" cy="22" rx="7" ry="8" fill="#111"/><ellipse cx="38" cy="22" rx="7" ry="8" fill="#111"/><ellipse cx="22" cy="22" rx="5" ry="6" fill="#7fffa8"/><ellipse cx="38" cy="22" rx="5" ry="6" fill="#7fffa8"/><circle cx="22" cy="22" r="3" fill="#111"/><circle cx="38" cy="22" r="3" fill="#111"/><circle cx="23" cy="21" r="1.2" fill="#fff"/><circle cx="39" cy="21" r="1.2" fill="#fff"/><path d="M23 35 Q30 40 37 35" stroke="#1dbb46" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="18" cy="12" r="2" fill="#7fffa8"/><circle cx="42" cy="12" r="2" fill="#7fffa8"/></svg>` },
  { id:'robot',  svg:`<svg viewBox="0 0 60 60"><rect width="60" height="60" rx="10" fill="#3a3a5c"/><rect x="14" y="16" width="32" height="28" rx="5" fill="#5a5a8c"/><rect x="8" y="30" width="6" height="10" rx="3" fill="#4a4a7c"/><rect x="46" y="30" width="6" height="10" rx="3" fill="#4a4a7c"/><rect x="22" y="24" width="16" height="10" rx="2" fill="#1a1a3a"/><circle cx="25" cy="29" r="3" fill="#00d4ff"/><circle cx="35" cy="29" r="3" fill="#00d4ff"/><rect x="22" y="38" width="16" height="3" rx="1.5" fill="#4a4a7c"/><rect x="26" y="38" width="2" height="3" fill="#7fff00"/><rect x="30" y="38" width="2" height="3" fill="#ff4444"/><rect x="34" y="38" width="2" height="3" fill="#7fff00"/><rect x="26" y="10" width="8" height="8" rx="2" fill="#5a5a8c"/><rect x="29" y="6" width="2" height="6" rx="1" fill="#aaa"/></svg>` },
  { id:'vampire',svg:`<svg viewBox="0 0 60 60"><rect width="60" height="60" rx="10" fill="#1a0a2e"/><ellipse cx="30" cy="37" rx="14" ry="12" fill="#d4a8b8"/><ellipse cx="30" cy="26" rx="12" ry="12" fill="#d4a8b8"/><ellipse cx="30" cy="15" rx="14" ry="10" fill="#111"/><circle cx="24" cy="25" r="3.5" fill="#6b0f1a"/><circle cx="36" cy="25" r="3.5" fill="#6b0f1a"/><circle cx="25" cy="24" r="1.5" fill="#ff3355"/><circle cx="37" cy="24" r="1.5" fill="#ff3355"/><path d="M26 33 Q30 37 34 33" stroke="#b89098" stroke-width="1.5" fill="none"/><polygon points="28,36 30,40 32,36" fill="#fff"/><polygon points="27,36 25,40 29,36" fill="#fff"/></svg>` },
  { id:'wizard', svg:`<svg viewBox="0 0 60 60"><rect width="60" height="60" rx="10" fill="#2e1065"/><ellipse cx="30" cy="37" rx="14" ry="12" fill="#d4b896"/><ellipse cx="30" cy="27" rx="12" ry="11" fill="#d4b896"/><polygon points="30,2 18,24 42,24" fill="#7c3aed"/><rect x="16" y="22" width="28" height="5" rx="2" fill="#6d28d9"/><circle cx="25" cy="27" r="3" fill="#5b3a1a"/><circle cx="35" cy="27" r="3" fill="#5b3a1a"/><circle cx="26" cy="26" r="1.2" fill="#fff"/><circle cx="36" cy="26" r="1.2" fill="#fff"/><path d="M24 33 Q30 38 36 33" stroke="#c4a080" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="22" cy="8" r="2" fill="#ffd700"/><circle cx="35" cy="5" r="1.5" fill="#c084fc"/><circle cx="28" cy="4" r="1" fill="#f0abfc"/></svg>` },
  { id:'samurai',svg:`<svg viewBox="0 0 60 60"><rect width="60" height="60" rx="10" fill="#7f1d1d"/><ellipse cx="30" cy="37" rx="13" ry="11" fill="#f5c07a"/><ellipse cx="30" cy="26" rx="11" ry="11" fill="#f5c07a"/><rect x="12" y="10" width="36" height="22" rx="5" fill="#b91c1c"/><rect x="14" y="12" width="32" height="8" rx="3" fill="#7f1d1d"/><rect x="10" y="20" width="40" height="6" rx="3" fill="#991b1b"/><circle cx="24" cy="26" r="3.5" fill="#1a1a1a"/><circle cx="36" cy="26" r="3.5" fill="#1a1a1a"/><circle cx="25" cy="25" r="1.5" fill="#f59e0b"/><circle cx="37" cy="25" r="1.5" fill="#f59e0b"/><rect x="23" y="31" width="14" height="4" rx="2" fill="#dc2626"/></svg>` },
];

const LEVEL_XP    = [0,100,250,500,1000,2000,4000,8000,16000,32000];
const LEVEL_NAMES = ['مبتدئ','متعلم','محترف','خبير','أسطورة','بطل','إمبراطور','أسطوري','خارق','نجم الكون'];
const LEVEL_EMOJI = [
  `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" style="vertical-align:-2px"><path d="M12 22V12"/><path d="M12 12C10 9 7 8 6 5c2.5-.5 5 1 6 7z"/><path d="M12 12c2-2 5-3 6-6-2.5-.5-5 1-6 6z"/></svg>`,
  `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2.5" stroke-linecap="round" style="vertical-align:-2px"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>`,
  `<svg width="13" height="13" viewBox="0 0 24 24" fill="#f97316" style="vertical-align:-2px"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2.5" stroke-linecap="round" style="vertical-align:-2px"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  `<svg width="13" height="13" viewBox="0 0 24 24" fill="#f59e0b" style="vertical-align:-2px"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>`,
  `<svg width="13" height="13" viewBox="0 0 24 24" fill="#f59e0b" style="vertical-align:-2px"><path d="M7 2v2H3v4c0 2.2 1.8 4 4 4h.3c.7 2 2.5 3.5 4.7 3.9V18h-3v2h8v-2h-3v-2.1c2.2-.4 4-1.9 4.7-3.9H19c2.2 0 4-1.8 4-4V4h-4V2H7zM7 10V6H5v4c0 1.1.9 2 2 2zm10 0c1.1 0 2-.9 2-2V6h-2v4z"/></svg>`,
  `<svg width="13" height="13" viewBox="0 0 24 24" fill="#ef4444" style="vertical-align:-2px"><path d="M5 16L3 7l5 4 4-7 4 7 5-4-2 9H5zm0 2h14v2H5v-2z"/></svg>`,
  `<svg width="13" height="13" viewBox="0 0 24 24" fill="#3b82f6" style="vertical-align:-2px"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>`,
  `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="2" stroke-linecap="round" style="vertical-align:-2px"><path d="M12 2L2 9l10 13L22 9z"/><path d="M2 9h20"/></svg>`,
  `<svg width="13" height="13" viewBox="0 0 24 24" fill="#7c3aed" style="vertical-align:-2px"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="5" fill="#c084fc"/><circle cx="12" cy="12" r="2" fill="#ede9fe"/></svg>`,
];

/* ── SVG icon helpers ── */
const SVG = {
  redDot:  `<svg class="team-dot" viewBox="0 0 14 14" width="14" height="14"><circle cx="7" cy="7" r="6" fill="#EF4444" stroke="rgba(0,0,0,.2)" stroke-width="1.5"/></svg>`,
  blueDot: `<svg class="team-dot" viewBox="0 0 14 14" width="14" height="14"><circle cx="7" cy="7" r="6" fill="#3B82F6" stroke="rgba(0,0,0,.2)" stroke-width="1.5"/></svg>`,
  crown:   `<svg class="icon-svg" viewBox="0 0 24 24" width="14" height="14" fill="#F59E0B"><path d="M5 16L3 7l5 4 4-7 4 7 5-4-2 9H5zm0 2h14v2H5v-2z"/></svg>`,
  skull:   `<svg class="icon-svg" viewBox="0 0 24 24" width="13" height="13" fill="#888"><path d="M12 2C7.5 2 4 5.5 4 10c0 2.9 1.5 5.4 3.8 6.9L8 21h8l.2-4.1C18.5 15.4 20 12.9 20 10c0-4.5-3.5-8-8-8zm-2.5 13h5v1h-5zm0-2h5v1h-5zm7.5-3a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-7 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/></svg>`,
  pause:   `<svg class="icon-svg" viewBox="0 0 24 24" width="13" height="13" fill="#aaa"><rect x="6" y="4" width="4" height="16" rx="1.5"/><rect x="14" y="4" width="4" height="16" rx="1.5"/></svg>`,
  trophy:  `<svg viewBox="0 0 24 24" width="40" height="40" fill="#F59E0B"><path d="M7 2v2H3v4c0 2.2 1.8 4 4 4h.3c.7 2 2.5 3.5 4.7 3.9V18h-3v2h8v-2h-3v-2.1c2.2-.4 4-1.9 4.7-3.9H19c2.2 0 4-1.8 4-4V4h-4V2H7zM7 10V6H5v4c0 1.1.9 2 2 2zm10 0c1.1 0 2-.9 2-2V6h-2v4z"/></svg>`,
  sadFace: `<svg viewBox="0 0 24 24" width="40" height="40"><circle cx="12" cy="12" r="10" fill="#FEE2E2" stroke="#EF4444" stroke-width="2"/><circle cx="9" cy="10" r="1.5" fill="#EF4444"/><circle cx="15" cy="10" r="1.5" fill="#EF4444"/><path d="M8 16c1-2 6-2 8 0" stroke="#EF4444" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M10 8l2-2 2 2" stroke="#EF4444" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`,
  draw:    `<svg viewBox="0 0 24 24" width="40" height="40" fill="#F59E0B" stroke="#F59E0B"><path fill="#FEF9C3" stroke-width="2" d="M12 2L15 9h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z"/></svg>`,
  lock:    `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#888" stroke-width="2.5" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>`,
  globe:   `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 014 10 15 15 0 01-4 10 15 15 0 01-4-10 15 15 0 014-10z"/></svg>`,
  refresh: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.5 9A9 9 0 0121 12M20.5 15A9 9 0 013 12"/></svg>`,
  users:   `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`,
  target:  `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2" fill="currentColor"/></svg>`,
  bulb:    `<svg viewBox="0 0 24 24" width="14" height="14" fill="#F59E0B"><path d="M9 21h6M12 3C8.7 3 6 5.7 6 9c0 2.4 1.4 4.5 3.4 5.5L10 17h4l.6-2.5C16.6 13.5 18 11.4 18 9c0-3.3-2.7-6-6-6z"/></svg>`,
  mic:     `<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#22c55e" stroke-width="2" stroke-linecap="round"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0014 0M12 19v3M9 22h6"/></svg>`,
  micOff:  `<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0014 0M12 19v3M9 22h6M3 3l18 18"/></svg>`,
  speaker: `<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 010 7.07"/></svg>`,
  muteBtn: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`,
  volBtn:  `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg>`,
  gear:    `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`,
  chat:    `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`,
  send:    `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  sparkle: `<svg viewBox="0 0 24 24" width="17" height="17" fill="#F59E0B" style="vertical-align:-3px"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>`,
};

// ══════════════════════════════════════════════════════
//  HELPERS
// ══════════════════════════════════════════════════════
function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function shuffleArr(a){ const b=[...a]; for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];} return b; }
function getLevel(xp){ let lv=1; for(let i=LEVEL_XP.length-1;i>=0;i--){ if(xp>=LEVEL_XP[i]){lv=i+1;break;} } return Math.min(lv,10); }
function getXpProgress(xp){ const lv=getLevel(xp); const cur=LEVEL_XP[lv-1]||0; const nxt=LEVEL_XP[lv]||LEVEL_XP[LEVEL_XP.length-1]*2; return {progress:xp-cur,needed:nxt-cur,lv}; }

function avatarSvgStr(id, customAvatar){
  if(id==='custom'&&customAvatar) return `<img src="${customAvatar}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit">`;
  const av=AVATARS.find(a=>a.id===id)||AVATARS[0];
  return av.svg;
}
function avatarEl(p, cls=''){
  const id=p?.avatarId||'dog';
  const custom=p?.customAvatar||null;
  return `<div class="avatar ${cls}">${avatarSvgStr(id,custom)}</div>`;
}
function lvBadge(xp){
  const lv=getLevel(xp||0);
  return `<span class="lv-badge lv-${lv}" title="${LEVEL_NAMES[lv-1]}">${LEVEL_EMOJI[lv-1]}${lv}</span>`;
}

// ══════════════════════════════════════════════════════
//  PROFILE
// ══════════════════════════════════════════════════════
let localPlayer = null;
let selectedAvatarId = 'dog';

function loadProfile(){
  const s=localStorage.getItem('4mycn_profile'); if(!s) return false;
  localPlayer=JSON.parse(s);
  if(!localPlayer.avatarId) localPlayer.avatarId='dog';
  if(typeof localPlayer.xp!=='number') localPlayer.xp=0;
  selectedAvatarId=localPlayer.avatarId;
  return true;
}
function saveProfile(){ if(localPlayer) localStorage.setItem('4mycn_profile',JSON.stringify(localPlayer)); }
function addXp(n){ if(!localPlayer) return; localPlayer.xp=(localPlayer.xp||0)+n; saveProfile(); updateHud(); }

// ══════════════════════════════════════════════════════
//  HUD
// ══════════════════════════════════════════════════════
function updateHud(){
  const el=document.getElementById('player-hud'); if(!el||!localPlayer) return;
  const lv=getLevel(localPlayer.xp||0);
  const {progress,needed}=getXpProgress(localPlayer.xp||0);
  const pct=Math.min(100,Math.round((progress/needed)*100));
  el.innerHTML=`
    <div class="hud-av-wrap">
      ${avatarEl(localPlayer,'avatar-sm')}
      <span class="hud-lv-dot lv-${lv}">${lv}</span>
    </div>
    <div class="hud-text">
      <div class="hud-name">${esc(localPlayer.name)}</div>
      <div class="hud-sub">${LEVEL_EMOJI[lv-1]} ${LEVEL_NAMES[lv-1]}</div>
      <div class="hud-xpbar"><div class="hud-xpfill" style="width:${pct}%"></div></div>
      <div class="hud-xpnum">${localPlayer.xp} XP</div>
    </div>`;
}

// ══════════════════════════════════════════════════════
//  SCREENS
// ══════════════════════════════════════════════════════
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  const el=document.getElementById(id); if(el) el.classList.add('active');
}
function toast(msg,type=''){
  const c=document.getElementById('toast-container'); if(!c) return;
  const t=document.createElement('div'); t.className=`toast${type?' '+type:''}`;
  t.textContent=msg; c.appendChild(t); setTimeout(()=>t.remove(),3400);
}

// ══════════════════════════════════════════════════════
//  AVATAR PICKER
// ══════════════════════════════════════════════════════
function renderAvatarPicker(containerId, onSelect){
  const c=document.getElementById(containerId); if(!c) return;
  c.innerHTML='';
  AVATARS.forEach(av=>{
    const d=document.createElement('div');
    d.className='avatar-opt'+(selectedAvatarId===av.id?' selected':'');
    d.dataset.id=av.id; d.innerHTML=av.svg;
    d.onclick=()=>{ selectedAvatarId=av.id; c.querySelectorAll('.avatar-opt').forEach(x=>x.classList.toggle('selected',x.dataset.id===av.id)); if(onSelect) onSelect(av.id); };
    c.appendChild(d);
  });
  // Upload
  const up=document.createElement('div');
  up.className='avatar-opt'; up.style.border='2px dashed #ccc'; up.title='رفع صورة';
  up.innerHTML=`<svg viewBox="0 0 40 40" fill="none" stroke="#999" stroke-width="2"><path d="M20 8v18M12 16l8-8 8 8"/><rect x="6" y="28" width="28" height="6" rx="2"/></svg>`;
  up.onclick=()=>{
    const inp=document.createElement('input'); inp.type='file'; inp.accept='image/*';
    inp.onchange=e=>{
      const f=e.target.files[0]; if(!f) return;
      const reader=new FileReader();
      reader.onload=ev=>{
        // Resize to max 100×100 to keep P2P transmission small
        const img=new Image();
        img.onload=()=>{
          const canvas=document.createElement('canvas');
          const MAX=100;
          const ratio=Math.min(MAX/img.width, MAX/img.height, 1);
          canvas.width=Math.round(img.width*ratio);
          canvas.height=Math.round(img.height*ratio);
          canvas.getContext('2d').drawImage(img,0,0,canvas.width,canvas.height);
          const dataUrl=canvas.toDataURL('image/jpeg',0.85);
          if(localPlayer) localPlayer.customAvatar=dataUrl;
          selectedAvatarId='custom'; saveProfile();
          up.innerHTML=`<img src="${dataUrl}" style="width:100%;height:100%;object-fit:cover;border-radius:4px">`;
          up.classList.add('selected');
          c.querySelectorAll('.avatar-opt:not(:last-child)').forEach(x=>x.classList.remove('selected'));
          if(onSelect) onSelect('custom');
        };
        img.src=ev.target.result;
      };
      reader.readAsDataURL(f);
    }; inp.click();
  };
  c.appendChild(up);
}

// ══════════════════════════════════════════════════════
//  ONBOARDING
// ══════════════════════════════════════════════════════
function showOnboarding(){
  showScreen('screen-onboard');
  setTimeout(()=>renderAvatarPicker('onboard-avatar-opts'),50);
}
function saveOnboarding(){
  const raw=document.getElementById('onboard-name')?.value||'';
  const name=raw.trim();
  if(!name){ toast('أدخل اسمك','error'); return; }
  if(!/^[\u0600-\u06FFa-zA-Z\s]+$/.test(name)){
    toast('الاسم يجب أن يحتوي أحرف عربية أو إنجليزية فقط','error'); return;
  }
  const letters=name.replace(/\s/g,'');
  if(letters.length<3){ toast('الاسم يجب أن يحتوي على 3 أحرف على الأقل','error'); return; }
  if(name.length>20){ toast('الاسم طويل جداً (20 حرف كحد أقصى)','error'); return; }
  localPlayer={name,avatarId:selectedAvatarId,customAvatar:localPlayer?.customAvatar||null,xp:0};
  saveProfile(); Audio.play('click'); showMainMenu();
}

// ══════════════════════════════════════════════════════
//  MAIN MENU
// ══════════════════════════════════════════════════════
function showMainMenu(){
  showScreen('screen-menu'); updateHud(); buildScatterBg();
  const rp=new URLSearchParams(window.location.search).get('room');
  if(rp){ window.history.replaceState({},'',window.location.pathname); setTimeout(()=>handleRoomParam(rp.toUpperCase()),500); }
}
function buildScatterBg(){
  const c=document.querySelector('.menu-scatter-bg'); if(!c) return; c.innerHTML='';
  const cols=['#FFE046','#EF4444','#3B82F6','#22C55E','#F97316','#8B5CF6','#ffffff','#EF4444','#3B82F6','#FFE046'];
  const words=['شمس','قمر','بحر','نجمة','جبل','ذهب','أسد','نمر','سيف','درع','كتاب','حصان','ملك','قلعة','صحراء','نهر','سفينة','طيارة','قطار','مدينة'];
  for(let i=0;i<22;i++){
    const d=document.createElement('div'); d.className='scatter-card';
    const r=(Math.random()*70-35);
    const bg=cols[i%cols.length];
    const txtCol=(bg==='#FFE046'||bg==='#ffffff')?'#1A1A1A':'#ffffff';
    d.style.cssText=`left:${Math.random()*96}%;top:${Math.random()*92}%;width:${52+Math.floor(Math.random()*44)}px;aspect-ratio:.71;--r:${r}deg;transform:rotate(${r}deg);background:${bg};animation-delay:${Math.random()*6}s;animation-duration:${5+Math.random()*5}s;opacity:${0.08+Math.random()*0.13};color:${txtCol};font-size:.55rem;font-weight:900;display:flex;align-items:center;justify-content:center;border:2px solid #1A1A1A;box-shadow:2px 2px 0 #1A1A1A`;
    d.textContent=words[i%words.length];
    c.appendChild(d);
  }
}

// ══════════════════════════════════════════════════════
//  INVITE LINK / PASSWORD GATE
// ══════════════════════════════════════════════════════
let _pendingRoomCode='';
function handleRoomParam(code){
  _pendingRoomCode=code;
  document.getElementById('pwdgate-code').textContent=code;
  document.getElementById('pwdgate-error').style.display='none';
  document.getElementById('pwdgate-input').value='';
  document.getElementById('modal-pwdgate').classList.add('open');
}
function tryPwdGateJoin(){ const pwd=document.getElementById('pwdgate-input')?.value||''; closePwdGate(); _doJoin(_pendingRoomCode,pwd); }
function closePwdGate(){ document.getElementById('modal-pwdgate').classList.remove('open'); }
function showPwdGateError(){ document.getElementById('pwdgate-error').style.display='block'; document.getElementById('pwdgate-input').value=''; document.getElementById('modal-pwdgate').classList.add('open'); }

// ══════════════════════════════════════════════════════
//  ROOM STATE
// ══════════════════════════════════════════════════════
let roomState={ code:'',isHost:false,players:[], settings:{mode:'team',gridSize:25,maxPlayers:10,password:'',isPublic:true} };
let gameState=null, myRole=null, myTeam=null, logEntries=[];
let chatEnabled=true, chatMessages=[], _chatOpen=false;

function buildPlayerInfo(){
  return {
    id:localPlayer.name+'_'+Date.now(), name:localPlayer.name,
    avatarId:localPlayer.avatarId||'dog',
    customAvatar:localPlayer.customAvatar||null,
    xp:localPlayer.xp||0,
    peerId:P2P.getMyId()||null
  };
}

// ══════════════════════════════════════════════════════
//  CREATE ROOM
// ══════════════════════════════════════════════════════
function openCreateRoomModal() { Audio.play('click'); document.getElementById('modal-create').classList.add('open'); }
function closeCreateRoomModal(){ document.getElementById('modal-create').classList.remove('open'); }

function doCreateRoom(){
  if(_checkDuplicateTab()){toast('أنت موجود بالفعل في غرفة على تبويب آخر!','error');return;}
  const mode=document.querySelector('#modal-create .mode-btn.active')?.dataset.mode||'team';
  const gridSize=parseInt(document.querySelector('#modal-create .grid-btn.active')?.dataset.grid||'25');
  const maxP=parseInt(document.getElementById('cr-max')?.value||'10');
  const password=document.getElementById('cr-pwd')?.value.trim()||'';
  const isPublic=document.getElementById('cr-public')?.checked!==false;
  Audio.play('click'); closeCreateRoomModal();
  roomState.settings={mode,gridSize,maxPlayers:maxP,password,isPublic};
  roomState.isHost=true;
  P2P.onConnected(info=>{
    roomState.code=info.roomCode; roomState.isHost=true;
    const me={...buildPlayerInfo(),peerId:P2P.getMyId(),isHost:true,team:null,wantBoss:false,micMuted:true};
    roomState.players=[me];
    _enterRoom();
    showLobby();
  });
  P2P.onError(e=>toast('خطأ في الاتصال: '+e,'error'));
  P2P.onMessage(handleMsg);
  P2P.onPlayerLeave(handlePeerLeave);
  P2P.createRoom(buildPlayerInfo(),{mode,maxPlayers:maxP,password,isPublic});
  toast('جاري إنشاء الغرفة...','info');
}

// ══════════════════════════════════════════════════════
//  JOIN ROOM
// ══════════════════════════════════════════════════════
function openJoinModal() {
  Audio.play('click');
  document.getElementById('modal-join').classList.add('open');
  switchJoinTab('active');
  loadPublicRooms();
}
function closeJoinModal(){ document.getElementById('modal-join').classList.remove('open'); }
function switchJoinTab(tab){
  document.getElementById('tab-btn-active').classList.toggle('jt-active', tab==='active');
  document.getElementById('tab-btn-private').classList.toggle('jt-active', tab==='private');
  document.getElementById('join-panel-active').style.display  = tab==='active'  ? '' : 'none';
  document.getElementById('join-panel-private').style.display = tab==='private' ? '' : 'none';
}
function joinFromModalCode(){
  const code=document.getElementById('join-code')?.value.trim().toUpperCase();
  const pwd=document.getElementById('join-pwd')?.value.trim()||'';
  if(!code||code.length<4){ toast('أدخل كود الغرفة','error'); return; }
  closeJoinModal(); _doJoin(code,pwd);
}
function joinRoomFromList(room){
  closeJoinModal();
  if(room.hasPassword){ _pendingRoomCode=room.code; document.getElementById('pwdgate-code').textContent=room.code; document.getElementById('pwdgate-error').style.display='none'; document.getElementById('pwdgate-input').value=''; document.getElementById('modal-pwdgate').classList.add('open'); }
  else _doJoin(room.code,'');
}
function _doJoin(code,password=''){
  if(_checkDuplicateTab()){toast('أنت موجود بالفعل في غرفة على تبويب آخر!','error');return;}
  toast('جاري الانضمام إلى '+code+'...','info');
  P2P.onConnected(info=>{
    roomState.code=info.roomCode; roomState.isHost=false;
    setTimeout(()=>P2P.send({type:'PLAYER_HELLO',player:buildPlayerInfo(),password}),500);
  });
  P2P.onError(()=>toast('تعذّر الاتصال بالغرفة: '+code,'error'));
  P2P.onMessage(handleMsg);
  P2P.onPlayerLeave(handlePeerLeave);
  P2P.joinRoom(code,buildPlayerInfo(),password);
}
function loadPublicRooms(){
  const list=document.getElementById('room-list'); if(!list) return;
  list.innerHTML='<div class="rooms-loading"><div class="spinner"></div><span style="font-size:.8rem;color:#888;margin-right:8px">جاري البحث...</span></div>';
  P2P.getPublicRooms(rooms=>{
    if(!rooms||!rooms.length){
      list.innerHTML=`<div class="rooms-empty">لا توجد غرف متاحة حالياً<br><small>أنشئ غرفة وضعها عامة ليراها الآخرون</small></div>`;
      return;
    }
    list.innerHTML='';
    rooms.forEach(r=>{
      const modeIcon = r.mode==='team'
        ? `<span class="ri-mode-badge ri-team">${SVG.users} زوجي</span>`
        : `<span class="ri-mode-badge ri-solo">${SVG.target} فردي</span>`;
      const d=document.createElement('div'); d.className='room-item';
      d.innerHTML=`
        <div class="ri-info">
          <div class="room-item-name">${esc(r.hostName)}</div>
          <div class="room-item-meta">${r.playerCount||1} لاعبين · ${modeIcon}</div>
        </div>
        <div class="ri-right">
          <span class="room-code-pill">${r.code}</span>
          ${r.hasPassword?`<span class="room-badge badge-lock">${SVG.lock}</span>`:''}
        </div>`;
      d.onclick=()=>joinRoomFromList(r); list.appendChild(d);
    });
  });
}

// ══════════════════════════════════════════════════════
//  MESSAGE HANDLER
// ══════════════════════════════════════════════════════
function handleMsg(data,fromPeerId){
  switch(data.type){
    case 'PLAYER_HELLO':      onPlayerHello(data,fromPeerId); break;
    case 'JOIN_ACCEPTED':     onJoinAccepted(data); break;
    case 'JOIN_DENIED':
      if(data.reason==='كلمة السر خاطئة') showPwdGateError();
      else toast('رُفض الانضمام: '+(data.reason||''),'error'); break;
    case 'PLAYER_JOINED':     onPlayerJoined(data); break;
    case 'ROOM_STATE':        onRoomStateUpdate(data); break;
    case 'PLAYER_TEAM':       onPlayerTeamUpdate(data); break;
    case 'PLAYER_BOSS':       onPlayerBossUpdate(data); break;
    case 'REMOVE_BOSS_CANDIDATE': onRemoveBossCandidate(data); break;
    case 'START_GAME':        applyStartGame(data.state); break;
    case 'GAME_SYNC':         applyGameSync(data.state); break;
    case 'BOSS_SEND_HINT':    onBossSendHintMsg(data,fromPeerId); break;
    case 'BOSS_SELECT_CARD':  onBossSelectCard(data); break;
    case 'CARD_PENDING':      onCardPending(data); break;
    case 'CARD_CONFIRM':      onCardConfirm(data); break;
    case 'CARD_HOVER':        onCardHover(data); break;
    case 'END_TURN':          onEndTurnMsg(); break;
    case 'KICK':              onKick(); break;
    case 'MIC_STATUS':        onMicStatus(data); break;
    case 'VOICE_PEERS':       data.peerIds?.forEach(id=>{if(id) Voice.callPeer(id);}); break;
    case 'VOICE_NEW_PEER':    if(data.peerId) setTimeout(()=>Voice.callPeer(data.peerId),800); break;
    case 'HOST_MUTE_ALL':     Voice.setAllOutputMuted(data.muted); toast(data.muted?'الصوت أُوقف من المضيف':'الصوت مُفعَّل','info'); break;
    case 'CHAT_MSG':          onChatMsg(data,fromPeerId); break;
    case 'CHAT_TOGGLE':       chatEnabled=data.enabled; toast(data.enabled?'💬 الدردشة مُفعَّلة':'💬 الدردشة موقوفة','info'); break;
    case 'HOST_CLOSING':      onHostClosing(); break;
  }
}
function handlePeerLeave(peerId){
  const p=roomState.players.find(x=>x.peerId===peerId);
  if(p) toast(`غادر ${p.name}`,'error');
  roomState.players=roomState.players.filter(x=>x.peerId!==peerId);
  if(gameState){const gp=gameState.players.find(x=>x.peerId===peerId);if(gp)gp.eliminated=true;}
  if(document.getElementById('screen-lobby')?.classList.contains('active')) renderLobby();
  if(document.getElementById('screen-game')?.classList.contains('active')) renderGame();
}

// ══════════════════════════════════════════════════════
//  HOST HANDLERS
// ══════════════════════════════════════════════════════
function onPlayerHello(data,fromPeerId){
  if(!roomState.isHost) return;
  if(roomState.settings.password&&data.password!==roomState.settings.password){ P2P.sendTo(fromPeerId,{type:'JOIN_DENIED',reason:'كلمة السر خاطئة'}); return; }
  if(roomState.players.length>=roomState.settings.maxPlayers){ P2P.sendTo(fromPeerId,{type:'JOIN_DENIED',reason:'الغرفة ممتلئة'}); return; }
  const player={...data.player,peerId:fromPeerId,team:null,wantBoss:false,micMuted:true};
  roomState.players.push(player);
  P2P.updateRoomPlayerCount(roomState.players.length);
  const existingIds=roomState.players.map(p=>p.peerId).filter(id=>id&&id!==fromPeerId);
  P2P.sendTo(fromPeerId,{type:'JOIN_ACCEPTED',roomState:{code:roomState.code,settings:roomState.settings,players:roomState.players}});
  P2P.sendTo(fromPeerId,{type:'VOICE_PEERS',peerIds:existingIds});
  P2P.broadcastExcept({type:'VOICE_NEW_PEER',peerId:fromPeerId},fromPeerId);
  P2P.broadcast({type:'PLAYER_JOINED',player});
  renderLobby();
}
function onJoinAccepted(data){
  roomState={...roomState,...data.roomState};
  const me={...buildPlayerInfo(),peerId:P2P.getMyId(),team:null,wantBoss:false,micMuted:true};
  if(!roomState.players.find(p=>p.name===localPlayer.name)) roomState.players.push(me);
  _enterRoom();
  showLobby(); toast('تم الانضمام! 🎉','success');
}
function onPlayerJoined(data){
  if(!roomState.players.find(p=>p.peerId===data.player.peerId)) roomState.players.push(data.player);
  toast(`انضم ${data.player.name}`,'info');
  if(document.getElementById('screen-lobby')?.classList.contains('active')) renderLobby();
}
function onRoomStateUpdate(data){ roomState.players=data.players; roomState.settings=data.settings; if(document.getElementById('screen-lobby')?.classList.contains('active')) renderLobby(); }
function onPlayerTeamUpdate(data){ const p=roomState.players.find(x=>x.name===data.name); if(p){p.team=data.team;} if(document.getElementById('screen-lobby')?.classList.contains('active')) renderLobby(); }
function onPlayerBossUpdate(data){ const p=roomState.players.find(x=>x.name===data.name); if(p){p.wantBoss=data.wantBoss;} if(document.getElementById('screen-lobby')?.classList.contains('active')) renderLobby(); }
function onRemoveBossCandidate(data){ const p=roomState.players.find(x=>x.name===data.name); if(p) p.wantBoss=false; if(document.getElementById('screen-lobby')?.classList.contains('active')) renderLobby(); }
function hostRemoveBossCandidate(name){ if(!roomState.isHost) return; const p=roomState.players.find(x=>x.name===name); if(p) p.wantBoss=false; P2P.broadcast({type:'REMOVE_BOSS_CANDIDATE',name}); renderLobby(); Audio.play('click'); }

function onModeToggle(btn){
  const wrap=btn.closest('.modal-box, #lobby-settings'); if(!wrap) return;
  const mode=btn.dataset.mode;
  wrap.querySelectorAll('.grid-btn').forEach(b=>{
    if(mode==='team'){
      b.disabled=b.dataset.grid!=='25';
      b.style.opacity=b.dataset.grid!=='25'?'.4':'1';
      b.style.cursor=b.dataset.grid!=='25'?'not-allowed':'pointer';
      if(b.dataset.grid==='25'){ b.classList.add('active'); }
      else { b.classList.remove('active'); }
    } else {
      b.disabled=false; b.style.opacity='1'; b.style.cursor='pointer';
    }
  });
}

// ══════════════════════════════════════════════════════
//  VOICE
// ══════════════════════════════════════════════════════
function broadcastMicStatus(muted){ P2P.send({type:'MIC_STATUS',name:localPlayer.name,muted}); }
function onMicStatus(data){
  const rp=roomState.players.find(p=>p.name===data.name); if(rp) rp.micMuted=data.muted;
  const gp=gameState?.players.find(p=>p.name===data.name); if(gp) gp.micMuted=data.muted;
}
async function enableVoice(){
  Voice.init(P2P._getPeer?.());
  Voice.onStatus(()=>updateHud());
  const ok=await Voice.requestMic();
  if(ok){
    roomState.players.forEach(p=>{if(p.peerId&&p.peerId!==P2P.getMyId()) Voice.callPeer(p.peerId);});
    const btn=document.getElementById('mic-enable-btn');
    if(btn){btn.textContent='✓ مُفعَّل';btn.className='btn btn-sm btn-green';btn.disabled=true;}
    toast('تم تفعيل المايك! 🎤','success');
    if(igOpen) buildIgSettings();
  } else toast('لم يُسمح بالمايك. تحقق من إعدادات المتصفح.','error');
}
function toggleMyMic(enabled){ Voice.setMicMuted(!enabled); broadcastMicStatus(!enabled); }
function hostMuteAll(mute){ if(!roomState.isHost) return; Voice.setAllOutputMuted(mute); P2P.broadcast({type:'HOST_MUTE_ALL',muted:mute}); }

// ══════════════════════════════════════════════════════
//  LOBBY
// ══════════════════════════════════════════════════════
function showLobby(){ showScreen('screen-lobby'); Voice.init(P2P._getPeer?.()); renderLobby(); }
function renderLobby(){
  const codeEl=document.getElementById('lobby-code'); if(codeEl) codeEl.textContent=roomState.code;
  const modeEl=document.getElementById('lobby-mode'); if(modeEl) modeEl.innerHTML=roomState.settings.mode==='team'?`${SVG.users} زوجي`:`${SVG.target} فردي`;
  const cntEl=document.getElementById('lobby-players-count'); if(cntEl) cntEl.textContent=roomState.players.length;
  const listEl=document.getElementById('lobby-player-list'); if(!listEl) return;
  listEl.innerHTML='';
  roomState.players.forEach((p,i)=>{
    const isMe=p.name===localPlayer.name, isHost=i===0;
    const li=document.createElement('div'); li.className=`player-item${isMe?' me-item':''}`;
    li.innerHTML=`${avatarEl(p,'avatar-sm')}<span class="pi-name">${esc(p.name)}${isMe?'<sup>أنا</sup>':''}</span>${lvBadge(p.xp||0)}
      ${p.team==='red'?`<span class="player-tag tag-red">${SVG.redDot}</span>`:p.team==='blue'?`<span class="player-tag tag-blue">${SVG.blueDot}</span>`:''}
      ${p.wantBoss?'<span class="player-tag tag-boss">Boss</span>':''}
      ${isHost?'<span class="player-tag tag-host">مضيف</span>':''}
      ${roomState.isHost&&!isMe?`<button class="btn btn-sm btn-red" onclick="kickPlayer('${esc(p.peerId||p.name)}')">طرد</button>`:''}`;
    listEl.appendChild(li);
  });
  // Team buttons for ALL players (including host)
  const tjr=document.getElementById('team-join-row');
  if(tjr) tjr.style.display=roomState.settings.mode==='team'?'flex':'none';
  // Settings panel (host only)
  const ss=document.getElementById('lobby-settings');
  if(ss) ss.style.display=roomState.isHost?'block':'none';
  // Boss candidates section
  const bcs=document.getElementById('boss-candidates-section');
  if(bcs){
    const candidates=roomState.players.filter(p=>p.wantBoss);
    if(candidates.length>0){
      bcs.style.display='block';
      bcs.innerHTML=`<div class="section-title">${SVG.crown} المرشحون ليكونوا البوص</div>`+
        candidates.map(p=>`
          <div class="player-item" style="margin-bottom:5px">
            ${avatarEl(p,'avatar-sm')}
            <span class="pi-name">${esc(p.name)}</span>
            ${lvBadge(p.xp||0)}
            <span class="player-tag tag-boss">Boss</span>
            ${roomState.isHost&&p.name!==localPlayer.name?`<button class="btn btn-sm btn-red" onclick="hostRemoveBossCandidate('${esc(p.name)}')">✕ إلغاء</button>`:''}
          </div>`).join('');
    } else {
      bcs.style.display='none'; bcs.innerHTML='';
    }
  }

  // Start button
  const sb=document.getElementById('lobby-start-btn');
  if(sb){
    sb.style.display=roomState.isHost?'inline-flex':'none';
    const isTeam=roomState.settings.mode==='team';
    const min=isTeam?4:3;
    let startDisabled=roomState.players.length<min;
    let startTitle=startDisabled?`يحتاج ${min} لاعبين على الأقل (حالياً: ${roomState.players.length})`:'';
    if(isTeam&&!startDisabled){
      // Simulate auto-distribution to check balance
      let red=roomState.players.filter(p=>p.team==='red').length;
      let blue=roomState.players.filter(p=>p.team==='blue').length;
      const unassigned=roomState.players.filter(p=>!p.team).length;
      for(let i=0;i<unassigned;i++){ if(red<=blue) red++; else blue++; }
      if(Math.abs(red-blue)>1||red<2||blue<2){ startDisabled=true; startTitle=`توزيع الفرق غير متوازن (${red} ضد ${blue})`; }
    }
    sb.disabled=startDisabled;
    if(startTitle) sb.title=startTitle;
  }
  // Update invite URL
  const iu=document.getElementById('lobby-invite-url');
  if(iu) iu.value=window.location.origin+window.location.pathname+'?room='+roomState.code;
  // Reflect current team selection
  const me=roomState.players.find(p=>p.name===localPlayer.name);
  if(me){
    document.querySelectorAll('.team-btn').forEach(b=>{
      b.classList.remove('active-red','active-blue');
      if(b.dataset.team===me.team) b.classList.add(`active-${me.team}`);
    });
    const wb=document.getElementById('want-boss'); if(wb) wb.checked=!!me.wantBoss;
  }
  // Host-only voice mute button
  const hmb=document.getElementById('host-mute-btn');
  if(hmb) hmb.style.display=roomState.isHost?'inline-flex':'none';
}

function kickPlayer(id){ if(!roomState.isHost) return; P2P.sendTo(id,{type:'KICK'}); Audio.play('kick'); roomState.players=roomState.players.filter(p=>p.peerId!==id&&p.name!==id); renderLobby(); }
function onKick(){ toast('تم طردك من الغرفة','error'); P2P.disconnect(); Voice.disconnect(); showMainMenu(); }
function selectTeam(team){
  const me=roomState.players.find(p=>p.name===localPlayer.name);
  if(me){ me.team=team; P2P.send({type:'PLAYER_TEAM',name:localPlayer.name,team}); renderLobby(); }
}
function setWantBoss(val){
  const me=roomState.players.find(p=>p.name===localPlayer.name);
  if(me){ me.wantBoss=val; P2P.send({type:'PLAYER_BOSS',name:localPlayer.name,wantBoss:val}); }
}
function copyInvite(){
  const u=document.getElementById('lobby-invite-url')?.value||'';
  navigator.clipboard.writeText(u).then(()=>toast('تم نسخ رابط الدعوة ✓','success')).catch(()=>{
    const el=document.getElementById('lobby-invite-url'); if(el){el.select();document.execCommand('copy');toast('تم نسخ الرابط','success');}
  }); Audio.play('click');
}
function backToMenu(){
  Audio.play('click');
  if(roomState.isHost) P2P.broadcast({type:'HOST_CLOSING'});
  _exitRoom();
  P2P.disconnect(); Voice.disconnect();
  gameState=null; logEntries=[];
  roomState={code:'',isHost:false,players:[],settings:{mode:'team',gridSize:25,maxPlayers:10,password:'',isPublic:true}};
  showMainMenu();
}
function onHostClosing(){
  toast('انتهت الغرفة — المضيف غادر','error');
  _exitRoom();
  P2P.disconnect(); Voice.disconnect();
  gameState=null; logEntries=[];
  roomState={code:'',isHost:false,players:[],settings:{mode:'team',gridSize:25,maxPlayers:10,password:'',isPublic:true}};
  setTimeout(()=>showMainMenu(),1200);
}

// ══════════════════════════════════════════════════════
//  START GAME
// ══════════════════════════════════════════════════════
function startGame(){
  if(!roomState.isHost) return; Audio.play('click');
  const {mode,gridSize}=roomState.settings;
  const words=shuffleArr([...WORDS]).slice(0,gridSize);
  let players=JSON.parse(JSON.stringify(roomState.players));

  if(mode==='team'){
    // Smart auto-distribution: balance unassigned players evenly
    const redList=players.filter(p=>p.team==='red');
    const blueList=players.filter(p=>p.team==='blue');
    const unassigned=players.filter(p=>!p.team);
    unassigned.forEach(p=>{ if(redList.length<=blueList.length){p.team='red';redList.push(p);}else{p.team='blue';blueList.push(p);} });
    // Validate balance
    if(Math.abs(redList.length-blueList.length)>1||redList.length<2||blueList.length<2){
      toast(`توزيع الفرق غير متوازن (${redList.length} ضد ${blueList.length}) — عدّل توزيع اللاعبين`,'error'); return;
    }
    // Assign bosses
    ['red','blue'].forEach(t=>{
      const tp=players.filter(p=>p.team===t); if(!tp.length) return;
      const wbs=tp.filter(p=>p.wantBoss);
      const boss=wbs.length?wbs[Math.floor(Math.random()*wbs.length)]:tp[Math.floor(Math.random()*tp.length)];
      boss.role='boss';
    });
    players.forEach(p=>{if(!p.role) p.role='player';});
  } else {
    const wbs=players.filter(p=>p.wantBoss);
    const boss=wbs.length?wbs[Math.floor(Math.random()*wbs.length)]:players[Math.floor(Math.random()*players.length)];
    players.forEach(p=>{ p.role=p.name===boss.name?'boss':'player'; });
  }

  const cards=genCards(mode,gridSize,words);
  const state={
    mode, gridSize, cards,
    players:players.map(p=>({...p,score:0,eliminated:false,micMuted:true})),
    scores:Object.fromEntries(players.map(p=>[p.name,0])),
    currentTurn:mode==='team'?'red':null,
    phase:mode==='team'?'boss_hinting':'boss_selecting',
    currentHint:null, bossSelected:[], roundBlocked:[], winner:null, log:[],
  };
  P2P.broadcast({type:'START_GAME',state});
  applyStartGame(state);
}

function genCards(mode,count,words){
  let types;
  if(mode==='team') types=[...Array(9).fill('red'),...Array(8).fill('blue'),...Array(7).fill('neutral'),'black'];
  else types=['black',...Array(count-1).fill('beige')];
  types=shuffleArr(types).slice(0,count);
  return words.slice(0,count).map((w,i)=>({id:i,word:w,type:types[i],revealed:false,revealedBy:null,pendingBy:null,hoveredBy:null}));
}

// ══════════════════════════════════════════════════════
//  APPLY GAME STATE
// ══════════════════════════════════════════════════════
function applyStartGame(state){
  gameState=state; logEntries=state.log||[];
  const me=gameState.players.find(p=>p.name===localPlayer.name);
  myRole=me?.role||'player'; myTeam=me?.team||null;
  showScreen('screen-game');
  addLog('🎮 بدأت اللعبة!','le-neutral');
  if(gameState.mode==='team'){
    addLog('🔴 الفريق الأحمر يبدأ أولاً','le-red');
    if(myRole==='boss'&&myTeam==='red') addLog('أنت البوص الأحمر — اكتب تلميحاً','le-hint');
    else if(myRole==='boss') addLog('أنت البوص الأزرق — انتظر دورك','le-hint');
    else addLog('انتظر تلميح البوص للتخمين','le-neutral');
  } else {
    const boss=gameState.players.find(p=>p.role==='boss');
    if(myRole==='boss') addLog('أنت البوص — اختر بطاقات ثم اكتب تلميحاً','le-hint');
    else addLog(`البوص: ${boss?.name||'؟'} — انتظر التلميح!`,'le-neutral');
  }
  renderGame();
}

function applyGameSync(state){
  if(!gameState) return;
  const prevHint=gameState.currentHint?.text;
  gameState=state;
  const me=gameState.players.find(p=>p.name===localPlayer.name);
  myRole=me?.role||myRole; myTeam=me?.team||myTeam;
  logEntries=state.log||logEntries;
  if(state.currentHint&&state.phase==='players_guessing'&&state.currentHint.text!==prevHint){
    showHintAnnounce(state.currentHint);
  }
  renderGame(); renderLog();
  if(gameState.winner) setTimeout(endGame,1200);
}

// ══════════════════════════════════════════════════════
//  RENDER GAME — NEW LAYOUT
// ══════════════════════════════════════════════════════
function renderGame(){
  if(!gameState) return;
  renderTopbar();
  renderRightPanel();
  renderHintBar();
  renderCards();
  if(gameState.mode==='solo') renderSoloStrip();
  else { const ss=document.getElementById('solo-strip'); if(ss) ss.style.display='none'; }
  renderBossArea();
  renderEndTurnBar();
  renderLog();
}

/* ── Topbar ── */
function renderTopbar(){
  const bar=document.getElementById('game-topbar'); if(!bar||!gameState) return;
  const isTeam=gameState.mode==='team';
  let centerHtml='';
  if(isTeam){
    const t=gameState.currentTurn, ph=gameState.phase;
    const phTxt=ph==='boss_hinting'?`البوص ${t==='red'?'الأحمر':'الأزرق'} يكتب`:
                 ph==='players_guessing'?`${t==='red'?SVG.redDot:''}${t==='blue'?SVG.blueDot:''} ${t==='red'?'الأحمر':'الأزرق'} يخمّن`:'...';
    centerHtml=`<div class="topbar-pill ${t}-pill"><span class="tpill-dot"></span>${phTxt}</div>`;
  } else {
    const boss=gameState.players.find(p=>p.role==='boss');
    const ph=gameState.phase;
    centerHtml=`<div class="topbar-pill solo-pill"><span class="tpill-dot"></span>${ph==='boss_selecting'?`${boss?.name||'البوص'} يختار`:ph==='players_guessing'?'اللاعبون يخمّنون':'انتظار'}</div>`;
  }
  bar.innerHTML=`
    <div class="tb-left"><button class="btn btn-sm btn-black" onclick="leaveGame()">✕ خروج</button></div>
    <div class="tb-center">${centerHtml}</div>
    <div class="tb-right">
      ${roomState.isHost?`<button class="btn btn-sm btn-white" id="host-mute-toggle" onclick="toggleHostMute()" title="كتم/إلغاء الصوت للكل">${_hostMuted?SVG.volBtn:SVG.muteBtn}</button>`:''}
      <button class="btn btn-sm btn-white btn-icon" onclick="toggleIngameSettings()" title="إعدادات">${SVG.gear}</button>
    </div>`;
}
let _hostMuted=false;
function toggleHostMute(){ _hostMuted=!_hostMuted; hostMuteAll(_hostMuted); const btn=document.getElementById('host-mute-toggle'); if(btn) btn.innerHTML=_hostMuted?SVG.volBtn:SVG.muteBtn; }

/* ── RIGHT PANEL ── */
function renderRightPanel(){
  const panel=document.getElementById('game-right-panel'); if(!panel||!gameState) return;
  if(gameState.mode==='team') panel.innerHTML=buildTeamPanel();
  else panel.innerHTML=buildSoloPanelRight();
}

function buildTeamPanel(){
  let html='';
  ['red','blue'].forEach(t=>{
    const players=gameState.players.filter(p=>p.team===t);
    const rem=gameState.cards.filter(c=>c.type===t&&!c.revealed).length;
    const isTurn=gameState.currentTurn===t;
    html+=`
      <div class="rp-team-block rp-${t}${isTurn?' rp-active':''}">
        <div class="rp-th ${t}-th">
          ${t==='red'?SVG.redDot:SVG.blueDot} ${t==='red'?'الأحمر':'الأزرق'}
          <span class="rp-cnt">${rem}</span>
        </div>
        <div class="rp-members">
          ${players.map(p=>`
            <div class="rp-player${p.name===localPlayer.name?' rp-me':''}">
              <div class="rp-av-wrap">
                ${avatarEl(p,'avatar-xs')}
                ${lvBadge(p.xp||0)}
              </div>
              <div class="rp-pname">${esc(p.name.split(' ')[0])}</div>
              ${p.role==='boss'?`<span class="rp-boss-tag">${SVG.crown}</span>`:''}
              ${p.micMuted?`<span class="rp-mic off">${SVG.micOff}</span>`:`<span class="rp-mic on">${SVG.mic}</span>`}
              ${p.name!==localPlayer.name?`<button class="rp-vol-btn" title="كتم/رفع صوت" onclick="togglePeerMute('${esc(p.peerId||'')}',this)">${SVG.speaker}</button>`:''}
            </div>`).join('')}
        </div>
      </div>`;
  });
  return html;
}

function buildSoloPanelRight(){
  const sorted=[...gameState.players].sort((a,b)=>(gameState.scores[b.name]||0)-(gameState.scores[a.name]||0));
  return `<div class="rp-team-block rp-solo">
    <div class="rp-th solo-th">${SVG.users} اللاعبون</div>
    <div class="rp-members">
      ${sorted.map((p,i)=>{
        const pts=gameState.scores[p.name]||0;
        const isBlocked=gameState.roundBlocked.includes(p.name);
        const isElim=p.eliminated, isBoss=p.role==='boss';
        return `<div class="rp-player${p.name===localPlayer.name?' rp-me':''}${isElim?' rp-elim':''}">
          <div class="rp-av-wrap">
            ${avatarEl(p,'avatar-xs')}
            ${lvBadge(p.xp||0)}
          </div>
          <div class="rp-pname">${esc(p.name.split(' ')[0])}</div>
          ${isBoss?`<span class="rp-boss-tag">${SVG.crown}</span>`:isElim?`<span class="rp-status-icon">${SVG.skull}</span>`:isBlocked?`<span class="rp-status-icon">${SVG.pause}</span>`:''}
          ${!isBoss?`<span class="rp-score" style="color:${pts>0?'#22c55e':pts<0?'#ef4444':'#888'}">${pts>0?'+':''}${pts}</span>`:''}
          ${p.name!==localPlayer.name?`<button class="rp-vol-btn" title="كتم/رفع صوت" onclick="togglePeerMute('${esc(p.peerId||'')}',this)">${SVG.speaker}</button>`:''}
        </div>`;
      }).join('')}
    </div>
  </div>`;
}

/* ── HINT BAR ── */
function renderHintBar(){
  const bar=document.getElementById('hint-bar'); if(!bar||!gameState) return;
  if(gameState.currentHint&&gameState.phase==='players_guessing'){
    const {text,count,bossName}=gameState.currentHint;
    bar.style.display='flex';
    bar.innerHTML=`<span class="hb-tag">${SVG.bulb} تلميح</span><span class="hb-word">${esc(text)}</span><span class="hb-count">${count}</span><span class="hb-boss">· ${esc(bossName||'')}</span>`;
  } else {
    bar.style.display='none'; bar.innerHTML='';
  }
}

/* ── CARDS ── */
function renderCards(){
  const grid=document.getElementById('cards-grid'); if(!grid||!gameState) return;
  const cols=gameState.gridSize===12?4:gameState.gridSize===16?4:5;
  grid.style.gridTemplateColumns=`repeat(${cols},1fr)`;
  grid.innerHTML='';
  const isBoss=myRole==='boss';
  gameState.cards.forEach(c=>grid.appendChild(makeCard(c,isBoss)));
}

function amIActive(){
  if(!gameState||!gameState.currentHint) return false;
  if(gameState.mode==='team') return gameState.currentTurn===myTeam&&myRole==='player'&&gameState.phase==='players_guessing';
  return myRole==='player'&&gameState.phase==='players_guessing'&&
    !gameState.roundBlocked.includes(localPlayer.name)&&
    !gameState.players.find(p=>p.name===localPlayer.name)?.eliminated;
}

function cardClass(card,isBoss){
  if(card.revealed){
    const m={red:'gc-red',blue:'gc-blue',black:'gc-black',neutral:'gc-white',beige:'gc-white',wrong:'gc-wrong'};
    return m[card.type]||'gc-white';
  }
  // Boss view
  if(isBoss){
    if(gameState.mode==='team'){
      const m={red:'gc-red',blue:'gc-blue',black:'gc-black'};
      return m[card.type]||'gc-neutral'; // neutral cards stay neutral-looking
    }
    // Solo boss: only black card shows as black
    if(card.type==='black') return 'gc-black';
  }
  return 'gc-neutral'; // unrevealed to everyone else
}

function makeCard(card,isBoss){
  const div=document.createElement('div');
  const bgCls=cardClass(card,isBoss);
  div.className=`game-card ${bgCls}`;
  div.id=`card-${card.id}`;

  if(card.revealed)   div.classList.add('card-revealed');
  if(!card.revealed&&card.pendingBy===localPlayer.name) div.classList.add('card-pending-me');
  if(isBoss&&gameState.mode==='solo'&&gameState.phase==='boss_selecting'&&gameState.bossSelected.includes(card.id)&&!card.revealed) div.classList.add('card-boss-sel');

  const isPending=card.pendingBy===localPlayer.name;
  const isActive=amIActive();

  div.innerHTML=`
    <div class="card-img-bg"></div>
    <div class="card-frame"></div>
    <div class="card-word-zone"><span class="card-word">${esc(card.word)}</span></div>
    <div class="card-bot"><span class="card-brand">4M-Y</span><span class="card-dot-icon"></span></div>
    ${isPending&&!card.revealed?`<div class="card-confirm-btn" onclick="confirmCard(event,${card.id})"><svg viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="2.5"><polyline points="2,8 6,12 14,4"/></svg></div>`:''}
    ${card.hoveredBy&&card.hoveredBy!==localPlayer.name&&!card.revealed?`<div class="card-hover-ind">${avatarEl(gameState.players.find(p=>p.name===card.hoveredBy)||{},'avatar-micro')}</div>`:''}
  `;
  // Dynamic font-size based on word length
  const wordSpan=div.querySelector('.card-word');
  if(wordSpan&&card.word){
    const len=card.word.length;
    wordSpan.style.fontSize=len<=3?'1.15rem':len<=5?'0.92rem':len<=7?'0.76rem':len<=10?'0.62rem':'0.50rem';
  }

  if(!card.revealed){
    // Boss in solo mode cannot click the black card
    const isSoloBossBlack=isBoss&&gameState.mode==='solo'&&card.type==='black';
    if((isActive||isBoss)&&!isSoloBossBlack) div.onclick=e=>handleCardClick(card.id,e);
    if(isSoloBossBlack){ div.style.cursor='not-allowed'; div.title='لا يمكن للبوص اختيار البطاقة السوداء'; }
    if(isActive){
      div.addEventListener('mouseenter',()=>sendHover(card.id,true));
      div.addEventListener('mouseleave',()=>sendHover(card.id,false));
    }
  }
  return div;
}

function handleCardClick(cardId,e){
  e.stopPropagation();
  if(!gameState) return;
  const card=gameState.cards[cardId]; if(!card||card.revealed) return;
  Audio.play('click');

  if(myRole==='boss'){
    if(gameState.mode==='solo'&&gameState.phase==='boss_selecting'){
      const sel=[...(gameState.bossSelected||[])];
      const idx=sel.indexOf(cardId);
      if(idx<0 && sel.length>=3){toast('الحد الأقصى 3 بطاقات للتلميح','error');return;}
      if(idx>=0) sel.splice(idx,1); else sel.push(cardId);
      gameState.bossSelected=sel;
      P2P.send({type:'BOSS_SELECT_CARD',cardId,selected:idx<0});
      renderCards(); updateBossSelWords();
    }
    return;
  }

  if(gameState.mode==='team'){
    if(gameState.currentTurn!==myTeam){toast('ليس دور فريقك','error');return;}
    if(gameState.phase!=='players_guessing'){toast('انتظر تلميح البوص','error');return;}
    if(!gameState.currentHint){toast('لا يوجد تلميح بعد','error');return;}
  } else {
    if(gameState.phase!=='players_guessing'){return;}
    if(gameState.roundBlocked.includes(localPlayer.name)){toast('أنت محجوب هذه الجولة','error');return;}
    if(gameState.players.find(p=>p.name===localPlayer.name)?.eliminated) return;
  }

  if(card.pendingBy===localPlayer.name) return;
  gameState.cards.forEach(c=>{if(c.pendingBy===localPlayer.name) c.pendingBy=null;});
  card.pendingBy=localPlayer.name;
  P2P.send({type:'CARD_PENDING',cardId,playerName:localPlayer.name});
  renderCards();
}

function confirmCard(e,cardId){
  e.stopPropagation();
  if(!gameState) return;
  const card=gameState.cards[cardId];
  if(!card||card.revealed||card.pendingBy!==localPlayer.name) return;
  Audio.play('cardFlip');
  P2P.send({type:'CARD_CONFIRM',cardId,playerName:localPlayer.name});
  if(roomState.isHost) processReveal(cardId,localPlayer.name);
}

function sendHover(cardId,on){ P2P.send({type:'CARD_HOVER',cardId:on?cardId:null,playerName:localPlayer.name}); }

/* ── SOLO PLAYERS STRIP ── */
function renderSoloStrip(){
  const strip=document.getElementById('solo-strip'); if(!strip||!gameState) return;
  strip.style.display='flex';
  strip.innerHTML=gameState.players.map(p=>{
    const pts=gameState.scores[p.name]||0;
    const isBlocked=gameState.roundBlocked.includes(p.name), isElim=p.eliminated, isBoss=p.role==='boss', isMe=p.name===localPlayer.name;
    return `<div class="spb${isElim?' spb-elim':''}${isMe?' spb-me':''}" title="${esc(p.name)}">
      <div class="spb-av-wrap">${avatarEl(p,'')}${lvBadge(p.xp||0)}</div>
      <div class="spb-name">${esc(p.name.split(' ')[0])}</div>
      ${isElim?`<div class="spb-badge badge-elim">${SVG.skull}</div>`:isBoss?`<div class="spb-badge badge-boss">${SVG.crown}</div>`:isBlocked?`<div class="spb-badge badge-blocked">${SVG.pause}</div>`:''}
      ${!isBoss?`<div class="spb-pts" style="color:${pts<0?'#ef4444':pts>0?'#22c55e':'#888'}">${pts>0?'+':''}${pts}</div>`:''}
    </div>`;
  }).join('');
}

// ══════════════════════════════════════════════════════
//  HINT ANNOUNCE OVERLAY (3.5s fullscreen)
// ══════════════════════════════════════════════════════
function showHintAnnounce(hint){
  const old=document.getElementById('hint-announce-overlay'); if(old) old.remove();
  const div=document.createElement('div'); div.id='hint-announce-overlay'; div.className='hint-announce-overlay';
  div.innerHTML=`<div class="ha-box"><div class="ha-label">${SVG.sparkle} تلميح جديد</div><div class="ha-word">${esc(hint.text)}</div><div class="ha-count">${hint.count} بطاقة</div><div class="ha-boss">من: ${esc(hint.bossName||'')}</div></div>`;
  div.onclick=()=>div.remove();
  document.body.appendChild(div);
  setTimeout(()=>{ if(div.parentNode) div.remove(); },3500);
  Audio.play('hint');
}

// ══════════════════════════════════════════════════════
//  HOST: BOSS HINT (critical bug fix)
// ══════════════════════════════════════════════════════
function submitHint(){
  if(myRole!=='boss') return;
  const txt=document.getElementById('hint-txt')?.value.trim();
  if(!txt){toast('اكتب التلميح','error');return;}
  if(gameState.cards.find(c=>c.word===txt)){toast('لا تستخدم كلمة من البطاقات','error');return;}
  const count=parseInt(document.getElementById('hint-count')?.value)||1;
  if(gameState.mode==='solo'&&!(gameState.bossSelected?.length)){toast('اختر بطاقة أو أكثر أولاً','error');return;}
  document.getElementById('hint-txt').value='';
  const hint={text:txt,count,team:gameState.currentTurn||null,bossName:localPlayer.name,selected:[...(gameState.bossSelected||[])]};

  if(roomState.isHost){
    applyHintLocal({hint});
    P2P.broadcast({type:'GAME_SYNC',state:gameState});
  } else {
    P2P.send({type:'BOSS_SEND_HINT',hint});
  }
}

function onBossSendHintMsg(data,fromPeerId){
  if(roomState.isHost){
    applyHintLocal(data);
    P2P.broadcast({type:'GAME_SYNC',state:gameState});
  }
}

function applyHintLocal(data){
  if(!gameState) return;
  gameState.currentHint=data.hint;
  gameState.phase='players_guessing';
  if(gameState.mode==='solo') gameState.bossSelected=[...(data.hint.selected||[])];
  gameState.roundBlocked=[];
  addLog(`💡 تلميح: "${data.hint.text}" (${data.hint.count}) — ${data.hint.bossName}`,'le-hint');
  showHintAnnounce(data.hint);
  renderGame(); renderLog();
}

// ══════════════════════════════════════════════════════
//  BOSS AREA
// ══════════════════════════════════════════════════════
function renderBossArea(){
  const area=document.getElementById('boss-area'); if(!area||!gameState) return;
  const isBoss=myRole==='boss';
  if(!isBoss){area.innerHTML='';area.style.display='none';return;}
  area.style.display='flex';
  const canHint=(isBoss&&gameState.mode==='team'&&gameState.currentTurn===myTeam&&gameState.phase==='boss_hinting')||
    (isBoss&&gameState.mode==='solo'&&(gameState.phase==='boss_selecting'||gameState.phase==='boss_hinting'));

  const selWords=(gameState.bossSelected||[]).map(id=>gameState.cards[id]?.word).filter(Boolean);
  const showEndTurnBtn=gameState.mode==='solo'&&gameState.phase==='players_guessing';

  area.innerHTML=`
    ${gameState.mode==='solo'&&canHint&&selWords.length?`<div class="boss-sel-words">${SVG.bulb} البطاقات المختارة: ${selWords.map(w=>`<b>${esc(w)}</b>`).join('، ')}</div>`:''}
    ${gameState.mode==='solo'&&canHint&&!selWords.length?`<div class="boss-sel-words" style="color:var(--muted)">اضغط على البطاقات لتحديد الأهداف...</div>`:''}
    ${showEndTurnBtn?`<div class="boss-input-row" style="justify-content:center;margin-bottom:2px">
      <button class="btn btn-green btn-lg" onclick="endMyTurn()" style="gap:6px;flex:1">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
        إنهاء الدور
      </button>
    </div>`:''}
    ${canHint||!showEndTurnBtn?`<div class="boss-input-row">
      <input type="text" class="hint-txt" id="hint-txt" placeholder="${canHint?'اكتب تلميحاً (كلمة واحدة)...':'انتظر دورك...'}" ${canHint?'':'disabled'} autocomplete="off" onkeydown="if(event.key==='Enter')submitHint()">
      <select class="hint-cnt" id="hint-count" ${canHint?'':'disabled'}>
        ${[1,2,3,4,5,6,7,8,9].map(n=>`<option value="${n}">×${n}</option>`).join('')}
      </select>
      <button class="btn btn-yellow" onclick="submitHint()" ${canHint?'':'disabled'} style="display:flex;align-items:center;gap:5px">${SVG.send} إرسال</button>
    </div>`:''}`;
}

function updateBossSelWords(){
  if(!gameState||myRole!=='boss') return;
  const sel=(gameState.bossSelected||[]).map(id=>gameState.cards[id]?.word).filter(Boolean);
  const el=document.querySelector('.boss-sel-words');
  if(el) el.innerHTML=sel.length?`${SVG.bulb} البطاقات المختارة: ${sel.map(w=>`<b>${esc(w)}</b>`).join('، ')}`:` <span style="color:var(--muted)">اضغط على البطاقات لتحديد الأهداف...</span>`;
}

// ══════════════════════════════════════════════════════
//  END TURN BAR
// ══════════════════════════════════════════════════════
function renderEndTurnBar(){
  const bar=document.getElementById('endturn-bar'); if(!bar||!gameState) return;
  const showPlayer=gameState.mode==='team'&&myRole==='player'&&gameState.currentTurn===myTeam&&gameState.phase==='players_guessing';
  const showBoss=gameState.mode==='solo'&&myRole==='boss'&&gameState.phase==='players_guessing';
  const show=showPlayer||showBoss;
  bar.style.display=show?'flex':'none';
  if(show){
    const label=showBoss?'✓ إنهاء الدور':'✓ إنهاء دوري';
    bar.innerHTML=`<button class="btn btn-green btn-lg" onclick="endMyTurn()" style="min-width:160px">${label}</button>`;
  }
}

function endMyTurn(){
  if(!gameState) return;
  Audio.play('click');
  if(gameState.mode==='team'){
    if(gameState.currentTurn!==myTeam||myRole!=='player') return;
    if(roomState.isHost){ passTurn(); P2P.broadcast({type:'GAME_SYNC',state:gameState}); renderGame(); renderLog(); }
    else P2P.send({type:'END_TURN'});
  } else if(gameState.mode==='solo'&&myRole==='boss'&&gameState.phase==='players_guessing'){
    if(roomState.isHost){ passTurnSolo(); P2P.broadcast({type:'GAME_SYNC',state:gameState}); renderGame(); renderLog(); }
    else P2P.send({type:'END_TURN'});
  }
}
function onEndTurnMsg(){
  if(!roomState.isHost) return;
  if(gameState.mode==='team') passTurn();
  else if(gameState.mode==='solo') passTurnSolo();
  P2P.broadcast({type:'GAME_SYNC',state:gameState}); renderGame(); renderLog();
}

// ══════════════════════════════════════════════════════
//  EVENT LOG + FAB
// ══════════════════════════════════════════════════════
let logOpen=false;
function toggleLogDrawer(){ logOpen=!logOpen; document.getElementById('log-drawer')?.classList.toggle('open',logOpen); document.getElementById('log-overlay')?.classList.toggle('open',logOpen); }
function closeLogDrawer(){ logOpen=false; document.getElementById('log-drawer')?.classList.remove('open'); document.getElementById('log-overlay')?.classList.remove('open'); }

function addLog(msg,cls='le-neutral'){
  logEntries.push({msg,cls});
  if(gameState) gameState.log=logEntries.slice(-80);
  renderLog();
}
function renderLog(){
  const el=document.getElementById('game-log'); if(!el) return;
  el.innerHTML='';
  logEntries.slice(-60).forEach(e=>{
    const d=document.createElement('div'); d.className=`log-entry ${e.cls}`; d.textContent=e.msg;
    el.appendChild(d);
  });
  el.scrollTop=el.scrollHeight;
  // Update FAB badge
  const fab=document.getElementById('fab-log');
  if(fab&&!logOpen&&logEntries.length>0){fab.dataset.count=logEntries.length>9?'9+':logEntries.length;}
}

// ══════════════════════════════════════════════════════
//  CARD EVENTS (non-host)
// ══════════════════════════════════════════════════════
function onBossSelectCard(data){
  if(!gameState) return;
  const sel=[...(gameState.bossSelected||[])];
  const idx=sel.indexOf(data.cardId);
  if(data.selected){if(idx<0)sel.push(data.cardId);}else{if(idx>=0)sel.splice(idx,1);}
  gameState.bossSelected=sel; renderCards();
}
function onCardPending(data){
  if(!gameState) return;
  gameState.cards.forEach(c=>{if(c.pendingBy===data.playerName)c.pendingBy=null;});
  const c=gameState.cards[data.cardId]; if(c) c.pendingBy=data.playerName;
  renderCards();
}
function onCardConfirm(data){
  if(roomState.isHost) processReveal(data.cardId,data.playerName);
}
function onCardHover(data){
  if(!gameState) return;
  gameState.cards.forEach(c=>{if(c.hoveredBy===data.playerName)c.hoveredBy=null;});
  if(data.cardId!==null){const c=gameState.cards[data.cardId];if(c)c.hoveredBy=data.playerName;}
  renderCards();
}

// ══════════════════════════════════════════════════════
//  HOST: PROCESS REVEAL
// ══════════════════════════════════════════════════════
function processReveal(cardId,playerName){
  if(!roomState.isHost||!gameState) return;
  const card=gameState.cards[cardId]; if(!card||card.revealed) return;
  const player=gameState.players.find(p=>p.name===playerName); if(!player) return;
  card.revealed=true; card.revealedBy=playerName; card.pendingBy=null;
  gameState.cards.forEach(c=>{if(c.pendingBy)c.pendingBy=null;});
  if(gameState.mode==='team') resolveTeamReveal(card,player);
  else resolveSoloReveal(card,player);
  P2P.broadcast({type:'GAME_SYNC',state:gameState});
  renderGame(); renderLog();
  if(gameState.winner) endGame();
}

function resolveTeamReveal(card,player){
  if(card.type==='black'){
    const w=player.team==='red'?'blue':'red';
    gameState.winner=w;
    addLog(`💀 ${player.name} اختار السوداء! الفريق ${w==='red'?'الأحمر':'الأزرق'} يفوز`,'le-black');
    Audio.play('black'); return;
  }
  const opp=player.team==='red'?'blue':'red';
  if(card.type==='neutral'){
    addLog(`⬜ ${player.name} اختار محايدة — انتهى الدور`,'le-neutral');
    Audio.play('wrong'); passTurn(); return;
  }
  if(card.type===opp){
    addLog(`❌ ${player.name} اختار ${opp==='red'?'حمراء':'زرقاء'} — للخصم! دور انتهى`,opp==='red'?'le-red':'le-blue');
    Audio.play('wrong'); passTurn(); return;
  }
  addLog(`✅ ${player.name} أصاب! ${card.type==='red'?'حمراء🔴':'زرقاء🔵'}`,card.type==='red'?'le-red':'le-blue');
  Audio.play('correct');
  const rl=gameState.cards.filter(c=>c.type==='red'&&!c.revealed).length;
  const bl=gameState.cards.filter(c=>c.type==='blue'&&!c.revealed).length;
  if(rl===0) gameState.winner='red';
  else if(bl===0) gameState.winner='blue';
}

function resolveSoloReveal(card,player){
  const isTarget=gameState.bossSelected.includes(card.id);
  if(card.type==='black'){
    player.eliminated=true;
    addLog(`💀 ${player.name} اختار السوداء — تم إقصاؤه!`,'le-black'); Audio.play('black');
    const alive=gameState.players.filter(p=>!p.eliminated&&p.role!=='boss');
    if(alive.length<=1) gameState.winner=alive.length?alive[0].name:'nobody';
    return;
  }
  if(isTarget){
    gameState.scores[player.name]=(gameState.scores[player.name]||0)+1;
    gameState.bossSelected=gameState.bossSelected.filter(id=>id!==card.id);
    addLog(`✅ ${player.name} وجد البطاقة! +1`,'le-correct'); Audio.play('correct');
    if(gameState.bossSelected.length===0){ gameState.roundBlocked=[]; gameState.phase='boss_selecting'; gameState.currentHint=null; addLog('🔄 جولة جديدة — البوص يختار','le-hint'); }
  } else {
    gameState.scores[player.name]=Math.max(-10,(gameState.scores[player.name]||0)-1);
    if(!gameState.roundBlocked.includes(player.name)) gameState.roundBlocked.push(player.name);
    addLog(`❌ ${player.name} أخطأ − 1 · محجوب جولة`,'le-wrong'); Audio.play('wrong');
    const active=gameState.players.filter(p=>!p.eliminated&&p.role!=='boss'&&!gameState.roundBlocked.includes(p.name));
    if(active.length===0){ gameState.roundBlocked=[]; gameState.phase='boss_selecting'; gameState.currentHint=null; addLog('⏭ الكل محجوب — جولة جديدة','le-neutral'); }
  }
  const rem=gameState.cards.filter(c=>!c.revealed&&c.type!=='black');
  if(rem.length===0){
    const alive=gameState.players.filter(p=>!p.eliminated&&p.role!=='boss');
    const top=alive.sort((a,b)=>(gameState.scores[b.name]||0)-(gameState.scores[a.name]||0))[0];
    gameState.winner=top?top.name:'nobody';
  }
}

function passTurn(){
  if(!gameState) return;
  gameState.currentTurn=gameState.currentTurn==='red'?'blue':'red';
  gameState.phase='boss_hinting'; gameState.currentHint=null;
  addLog(`🔄 دور الفريق ${gameState.currentTurn==='red'?'الأحمر🔴':'الأزرق🔵'}`,'le-turn');
}
function passTurnSolo(){
  if(!gameState) return;
  gameState.roundBlocked=[];
  gameState.phase='boss_selecting';
  gameState.currentHint=null;
  addLog('⏭ البوص أنهى الدور — جولة جديدة','le-turn');
}

// ══════════════════════════════════════════════════════
//  IN-GAME SETTINGS
// ══════════════════════════════════════════════════════
let igOpen=false;
function toggleIngameSettings(){ igOpen=!igOpen; const p=document.getElementById('ig-settings-panel'); if(p){p.classList.toggle('open',igOpen); if(igOpen) buildIgSettings();} }
function buildIgSettings(){
  const p=document.getElementById('ig-settings-panel'); if(!p) return;
  const s=Audio.getSettings(); const mic=Voice.getMicMuted(); const micA=Voice.isAvailable();
  p.innerHTML=`
    <div class="igs-title" style="display:flex;align-items:center;gap:6px">${SVG.gear} إعدادات <span style="cursor:pointer;margin-right:auto" onclick="toggleIngameSettings()">✕</span></div>
    <div class="igs-row"><span>الأصوات</span><label class="toggle-switch"><input type="checkbox" ${s.sfxEnabled?'checked':''} onchange="Audio.setSfxEnabled(this.checked)"><span class="toggle-slider"></span></label></div>
    <div class="igs-row"><span>مستوى الصوت</span><div style="display:flex;gap:5px;align-items:center"><input type="range" min="0" max="100" value="${Math.round(s.sfxVolume*100)}" style="flex:1;height:4px" oninput="Audio.setSfxVolume(this.value/100)"><span style="font-size:.7rem;min-width:28px">${Math.round(s.sfxVolume*100)}%</span></div></div>
    ${micA?`<div class="igs-row"><span>المايك</span><label class="toggle-switch"><input type="checkbox" ${!mic?'checked':''} onchange="toggleMyMic(this.checked)"><span class="toggle-slider"></span></label></div>`:
      `<div class="igs-row"><span>المايك</span><button class="btn btn-sm btn-blue" onclick="enableVoice();toggleIngameSettings()">تفعيل</button></div>`}
    ${roomState.isHost?`<div class="igs-row"><span style="display:flex;align-items:center;gap:5px">${SVG.muteBtn} كتم جميع الميكات</span><label class="toggle-switch"><input type="checkbox" ${_hostMuted?'checked':''} onchange="hostMuteAll(this.checked);_hostMuted=this.checked"><span class="toggle-slider"></span></label></div>`:''}
    ${roomState.isHost?`<div class="igs-row"><span style="display:flex;align-items:center;gap:5px">${SVG.chat} الدردشة</span><label class="toggle-switch"><input type="checkbox" ${chatEnabled?'checked':''} onchange="hostToggleChat(this.checked)"><span class="toggle-slider"></span></label></div>`:''}
    ${gameState?`<div style="font-size:.72rem;font-weight:700;margin:8px 0 4px;display:flex;align-items:center;gap:5px">${SVG.speaker} صوت اللاعبين</div>${gameState.players.filter(p=>p.name!==localPlayer.name).map(p=>`<div class="igs-peer-row">${avatarEl(p,'avatar-micro')}<span style="flex:1;font-size:.72rem">${esc(p.name)}</span><input type="range" min="0" max="100" value="${Math.round(Voice.getPeerVolume(p.peerId)*100)}" style="width:70px;height:4px" oninput="Voice.setPeerVolume('${esc(p.peerId||'')}',this.value/100)"></div>`).join('')}`:''}`;
}

// ══════════════════════════════════════════════════════
//  PEER MUTE (quick speaker button)
// ══════════════════════════════════════════════════════
const _mutedPeers={};
function togglePeerMute(peerId,btn){
  if(!peerId) return;
  _mutedPeers[peerId]=!_mutedPeers[peerId];
  const muted=_mutedPeers[peerId];
  Voice.setPeerVolume(peerId, muted?0:1);
  if(btn) btn.innerHTML=muted?SVG.muteBtn:SVG.volBtn;
}
function hostToggleChat(enabled){
  if(!roomState.isHost) return;
  chatEnabled=enabled;
  P2P.broadcast({type:'CHAT_TOGGLE',enabled});
  toast(enabled?'💬 الدردشة مُفعَّلة':'💬 الدردشة موقوفة','info');
}

// ══════════════════════════════════════════════════════
//  CHAT SYSTEM
// ══════════════════════════════════════════════════════
function sendChat(){
  if(!chatEnabled){toast('الدردشة موقوفة من المضيف','error');return;}
  const inp=document.getElementById('chat-input'); if(!inp) return;
  const text=inp.value.trim().slice(0,40); if(!text) return;
  inp.value='';
  const msg={from:localPlayer.name,avatarId:localPlayer.avatarId,text,ts:Date.now()};
  chatMessages.push(msg);
  showChatBubble(msg);
  appendChatLog(msg);
  if(roomState.isHost){
    P2P.broadcast({type:'CHAT_MSG',msg});
  } else {
    P2P.send({type:'CHAT_MSG',msg});
  }
}
function onChatMsg(data,fromPeerId){
  if(!chatEnabled) return;
  const msg=data.msg;
  chatMessages.push(msg);
  showChatBubble(msg);
  appendChatLog(msg);
  if(roomState.isHost) P2P.broadcastExcept({type:'CHAT_MSG',msg},fromPeerId);
}
function showChatBubble(msg){
  const layer=document.getElementById('chat-bubbles-layer'); if(!layer) return;
  const b=document.createElement('div');
  b.className='chat-bubble';
  b.innerHTML=`<span class="cb-name">${esc(msg.from)}</span><span class="cb-text">${esc(msg.text)}</span>`;
  b.onclick=openChatPanel;
  layer.prepend(b);
  // Limit displayed bubbles to 4
  while(layer.children.length>4) layer.removeChild(layer.lastChild);
  setTimeout(()=>{b.classList.add('cb-fade');setTimeout(()=>b.remove(),400);},4000);
  // Badge on FAB
  const fab=document.getElementById('fab-chat');
  if(fab&&!_chatOpen){ fab.dataset.unread=(parseInt(fab.dataset.unread||0)+1).toString(); }
}
function appendChatLog(msg){
  const box=document.getElementById('chat-messages'); if(!box) return;
  const isMe=msg.from===localPlayer.name;
  const d=document.createElement('div');
  d.className='cm-row'+(isMe?' cm-me':'');
  d.innerHTML=`<span class="cm-name">${esc(msg.from)}</span><span class="cm-text">${esc(msg.text)}</span>`;
  box.appendChild(d);
  box.scrollTop=box.scrollHeight;
}
function openChatPanel(){
  _chatOpen=true;
  document.getElementById('chat-panel')?.classList.add('open');
  document.getElementById('chat-panel-overlay')?.classList.add('open');
  // Clear badge
  const fab=document.getElementById('fab-chat'); if(fab) fab.removeAttribute('data-unread');
  // Render existing messages
  const box=document.getElementById('chat-messages');
  if(box&&box.children.length===0){
    chatMessages.forEach(m=>appendChatLog(m));
  }
  setTimeout(()=>document.getElementById('chat-input')?.focus(),100);
}
function closeChatPanel(){
  _chatOpen=false;
  document.getElementById('chat-panel')?.classList.remove('open');
  document.getElementById('chat-panel-overlay')?.classList.remove('open');
}

// ══════════════════════════════════════════════════════
//  GAME OVER
// ══════════════════════════════════════════════════════
function endGame(){
  if(!gameState) return;
  const winner=gameState.winner;
  // Solo: boss gets half of total positive player scores
  if(gameState.mode==='solo'){
    const boss=gameState.players.find(p=>p.role==='boss');
    if(boss){
      const totalPts=Object.entries(gameState.scores)
        .filter(([name])=>gameState.players.find(p=>p.name===name&&p.role!=='boss'))
        .reduce((sum,[,pts])=>sum+Math.max(0,pts),0);
      gameState.scores[boss.name]=Math.floor(totalPts/2);
    }
  }
  let xpGain=5;
  if(gameState.mode==='team'){ xpGain=winner===myTeam?20:5; Audio.play(winner===myTeam?'win':'lose'); }
  else { const pts=gameState.scores[localPlayer.name]||0; xpGain=winner===localPlayer.name?Math.max(10,15+pts*2):Math.max(1,5+pts); Audio.play(winner===localPlayer.name?'win':'lose'); }
  addXp(xpGain); P2P.unregisterRoom?.();
  setTimeout(()=>showGameOver(winner,xpGain),1400);
}

function showGameOver(winner,xpGain){
  showScreen('screen-gameover');
  const box=document.getElementById('gameover-box'); if(!box||!gameState) return;
  let iconHtml=SVG.draw, title='انتهت اللعبة!', sub='';
  if(gameState.mode==='team'){
    iconHtml = winner===myTeam ? SVG.trophy : SVG.sadFace;
    const wTeamDot = winner==='red' ? SVG.redDot : SVG.blueDot;
    title=`فاز الفريق ${winner==='red'?'الأحمر':'الأزرق'} ${wTeamDot}`;
    sub=winner===myTeam?'أحسنتم! فريقكم انتصر':'الفوز في المرة القادمة';
  } else {
    iconHtml = winner===localPlayer.name ? SVG.trophy : (winner==='nobody' ? SVG.draw : SVG.sadFace);
    title=winner==='nobody'?'تعادل!':winner===localPlayer.name?'أنت الفائز!':`فاز ${esc(winner)}!`;
    sub=winner===localPlayer.name?'أحسنت!':'الفوز في المرة القادمة';
  }
  const sorted=[...gameState.players].sort((a,b)=>(gameState.scores[b.name]||0)-(gameState.scores[a.name]||0));
  const medals=[
    `<span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FFD700;color:#1a1a1a;font-weight:900;font-size:.72rem;flex-shrink:0">1</span>`,
    `<span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#C0C0C0;color:#1a1a1a;font-weight:900;font-size:.72rem;flex-shrink:0">2</span>`,
    `<span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#CD7F32;color:#fff;font-weight:900;font-size:.72rem;flex-shrink:0">3</span>`,
  ];
  box.innerHTML=`
    <div class="go-emoji">${iconHtml}</div>
    <div class="go-title">${title}</div>
    <div class="go-sub">${sub}</div>
    <div class="go-xp">+${xpGain} XP</div>
    <div class="go-board">${sorted.map((p,i)=>`
      <div class="go-row${i===0?' go-win':''}">
        <span class="go-rank">${medals[i]||i+1}</span>
        ${avatarEl(p,'avatar-sm')}
        <span class="go-name">${esc(p.name)}</span>
        ${lvBadge(p.xp||0)}
        ${gameState.mode==='team'?`<span class="player-tag ${p.team==='red'?'tag-red':'tag-blue'}">${p.team==='red'?SVG.redDot:SVG.blueDot}</span>`:''}
        <span class="go-pts">${gameState.scores[p.name]||0}</span>
      </div>`).join('')}</div>
    <div class="go-actions">
      <button class="btn btn-yellow btn-lg" onclick="goLobby()" style="gap:6px">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.5 9A9 9 0 0121 12M20.5 15A9 9 0 013 12"/></svg>
        العب مجدداً
      </button>
      <button class="btn btn-black btn-lg" onclick="backToMenu()" style="gap:6px">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>
        القائمة
      </button>
    </div>`;
}
function goLobby(){ Audio.play('click'); gameState=null; logEntries=[]; showLobby(); }
function leaveGame(){ Audio.play('click'); gameState=null; logEntries=[]; showLobby(); }

// ══════════════════════════════════════════════════════
//  PROFILE MODAL
// ══════════════════════════════════════════════════════
function openProfileModal(){
  Audio.play('click');
  const lv=getLevel(localPlayer.xp||0);
  const {progress,needed}=getXpProgress(localPlayer.xp||0);
  const pct=Math.min(100,Math.round((progress/needed)*100));
  selectedAvatarId=localPlayer.avatarId||'dog';
  const levHtml=LEVEL_XP.map((x,i)=>{
    const ln=i+1, cur=lv===ln, done=localPlayer.xp>=x;
    return `<div class="lvl-row${cur?' lvl-cur':''}${done&&!cur?' lvl-done':''}">
      <span>${LEVEL_EMOJI[i]}</span><span class="lvl-num">LV${ln}</span>
      <span class="lvl-name">${LEVEL_NAMES[i]}</span>
      <span class="lvl-xp">${x.toLocaleString()} XP</span>
      ${cur?'<span class="lvl-here">▶ أنت هنا</span>':done?'<span class="lvl-chk">✓</span>':''}
    </div>`;
  }).join('');

  document.getElementById('profile-modal-body').innerHTML=`
    <div class="prof-top">
      <div>${avatarEl(localPlayer,'avatar-lg')}</div>
      <div class="prof-info">
        <div class="prof-nm">${esc(localPlayer.name)}</div>
        <div class="prof-lv">${LEVEL_EMOJI[lv-1]} LV${lv} — ${LEVEL_NAMES[lv-1]}</div>
        <div class="prof-bar"><div class="prof-fill" style="width:${pct}%"></div></div>
        <div class="prof-xpd">${localPlayer.xp} XP · ${progress}/${needed} للمستوى التالي</div>
      </div>
    </div>
    <div class="input-group" style="margin-top:14px">
      <label class="input-label" for="prof-edit-name">تغيير الاسم</label>
      <input class="input" id="prof-edit-name" type="text" placeholder="${esc(localPlayer.name)}" maxlength="20" autocomplete="off">
    </div>
    <div class="input-group">
      <label class="input-label">تغيير الصورة</label>
      <div class="avatar-options" id="prof-avatar-opts"></div>
    </div>
    <div style="font-weight:900;font-size:.88rem;color:var(--black);margin:16px 0 8px;padding-bottom:6px;border-bottom:var(--border);display:flex;align-items:center;gap:6px">${SVG.trophy} جدول المستويات</div>
    <div class="lvl-table">${levHtml}</div>`;
  document.getElementById('modal-profile').classList.add('open');
  setTimeout(()=>{ renderAvatarPicker('prof-avatar-opts',id=>{localPlayer.avatarId=id;saveProfile();updateHud();}); },60);
}
function saveProfileEdits(){
  const n=document.getElementById('prof-edit-name')?.value.trim();
  if(n){
    if(!/^[\u0600-\u06FFa-zA-Z\s]+$/.test(n)){toast('الاسم يجب أن يحتوي أحرف عربية أو إنجليزية فقط','error');return;}
    const letters=n.replace(/\s/g,'');
    if(letters.length<3){toast('الاسم يجب أن يحتوي على 3 أحرف على الأقل','error');return;}
    if(n.length>20){toast('الاسم طويل جداً (20 حرف كحد أقصى)','error');return;}
    localPlayer.name=n;saveProfile();updateHud();
  }
  document.getElementById('modal-profile').classList.remove('open');
  toast('تم الحفظ','success');
}

// ══════════════════════════════════════════════════════
//  SETTINGS / HOW TO PLAY
// ══════════════════════════════════════════════════════
function showSettings(){
  Audio.play('click'); showScreen('screen-settings');
  const s=Audio.getSettings();
  const t=document.getElementById('sfx-toggle'); if(t) t.checked=s.sfxEnabled;
  const v=document.getElementById('sfx-vol'); if(v) v.value=Math.round(s.sfxVolume*100);
  const vv=document.getElementById('sfx-vol-val'); if(vv) vv.textContent=Math.round(s.sfxVolume*100)+'%';
}
function howToPlay(){ Audio.play('click'); showScreen('screen-howto'); }
function resetAccount(){ if(confirm('هل أنت متأكد؟ ستُفقد جميع البيانات!')){localStorage.clear();location.reload();} }

// ══════════════════════════════════════════════════════
//  LOBBY SETTINGS (host)
// ══════════════════════════════════════════════════════
function selectToggle(btn,cls){ btn.closest('.toggle-wrap').querySelectorAll(cls).forEach(b=>b.classList.remove('active')); btn.classList.add('active'); }
function applyLobbySettings(){
  if(!roomState.isHost) return;
  const mode=document.querySelector('#lobby-settings .mode-btn.active')?.dataset.mode||'team';
  const gridSize=parseInt(document.querySelector('#lobby-settings .grid-btn.active')?.dataset.grid||'25');
  const maxP=parseInt(document.getElementById('lb-max')?.value||'10');
  const pwd=document.getElementById('lb-pwd')?.value.trim()||'';
  const isPublic=document.getElementById('lb-public')?.checked!==false;
  roomState.settings={mode,gridSize,maxPlayers:maxP,password:pwd,isPublic};
  P2P.broadcast({type:'ROOM_STATE',players:roomState.players,settings:roomState.settings});
  renderLobby(); Audio.play('click'); toast('تم تحديث الإعدادات','success');
}

// ══════════════════════════════════════════════════════
//  MULTI-TAB PROTECTION
// ══════════════════════════════════════════════════════
const _myTabId=Math.random().toString(36).slice(2);
const _TAB_LOCK_KEY='4mycn_active_tab';
function _enterRoom(){
  localStorage.setItem(_TAB_LOCK_KEY,JSON.stringify({tabId:_myTabId,name:localPlayer?.name,ts:Date.now()}));
}
function _exitRoom(){
  try{const d=JSON.parse(localStorage.getItem(_TAB_LOCK_KEY)||'{}');if(d.tabId===_myTabId)localStorage.removeItem(_TAB_LOCK_KEY);}catch(e){}
}
function _checkDuplicateTab(){
  try{
    const d=JSON.parse(localStorage.getItem(_TAB_LOCK_KEY)||'{}');
    if(d.name===localPlayer?.name&&d.tabId!==_myTabId&&Date.now()-d.ts<90000) return true;
  }catch(e){}
  return false;
}

// ══════════════════════════════════════════════════════
//  DRAGGABLE FABs
// ══════════════════════════════════════════════════════
function makeDraggable(el){
  let dragging=false,startX,startY,startL,startB,hasMoved=false;
  const onDown=e=>{
    if(e.target.closest('.modal-overlay')) return;
    dragging=true; hasMoved=false;
    const ptr=e.touches?e.touches[0]:e;
    startX=ptr.clientX; startY=ptr.clientY;
    const r=el.getBoundingClientRect();
    startL=r.left;
    startB=window.innerHeight-r.bottom;
    el.classList.add('fab-dragging');
    e.preventDefault();
  };
  const onMove=e=>{
    if(!dragging) return;
    const ptr=e.touches?e.touches[0]:e;
    const dx=ptr.clientX-startX, dy=ptr.clientY-startY;
    if(Math.abs(dx)>4||Math.abs(dy)>4) hasMoved=true;
    const newL=Math.max(4,Math.min(window.innerWidth-60,startL+dx));
    const newB=Math.max(4,Math.min(window.innerHeight-60,startB-dy));
    el.style.left=newL+'px'; el.style.bottom=newB+'px'; el.style.right='auto';
    e.preventDefault();
  };
  const onUp=e=>{
    if(!dragging) return;
    dragging=false;
    el.classList.remove('fab-dragging');
    if(hasMoved) e.stopPropagation();
  };
  el.addEventListener('mousedown',onDown);
  el.addEventListener('touchstart',onDown,{passive:false});
  document.addEventListener('mousemove',onMove);
  document.addEventListener('touchmove',onMove,{passive:false});
  document.addEventListener('mouseup',onUp);
  document.addEventListener('touchend',onUp);
}

// ══════════════════════════════════════════════════════
//  DEVELOPER CARD MODAL
// ══════════════════════════════════════════════════════
function openDevCard(){
  const m=document.getElementById('modal-devcard');
  if(m) m.classList.add('open');
}
function closeDevCard(){
  const m=document.getElementById('modal-devcard');
  if(m) m.classList.remove('open');
}

// ══════════════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════════════
function init(){
  Audio.init();
  window.addEventListener('beforeunload',_exitRoom);
  if(loadProfile()) showMainMenu();
  else showOnboarding();
  // Draggable FABs
  const fabLog=document.getElementById('fab-log');
  const fabChat=document.getElementById('fab-chat');
  if(fabLog) makeDraggable(fabLog);
  if(fabChat) makeDraggable(fabChat);
}
document.addEventListener('DOMContentLoaded',init);
