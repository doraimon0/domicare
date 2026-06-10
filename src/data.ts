import { Card, Slide } from './types';

export const CARD_TEMPLATES: Card[] = [
  {
    id: 'template_domi',
    nameKey: 'cardDomiName',
    descKey: 'cardDomiDesc',
    points: 3,
    type: 'hero',
    character: 'domi',
    color: 'from-amber-100 to-amber-200 text-amber-950',
    borderColor: 'border-amber-400 shadow-amber-200 shadow-md',
    emoji: '🦸‍♂️',
    image: './images/characters/domi.png',
    bgImage: './images/characters/bg_domi.png',
    arabicLetter: 'د',
    isRare: true
  },
  {
    id: 'template_jeebi',
    nameKey: 'cardJeebiName',
    descKey: 'cardJeebiDesc',
    points: 2,
    type: 'enzyme',
    character: 'jeebi',
    color: 'from-emerald-100 to-emerald-200 text-emerald-950',
    borderColor: 'border-emerald-400 shadow-emerald-100 shadow-md',
    emoji: '💧',
    image: './images/characters/jeebi.png',
    bgImage: './images/characters/bg_jeebi.png',
    arabicLetter: 'ج'
  },
  {
    id: 'template_huma',
    nameKey: 'cardHumaName',
    descKey: 'cardHumaDesc',
    points: 0,
    type: 'protection',
    character: 'huma',
    color: 'from-sky-100 to-sky-200 text-sky-950',
    borderColor: 'border-sky-400 shadow-sky-100 shadow-md',
    emoji: '🛡️',
    image: './images/characters/huma.png',
    bgImage: './images/characters/bg_huma.png',
    arabicLetter: 'ح'
  },
  {
    id: 'template_qasbo',
    nameKey: 'cardQasboName',
    descKey: 'cardQasboDesc',
    points: 0,
    type: 'rescue',
    character: 'qasbo',
    color: 'from-orange-100 to-orange-200 text-orange-950',
    borderColor: 'border-orange-400 shadow-orange-100 shadow-md',
    emoji: '🍯',
    image: './images/characters/qasbo.png',
    bgImage: './images/characters/bg_qasbo.png',
    arabicLetter: 'ق'
  },
  {
    id: 'template_folo',
    nameKey: 'cardFoloName',
    descKey: 'cardFoloDesc',
    points: -1,
    type: 'danger',
    character: 'folo',
    color: 'from-red-100 to-red-200 text-red-950',
    borderColor: 'border-red-400 shadow-red-100 shadow-md',
    emoji: '🌱',
    image: './images/characters/folo.png',
    bgImage: './images/characters/bg_folo.png',
    arabicLetter: 'ف'
  },
  {
    id: 'template_soyo',
    nameKey: 'cardSoyoName',
    descKey: 'cardSoyoDesc',
    points: -1,
    type: 'danger',
    character: 'soyo',
    color: 'from-yellow-105 via-yellow-100 to-amber-100 text-yellow-950',
    borderColor: 'border-yellow-500 shadow-yellow-105 shadow-md',
    emoji: '🍶',
    image: './images/characters/soyo.png',
    bgImage: './images/characters/bg_soyo.png',
    arabicLetter: 'ص'
  },
  {
    id: 'template_dawao',
    nameKey: 'cardDawaoName',
    descKey: 'cardDawaoDesc',
    points: -1,
    type: 'danger',
    character: 'dawao',
    color: 'from-purple-100 to-purple-200 text-purple-950',
    borderColor: 'border-purple-400 shadow-purple-100 shadow-md',
    emoji: '💊',
    image: './images/characters/dawao.png',
    bgImage: './images/characters/bg_dawao.png',
    arabicLetter: 'د'
  },
  {
    id: 'template_nifto',
    nameKey: 'cardNiftoName',
    descKey: 'cardNiftoDesc',
    points: -3,
    type: 'danger',
    character: 'nifto',
    color: 'from-pink-100 to-pink-200 text-pink-950',
    borderColor: 'border-pink-400 shadow-pink-150 shadow-md',
    emoji: '💨',
    image: './images/characters/nifto.png',
    bgImage: './images/characters/bg_nifto.png',
    arabicLetter: 'ن'
  }
];

export const PRESENTATION_SLIDES: Slide[] = [
  {
    id: 'problem',
    titleKey: 'slideProblemTitle',
    textKey: 'slideProblemText',
    illustration: '🚨',
    accent: 'from-red-50 to-rose-100 border-red-200',
    icon: 'Activity'
  },
  {
    id: 'solution',
    titleKey: 'slideSolutionTitle',
    textKey: 'slideSolutionText',
    illustration: '🎮',
    accent: 'from-blue-50 to-indigo-100 border-blue-200',
    icon: 'Sparkles'
  },
  {
    id: 'audience',
    titleKey: 'slideAudienceTitle',
    textKey: 'slideAudienceText',
    illustration: '🛡️',
    accent: 'from-emerald-50 to-teal-100 border-emerald-200',
    icon: 'ShieldCheck'
  }
];
