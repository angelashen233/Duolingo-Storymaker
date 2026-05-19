/**
 * Duolingo Stories Studio — Mock Story Data
 * All data is fictional for prototype purposes
 */

const LANGUAGES = {
  spanish:  { name: 'Spanish',  flag: '🇪🇸', count: 12847, code: 'es', color: '#FF4B4B' },
  japanese: { name: 'Japanese', flag: '🇯🇵', count: 8432,  code: 'ja', color: '#CE82FF' },
  french:   { name: 'French',   flag: '🇫🇷', count: 9103,  code: 'fr', color: '#1CB0F6' },
  korean:   { name: 'Korean',   flag: '🇰🇷', count: 6215,  code: 'ko', color: '#FFC800' },
  german:   { name: 'German',   flag: '🇩🇪', count: 5891,  code: 'de', color: '#777777' },
};

// The active user context
const USER = {
  name: 'Alex',
  streak: 47,
  xp: 3240,
  learningLanguage: 'spanish',
  avatar: 'duo',
  level: 18,
};

const STORIES = [
  {
    id: 's001',
    title: 'Mi Familia es Loca',
    language: 'spanish',
    difficulty: 'beginner',
    author: { name: 'Marta G.', charId: 'lily' },
    plays: 4821,
    likes: 892,
    comments: 134,
    coverClass: 'cover-spanish',
    cast: ['lily', 'junior'],
    scenes: 6,
    branches: 3,
    allowRemix: true,
    description: 'A chaotic Sunday lunch with the most dramatic family in Madrid. Practice common family vocabulary and basic greetings.',
    dialogue: [
      { speaker: 'lily',   char: 'lily',   text: '¡Hola! Bienvenido a casa. ¿Tienes hambre?', translation: 'Hello! Welcome home. Are you hungry?' },
      { speaker: 'junior', char: 'junior', text: '¡Siempre tengo hambre! ¿Qué hay para comer?', translation: 'I\'m always hungry! What\'s there to eat?' },
    ],
    choices: [
      { text: 'Decirle que sí',    translation: 'Say yes' },
      { text: 'Preguntar qué hay', translation: 'Ask what\'s cooking' },
      { text: 'Salir corriendo',   translation: 'Run away dramatically' },
    ],
    trending: true,
  },
  {
    id: 's002',
    title: 'Lost in Tokyo',
    language: 'japanese',
    difficulty: 'intermediate',
    author: { name: 'Kenji T.', charId: 'bea' },
    plays: 7203,
    likes: 1456,
    comments: 287,
    coverClass: 'cover-japanese',
    cast: ['bea', 'duo'],
    scenes: 9,
    branches: 5,
    allowRemix: false,
    description: 'Navigate the Tokyo subway system using only your Japanese. Miss a train, make a friend, maybe find a ramen shop.',
    dialogue: [
      { speaker: 'bea', char: 'bea', text: 'すみません、渋谷駅はどこですか？', translation: 'Excuse me, where is Shibuya Station?' },
      { speaker: 'duo', char: 'duo', text: 'ああ！あそこですよ。一緒に行きますか？', translation: 'Oh! It\'s right there. Want to go together?' },
    ],
    choices: [
      { text: 'はい、お願いします！', translation: 'Yes, please!' },
      { text: 'いいえ、大丈夫です', translation: 'No, I\'m fine' },
      { text: 'マップを見る', translation: 'Check the map' },
    ],
  },
  {
    id: 's003',
    title: 'A Date in Paris',
    language: 'french',
    difficulty: 'beginner',
    author: { name: 'Sophie L.', charId: 'zari' },
    plays: 5912,
    likes: 1102,
    comments: 198,
    coverClass: 'cover-french',
    cast: ['zari', 'eddy'],
    scenes: 7,
    branches: 4,
    allowRemix: true,
    description: 'A first date at a Parisian café goes hilariously off-script. Learn café vocabulary and polite conversation.',
    dialogue: [
      { speaker: 'zari', char: 'zari', text: 'Bonjour! Je voudrais un café, s\'il vous plaît.', translation: 'Hello! I\'d like a coffee, please.' },
      { speaker: 'eddy', char: 'eddy', text: 'Et moi aussi! Tu viens souvent ici?', translation: 'Me too! Do you come here often?' },
    ],
    choices: [
      { text: 'Oui, j\'adore ce café', translation: 'Yes, I love this café' },
      { text: 'Non, c\'est ma première fois', translation: 'No, it\'s my first time' },
      { text: 'Changer de sujet', translation: 'Change the subject' },
    ],
  },
  {
    id: 's004',
    title: 'Coffee Shop Drama',
    language: 'spanish',
    difficulty: 'intermediate',
    author: { name: 'Carlos V.', charId: 'eddy' },
    plays: 3445,
    likes: 567,
    comments: 89,
    coverClass: 'cover-alt1',
    cast: ['eddy', 'bea'],
    scenes: 8,
    branches: 6,
    allowRemix: true,
    description: 'Your order is wrong, the barista speaks too fast, and there\'s a line forming behind you. Navigate the chaos in Spanish.',
    dialogue: [
      { speaker: 'eddy', char: 'eddy', text: 'Perdón, pedí un café con leche, no un americano.', translation: 'Sorry, I ordered a café con leche, not an americano.' },
      { speaker: 'bea',  char: 'bea',  text: 'Disculpe, lo siento mucho. Lo preparo ahora mismo.', translation: 'Excuse me, I\'m so sorry. I\'ll make it right now.' },
    ],
    choices: [
      { text: 'Está bien, no hay problema', translation: 'It\'s fine, no problem' },
      { text: 'Pedir el manager', translation: 'Ask for the manager' },
      { text: 'Pedir la wifi también', translation: 'Also ask for the WiFi password' },
    ],
  },
  {
    id: 's005',
    title: 'Surviving K-Drama in Real Life',
    language: 'korean',
    difficulty: 'advanced',
    author: { name: 'Ji-yeon P.', charId: 'zari' },
    plays: 6780,
    likes: 2134,
    comments: 445,
    coverClass: 'cover-korean',
    cast: ['zari', 'lily'],
    scenes: 12,
    branches: 8,
    allowRemix: false,
    description: 'You\'ve been cast as the lead in your own K-drama. Dramatic rain, a chaebol heir, and intense Korean dialogue await.',
    dialogue: [
      { speaker: 'zari', char: 'zari', text: '당신은 누구예요? 왜 여기 있어요?', translation: 'Who are you? Why are you here?' },
      { speaker: 'lily', char: 'lily', text: '저는... 당신의 새 이웃이에요. 잘 부탁드려요!', translation: 'I\'m... your new neighbor. Nice to meet you!' },
    ],
    choices: [
      { text: '반갑습니다!', translation: 'Nice to meet you!' },
      { text: '당신을 믿을 수 없어요', translation: 'I can\'t trust you' },
      { text: '비가 와요. 들어오세요', translation: 'It\'s raining. Come inside' },
    ],
  },
  {
    id: 's006',
    title: 'Das Berliner Café',
    language: 'german',
    difficulty: 'beginner',
    author: { name: 'Hans M.', charId: 'junior' },
    plays: 2103,
    likes: 398,
    comments: 67,
    coverClass: 'cover-german',
    cast: ['junior', 'duo'],
    scenes: 5,
    branches: 3,
    allowRemix: true,
    description: 'A morning in a Berlin café where everything is very punctual and everyone has opinions about your coffee order.',
  },
  {
    id: 's007',
    title: '¿Dónde Está el Baño?',
    language: 'spanish',
    difficulty: 'beginner',
    author: { name: 'Rosa M.', charId: 'duo' },
    plays: 8912,
    likes: 1823,
    comments: 312,
    coverClass: 'cover-alt2',
    cast: ['duo', 'lily'],
    scenes: 4,
    branches: 2,
    allowRemix: true,
    description: 'The most essential phrase in any language — practiced across 4 increasingly desperate scenarios.',
    trending: true,
  },
  {
    id: 's008',
    title: 'Sakura Season Surprise',
    language: 'japanese',
    difficulty: 'beginner',
    author: { name: 'Yuki N.', charId: 'lily' },
    plays: 4234,
    likes: 987,
    comments: 156,
    coverClass: 'cover-alt3',
    cast: ['lily', 'junior'],
    scenes: 6,
    branches: 3,
    allowRemix: true,
    description: 'Planning a hanami picnic goes surprisingly deep into Japanese polite speech levels.',
  },
];

