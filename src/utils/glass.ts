/**
 * Glassmorphism style helpers for DomiCare "Frosted Glass" Theme
 */

export interface GlassyStyle {
  bg: string;
  border: string;
  text: string;
  glow: string;
  shadow: string;
}

export function getGlassyCardStyle(character: 'domi' | 'jeebi' | 'huma' | 'qasbo' | 'folo' | 'soyo' | 'dawao' | 'nifto'): GlassyStyle {
  switch (character) {
    case 'domi':
      return {
        bg: 'bg-amber-400/20 backdrop-blur-md hover:bg-amber-400/30',
        border: 'border-amber-300/40',
        text: 'text-amber-100',
        glow: 'shadow-[0_0_20px_rgba(245,158,11,0.25)]',
        shadow: 'shadow-amber-500/10'
      };
    case 'jeebi':
      return {
        bg: 'bg-emerald-400/20 backdrop-blur-md hover:bg-emerald-400/30',
        border: 'border-emerald-300/40',
        text: 'text-emerald-100',
        glow: 'shadow-[0_0_20px_rgba(16,185,129,0.25)]',
        shadow: 'shadow-emerald-500/10'
      };
    case 'huma':
      return {
        bg: 'bg-sky-400/20 backdrop-blur-md hover:bg-sky-400/30',
        border: 'border-sky-300/40',
        text: 'text-sky-100',
        glow: 'shadow-[0_0_20px_rgba(14,165,233,0.25)]',
        shadow: 'shadow-sky-500/10'
      };
    case 'qasbo':
      return {
        bg: 'bg-orange-400/20 backdrop-blur-md hover:bg-orange-400/30',
        border: 'border-orange-300/40',
        text: 'text-orange-100',
        glow: 'shadow-[0_0_20px_rgba(249,115,22,0.25)]',
        shadow: 'shadow-orange-500/10'
      };
    case 'folo':
      return {
        bg: 'bg-red-400/20 backdrop-blur-md hover:bg-red-400/30',
        border: 'border-red-300/40',
        text: 'text-red-200',
        glow: 'shadow-[0_0_20px_rgba(239,68,68,0.25)]',
        shadow: 'shadow-red-500/10'
      };
    case 'soyo':
      return {
        bg: 'bg-yellow-450/20 backdrop-blur-md hover:bg-yellow-450/30',
        border: 'border-yellow-300/40',
        text: 'text-yellow-100',
        glow: 'shadow-[0_0_20px_rgba(234,179,8,0.25)]',
        shadow: 'shadow-yellow-500/10'
      };
    case 'dawao':
      return {
        bg: 'bg-purple-400/20 backdrop-blur-md hover:bg-purple-400/30',
        border: 'border-purple-300/40',
        text: 'text-purple-100',
        glow: 'shadow-[0_0_20px_rgba(168,85,247,0.25)]',
        shadow: 'shadow-purple-500/10'
      };
    case 'nifto':
      return {
        bg: 'bg-pink-400/20 backdrop-blur-md hover:bg-pink-400/30',
        border: 'border-pink-300/40',
        text: 'text-pink-100',
        glow: 'shadow-[0_0_20px_rgba(236,72,153,0.25)]',
        shadow: 'shadow-pink-500/10'
      };
    default:
      return {
        bg: 'bg-white/10 backdrop-blur-md hover:bg-white/15',
        border: 'border-white/20',
        text: 'text-white',
        glow: 'shadow-inner',
        shadow: 'shadow-slate-500/10'
      };
  }
}
