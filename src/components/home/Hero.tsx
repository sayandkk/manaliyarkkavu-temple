import React, { useState, useEffect } from 'react';
import { 
  Flame, 
  Compass, 
  Calendar, 
  Sparkles, 
  Clock,
  MapPin,
  ChevronRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import type { Language } from '../../types';
import { translations } from '../../i18n/translations';
import { templeInfo } from '../../data/templeData';

interface HeroProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenBooking }) => {
  const [isCurrentlyOpen, setIsCurrentlyOpen] = useState(false);
  const [isLampLit, setIsLampLit] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    // Determine whether temple is currently open based on real-time clock
    const checkOpenStatus = () => {
      const now = new Date();
      const currentMinutes = now.getHours() * 60 + now.getMinutes();

      // 5:00 AM (300 mins) to 11:30 AM (690 mins)
      const isMorning = currentMinutes >= 300 && currentMinutes <= 690;
      // 5:00 PM (1020 mins) to 8:00 PM (1200 mins)
      const isEvening = currentMinutes >= 1020 && currentMinutes <= 1200;

      setIsCurrentlyOpen(isMorning || isEvening);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleLightLamp = () => {
    setIsLampLit(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#f59e0b', '#d97706', '#fbbf24', '#059669']
    });
  };

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center bg-white overflow-hidden py-12 lg:py-20">
      {/* Crisp Dot Pattern Background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
      
      {/* Subtle Warm Divine Glow on Pure White */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(245,158,11,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(5,150,105,0.04)_0%,transparent_70%)] pointer-events-none" />
      
