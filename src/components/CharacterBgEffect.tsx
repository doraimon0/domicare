import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Shield, 
  Heart, 
  Zap, 
  AlertTriangle, 
  Droplet, 
  Layers, 
  HelpCircle,
  Activity,
  Flame,
  ShieldCheck,
  ShieldAlert,
  Skull,
  Plus
} from 'lucide-react';

interface CharacterBgEffectProps {
  character: 'domi' | 'jeebi' | 'huma' | 'qasbo' | 'folo' | 'soyo' | 'dawao' | 'nifto';
  size?: 'sm' | 'md' | 'lg';
  customBgImage?: string;
}

export default function CharacterBgEffect({ character, size = 'md', customBgImage }: CharacterBgEffectProps) {
  const [imgError, setImgError] = React.useState(false);
  const isSm = size === 'sm';
  const isLg = size === 'lg';

  // Floating background transparent aesthetic wrapper
  const renderCustomBg = () => {
    if (!customBgImage || imgError) return null;
    return (
      <motion.img
        src={customBgImage}
        alt=""
        referrerPolicy="no-referrer"
        onError={() => setImgError(true)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isSm ? 0.45 : isLg ? 0.75 : 0.65, 
          scale: [0.95, 1.15, 0.95],
          rotate: [0, 8, -8, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute w-[95%] h-[95%] object-contain pointer-events-none select-none mix-blend-screen filter brightness-110 drop-shadow-[0_0_20px_rgba(255,255,255,0.25)] z-0"
      />
    );
  };

  // Base configurations depending on size
  const ringSize = isSm ? 'w-24 h-24' : isLg ? 'w-64 h-64' : 'w-48 h-48';
  const innerRingSize = isSm ? 'w-16 h-16' : isLg ? 'w-44 h-44' : 'w-32 h-32';
  
  // Custom theme configurations for each unique character style
  const element = (() => {
    switch (character) {
      case 'domi': // Hero - Golden Radiance / Strong Goodness Accent
        return (
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0">
            {/* Central Radial Golden Glow with higher opacity */}
            <div className={`absolute rounded-full bg-gradient-to-r from-amber-400/30 to-yellow-300/20 blur-3xl ${isSm ? 'w-36 h-36' : isLg ? 'w-80 h-80' : 'w-64 h-64'}`} />
            
            {/* Pulsing Light Waves */}
            <motion.div 
              animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.1, 0.4, 0.1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute rounded-full bg-amber-300/10 border border-amber-300/30 ${ringSize}`}
            />

            {/* Animated Sunburst Rays */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className={`absolute rounded-full border border-dashed border-amber-300/40 ${ringSize}`}
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className={`absolute rounded-full border border-dotted border-yellow-400/30 ${innerRingSize}`}
            />

            {/* Golden floating sparks and vital signs */}
            <div className="absolute inset-0">
              <motion.div 
                animate={{ y: [-15, -50], x: [-10, 10], opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0 }}
                className="absolute top-1/2 left-1/4 text-amber-200"
              >
                <Sparkles className={isSm ? "w-4 h-4" : "w-6 h-6"} />
              </motion.div>
              <motion.div 
                animate={{ y: [10, -45], x: [10, -5], opacity: [0, 1, 0], scale: [0.7, 1.1, 0.7] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                className="absolute top-2/3 right-1/4 text-amber-300"
              >
                <Zap className={isSm ? "w-3 h-3" : "w-5 h-5"} />
              </motion.div>
              <motion.div 
                animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.3, 0.9, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-1/4 right-1/3 text-yellow-300"
              >
                <Activity className={isSm ? "w-3 h-3" : "w-5 h-5"} />
              </motion.div>
            </div>
          </div>
        );

      case 'jeebi': // Enzyme - Safe Emerald Matrix / Vital Protection and health
        return (
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0">
            {/* Central Radial Emerald Glow */}
            <div className={`absolute rounded-full bg-gradient-to-r from-emerald-500/25 to-teal-400/20 blur-3xl ${isSm ? 'w-36 h-36' : isLg ? 'w-80 h-80' : 'w-64 h-64'}`} />

            {/* Swirling bio-ring */}
            <motion.div 
              style={{ borderRadius: '40% 60% 60% 40% / 40% 40% 60% 60%' }}
              animate={{ rotate: 360, scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className={`absolute border-2 border-emerald-400/20 ${ringSize}`}
            />

            {/* Triple Concentric Rings */}
            <motion.div 
              animate={{ scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute rounded-full border border-emerald-300/30 ${ringSize}`}
            />
            <motion.div 
              animate={{ scale: [1.05, 0.88, 1.05] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute rounded-full border border-teal-400/20 ${innerRingSize}`}
            />

            {/* Floating biological cells & safety molecules */}
            <div className="absolute inset-0">
              <motion.div 
                animate={{ y: [-10, -40], opacity: [0, 1, 0], scale: [0.7, 1.2, 0.7] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                className="absolute top-1/3 left-1/4 text-emerald-300"
              >
                <Droplet className={isSm ? "w-4 h-4" : "w-6 h-6"} />
              </motion.div>
              <motion.div 
                animate={{ y: [10, -35], opacity: [0, 1, 0], scale: [0.6, 1.1, 0.6] }}
                transition={{ duration: 4.8, repeat: Infinity, delay: 1.5 }}
                className="absolute bottom-1/3 right-1/4 text-teal-300"
              >
                <Heart className={isSm ? "w-4 h-4" : "w-5 h-5"} />
              </motion.div>
              <motion.div 
                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/4 right-1/3 text-emerald-400"
              >
                <Plus className={isSm ? "w-3 h-3" : "w-5 h-5"} />
              </motion.div>
            </div>
          </div>
        );

      case 'huma': // Protection - High Tech Blue Radar Shield
        return (
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0">
            {/* Central Radial Light Blue Glow */}
            <div className={`absolute rounded-full bg-gradient-to-r from-sky-500/30 to-blue-500/20 blur-3xl ${isSm ? 'w-36 h-36' : isLg ? 'w-80 h-80' : 'w-64 h-64'}`} />

            {/* Hexagonal Radar Grid or concentric safety barriers */}
            <motion.div 
              animate={{ scale: [0.85, 1.15, 0.85], opacity: [0.1, 0.35, 0.1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute rounded-full bg-sky-500/5 border-2 border-sky-450/45 ${ringSize}`}
            />

            {/* Tech Radar Crosshairs */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className={`absolute rounded-full border-2 border-dashed border-sky-400/45 flex items-center justify-center ${ringSize}`}
            >
              <div className="w-[85%] h-[85%] rounded-full border border-dashed border-sky-300/25" />
            </motion.div>
            
            <div className={`absolute border-2 border-sky-500/25 rounded-full ${innerRingSize}`} />

            {/* Floating Shield structures */}
            <div className="absolute inset-0">
              <motion.div 
                animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 2.2, repeat: Infinity }}
                className="absolute top-1/4 right-1/4 text-sky-200"
              >
                <ShieldCheck className={isSm ? "w-5 h-5" : "w-8 h-8"} />
              </motion.div>
              <motion.div 
                animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.2, 0.7, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.8 }}
                className="absolute bottom-1/4 left-1/4 text-blue-300"
              >
                <Shield className={isSm ? "w-4 h-4" : "w-6 h-6"} />
              </motion.div>
            </div>
          </div>
        );

      case 'qasbo': // Rescue - Amber Honey Drops and restoration
        return (
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0">
            {/* Central Orange Sparkles */}
            <div className={`absolute rounded-full bg-gradient-to-r from-orange-500/25 to-amber-400/20 blur-3xl ${isSm ? 'w-36 h-36' : isLg ? 'w-80 h-80' : 'w-64 h-64'}`} />

            {/* Honeycomb grid structure simulated */}
            <motion.div 
              animate={{ rotate: 180 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className={`absolute rounded-full border-2 border-orange-400/30 ${ringSize}`}
            />
            <motion.div 
              style={{ borderRadius: '30% 70% 70% 30% / 30% 40% 60% 70%' }}
              animate={{ rotate: -180, scale: [0.95, 1.1, 0.95] }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              className={`absolute border-2 border-orange-500/35 ${innerRingSize}`}
            />

            {/* Sweetness elements and honey drops */}
            <div className="absolute inset-0">
              <motion.div 
                animate={{ y: [20, -30], scale: [0.7, 1.3, 0.7], opacity: [0, 1, 0] }}
                transition={{ duration: 3.2, repeat: Infinity }}
                className="absolute bottom-1/3 left-1/4 text-amber-300"
              >
                <Sparkles className={isSm ? "w-4 h-4" : "w-6 h-6"} />
              </motion.div>
              <motion.div 
                animate={{ scale: [0.8, 1.25, 0.8], rotate: [0, 45, 0], opacity: [0.3, 0.9, 0.3] }}
                transition={{ duration: 4.5, repeat: Infinity }}
                className="absolute top-1/4 right-1/4 text-orange-200"
              >
                <Layers className={isSm ? "w-4 h-4" : "w-5 h-5"} />
              </motion.div>
              <motion.div 
                animate={{ y: [-10, 40], opacity: [0, 0.85, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute top-1/4 left-1/3 text-orange-400"
              >
                <Droplet className={isSm ? "w-3 h-3" : "w-5 h-5"} />
              </motion.div>
            </div>
          </div>
        );

      case 'folo': // Fava - Critical Red Warning Alert / Bio Hazard theme
        return (
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0">
            {/* Noxious toxic gas red backdrop with higher intensity */}
            <div className={`absolute rounded-full bg-gradient-to-r from-red-600/40 via-red-500/25 to-orange-600/20 blur-3xl ${isSm ? 'w-36 h-36' : isLg ? 'w-80 h-80' : 'w-64 h-64'}`} />

            {/* Danger pulsing alarm waves */}
            <motion.div 
              animate={{ scale: [0.9, 1.25, 0.9], opacity: [0.15, 0.45, 0.15] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute rounded-full bg-red-600/10 border-3 border-red-600/55 ${ringSize}`}
            />

            {/* Hazard Concentric warning lines */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              className={`absolute rounded-full border-2 border-dashed border-red-500/40 ${ringSize}`}
            />
            <motion.div 
              animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute rounded-full border border-dashed border-red-400/35 ${innerRingSize}`}
            />

            {/* Toxic Bio warning assets */}
            <div className="absolute inset-0">
              <motion.div 
                animate={{ y: [0, -15, 0], scale: [0.9, 1.2, 0.9], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="absolute top-1/3 right-1/4 text-red-500"
              >
                <ShieldAlert className={isSm ? "w-5 h-5" : "w-7 h-7"} />
              </motion.div>
              <motion.div 
                animate={{ scale: [1, 0.75, 1], rotate: [0, -90, 0] }}
                transition={{ duration: 2.8, repeat: Infinity }}
                className="absolute bottom-1/4 left-1/4 text-red-600"
              >
                <AlertTriangle className={isSm ? "w-4 h-4" : "w-6 h-6"} />
              </motion.div>
              <motion.div 
                animate={{ opacity: [0, 0.7, 0], scale: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute top-1/4 left-1/3 text-orange-500"
              >
                <Flame className={isSm ? "w-3 h-3" : "w-5 h-5"} />
              </motion.div>
            </div>
          </div>
        );

      case 'soyo': // Soy - Yellow Critical Alert
        return (
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0">
            {/* Warning yellow back glow */}
            <div className={`absolute rounded-full bg-gradient-to-r from-yellow-500/35 via-amber-500/20 to-yellow-600/15 blur-3xl ${isSm ? 'w-36 h-36' : isLg ? 'w-80 h-80' : 'w-64 h-64'}`} />

            {/* Yellow warning pulsing ring */}
            <motion.div 
              animate={{ scale: [0.85, 1.2, 0.85], opacity: [0.1, 0.35, 0.1] }}
              transition={{ duration: 2.2, repeat: Infinity }}
              className={`absolute rounded-full border-2 border-yellow-500/40 ${ringSize}`}
            />

            {/* Geometrical alert rotation box */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className={`absolute border border-yellow-500/30 ${ringSize}`}
              style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
            />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className={`absolute border border-dashed border-amber-400/40 rounded-full ${innerRingSize}`}
            />

            {/* Caution alerts */}
            <div className="absolute inset-0">
              <motion.div 
                animate={{ rotate: [0, 20, -20, 0], scale: [0.9, 1.15, 0.9] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute top-1/2 left-1/4 text-yellow-400"
              >
                <AlertTriangle className={isSm ? "w-4 h-4" : "w-6 h-6"} />
              </motion.div>
              <motion.div 
                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                className="absolute top-1/4 right-1/4 text-yellow-500"
              >
                <ShieldAlert className={isSm ? "w-3.5 h-3.5" : "w-5 h-5"} />
              </motion.div>
            </div>
          </div>
        );

      case 'dawao': // Unsafe Meds - Purple Pharmaceutical Alert / Synthetic hazard
        return (
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0">
            {/* Purple synthetic medicine visual halo */}
            <div className={`absolute rounded-full bg-gradient-to-r from-purple-600/35 via-fuchsia-500/20 to-purple-800/15 blur-3xl ${isSm ? 'w-36 h-36' : isLg ? 'w-80 h-80' : 'w-64 h-64'}`} />

            {/* Pulse wave of artificial elements */}
            <motion.div 
              animate={{ scale: [0.92, 1.18, 0.92], opacity: [0.15, 0.4, 0.15] }}
              transition={{ duration: 2.8, repeat: Infinity }}
              className={`absolute rounded-lg border-2 border-dashed border-purple-500/40 ${ringSize}`}
            />

            {/* Medical crossed rings */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], rotate: 45 }}
              transition={{ duration: 3, repeat: Infinity }}
              className={`absolute border-2 border-dashed border-purple-400/30 rounded-xl ${ringSize}`}
            />
            <motion.div 
              animate={{ rotate: -45, scale: [1.1, 0.9, 1.1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className={`absolute border border-purple-500/25 rounded-full ${innerRingSize}`}
            />

            {/* Molecular toxic particles and synthetic danger icons */}
            <div className="absolute inset-0">
              <motion.div 
                animate={{ y: [-8, 8, -8], rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute top-1/4 left-1/3 text-purple-300"
              >
                <HelpCircle className={isSm ? "w-4 h-4" : "w-5 h-5"} />
              </motion.div>
              <motion.div 
                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.85, 0.3] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="absolute bottom-1/3 right-1/4 text-fuchsia-400"
              >
                <ShieldAlert className={isSm ? "w-4.5 h-4.5" : "w-6 h-6"} />
              </motion.div>
            </div>
          </div>
        );

      case 'nifto': // Acute Naphthalene - Pink Intense Smoke Warning / Deadly severity
        return (
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0">
            {/* Intense Pink radioactive dust halo - Naphthalene is high severity (-3) */}
            <div className={`absolute rounded-full bg-gradient-to-r from-pink-600/45 via-rose-500/30 to-pink-800/15 blur-3xl ${isSm ? 'w-36 h-36' : isLg ? 'w-80 h-80' : 'w-64 h-64'}`} />

            {/* Double massive warning signal expansion waves */}
            <motion.div 
              animate={{ scale: [0.8, 1.35, 0.8], opacity: [0.1, 0.5, 0.1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
              className={`absolute rounded-full bg-pink-600/15 border-4 border-pink-500/60 ${ringSize}`}
            />

            {/* Sharp warning outline rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className={`absolute rounded-full border-2 border-dashed border-pink-400/55 ${ringSize}`}
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className={`absolute rounded-full border border-pink-500/40 ${innerRingSize}`}
            />

            {/* High danger alert particles: Spikes, Warning shields, and Skull indicators */}
            <div className="absolute inset-0">
              <motion.div 
                animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.4, 0.95, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute top-1/3 right-1/3 text-pink-300"
              >
                <Skull className={isSm ? "w-5 h-5" : "w-8 h-8"} />
              </motion.div>
              <motion.div 
                animate={{ rotate: [360, 0], scale: [0.9, 1.1, 0.9] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-1/3 left-1/3 text-pink-400"
              >
                <AlertTriangle className={isSm ? "w-4 h-4" : "w-6 h-6"} />
              </motion.div>
              <motion.div 
                animate={{ y: [-10, 10, -10], opacity: [0.2, 0.8, 0.2] }}
                transition={{ duration: 2.2, repeat: Infinity }}
                className="absolute top-1/4 left-1/4 text-rose-500"
              >
                <ShieldAlert className={isSm ? "w-3.5 h-3.5" : "w-5 h-5"} />
              </motion.div>
            </div>
          </div>
        );

      default:
        return null;
    }
  })();

  if (!element) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
      {renderCustomBg()}
      {element}
    </div>
  );
}
