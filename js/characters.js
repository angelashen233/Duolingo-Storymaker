/**
 * Duolingo Stories Studio — Character Data
 * CSS blob character illustrations (Option B)
 * Each character is an SVG string rendered into .character-avatar elements
 */

const CHARACTERS = {

  duo: {
    id: 'duo',
    name: 'Duo',
    trait: 'The Cheerful Owl',
    color: '#58CC02',
    bgClass: 'char-bg-duo',
    bubbleClass: 'bubble-duo',
    speakerColor: '#2D8A00',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 100" aria-label="Duo the owl">
  <!-- Wings -->
  <ellipse cx="13" cy="66" rx="11" ry="18" fill="#43C000"/>
  <ellipse cx="67" cy="66" rx="11" ry="18" fill="#43C000"/>
  <!-- Body -->
  <ellipse cx="40" cy="72" rx="26" ry="24" fill="#58CC02"/>
  <!-- Belly patch -->
  <ellipse cx="40" cy="76" rx="16" ry="17" fill="#89E219"/>
  <!-- Head -->
  <circle cx="40" cy="36" r="28" fill="#58CC02"/>
  <!-- Ear tufts -->
  <polygon points="20,14 25,30 14,28" fill="#43C000"/>
  <polygon points="60,14 66,28 55,30" fill="#43C000"/>
  <!-- Eye whites -->
  <circle cx="28" cy="33" r="13" fill="white"/>
  <circle cx="52" cy="33" r="13" fill="white"/>
  <!-- Pupils -->
  <circle cx="29" cy="34" r="8" fill="#2E2E2E"/>
  <circle cx="53" cy="34" r="8" fill="#2E2E2E"/>
  <!-- Eye highlights -->
  <circle cx="31.5" cy="31" r="3" fill="white"/>
  <circle cx="55.5" cy="31" r="3" fill="white"/>
  <!-- Beak -->
  <polygon points="40,42 34,52 46,52" fill="#FFC200"/>
  <polygon points="40,42 34,52 40,50 46,52" fill="#FFDE00" opacity="0.7"/>
  <!-- Brow ridges (friendly) -->
  <path d="M 18 23 Q 28 18 36 22" stroke="#43C000" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M 44 22 Q 52 18 62 23" stroke="#43C000" stroke-width="3" fill="none" stroke-linecap="round"/>
</svg>`,
  },

  lily: {
    id: 'lily',
    name: 'Lily',
    trait: 'The Creative Dreamer',
    color: '#FF6B9D',
    bgClass: 'char-bg-lily',
    bubbleClass: 'bubble-lily',
    speakerColor: '#C0003A',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 100" aria-label="Lily">
  <!-- Body -->
  <rect x="22" y="66" width="36" height="34" rx="18" fill="#FF6B9D"/>
  <!-- Dress detail -->
  <ellipse cx="40" cy="80" rx="20" ry="10" fill="#FF85B3" opacity="0.5"/>
  <!-- Neck -->
  <rect x="34" y="58" width="12" height="12" rx="4" fill="#FFCFAC"/>
  <!-- Head -->
  <circle cx="40" cy="40" r="26" fill="#FFCFAC"/>
  <!-- Hair back layer -->
  <ellipse cx="40" cy="30" rx="27" ry="20" fill="#8B1A5C"/>
  <!-- Side hair -->
  <path d="M 13 42 Q 9 60 15 72 Q 16 58 20 50 Z" fill="#8B1A5C"/>
  <path d="M 67 42 Q 71 60 65 72 Q 64 58 60 50 Z" fill="#8B1A5C"/>
  <!-- Face (on top of hair) -->
  <circle cx="40" cy="42" r="22" fill="#FFCFAC"/>
  <!-- Ears -->
  <circle cx="18" cy="44" r="7" fill="#F5B8A0"/>
  <circle cx="62" cy="44" r="7" fill="#F5B8A0"/>
  <!-- Eyes -->
  <ellipse cx="32" cy="40" rx="5" ry="6.5" fill="#2E2E2E"/>
  <ellipse cx="48" cy="40" rx="5" ry="6.5" fill="#2E2E2E"/>
  <!-- Eye highlights -->
  <circle cx="33.5" cy="38" r="2.2" fill="white"/>
  <circle cx="49.5" cy="38" r="2.2" fill="white"/>
  <!-- Eyelashes upper -->
  <line x1="27" y1="35" x2="25" y2="31.5" stroke="#2E2E2E" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="31" y1="34" x2="31" y2="30" stroke="#2E2E2E" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="35.5" y1="34.5" x2="37.5" y2="31" stroke="#2E2E2E" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="43" y1="34.5" x2="45" y2="31" stroke="#2E2E2E" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="47" y1="34" x2="47" y2="30" stroke="#2E2E2E" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="51.5" y1="35" x2="53.5" y2="31.5" stroke="#2E2E2E" stroke-width="1.5" stroke-linecap="round"/>
  <!-- Blush -->
  <ellipse cx="25" cy="47" rx="7" ry="5" fill="#FFB3C6" opacity="0.55"/>
  <ellipse cx="55" cy="47" rx="7" ry="5" fill="#FFB3C6" opacity="0.55"/>
  <!-- Smile -->
  <path d="M 34 52 Q 40 58 46 52" stroke="#2E2E2E" stroke-width="2" fill="none" stroke-linecap="round"/>
  <!-- Hair fringe -->
  <path d="M 18 34 Q 22 20 40 16 Q 58 20 62 34 Q 54 26 40 24 Q 26 26 18 34 Z" fill="#A0205E"/>
</svg>`,
  },

  junior: {
    id: 'junior',
    name: 'Junior',
    trait: 'The Energetic Kid',
    color: '#FFD700',
    bgClass: 'char-bg-junior',
    bubbleClass: 'bubble-junior',
    speakerColor: '#7A5000',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 100" aria-label="Junior">
  <!-- Body (chubby round) -->
  <ellipse cx="40" cy="76" rx="28" ry="22" fill="#FFD700"/>
  <!-- Overalls strap detail -->
  <rect x="30" y="68" width="20" height="16" rx="4" fill="#4FC3F7" opacity="0.8"/>
  <!-- Neck -->
  <ellipse cx="40" cy="60" rx="10" ry="7" fill="#FFE066"/>
  <!-- Head (big round) -->
  <circle cx="40" cy="38" r="30" fill="#FFE066"/>
  <!-- Hair tufts -->
  <circle cx="22" cy="16" r="9" fill="#FF9600"/>
  <circle cx="40" cy="11" r="10" fill="#FF9600"/>
  <circle cx="58" cy="16" r="9" fill="#FF9600"/>
  <!-- Ears -->
  <circle cx="11" cy="40" r="8" fill="#FFCD38"/>
  <circle cx="69" cy="40" r="8" fill="#FFCD38"/>
  <!-- Eyes (big bright) -->
  <circle cx="29" cy="36" r="10" fill="white"/>
  <circle cx="51" cy="36" r="10" fill="white"/>
  <circle cx="30" cy="37" r="6.5" fill="#2E2E2E"/>
  <circle cx="52" cy="37" r="6.5" fill="#2E2E2E"/>
  <!-- Irises (bright blue) -->
  <circle cx="30" cy="37" r="4" fill="#1CB0F6"/>
  <circle cx="52" cy="37" r="4" fill="#1CB0F6"/>
  <!-- Pupils -->
  <circle cx="30" cy="37" r="2" fill="#2E2E2E"/>
  <circle cx="52" cy="37" r="2" fill="#2E2E2E"/>
  <!-- Eye highlights -->
  <circle cx="32" cy="34.5" r="2.2" fill="white"/>
  <circle cx="54" cy="34.5" r="2.2" fill="white"/>
  <!-- Rosy cheeks -->
  <ellipse cx="20" cy="47" rx="8" ry="6" fill="#FFB347" opacity="0.45"/>
  <ellipse cx="60" cy="47" rx="8" ry="6" fill="#FFB347" opacity="0.45"/>
  <!-- Big smile -->
  <path d="M 26 50 Q 40 62 54 50" stroke="#2E2E2E" stroke-width="2.5" fill="#FFB89C" stroke-linecap="round"/>
  <!-- Teeth -->
  <path d="M 26 50 Q 40 62 54 50" fill="white" clip-path="url(#smile-clip)"/>
</svg>`,
  },

  zari: {
    id: 'zari',
    name: 'Zari',
    trait: 'The Bold Explorer',
    color: '#9B59B6',
    bgClass: 'char-bg-zari',
    bubbleClass: 'bubble-zari',
    speakerColor: '#6B1FA8',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 100" aria-label="Zari">
  <!-- Body -->
  <rect x="19" y="66" width="42" height="34" rx="21" fill="#9B59B6"/>
  <!-- Shirt detail -->
  <path d="M 19 72 Q 40 66 61 72 L 61 76 Q 40 70 19 76 Z" fill="#8E44AD" opacity="0.5"/>
  <!-- Neck -->
  <rect x="34" y="58" width="12" height="12" rx="4" fill="#C68642"/>
  <!-- Afro base -->
  <ellipse cx="40" cy="28" rx="28" ry="24" fill="#5E2D91"/>
  <!-- Afro texture circles (volume) -->
  <circle cx="16" cy="30" r="16" fill="#7D3EC0"/>
  <circle cx="64" cy="30" r="16" fill="#7D3EC0"/>
  <circle cx="24" cy="14" r="14" fill="#6B3D9E"/>
  <circle cx="56" cy="14" r="14" fill="#6B3D9E"/>
  <circle cx="40" cy="10" r="16" fill="#7D3EC0"/>
  <!-- Afro highlights -->
  <circle cx="22" cy="10" r="6" fill="#9B59B6" opacity="0.6"/>
  <circle cx="56" cy="10" r="6" fill="#9B59B6" opacity="0.6"/>
  <!-- Face -->
  <circle cx="40" cy="46" r="22" fill="#C68642"/>
  <!-- Ears -->
  <circle cx="18" cy="48" r="7" fill="#B87333"/>
  <circle cx="62" cy="48" r="7" fill="#B87333"/>
  <!-- Eyes -->
  <ellipse cx="32" cy="44" rx="5.5" ry="6.5" fill="#1A0A00"/>
  <ellipse cx="48" cy="44" rx="5.5" ry="6.5" fill="#1A0A00"/>
  <!-- Eye whites (small) -->
  <circle cx="33.5" cy="42.5" r="2.2" fill="white"/>
  <circle cx="49.5" cy="42.5" r="2.2" fill="white"/>
  <!-- Eyebrows (bold) -->
  <path d="M 27 37 Q 32 34 37 36" stroke="#1A0A00" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M 43 36 Q 48 34 53 37" stroke="#1A0A00" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <!-- Nose -->
  <ellipse cx="40" cy="50" rx="3" ry="2" fill="#B07028" opacity="0.6"/>
  <!-- Smile (confident) -->
  <path d="M 32 56 Q 40 62 48 56" stroke="#1A0A00" stroke-width="2" fill="none" stroke-linecap="round"/>
</svg>`,
  },

  bea: {
    id: 'bea',
    name: 'Bea',
    trait: 'The Smart Strategist',
    color: '#1CB0F6',
    bgClass: 'char-bg-bea',
    bubbleClass: 'bubble-bea',
    speakerColor: '#0A6EA0',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 100" aria-label="Bea">
  <!-- Body -->
  <rect x="18" y="66" width="44" height="34" rx="22" fill="#1CB0F6"/>
  <!-- Collar/shirt detail -->
  <path d="M 18 68 L 28 74 L 40 70 L 52 74 L 62 68" stroke="white" stroke-width="2.5" fill="none" opacity="0.6"/>
  <!-- Neck -->
  <rect x="34" y="58" width="12" height="12" rx="4" fill="#FFE0B2"/>
  <!-- Head -->
  <circle cx="40" cy="40" r="26" fill="#FFE0B2"/>
  <!-- Ears -->
  <circle cx="14" cy="42" r="7" fill="#FFCBA0"/>
  <circle cx="66" cy="42" r="7" fill="#FFCBA0"/>
  <!-- Hair (short neat bob) -->
  <path d="M 14 38 Q 14 8 40 8 Q 66 8 66 38 Q 62 20 40 16 Q 18 20 14 38 Z" fill="#4A90D9"/>
  <!-- Side hair sweep -->
  <path d="M 14 38 Q 14 50 18 58 Q 20 48 22 44" fill="#4A90D9"/>
  <path d="M 66 38 Q 66 50 62 58 Q 60 48 58 44" fill="#4A90D9"/>
  <!-- Glasses bridge -->
  <line x1="36" y1="40" x2="44" y2="40" stroke="#1565C0" stroke-width="2.5"/>
  <!-- Left glasses frame -->
  <circle cx="29" cy="40" r="10" fill="rgba(28,176,246,0.08)" stroke="#1565C0" stroke-width="2.5"/>
  <!-- Right glasses frame -->
  <circle cx="51" cy="40" r="10" fill="rgba(28,176,246,0.08)" stroke="#1565C0" stroke-width="2.5"/>
  <!-- Glasses side arms -->
  <line x1="19" y1="38" x2="14" y2="36" stroke="#1565C0" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="61" y1="38" x2="66" y2="36" stroke="#1565C0" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Eyes behind glasses -->
  <circle cx="29" cy="41" r="5" fill="#1A237E"/>
  <circle cx="51" cy="41" r="5" fill="#1A237E"/>
  <circle cx="30.5" cy="39.5" r="1.8" fill="white"/>
  <circle cx="52.5" cy="39.5" r="1.8" fill="white"/>
  <!-- Smile (subtle, thoughtful) -->
  <path d="M 33 52 Q 40 57 47 52" stroke="#8D6E63" stroke-width="2" fill="none" stroke-linecap="round"/>
</svg>`,
  },

  eddy: {
    id: 'eddy',
    name: 'Eddy',
    trait: 'The Wild Card',
    color: '#FF7043',
    bgClass: 'char-bg-eddy',
    bubbleClass: 'bubble-eddy',
    speakerColor: '#C0360F',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 100" aria-label="Eddy">
  <!-- Body -->
  <rect x="20" y="66" width="40" height="34" rx="20" fill="#FF7043"/>
  <!-- Shirt lightning bolt -->
  <polygon points="42,68 36,80 41,80 38,92 46,78 41,78" fill="#FFF176" opacity="0.7"/>
  <!-- Neck -->
  <rect x="34" y="58" width="12" height="12" rx="4" fill="#FFCCBC"/>
  <!-- Head -->
  <circle cx="40" cy="42" r="26" fill="#FFCCBC"/>
  <!-- Ears -->
  <circle cx="14" cy="44" r="7" fill="#FFBAA0"/>
  <circle cx="66" cy="44" r="7" fill="#FFBAA0"/>
  <!-- Spiky hair base -->
  <path d="M 16 34 Q 40 20 64 34 Q 58 18 40 14 Q 22 18 16 34 Z" fill="#E64A19"/>
  <!-- Spiky hair points -->
  <polygon points="18,30 22,10 28,30" fill="#E64A19"/>
  <polygon points="30,22 36,4 42,22" fill="#BF360C"/>
  <polygon points="38,20 44,2 50,20" fill="#E64A19"/>
  <polygon points="50,22 56,6 60,24" fill="#BF360C"/>
  <polygon points="58,30 62,12 66,32" fill="#E64A19"/>
  <!-- Eyes (round, excited) -->
  <circle cx="31" cy="40" r="9" fill="white"/>
  <circle cx="49" cy="40" r="9" fill="white"/>
  <circle cx="32" cy="41" r="5.5" fill="#2E2E2E"/>
  <circle cx="50" cy="41" r="5.5" fill="#2E2E2E"/>
  <circle cx="33.5" cy="39" r="2" fill="white"/>
  <circle cx="51.5" cy="39" r="2" fill="white"/>
  <!-- Eyebrows (raised/excited) -->
  <path d="M 23 33 Q 31 28 37 32" stroke="#BF360C" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M 43 32 Q 49 28 57 33" stroke="#BF360C" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <!-- Freckles -->
  <circle cx="24" cy="48" r="2.2" fill="#FFAB91" opacity="0.85"/>
  <circle cx="28" cy="52" r="2.2" fill="#FFAB91" opacity="0.85"/>
  <circle cx="52" cy="48" r="2.2" fill="#FFAB91" opacity="0.85"/>
  <circle cx="56" cy="52" r="2.2" fill="#FFAB91" opacity="0.85"/>
  <!-- Open excited smile -->
  <path d="M 30 52 Q 40 62 50 52" stroke="#8D3000" stroke-width="2.5" fill="#FFB89C" stroke-linecap="round"/>
  <!-- Teeth hint -->
  <path d="M 30 52 L 50 52" stroke="white" stroke-width="3" opacity="0.6"/>
</svg>`,
  },

};

// Render a character SVG into a container element
function renderCharacter(containerId, charId, sizeClass) {
  const el = document.getElementById(containerId);
  if (!el || !CHARACTERS[charId]) return;
  const char = CHARACTERS[charId];
  el.innerHTML = char.svg;
  el.querySelector('svg').setAttribute('class', sizeClass || '');
}

// Render all characters with data-char attributes
function renderAllCharacters() {
  document.querySelectorAll('[data-char]').forEach(el => {
    const id = el.dataset.char;
    const size = el.dataset.size || 'char-md';
    if (CHARACTERS[id]) {
      el.innerHTML = CHARACTERS[id].svg;
      if (el.querySelector('svg')) {
        el.classList.add(size);
      }
    }
  });
}

// All characters as ordered array for picker
const CHARACTER_LIST = [
  CHARACTERS.duo,
  CHARACTERS.lily,
  CHARACTERS.junior,
  CHARACTERS.zari,
  CHARACTERS.bea,
  CHARACTERS.eddy,
];

// Auto-render on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderAllCharacters);
} else {
  renderAllCharacters();
}
