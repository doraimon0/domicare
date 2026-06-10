/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { translations, Language } from './translations';
import PitchSlides from './components/PitchSlides';
import CharactersList from './components/CharactersList';
import GameEngine from './components/GameEngine';
import { 
  Heart, 
  MapPin, 
  Mail, 
  Instagram, 
  QrCode, 
  ChevronRight, 
  Play, 
  Globe, 
  ChevronDown,
  ArrowUpRight,
  Sparkles,
  Award
} from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  
  const t = translations[lang];
  const isRtl = lang === 'ar';

  const toggleLanguage = (selectedLang: Language) => {
    setLang(selectedLang);
    setLangDropdownOpen(false);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      dir={isRtl ? 'rtl' : 'ltr'} 
      className="min-h-screen bg-gradient-to-br from-[#6366f1] via-[#a855f7] to-[#ec4899] text-white selection:bg-white/30 selection:text-white transition-all duration-300 font-sans"
    >
      {/* GLOBAL NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg text-white">
        <div className="max-w-6xl mx-auto px-4 py-3.5 flex justify-between items-center">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center">
              {/* Fallback layout shown by default, will auto-hide if a real transparent logo is loaded */}
              <div id="nav-logo-fallback" className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg border border-white/20">
                <span className="text-indigo-600 font-bold text-2xl">🩸</span>
              </div>
              <img 
                src="./images/characters/logo.png" 
                alt="Logo"
                referrerPolicy="no-referrer"
                className="absolute h-12 w-auto max-w-[140px] object-contain opacity-0 transition-all duration-300 pointer-events-none"
                onLoad={(e) => {
                  e.currentTarget.classList.remove('opacity-0', 'absolute', 'pointer-events-none');
                  e.currentTarget.classList.add('opacity-100', 'relative');
                  document.getElementById('nav-logo-fallback')?.classList.add('hidden');
                }}
                onError={(e) => {
                  if (!e.currentTarget.dataset.retried) {
                    e.currentTarget.setAttribute('data-retried', 'true');
                    e.currentTarget.src = './images/logo.png';
                  } else {
                    e.currentTarget.style.display = 'none';
                  }
                }}
              />
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-white font-sans block leading-none">
                {t.navTitle}
              </span>
              <span className="text-[9px] uppercase font-bold tracking-widest text-indigo-200 mt-0.5 block">
                {isRtl ? 'منصة التوعية بأنيميا الفول' : 'G6PD Def. Awareness Platform'}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-white/80">
            <button 
              onClick={() => scrollToSection('awareness-guide')} 
              className="hover:text-white transition cursor-pointer"
            >
              {t.presentation}
            </button>
            <button 
              onClick={() => scrollToSection('characters-section')} 
              className="hover:text-white transition cursor-pointer"
            >
              {isRtl ? 'البطاقات / الشخصيات' : 'Champions'}
            </button>
            <button 
              onClick={() => scrollToSection('game-section')} 
              className="hover:text-white transition cursor-pointer"
            >
              {t.playGame}
            </button>
            <button 
              onClick={() => scrollToSection('about-section')} 
              className="hover:text-white transition cursor-pointer"
            >
              {t.aboutUs}
            </button>
            <button 
              onClick={() => scrollToSection('contact-section')} 
              className="hover:text-white transition cursor-pointer"
            >
              {t.contactUs}
            </button>
          </nav>

          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white/15 border border-white/25 font-extrabold text-xs text-white hover:bg-white/25 rounded-xl transition cursor-pointer select-none"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>
                {lang === 'ar' ? 'العربية' : lang === 'en' ? 'English' : 'Français'}
              </span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {langDropdownOpen && (
                <>
                  {/* Global overlay for quick escape */}
                  <div className="fixed inset-0 z-10" onClick={() => setLangDropdownOpen(false)} />
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className={`absolute z-20 mt-2 w-44 rounded-xl bg-slate-900/90 backdrop-blur-md p-1 shadow-2xl border border-white/20 ${
                      isRtl ? 'left-0' : 'right-0'
                    }`}
                  >
                    <button
                      onClick={() => toggleLanguage('ar')}
                      className={`w-full text-right px-3.5 py-2.5 rounded-lg text-xs font-bold transition flex items-center justify-between ${
                        lang === 'ar' ? 'bg-white/20 text-white' : 'text-white/70 hover:bg-white/10'
                      }`}
                    >
                      <span>العربية (Arabic)</span>
                      <span>🇸🇦</span>
                    </button>
                    <button
                      onClick={() => toggleLanguage('en')}
                      className={`w-full text-right px-3.5 py-2.5 rounded-lg text-xs font-bold transition flex items-center justify-between ${
                        lang === 'en' ? 'bg-white/20 text-white' : 'text-white/70 hover:bg-white/10'
                      }`}
                    >
                      <span dir="ltr">English</span>
                      <span>🇺🇸</span>
                    </button>
                    <button
                      onClick={() => toggleLanguage('fr')}
                      className={`w-full text-right px-3.5 py-2.5 rounded-lg text-xs font-bold transition flex items-center justify-between ${
                        lang === 'fr' ? 'bg-white/20 text-white' : 'text-white/70 hover:bg-white/10'
                      }`}
                    >
                      <span dir="ltr">Français</span>
                      <span>🇫🇷</span>
                    </button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

        </div>
      </header>

      {/* Hero Header Area */}
      <section id="hero" className="relative pt-12 pb-24 px-4 bg-transparent overflow-hidden">
        {/* Animated Background circles */}
        <div className="absolute top-[-20%] left-[-10%] w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[550px] rounded-full bg-white/10 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Title Grid (7 Cols on desktop) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-right">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/20 border border-white/30 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-md font-sans"
            >
              <Award className="w-4 h-4 text-indigo-200 animate-bounce" />
              <span>{isRtl ? '🛡️ مبادرة التوعية والوقاية التفاعلية لأطفال G6PD' : '🛡️ Interactive G6PD Awareness & Prevention Initiative'}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight uppercase drop-shadow-sm"
            >
              {t.heroTagline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-indigo-100 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-semibold"
            >
              {t.heroSub}
            </motion.p>

            {/* Floating Hero Icons and Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start pt-4"
            >
              <button
                onClick={() => scrollToSection('game-section')}
                className="px-8 py-4 bg-white text-indigo-900 font-extrabold text-base rounded-2xl hover:bg-indigo-50 shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                <Play className="w-5 h-5 fill-current" />
                <span>{t.playGame}</span>
              </button>

              <button
                onClick={() => scrollToSection('awareness-guide')}
                className="px-8 py-4 bg-white/15 text-white hover:bg-white/25 font-extrabold text-base rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-white/25 transform hover:-translate-y-0.5"
              >
                <Heart className="w-5 h-5 text-indigo-200" />
                <span>{t.presentation}</span>
              </button>
            </motion.div>
          </div>

          {/* Right Floating Character cards (5 Cols) */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col items-center justify-center relative sm:py-8 lg:py-0">
            
            {/* The Main Hero Character 'Domi' Circle Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, type: 'spring' }}
              className="w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-white/15 backdrop-blur-md border border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center justify-center relative select-none"
            >
              {/* Spinning DNA behind it */}
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.25)_0%,transparent_100%)] rounded-full animate-pulse" />
              
              <div className="w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center z-10 transition-transform duration-500 hover:scale-110">
                <img 
                  src="./images/characters/domi.png" 
                  alt=""
                  referrerPolicy="no-referrer"
                  className="w-64 h-64 sm:w-76 sm:h-76 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.parentElement?.querySelector('.hero-fallback-domi');
                    if (fallback) fallback.classList.remove('hidden');
                  }}
                />
                <span className="hero-fallback-domi hidden text-9xl sm:text-[11rem] filter drop-shadow-2xl">🦸‍♂️</span>
              </div>
              
              {/* Bottom tag bubble */}
              <span className="absolute -bottom-3 px-5 py-2 rounded-full bg-white text-indigo-900 font-extrabold text-sm tracking-wider uppercase border border-white/50 shadow-lg z-20">
                HERO DOMI
              </span>
            </motion.div>

            {/* Little Orbiting floating card badges mimicking characters in actual design */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-0 left-0 md:-top-10 md:-left-8 p-4 bg-white/10 backdrop-blur-md rounded-2xl border-2 border-emerald-400/50 shadow-2xl flex items-center gap-2 select-none"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-white/5 rounded-xl border border-white/10">
                <img 
                  src="./images/characters/jeebi.png" 
                  alt=""
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.parentElement?.querySelector('.badge-fallback');
                    if (fallback) fallback.classList.remove('hidden');
                  }}
                />
                <span className="badge-fallback hidden text-4xl">💧</span>
              </div>
              <div className="text-right">
                <span className="font-extrabold text-sm block text-white">{isRtl ? 'جيبي الإنزيم' : 'Jeebi Enzyme'}</span>
                <span className="text-xs uppercase font-extrabold text-emerald-300 font-mono">+2 Pts</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [12, -12, 12] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute bottom-0 right-0 md:-bottom-12 md:-right-8 p-4 bg-white/10 backdrop-blur-md rounded-2xl border-2 border-red-400/50 shadow-2xl flex items-center gap-2 select-none"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-white/5 rounded-xl border border-white/10">
                <img 
                  src="./images/characters/folo.png" 
                  alt=""
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.parentElement?.querySelector('.badge-fallback-folo');
                    if (fallback) fallback.classList.remove('hidden');
                  }}
                />
                <span className="badge-fallback-folo hidden text-4xl">🌱</span>
              </div>
              <div className="text-right">
                <span className="font-extrabold text-sm block text-white">{isRtl ? 'فولو الممنوع' : 'Folo Fava'}</span>
                <span className="text-xs uppercase font-extrabold text-red-300 font-mono">-1 Pts</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ x: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-6 left-2 md:bottom-2 md:-left-16 p-3.5 bg-white/10 backdrop-blur-md border-2 border-sky-400/50 shadow-xl flex items-center gap-2 select-none rounded-2xl"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-white/5 rounded-xl border border-white/10">
                <img 
                  src="./images/characters/huma.png" 
                  alt=""
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.parentElement?.querySelector('.badge-fallback-huma');
                    if (fallback) fallback.classList.remove('hidden');
                  }}
                />
                <span className="badge-fallback-huma hidden text-3xl">🛡️</span>
              </div>
              <span className="font-black text-xs text-white/95">{isRtl ? 'درع حِمى' : 'Huma Protection'}</span>
            </motion.div>

          </div>
        </div>
      </section>

      {/* PITCH SLIDES SECTION */}
      <PitchSlides lang={lang} />

      {/* INTERACTIVE CARDS SECTION */}
      <CharactersList lang={lang} />

      {/* BOARD GAME CONTROLS */}
      <GameEngine lang={lang} />

      {/* DETAILED PROJECT STORY SECTION (ABOUT US) */}
      <section id="about-section" className="py-20 bg-transparent border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          {/* Cover image illustration (5 Cols) */}
          <div className="md:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-6 bg-white/10 backdrop-blur-md border border-white/25 rounded-3xl text-center space-y-4 max-w-xs shadow-xl transition duration-300"
            >
              <span className="text-7xl filter drop-shadow select-none">🍯🧑‍🧑‍🧒</span>
              
              <h4 className="font-extrabold text-lg text-white">
                {isRtl ? 'الوقاية المجتمعية المستدامة' : 'Sustained Social Guard'}
              </h4>
              <p className="text-xs text-indigo-150 leading-relaxed">
                {isRtl 
                  ? 'نهدف لنشر ثقافة طبية مبسطة بلمسة كرتونية تجذب وعي الأطفال وأفراد العائلة معاً.' 
                  : 'Fostering simple metabolisms literacy with cartoony visual cards that appeal directly to children & parents.'}
              </p>
              
              <div className="h-0.5 bg-white/20 w-2/3 mx-auto"></div>
              <span className="text-[10px] uppercase font-bold text-indigo-200 tracking-wider">
                G6PD Support Network
              </span>
            </motion.div>
          </div>

          {/* Core presentation speech text (7 Cols) */}
          <div className="md:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-1.5 bg-white/15 border border-white/25 text-white px-3.5 py-1 rounded-full text-xs font-bold font-sans">
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-300" />
              <span>{isRtl ? 'رسالة الأمل والوعي' : 'Core Vision Concept'}</span>
            </div>

            <h3 className="text-2xl md:text-3.5xl font-black tracking-tight text-white leading-snug">
              {t.aboutTextTitle}
            </h3>

            <p className="text-indigo-100 text-base leading-relaxed text-justify font-medium">
              {t.aboutTextBody}
            </p>

            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 flex gap-3 text-xs leading-relaxed">
              <span className="text-xl">❤️</span>
              <div>
                <span className="font-extrabold text-white block">
                  {isRtl ? 'مرجع طبي وتوعوي معتمد' : 'Authorized Pediatric & Medical Reference'}
                </span>
                <span className="text-indigo-200 mt-0.5 block font-medium">
                  {isRtl 
                    ? 'تم إعداد المحتوى الوقائي استناداً لأبحاث طبية دقيقة لممنوعات أنيميا الفول، بالتنسيق مع أخصائيي الأطفال لضمان سلامة بطلنا الصغير.' 
                    : 'Crafted in accordance with pediatric health standards and clinical guidelines, designed to protect child blood health from oxidative triggers.'}
                </span>
              </div>
            </div>
          </div>

         </div>
      </section>

      {/* CONTACT SECTION / SCANNERS AND SOCIAL SIGNALS */}
      <section id="contact-section" className="py-20 px-4 bg-transparent border-t border-white/10">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl border border-white/25 text-white rounded-3xl p-6 md:p-10 shadow-2xl overflow-hidden relative">
          
          {/* Background overlay details */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left side text labels (7 Cols) */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white">
                  {t.contactTitle}
                </h3>
                <p className="text-indigo-100 mt-2 text-sm font-semibold">
                  {isRtl
                    ? 'يسعدنا جداً تواصلكم لمناقشة أبحاث غلوكوز الـ G6PD وإبداء آرائكم حول التطبيقات التفاعلية.'
                    : 'We look forward to medical research discussions, community shares, and interactive feedback.'}
                </p>
              </div>

              {/* Direct email / instagram cards */}
              <div className="space-y-3.5 text-xs md:text-sm font-medium">
                
                <div className="flex items-center gap-3 bg-white/10 p-3.5 rounded-2xl border border-white/15 hover:bg-white/15 transition duration-300">
                  <div className="p-2 bg-indigo-500/20 rounded-xl text-indigo-200">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-indigo-300 block font-bold uppercase tracking-wider">{t.contactEmail}</span>
                    <a href="mailto:domicare.g6pd@gmail.com" className="text-white hover:underline block font-semibold mt-0.5">
                      domicare.g6pd@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/10 p-3.5 rounded-2xl border border-white/15 hover:bg-white/15 transition duration-300">
                  <div className="p-2 bg-indigo-500/20 rounded-xl text-indigo-200">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-indigo-300 block font-bold uppercase tracking-wider">{t.contactInstagram}</span>
                    <a 
                      href="https://instagram.com/D0micare" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white hover:underline block font-semibold mt-0.5 flex items-center gap-1"
                    >
                      <span>@D0micare</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Right side QR code scanner card (5 Cols) */}
            <div className="md:col-span-5 flex flex-col items-center text-center">
              <div className="bg-white/15 backdrop-blur-md p-4 rounded-3xl shadow-xl border border-white/20 inline-block max-w-[200px] overflow-hidden hover:scale-110 transition-all duration-300 group">
                
                {/* Simulated QR layout with live image fallback - Original card size with elegant interactive zoom */}
                <div className="w-36 h-36 bg-transparent rounded-2xl p-1.5 relative flex items-center justify-center overflow-hidden">
                  {/* Default fallback logo beneath, hidden if image loads successfully */}
                  <div id="qr-code-fallback" className="absolute inset-0 flex items-center justify-center bg-[#1e1b4b] p-2 rounded-2xl">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#1e1b4b_100%)] opacity-35"></div>
                    <QrCode className="w-24 h-24 text-white stroke-[1.5] transition-transform duration-300 group-hover:scale-125" />
                    {/* Glowing center indicator */}
                    <div className="absolute inset-x-4 h-1 bg-amber-400 rounded animate-bounce shadow-[0_0_10px_rgba(251,191,36,0.8)]"></div>
                  </div>

                  <img 
                    src="./images/characters/qr.png" 
                    alt="QR Code"
                    referrerPolicy="no-referrer"
                    className="w-[95%] h-[95%] object-contain relative opacity-0 z-10 transition-transform duration-300 group-hover:scale-125 pointer-events-none select-none rounded-xl"
                    onLoad={(e) => {
                      e.currentTarget.classList.remove('opacity-0');
                      e.currentTarget.classList.add('opacity-100');
                      document.getElementById('qr-code-fallback')?.classList.add('hidden');
                    }}
                    onError={(e) => {
                      if (!e.currentTarget.dataset.retried) {
                        e.currentTarget.setAttribute('data-retried', 'true');
                        e.currentTarget.src = './images/qr.png';
                      } else {
                        e.currentTarget.style.display = 'none';
                        document.getElementById('qr-code-fallback')?.classList.remove('hidden');
                      }
                    }}
                  />
                </div>

              </div>

              <span className="text-[10px] text-indigo-100 mt-4 leading-relaxed max-w-[200px] inline-block font-semibold">
                📍 {t.contactScanQR}
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black/30 backdrop-blur-md text-white/70 py-12 px-4 border-t border-white/15 text-center text-xs md:text-sm">
        <div className="max-w-4xl mx-auto space-y-6">
          
          <div className="flex justify-between items-center flex-col sm:flex-row gap-4 border-b border-white/15 pb-6">
            <span className="font-extrabold text-white tracking-wide text-base">
              {t.navTitle}
            </span>
            <div className="flex gap-4">
              <button onClick={() => scrollToSection('awareness-guide')} className="hover:text-white transition cursor-pointer">{t.presentation}</button>
              <button onClick={() => scrollToSection('characters-section')} className="hover:text-white transition cursor-pointer">{isRtl ? 'البطاقات' : 'Champions'}</button>
              <button onClick={() => scrollToSection('game-section')} className="hover:text-white transition cursor-pointer">{t.playGame}</button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium">
            <p>
              &copy; {new Date().getFullYear()} {t.navTitle}. {isRtl ? 'كافة الحقوق محفوظة لمنصة ومبادرة دومي كير التوعوية لصحة الطفل.' : 'All rights reserved for DomiCare Healthcare Awareness Initiative.'}
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-4 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition cursor-pointer text-[11px] uppercase font-semibold border border-white/15"
            >
              {t.backToTop}
            </button>
          </div>

        </div>
      </footer>
    </div>
  );
}
