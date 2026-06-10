import { TranslationSchema } from './translations';

export interface Card {
  id: string;
  nameKey: keyof TranslationSchema;
  descKey: keyof TranslationSchema;
  points: number;
  type: 'enzyme' | 'hero' | 'protection' | 'rescue' | 'danger';
  character: 'domi' | 'jeebi' | 'huma' | 'qasbo' | 'folo' | 'soyo' | 'dawao' | 'nifto';
  color: string; // Tailwind background color class
  borderColor: string;
  emoji: string;
  image?: string; // Optional custom transparent image path (e.g. '/images/domi.png')
  bgImage?: string; // Optional custom transparent background effect image path (e.g. '/images/characters/bg_domi.png')
  arabicLetter: string; // From the card layouts (د, ج, ح, ق, ف, ص, د, ن)
  isRare?: boolean;
}

export interface Player {
  id: string;
  name: string;
  isAI: boolean;
  score: number;
  hand: Card[];
  hasShield: boolean;
  avatar: string;
}

export interface GameLogEntry {
  id: string;
  message: string;
  timestamp: string;
  type: 'info' | 'success' | 'warning' | 'danger' | 'shield';
}

export interface Slide {
  id: string;
  titleKey: keyof TranslationSchema;
  textKey: keyof TranslationSchema;
  illustration: string;
  accent: string;
  icon: string;
}
