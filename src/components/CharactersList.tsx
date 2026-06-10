import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from '../types';
import { CARD_TEMPLATES } from '../data';
import { translations, Language } from '../translations';
import { Sparkles, Info, X, ShieldAlert, HeartHandshake } from 'lucide-react';
import { getGlassyCardStyle } from '../utils/glass';
import CharacterBgEffect from './CharacterBgEffect';

interface CharactersListProps {
  lang: Language;
}

export default function CharactersList({ lang }: CharactersListProps) {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const t = translations[lang];

  return (
    <section id="characters-section" className="py-16 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/25 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-3 font-sans"
          >
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            <span>DomiCare Universe</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-black text-white tracking-tight drop-shadow-sm"
          >
            {t.charactersTitle}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-indigo-150 max-w-2xl mx-auto mt-3 text-base md:text-lg font-semibold"
          >
            {t.charactersSubtitle}
          </motion.p>
        </div>

        {/* Character Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-2">
          {CARD_TEMPLATES.map((card, idx) => {
            const isDanger = card.type === 'danger';
            const isPositive = card.points > 0;
            const pointsLabel = isPositive ? `+${card.points}` : card.points === 0 ? '0' : `${card.points}`;
            const glassy = getGlassyCardStyle(card.character);

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                id={`character-card-${card.character}`}
                className={`group relative rounded-3xl border-3 p-5 flex flex-col justify-between h-[380px] overflow-hidden cursor-pointer transition-all duration-305 ${glassy.bg} ${glassy.border} ${glassy.text} ${glassy.glow} shadow-xl`}
                onClick={() => setSelectedCard(card)}
              >
                {/* Dynamic Background Premium Effect */}
                <CharacterBgEffect character={card.character} size="md" customBgImage={card.bgImage} />

                {/* Header Corner Elements */}
                <div className="flex justify-between items-center z-10">
                  {/* Top-Left: Rounded Symbol Circle */}
                  <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center font-bold text-lg border-2 shadow-sm border-white/30 text-white">
                    {card.arabicLetter}
                  </div>
                  
                  {/* Category Title */}
                  <span className="text-[10px] uppercase tracking-wider bg-white/15 backdrop-blur-md px-3 py-1 rounded-full font-bold shadow-2xs text-white border border-white/15">
                    {card.type === 'hero' ? 'بطل / Hero' : 
                     card.type === 'enzyme' ? 'إنزيم / Enzyme' : 
                     card.type === 'protection' ? 'حماية / Shield' : 
                     card.type === 'rescue' ? 'إنقاذ / Rescue' : 'خطر / Danger'}
                  </span>

                  {/* Top-Right: Points Circle */}
                  <div className={`w-9 h-9 rounded-full font-sans font-black text-sm flex items-center justify-center border-2 shadow-md ${
                    isDanger ? 'bg-red-500/80 border-red-400 text-white shadow-red-500/20' : 
                    isPositive ? 'bg-emerald-500/80 border-emerald-400 text-white shadow-emerald-500/20' : 'bg-sky-500/10 border-white/30 text-white'
                  }`}>
                    {pointsLabel}
                  </div>
                </div>

                {/* Character visual central area */}
                <div className="my-auto flex flex-col items-center py-4 z-10 w-full">
                  <div className="text-8xl group-hover:scale-110 transition-transform duration-300 filter drop-shadow-md select-none flex items-center justify-center">
                    {card.image ? (
                      <img 
                        src={card.image} 
                        alt=""
                        referrerPolicy="no-referrer"
                        className="w-32 h-32 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const cardEl = e.currentTarget.closest('#character-card-' + card.character);
                          const fallback = cardEl?.querySelector('.emoji-fallback');
                          if (fallback) fallback.classList.remove('hidden');
                        }}
                      />
                    ) : null}
                    <span className={`emoji-fallback ${card.image ? 'hidden' : ''}`}>{card.emoji}</span>
                  </div>
                  
                  {/* Subtle cartoon floor glow */}
                  <div className="w-20 h-3 bg-white/10 rounded-full blur-[3px] mt-2 group-hover:w-24 transition-all duration-300"></div>
                </div>

                {/* Bottom Card Identity Details */}
                <div className="space-y-2 mt-auto z-10">
                  <h3 className="text-lg font-black text-center tracking-tight line-clamp-1">
                    {t[card.nameKey]}
                  </h3>
                  
                  <p className="text-xs text-center opacity-90 line-clamp-2 leading-relaxed font-semibold">
                    {t[card.descKey]}
                  </p>

                  {/* Visual Detail Hint */}
                  <div className="flex justify-center pt-2">
                    <span className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider bg-white/15 hover:bg-white/25 hover:text-white border border-white/15 px-3 py-1 rounded-full text-white/90">
                      <Info className="w-3 h-3" />
                      {t.viewDetails}
                    </span>
                  </div>
                </div>

                {/* Corner watermarks matching PDF card styles */}
                <div className="absolute top-2/3 right-4 opacity-10 pointer-events-none select-none text-9xl font-extrabold text-white/5">
                  {card.arabicLetter}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Detail Modal Sheet */}
        <AnimatePresence>
          {selectedCard && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backing Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
                onClick={() => setSelectedCard(null)}
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-slate-900/90 backdrop-blur-xl border border-white/20 text-white shadow-2xl"
              >
                {/* Visual Header */}
                <div className="p-6 bg-white/10 border-b border-white/15 flex items-center gap-4 relative overflow-hidden">
                  {/* Dynamic Background Premium Effect in Modal */}
                  <CharacterBgEffect character={selectedCard.character} size="lg" customBgImage={selectedCard.bgImage} />

                  <div className="text-7xl drop-shadow-md select-none flex items-center justify-center z-10">
                    {selectedCard.image ? (
                      <img 
                        src={selectedCard.image} 
                        alt=""
                        referrerPolicy="no-referrer"
                        className="w-28 h-28 object-contain"
                        id="modal-char-image"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallbackNode = document.getElementById('modal-char-fallback');
                          if (fallbackNode) fallbackNode.classList.remove('hidden');
                        }}
                      />
                    ) : null}
                    <span id="modal-char-fallback" className={`emoji-fallback ${selectedCard.image ? 'hidden' : ''}`}>{selectedCard.emoji}</span>
                  </div>
                  
                  <div className="z-10">
                    <span className="text-xs font-bold uppercase tracking-widest bg-white/15 border border-white/20 text-white px-2.5 py-0.5 rounded-full inline-block mb-1">
                      {selectedCard.arabicLetter} - {selectedCard.type.toUpperCase()}
                    </span>
                    <h3 className="text-2xl font-black text-white tracking-tight">
                      {t[selectedCard.nameKey]}
                    </h3>
                  </div>

                  <button
                    onClick={() => setSelectedCard(null)}
                    className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 border border-white/15 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Description & Scientific Education Info */}
                <div className="p-6 space-y-6">
                  <div>
                    <h4 className="text-xs font-black text-indigo-200 uppercase tracking-wider mb-2">
                      {lang === 'ar' ? 'الوصف التوعوي / Description' : 'Awareness Description'}
                    </h4>
                    <p className="text-white/95 text-lg leading-relaxed font-semibold">
                      {t[selectedCard.descKey]}
                    </p>
                  </div>

                  {/* Dynamic G6PD Scientific Core Alert */}
                  <div className={`p-4 rounded-2xl flex gap-3 border ${
                    selectedCard.type === 'danger' ? 'bg-red-500/15 text-red-200 border-red-500/30 font-semibold' :
                    'bg-emerald-500/15 text-emerald-255 border-emerald-500/30 font-semibold'
                  }`}>
                    {selectedCard.type === 'danger' ? (
                      <>
                        <ShieldAlert className="w-6 h-6 shrink-0 text-red-400" />
                        <div>
                          <h5 className="font-extrabold text-sm text-white">
                            {lang === 'ar' ? '⚠️ تحذير طبي هام للأهالي والأطفال' : '⚠️ Critical G6PD Health Warning'}
                          </h5>
                          <p className="text-xs mt-1 leading-relaxed opacity-95 text-red-100">
                            {selectedCard.character === 'folo' && (lang === 'ar' ? 'يحفز مركب الفيسين بالفول التحلل المفاجئ للدم. تجنبوا الفول الأخضر والمعلب والمدمس تماماً، وأخبروا المدرسة والروضة بوضع الطفل.' : 'Vicine compound in fava beans triggers breakdown in minutes. Avoid fava salads, canned beans, and always alert caretakers.')}
                            {selectedCard.character === 'soyo' && (lang === 'ar' ? 'تحتوي حبوب الصويا وبروتين الصويا البديل على عناصر سامة لإنزيمات الدم. راقبوا مكونات الأغذية الجاهزة والسناكس دائماً.' : 'Soy formulas and food alternatives can compromise red cells. Carefully review labels for fast foods and commercial products.')}
                            {selectedCard.character === 'dawao' && (lang === 'ar' ? 'العديد من المضادات الحيوية والسلفا والأسبرين تحفز انحلال الدم. لا تتناولوا أي مسكنات أو أدوية من الصيدلية دون إذن طبي.' : 'Anilines, sulfas, and aspirin trigger hemolysis. Never administer medications without absolute pediatrician confirmation.')}
                            {selectedCard.character === 'nifto' && (lang === 'ar' ? 'غاز الأسيتات المتطاير من نفتالين الملابس يدخل الجسم عبر الرئتين والجلد مباشرة ليدمر الدم سريعا. أخرجوا النفتالين من الخزائن فوراً!' : 'Vaporized naphthalene particles entering through respiration or skin trigger severe red blood cell damage. Eradicate naphthalene from all household closets.')}
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <HeartHandshake className="w-6 h-6 shrink-0 text-emerald-400" />
                        <div>
                          <h5 className="font-extrabold text-sm text-white">
                            {lang === 'ar' ? '🛡️ حماية ووقاية ذكية للطفل بطلنا' : '🛡️ Smart Support Core'}
                          </h5>
                          <p className="text-xs mt-1 leading-relaxed opacity-95 text-emerald-100">
                            {selectedCard.character === 'domi' && (lang === 'ar' ? 'دومي يمثل البطل المتيقظ ذو الوعي القوي. إنه مستعد لمقاطعة المواد الخطرة، وتناول المأكولات المناسبة التي لا ترهق دمه الطيب.' : 'Rare Domi embodies the alert, educated champion. He loves high-nutrition fresh items and completely ignores fava or soy temptations.')}
                            {selectedCard.character === 'jeebi' && (lang === 'ar' ? 'جيبي هو الإنزيم المقاوم. وجود السلوك والمظاهر الوقائية تحاكي وفرته في الدم، ليوفر الحماية المطلوبة من حدوث فقر الدم الانحلالي.' : 'Jeebi represents the G6PD guard. Staying fully aware and following guidelines is the perfect surrogate to full health.')}
                            {selectedCard.character === 'huma' && (lang === 'ar' ? 'صنع الحواجز السليمة وتجنب النفثالين في المنزل يعطي طفلك درع حِمى لحماية صحتهم، ويمنع الطوارئ قبل حدوثها.' : 'Creating a safe clean environment at home gives children the ultimate Huma guard, preventing emergencies before they manifest.')}
                            {selectedCard.character === 'qasbo' && (lang === 'ar' ? 'الدعم السريع وتقديم السوائل يحسن الحالة المؤقتة. لكن تذكر أن قصبو هو مؤشر تنبيه: استشر طبيبك دائماً في الأوقات المناسبة.' : 'Emergency support can temporarily alleviate fatigue. However, Qasbo reminds us to prioritize pediatrician guidance.')}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="p-4 bg-white/10 backdrop-blur-md border-t border-white/15 flex justify-end">
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="px-5 py-2.5 rounded-xl bg-white text-indigo-950 font-black text-sm tracking-tight hover:bg-indigo-50 transition shadow-lg border border-white/30"
                  >
                    {lang === 'ar' ? 'إغلاق الدليل' : 'Close Guide'}
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