      {/* Top Hairline Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Temple Identity, Titles & Actions */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Live Status & Location Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-700">
                <span className={`w-2.5 h-2.5 rounded-full ${isCurrentlyOpen ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`} />
                <span className="text-slate-900 font-bold">
                  {isCurrentlyOpen ? t.hero.templeStatusOpen : t.hero.templeStatusClosed}
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-medium shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>{t.hero.locationBadge}</span>
              </div>
            </div>

            {/* Sacred Heading Hierarchy */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-amber-600 font-serif text-xs sm:text-sm font-bold tracking-widest uppercase">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>{lang === 'ml' ? 'ഓം ശ്രീ മാത്രേ നമഃ' : '|| Sree Bhagavathy Charanam Sharanam ||'}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                {lang === 'ml' ? templeInfo.nameMl : templeInfo.name}
              </h1>

              <p className="text-lg sm:text-xl font-serif text-amber-800 italic font-normal">
                &ldquo;{lang === 'ml' ? templeInfo.subtitleMl : templeInfo.subtitle}&rdquo;
              </p>
            </div>

            {/* Devotional Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
              {lang === 'ml' ? templeInfo.descriptionMl : templeInfo.description}
            </p>

            {/* Quick Hours Pill */}
            <div className="inline-flex items-center gap-2 text-xs text-slate-600 bg-slate-50 px-4 py-2 rounded-2xl border border-slate-200/80">
              <Clock className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                <strong className="text-slate-900 font-semibold">{t.quickInfo.morning}:</strong> 5:00 AM – 11:30 AM &nbsp;|&nbsp; 
                <strong className="text-slate-900 font-semibold pl-1">{t.quickInfo.evening}:</strong> 5:00 PM – 8:00 PM
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-serif font-bold text-sm shadow-md shadow-amber-600/20 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all flex items-center gap-2"
              >
                <Flame className="w-4 h-4 text-amber-200" />
                <span>{t.hero.viewPoojasBtn}</span>
              </button>

              <a
                href="#about"
                className="px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-serif font-semibold text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-amber-400" />
                <span>{t.hero.exploreBtn}</span>
              </a>

              <a
                href="#calendar"
                className="px-5 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-serif font-medium text-sm shadow-xs hover:border-slate-300 hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-amber-600" />
                <span>{t.hero.calendarBtn}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Prominent Temple Photo Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl group">
              
              {/* High-Definition Temple Photograph */}
              <div className="relative aspect-[4/3] sm:aspect-[4/3] overflow-hidden">
                <img
                  src="/images/temple_courtyard.png"
                  alt={lang === 'ml' ? templeInfo.nameMl : templeInfo.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-black/20" />
              </div>

              {/* Floating Top Badge: Heritage */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <div className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-slate-800 border border-slate-100 shadow-md text-xs font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>{lang === 'ml' ? 'പരമ്പരാഗത ക്ഷേത്ര സന്നിധി' : 'Sacred Kerala Temple'}</span>
                </div>

                <div className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-amber-300 text-[11px] font-bold border border-white/10 shadow-xs">
                  {lang === 'ml' ? 'കളരിത്തറ' : 'Kaladithara'}
                </div>
              </div>

              {/* Bottom Card Bar: Temple Name & Interactive Sacred Lamp */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white flex items-end justify-between gap-4">
                <div>
                  <span className="text-[11px] font-semibold text-amber-300 uppercase tracking-widest block mb-0.5">
                    {lang === 'ml' ? 'ശ്രീ ഭഗവതി ക്ഷേത്രം' : 'Sree Bhagavathy Temple'}
                  </span>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-white leading-tight">
                    {lang === 'ml' ? templeInfo.nameMl : templeInfo.name}
                  </h3>
                  <p className="text-xs text-slate-200 mt-1 font-light">
                    {lang === 'ml' ? 'കേരളം, ഭാരതം' : 'Kerala, India'}
                  </p>
                </div>

                {/* Interactive Nilavilakku on the Photo */}
                <button
                  onClick={handleLightLamp}
                  className="shrink-0 p-2.5 rounded-2xl bg-white/95 hover:bg-white text-slate-800 shadow-xl border border-slate-200 transition-all flex flex-col items-center justify-center active:scale-95 group/lamp"
                  title={lang === 'ml' ? 'ദീപം തെളിയിക്കാൻ ക്ലിക്ക് ചെയ്യുക' : 'Click to light sacred lamp'}
                >
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    {isLampLit && (
                      <div className="absolute inset-0 rounded-full bg-amber-400 blur-md animate-pulse opacity-80" />
                    )}
                    <img 
                      src="/favicon.svg" 
                      alt="Vilakku" 
                      className={`w-full h-full object-contain ${isLampLit ? 'filter drop-shadow-[0_0_8px_rgba(245,158,11,0.9)]' : 'opacity-65'}`}
                    />
                  </div>
                  <span className="text-[9px] font-bold text-amber-800 mt-1 whitespace-nowrap">
                    {isLampLit ? (lang === 'ml' ? 'ദീപം' : 'Lit') : (lang === 'ml' ? 'തെളിയിക്കുക' : 'Light')}
                  </span>
                </button>
              </div>

            </div>

            {/* Floating Quick Feature Card */}
            <div className="absolute -bottom-5 -left-4 sm:left-4 bg-white rounded-2xl p-3 sm:p-3.5 border border-slate-200/80 shadow-xl flex items-center gap-3 z-20">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200/50">
                <Flame className="w-5 h-5 text-amber-600" />
              </div>
              <div className="text-left pr-2">
                <span className="text-xs font-bold text-slate-900 block leading-tight">
                  {lang === 'ml' ? 'പ്രധാന വഴിപാടുകൾ' : 'Daily Poojas & Vazhipad'}
                </span>
                <span className="text-[10px] text-slate-500 font-medium">
                  {lang === 'ml' ? 'ഓൺലൈൻ ബുക്കിംഗ് ലഭ്യമാണ്' : 'Advance booking available'}
                </span>
              </div>
              <a href="#poojas" className="p-1 rounded-lg bg-slate-50 hover:bg-amber-50 text-slate-600 hover:text-amber-700 transition-colors border border-slate-200/60">
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