// User's own created stories
const MY_STORIES = [
  {
    id: 'my001',
    title: 'El Mercado',
    language: 'spanish',
    difficulty: 'beginner',
    status: 'published',
    plays: 89,
    likes: 24,
    coverClass: 'cover-spanish',
    cast: ['duo'],
    scenes: 4,
    branches: 2,
    lastEdited: '2 days ago',
  },
  {
    id: 'my002',
    title: 'Tokyo Convenience Store',
    language: 'japanese',
    difficulty: 'intermediate',
    status: 'draft',
    plays: 0,
    likes: 0,
    coverClass: 'cover-japanese',
    cast: ['bea'],
    scenes: 3,
    branches: 1,
    lastEdited: '5 hours ago',
  },
];

// Sort/filter functions
function getSortedStories(stories, sortBy, timeFilter, language) {
  let filtered = [...stories];

  // Filter by language first
  if (language && language !== 'all') {
    filtered = filtered.filter(s => s.language === language);
  }

  // Sort
  switch (sortBy) {
    case 'popular':
      filtered.sort((a, b) => b.plays - a.plays);
      break;
    case 'complex':
      filtered.sort((a, b) => (b.branches || 0) - (a.branches || 0));
      break;
    case 'longest':
      filtered.sort((a, b) => (b.scenes || 0) - (a.scenes || 0));
      break;
    case 'recent':
    default:
      filtered.sort((a, b) => a.id.localeCompare(b.id));
      break;
  }

  return filtered;
}

// Format large numbers
function formatCount(n) {
  if (n >= 1000) return (n / 1000).toFixed(1).replace('.0', '') + 'k';
  return n.toString();
}

// Get difficulty label
function getDifficultyLabel(d) {
  return { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced' }[d] || d;
}

// Get difficulty badge class
function getDifficultyClass(d) {
  return { beginner: 'badge-beginner', intermediate: 'badge-intermediate', advanced: 'badge-advanced' }[d] || '';
}
