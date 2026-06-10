import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { translations, Language } from '../translations';
import { PRESENTATION_SLIDES } from '../data';
import { 
  Activity, 
  Sparkles, 
  GraduationCap, 
  ChevronRight, 
  ChevronLeft, 
  ShieldCheck, 
  ShieldX, 
  RefreshCw, 
  Dna,
  Heart
} from 'lucide-react';

interface PitchSlidesProps {
  lang: Language;
}

export default function PitchSlides({ lang }: PitchSlidesProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  
  // Interactive Cell Simulator State
  const [hasEnzyme, setHasEnzyme] = useState(true);
  const [activeTrigger, setActiveTrigger] = useState<'none' | 'folo' | 'nifto' | 'dawao'>('none');
  const [cellState, setCellState] = useState<'healthy' | 'shaking' | 'burst' | 'saved'>('healthy');
  const [simulationLog, setSimulationLog] = useState<string>('');

  const t = translations[lang];
  const slide = PRESENTATION_SLIDES[currentSlideIndex];

  // Map slide icons to lucide icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity': return <Activity className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      default: return <Activity className="w-6 h-6" />;
    }
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % PRESENTATION_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + PRESENTATION_SLIDES.length) % PRESENTATION_SLIDES.length);
  };

  // Run the hemolysis simulation action
  const triggerScienceSim = (trigger: 'folo' | 'nifto' | 'dawao') => {
    setActiveTrigger(trigger);
    
    // Log message
    let triggerName = 'Folo (Fava Beans)';
    if (trigger === 'nifto') triggerName = 'Nifto (Naphthalene)';
    if (trigger === 'dawao') triggerName = 'Dawao (Sulfa Medication)';

    if (lang === 'ar') {
      setSimulationLog(`تم حقن مسبب التكسر: ${triggerName === 'Folo (Fava Beans)' ? 'الفول (فولو)' : trigger === 'nifto' ? 'النفثالين (نفتو)' : 'كلوريد الدواء'}`);
    } else {
      setSimulationLog(`Injected trigger: ${triggerName}`);
    }

    setCellState('shaking');

    setTimeout(() => {
      if (hasEnzyme) {
        // Red blood cell is protected!
        setCellState('healthy');
        if (lang === 'ar') {
          setSimulationLog('نجاح الحماية! خلايا الدم في أمان بفضل وجود كمية إنزيم جيبي G6PD الهام للتحييد.');
        } else {
          setSimulationLog('Protection success! Blood cell stays fully safe because G6PD / Jeebi enzyme is active.');
        }
      } else {
        // Hemolysis occur! Cell bursts or gets highly damaged
        if (trigger === 'nifto') {
          setCellState('burst');
          if (lang === 'ar') {
            setSimulationLog('⚠️ كارثة تكسر الخلايا (الانحلال الحاد)! غاز النفتالين القوي دمر جدار الخلية الدموية مسبباً نزفاً دموياً شديداً.');
          } else {
            setSimulationLog('⚠️ Severe Lysis (Hemolysis)! Naphthalene gas completely ruptured the fragile cell membrane.');
          }
        } else {
          setCellState('burst');
          if (lang === 'ar') {
            setSimulationLog('⚠️ انحلال حاد! الغذاء/الدواء تسبب في هشاشة الخلية وتكسير الغشاء لضعف السكر السداسي.');
          } else {
            setSimulationLog('⚠️ Acute Lysis! Acidic reaction oxidized the red blood cell until it disintegrated.');
          }
        }
      }
    }, 1500);
  };

  const resetSimulation = () => {
    setActiveTrigger('none');
    setCellState('healthy');
    if (lang === 'ar') {
      setSimulationLog('تم إعادة تهيئة الخلية الدموية إلى حالة الاستقرار المتوازن.');
    } else {
      setSimulationLog('Re-initialized red blood cell to steady homeostatic state.');
    }
  };

  const rescueCell = () => {
    setCellState('saved');
    if (lang === 'ar') {
      setSimulationLog('🦸‍♂️ بطل الإنقاذ عسل قصب السكر (قصبو) ساعد في تقليل التوتر المؤكسد! يرجى مراجعة الطبيب.');
    } else {
      setSimulationLog('🦸‍♂️ Qasbo rescue sugar syrup provided direct hydration and antioxidants! Always consult pediatrician.');
    }
  };

  return (
    <section id="awareness-guide" className="py-20 px-4 bg-transparent text-white relative overflow-hidden border-t border-white/10">
      {/* Decorative Science Grids in Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-60"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Presentation Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 text-indigo-100 px-4 py-1 rounded-full text-sm font-semibold mb-3">
            <Dna className="w-4 h-4 animate-pulse text-indigo-200" />
            <span>{lang === 'ar' ? 'البوابة الطبية والتوجيه التخصصي' : 'Medical Portal & General Guidelines'}</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white font-sans drop-shadow-md">
            {t.slidesTitle}
          </h2>
          
          <p className="text-indigo-150 max-w-2xl mx-auto mt-3 text-base md:text-lg font-medium">
            {t.slidesSubtitle}
          </p>
        </div>

        {/* Carousel Structure combined with Interactive Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Slide Content Display (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-white/10 border border-white/20 p-6 md:p-8 rounded-3xl backdrop-blur-md relative min-h-[460px] shadow-2xl">
            {/* Slide Count */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs uppercase bg-white/15 border border-white/20 text-white font-extrabold px-3 py-1 rounded-full tracking-wider font-mono">
                Slide {currentSlideIndex + 1} / {PRESENTATION_SLIDES.length}
              </span>
              <div className="flex gap-1.5 h-1.5 w-24">
                {PRESENTATION_SLIDES.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-full rounded-full transition-all duration-300 ${
                      i === currentSlideIndex ? 'bg-white w-12' : 'bg-white/20 w-4'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Slide Body */}
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white/15 text-white rounded-2xl border border-white/20">
                    {getIcon(slide.icon)}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {t[slide.titleKey]}
                  </h3>
                </div>

                <p className="text-indigo-50 leading-relaxed text-sm md:text-base text-justify whitespace-pre-line py-2 font-medium">
                  {t[slide.textKey]}
                </p>

                {/* Fun Facts in Sidebar Slide */}
                {slide.id === 'problem' && (
                  <div className="bg-red-500/15 border border-red-500/25 rounded-2xl p-4 mt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-200">
                      {lang === 'ar' ? '📊 إحصائية سريعة للمشكلة' : '📊 Quick Epidemic Statistic'}
                    </span>
                    <p className="text-xs text-red-150 mt-1 leading-relaxed font-semibold">
                      {lang === 'ar' 
                        ? 'يعد نقص G6PD أكثر أمراض الإنزيمات الوراثية شيوعاً في العالم، حيث يعرض المصاب لعطب فور تعرضه لحمية غير منضبطة.' 
                        : 'Inherited medically worldwide, this affects 400M+ people, demonstrating high sensitivity in Mediterranean households.'}
                    </p>
                  </div>
                )}

                {slide.id === 'solution' && (
                  <div className="bg-emerald-500/15 border border-emerald-500/25 rounded-2xl p-4 mt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-250">
                      {lang === 'ar' ? '🔍 أثر التعليم المجسم' : '🔍 Gamified Learning Retention'}
                    </span>
                    <p className="text-xs text-emerald-150 mt-1 leading-relaxed font-semibold">
                      {lang === 'ar'
                        ? 'تتحسن كفاءة استيعاب ممنوعات الغذاء للأطفال من 15% بالتلقين الجاف إلى أكثر من 85% عبر المحاكاة والقصة التفاعلية.'
                        : 'Retention studies show increase in children safety behaviors from 15% with flyers to 85% with gamified learning stories.'}
                    </p>
                  </div>
                )}

                {slide.id === 'audience' && (
                  <div className="bg-white/15 border border-white/20 rounded-2xl p-4 mt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-200">
                      {lang === 'ar' ? '🛡️ ميثاق التوعية الأسرية' : '🛡️ Family Care Pledge'}
                    </span>
                    <p className="text-xs text-indigo-100 mt-1 leading-relaxed font-semibold">
                      {lang === 'ar'
                        ? 'تهدف منصة DomiCare لتقديم تجربة حماية وقائية فريدة تضمن سلامة أطفالنا في المدارس وتوفر راحة البال الكاملة للأسر والمربين.'
                        : 'DomiCare aims to set a gold standard for digital pediatric healthcare guidelines, ensuring safe and active environments for our heroes.'}
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-12 pt-4 border-t border-white/15">
              <button
                onClick={handlePrev}
                className="px-4 py-2 text-sm font-bold bg-white/10 hover:bg-white/20 text-white border border-white/15 rounded-xl transition cursor-pointer flex items-center gap-1.5"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{t.prev}</span>
              </button>

              <button
                onClick={handleNext}
                className="px-5 py-2.5 text-sm font-extrabold bg-white hover:bg-indigo-50 text-indigo-950 rounded-xl transition cursor-pointer flex items-center gap-1.5 shadow-lg border border-white/30"
              >
                <span>{t.next}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT: High-Tech Cell Hemolysis Simulator (5 Cols) */}
          <div className="lg:col-span-5 bg-white/10 border border-white/20 p-6 rounded-3xl flex flex-col justify-between backdrop-blur-md shadow-2xl">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs uppercase font-extrabold tracking-wider text-indigo-205">
                  {lang === 'ar' ? '🧪 محاكي التكسر المخبري التفاعلي' : '🧪 Lab Hemolysis Simulator'}
                </span>
                
                {/* Reset button */}
                <button 
                  onClick={resetSimulation}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition cursor-pointer border border-white/15"
                  title="Reset Simulator"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Status toggler: Enzyme Presence */}
              <div className="grid grid-cols-2 gap-2 bg-black/25 p-1.5 rounded-2xl border border-white/10 text-center text-xs font-bold mb-6">
                <button
                  onClick={() => { setHasEnzyme(true); resetSimulation(); }}
                  className={`py-2 rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer ${
                    hasEnzyme ? 'bg-emerald-600 border border-emerald-500/30 text-white shadow-lg' : 'text-slate-350 hover:text-white'
                  }`}
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'سليم (مع الإنزيم)' : 'Protected (+G6PD)'}</span>
                </button>
                <button
                  onClick={() => { setHasEnzyme(false); resetSimulation(); }}
                  className={`py-2 rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer ${
                    !hasEnzyme ? 'bg-red-650 border border-red-500/30 text-white shadow-lg' : 'text-slate-350 hover:text-white'
                  }`}
                >
                  <ShieldX className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'مصاب (بدون إنزيم)' : 'Deficient (No G6PD)'}</span>
                </button>
              </div>

              {/* Central animation stage viewport */}
              <div id="sim-view-stage" className="h-44 bg-black/40 rounded-2xl relative overflow-hidden flex items-center justify-center border border-white/10">
                
                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:10px_10px]" />

                {/* Animated Particles flowing if trigger is active */}
                {activeTrigger !== 'none' && cellState === 'shaking' && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ 
                          x: [-10, 160 + (i * 10)], 
                          y: [30 + (i * 20), 80 + (i * 8)],
                          opacity: [0, 1, 0]
                        }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                        className="absolute w-6 h-6 flex items-center justify-center"
                      >
                        <img 
                          src={
                            activeTrigger === 'folo' 
                              ? './images/characters/folo.png' 
                              : activeTrigger === 'nifto' 
                                ? './images/characters/nifto.png' 
                                : './images/characters/dawao.png'
                          } 
                          alt=""
                          referrerPolicy="no-referrer"
                          className="w-5 h-5 object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.parentElement?.querySelector('.particle-fallback');
                            if (fallback) fallback.classList.remove('hidden');
                          }}
                        />
                        <span className="particle-fallback hidden text-base">
                          {activeTrigger === 'folo' ? '🌱' : activeTrigger === 'nifto' ? '💨' : '💊'}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* The Red Blood Cell */}
                <AnimatePresence mode="wait">
                  {cellState === 'healthy' && (
                    <motion.div
                      key="healthy"
                      animate={{ scale: [1, 1.04, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="w-24 h-24 rounded-full bg-gradient-to-br from-rose-500 to-red-600 flex flex-col items-center justify-center relative shadow-[0_0_20px_rgba(239,68,68,0.4)] border-3 border-pink-400/35"
                    >
                      {/* Biconcave depth representation */}
                      <div className="absolute inset-4 rounded-full bg-red-700/30 flex items-center justify-center">
                        <span className="text-2xl select-none">😊</span>
                      </div>
                      <span className="absolute bottom-2 text-[10px] uppercase font-bold tracking-wider text-rose-200">RBC</span>
                    </motion.div>
                  )}

                  {cellState === 'shaking' && (
                    <motion.div
                      key="shaking"
                      animate={{ x: [-3, 3, -3], y: [1, -2, 1] }}
                      transition={{ duration: 0.15, repeat: Infinity }}
                      className="w-24 h-24 rounded-full bg-gradient-to-br from-rose-600 to-red-700 flex flex-col items-center justify-center relative shadow-[0_0_20px_rgba(239,68,68,0.5)] border-3 border-red-500/50"
                    >
                      <div className="absolute inset-4 rounded-full bg-red-800/40 flex items-center justify-center">
                        <span className="text-2xl select-none">😰</span>
                      </div>
                    </motion.div>
                  )}

                  {cellState === 'burst' && (
                    <motion.div
                      key="burst"
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.3, 0], opacity: [1, 0.8, 0] }}
                      transition={{ duration: 0.6 }}
                      className="relative w-28 h-28 flex items-center justify-center"
                    >
                      {/* Explode shards */}
                      <div className="absolute text-5xl select-none">💥</div>
                      <div className="absolute text-xs font-bold text-red-450 select-none bg-black/60 px-2 py-0.5 rounded">HEMOLYSIS</div>
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                           key={i}
                           animate={{ 
                             x: [0, (Math.cos(i * Math.PI / 4) * 55)], 
                             y: [0, (Math.sin(i * Math.PI / 4) * 55)],
                             opacity: [1, 0]
                           }}
                           transition={{ duration: 0.5 }}
                           className="absolute w-2 h-2 rounded-full bg-red-650"
                        />
                      ))}
                    </motion.div>
                  )}

                  {cellState === 'saved' && (
                    <motion.div
                      key="saved"
                      className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-450 to-amber-500 flex flex-col items-center justify-center relative shadow-[0_0_20px_rgba(245,158,11,0.5)] border-3 border-orange-300"
                    >
                      <div className="absolute inset-4 rounded-full bg-amber-600/30 flex items-center justify-center">
                        <span className="text-2xl select-none">😌</span>
                      </div>
                      <span className="absolute bottom-2 text-[9px] uppercase font-bold tracking-widest text-amber-50 leading-none">SAVED</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Little Badge reminding of Enzyme status */}
                <span className={`absolute bottom-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-md ${
                  hasEnzyme ? 'bg-emerald-500/10 text-emerald-305' : 'bg-red-500/15 text-red-300 animate-pulse'
                }`}>
                  G6PD: {hasEnzyme ? 'OK' : 'DEFICIENT'}
                </span>
              </div>

              {/* Trigger Injection buttons */}
              <div className="mt-4">
                <span className="text-xs font-bold text-indigo-200 block mb-2 text-center sm:text-left">
                  {lang === 'ar' ? 'اضغط لحقن عامل مؤكسد مسبب للتكسر:' : 'Click to inject oxidative factor:'}
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    disabled={cellState !== 'healthy' && cellState !== 'saved'}
                    onClick={() => triggerScienceSim('folo')}
                    className="py-2.5 px-2 bg-white/10 hover:bg-white/20 text-white/90 border border-white/15 rounded-xl text-xs font-semibold select-none flex flex-col items-center gap-2 transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <div className="w-9 h-9 flex items-center justify-center relative bg-white/5 rounded-lg border border-white/10">
                      <img 
                        src="./images/characters/folo.png" 
                        alt="Folo" 
                        referrerPolicy="no-referrer"
                        className="w-7 h-7 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.parentElement?.querySelector('.sim-btn-fallback');
                          if (fallback) fallback.classList.remove('hidden');
                        }}
                      />
                      <span className="sim-btn-fallback hidden text-base">🌱</span>
                    </div>
                    <span>{lang === 'ar' ? 'فولو (فول)' : 'Folo Fava'}</span>
                  </button>
                  <button
                    disabled={cellState !== 'healthy' && cellState !== 'saved'}
                    onClick={() => triggerScienceSim('nifto')}
                    className="py-2.5 px-2 bg-white/10 hover:bg-white/20 text-white/90 border border-white/15 rounded-xl text-xs font-semibold select-none flex flex-col items-center gap-2 transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <div className="w-9 h-9 flex items-center justify-center relative bg-white/5 rounded-lg border border-white/10">
                      <img 
                        src="./images/characters/nifto.png" 
                        alt="Nifto" 
                        referrerPolicy="no-referrer"
                        className="w-7 h-7 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.parentElement?.querySelector('.sim-btn-fallback');
                          if (fallback) fallback.classList.remove('hidden');
                        }}
                      />
                      <span className="sim-btn-fallback hidden text-base">💨</span>
                    </div>
                    <span>{lang === 'ar' ? 'نفتو (نفتالين)' : 'Nifto Gas'}</span>
                  </button>
                  <button
                    disabled={cellState !== 'healthy' && cellState !== 'saved'}
                    onClick={() => triggerScienceSim('dawao')}
                    className="py-2.5 px-2 bg-white/10 hover:bg-white/20 text-white/90 border border-white/15 rounded-xl text-xs font-semibold select-none flex flex-col items-center gap-2 transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <div className="w-9 h-9 flex items-center justify-center relative bg-white/5 rounded-lg border border-white/10">
                      <img 
                        src="./images/characters/dawao.png" 
                        alt="Dawao" 
                        referrerPolicy="no-referrer"
                        className="w-7 h-7 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.parentElement?.querySelector('.sim-btn-fallback');
                          if (fallback) fallback.classList.remove('hidden');
                        }}
                      />
                      <span className="sim-btn-fallback hidden text-base">💊</span>
                    </div>
                    <span>{lang === 'ar' ? 'دوا (عقاقير)' : 'Unsafe Medication'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Realtime Logs output / Controls */}
            <div className="mt-6 pt-4 border-t border-white/15 bg-black/25 p-3 rounded-2xl border border-white/10">
              <span className="text-[10px] uppercase font-bold text-indigo-200 block mb-1">
                {lang === 'ar' ? '📟 محلل خلايا الدم الفوري' : '📟 Real-time Cell Analysis Screen'}
              </span>
              <p className="text-xs text-white/90 font-mono min-h-11 leading-relaxed">
                {simulationLog || (lang === 'ar' ? 'اختر الإنزيم وحقن مؤكسداً لرؤية التكسر الخلوي الحي.' : 'Select enzyme status, then click triggers to observe hemolysis.')}
              </p>

              {/* Rescue CTA in case of Hemolysis */}
              {cellState === 'burst' && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onClick={rescueCell}
                  className="w-full mt-3 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center gap-1 hover:brightness-110 transition cursor-pointer"
                >
                  <Heart className="w-3.5 h-3.5 fill-current" />
                  <span>{lang === 'ar' ? 'إنقاذ فوري بـ كارت قصبو!' : 'Rescue immediately with Qasbo Card!'}</span>
                </motion.button>
              )}

              {cellState === 'saved' && (
                <button
                  onClick={resetSimulation}
                  className="w-full mt-3 py-2 bg-white/10 text-white font-semibold text-xs border border-white/15 rounded-xl flex items-center justify-center gap-1 hover:text-white hover:bg-white/15 transition cursor-pointer"
                >
                  <span>{lang === 'ar' ? 'إعادة تشغيل المحاكي' : 'Reboot Laboratory'}</span>
                </button>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
