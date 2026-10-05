import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Clock, 
  Phone, 
  Flame, 
  Volume2, 
  VolumeX,
  Sparkles,
  Calendar,
  Languages
} from 'lucide-react';
import type { Language } from '../../types';
import { translations } from '../../i18n/translations';
import { templeInfo } from '../../data/templeData';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenBooking: () => void;
  onOpenAdmin: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  lang, 
  setLang, 
  onOpenBooking: _onOpenBooking,
  onOpenAdmin 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Web Audio API Synthesizer for Authentic Brass Temple Bell Chime
  const toggleTempleBellSound = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();

      setIsSoundPlaying(true);

      const bellFrequencies = [528, 1056, 1584, 2112, 2640];
      const now = ctx.currentTime;

      bellFrequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = idx === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        const initialGain = 0.25 / (idx + 1);
        gain.gain.setValueAtTime(initialGain, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2 - (idx * 0.3));

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 3.5);
      });

      setTimeout(() => {
        setIsSoundPlaying(false);
      }, 3200);
    } catch {
      setIsSoundPlaying(false);
    }
  };

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.history, href: "#history" },
    { label: t.nav.deities, href: "#deities" },
    { label: t.nav.poojas, href: "#poojas" },
    { label: t.nav.festivals, href: "#festivals" },
    { label: t.nav.timings, href: "#schedule" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.announcements, href: "#announcements" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <>
      {/* Top Auspicious Info Bar (Pure White Theme) */}
      <div className="bg-white text-slate-600 text-xs border-b border-slate-100 py-2 px-4 sm:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 font-medium text-amber-700">
              <Flame className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
              <span>
                {lang === 'en' 
                  ? 'A Sacred Abode of Faith & Tradition' 
                  : 'ഭക്തിയുടെയും പാരമ്പര്യത്തിന്റെയും പുണ്യസങ്കേതം'}
              </span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-500 font-medium">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>
                {t.quickInfo.morning}: {templeInfo.timings.morningOpen} – {templeInfo.timings.morningClose} | {t.quickInfo.evening}: {templeInfo.timings.eveningOpen} – {templeInfo.timings.eveningClose}
              </span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTempleBellSound}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-all duration-200 border ${
                isSoundPlaying 
                  ? 'bg-amber-50 text-amber-700 border-amber-300 font-semibold' 
                  : 'bg-slate-50 text-slate-600 border-slate-200/80 hover:border-amber-300 hover:text-amber-700 hover:bg-amber-50/50'
              }`}
              title={lang === 'en' ? 'Ring Sacred Temple Bell' : 'ക്ഷേത്ര മണിനാദം മുഴക്കുക'}
            >
              {isSoundPlaying ? <Volume2 className="w-3.5 h-3.5 text-amber-600 animate-bounce" /> : <VolumeX className="w-3.5 h-3.5 text-slate-400" />}
              <span>{isSoundPlaying ? (lang === 'en' ? 'Chiming...' : 'നാദം മുഴങ്ങുന്നു') : (lang === 'en' ? 'Temple Chime' : 'മണിനാദം')}</span>
            </button>

            <button
              onClick={onOpenAdmin}
              className="text-slate-600 hover:text-amber-700 flex items-center gap-1 text-[11px] font-semibold bg-slate-50 hover:bg-amber-50 px-2.5 py-1 rounded-full border border-slate-200/80 transition-all"
            >
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span>{t.nav.adminPreview}</span>
            </button>

            <a 
              href={`tel:${templeInfo.contact.phone}`} 
              className="flex items-center gap-1.5 text-slate-600 hover:text-amber-600 font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>{templeInfo.contact.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar (Pure White Theme) */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)] border-b border-slate-100 py-2.5' 
          : 'bg-white border-b border-slate-100 py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Temple Title */}
          <a href="#home" className="flex items-center gap-3.5 group text-left">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-amber-50 border-2 border-amber-300 p-0.5 shadow-sm group-hover:scale-105 group-hover:border-amber-400 group-hover:shadow-md transition-all duration-300 shrink-0">
              <img 
                src="/favicon.png" 
                alt="Sree Bhagavathy" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div>
              <span className="block font-serif font-bold text-slate-900 tracking-tight text-base sm:text-lg md:text-xl group-hover:text-amber-700 transition-colors leading-tight">
                {lang === 'ml' ? templeInfo.nameMl : templeInfo.name}
              </span>
              <span className="block text-xs sm:text-sm text-amber-600 font-medium tracking-wide">
                {lang === 'ml' ? templeInfo.locationMl : templeInfo.location}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 text-[13.5px] text-slate-600 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-full hover:text-amber-700 hover:bg-amber-50/60 transition-all font-medium relative group"
              >
                {link.label}
                <span className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center rounded-full" />
              </a>
            ))}
          </nav>

          {/* Action CTAs and Language Switcher */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Prominent Desktop Language Switcher */}
            <div className="flex items-center bg-slate-100 border border-slate-200 rounded-full p-1 text-xs font-semibold shadow-xs">
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full transition-all duration-200 ${
                  lang === 'en'
                    ? 'bg-amber-600 text-white shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLang('ml')}
                className={`px-3 py-1 rounded-full transition-all duration-200 font-malayalam-sans ${
                  lang === 'ml'
                    ? 'bg-amber-600 text-white shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                മലയാളം
              </button>
            </div>

            {/* Plan Your Visit / Booking Button */}
            <a
              href="#plan-visit"
              className="px-4 py-2 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs sm:text-sm tracking-wide shadow-xs hover:shadow-md active:scale-95 transition-all duration-200 flex items-center gap-1.5"
            >
              <Calendar className="w-4 h-4 text-amber-100" />
              <span>{t.nav.planVisit}</span>
            </a>
          </div>

          {/* Mobile Right Controls: Prominent Language Toggle + Menu */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Mobile Dual Button Language Switcher */}
            <div className="flex items-center bg-slate-100 border border-slate-200 rounded-full p-0.5 text-xs font-semibold shadow-xs">
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                  lang === 'en' 
                    ? 'bg-amber-600 text-white shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('ml')}
                className={`px-2.5 py-1 rounded-full text-xs font-bold font-malayalam-sans transition-all ${
                  lang === 'ml' 
                    ? 'bg-amber-600 text-white shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                മല
              </button>
            </div>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-50 text-slate-700 hover:bg-slate-100 transition-colors border border-slate-200"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-slate-800" /> : <Menu className="w-5 h-5 text-slate-800" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-300">
            {/* Mobile Language Selector inside Menu */}
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/80 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Languages className="w-4 h-4 text-amber-600" />
                <span>{lang === 'en' ? 'Language' : 'ഭാഷ'}:</span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                    lang === 'en' 
                      ? 'bg-amber-600 text-white shadow-xs' 
                      : 'bg-white text-slate-700 border border-slate-200'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLang('ml')}
                  className={`px-3 py-1 rounded-xl text-xs font-bold font-malayalam-sans transition-all ${
                    lang === 'ml' 
                      ? 'bg-amber-600 text-white shadow-xs' 
                      : 'bg-white text-slate-700 border border-slate-200'
                  }`}
                >
                  മലയാളം
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm text-slate-700">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl hover:bg-amber-50 hover:text-amber-800 font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={toggleTempleBellSound}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs bg-slate-50 border border-slate-200 text-slate-700"
              >
                {isSoundPlaying ? <Volume2 className="w-4 h-4 text-amber-600" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
                <span>{lang === 'en' ? 'Temple Chime' : 'മണിനാദം'}</span>
              </button>

              <a
                href="#plan-visit"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-full bg-amber-600 text-white font-semibold text-xs shadow-xs"
              >
                {t.nav.planVisit}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
