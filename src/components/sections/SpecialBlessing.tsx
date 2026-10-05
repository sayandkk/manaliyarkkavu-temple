import React, { useState } from 'react';
import { Flame, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { Language } from '../../types';
import { translations } from '../../i18n/translations';

interface SpecialBlessingProps {
  lang: Language;
}

export const SpecialBlessing: React.FC<SpecialBlessingProps> = ({ lang }) => {
  const [isLampLit, setIsLampLit] = useState(false);
  const t = translations[lang];

  const handleLightLamp = () => {
    setIsLampLit(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#f59e0b', '#d97706', '#b45309', '#ffffff']
    });
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden text-center border-y border-slate-100">
      {/* Background Radiance */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
        
        {/* Sacred Traditional Nilavilakku Interactive Element */}
        <div 
          onClick={handleLightLamp}
          className="cursor-pointer inline-flex flex-col items-center group transition-transform active:scale-95"
          title={lang === 'ml' ? 'ദീപം തെളിയിക്കാൻ ക്ലിക്ക് ചെയ്യുക' : 'Click to light the sacred flame'}
        >
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
            {isLampLit && (
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-amber-400 via-amber-300 to-transparent blur-xl animate-pulse opacity-80" />
            )}
            <img 
              src="/favicon.svg" 
              alt="Temple Lamp" 
              className={`w-full h-full object-contain filter transition-all duration-500 ${
                isLampLit 
                  ? 'brightness-110 drop-shadow-[0_0_20px_rgba(245,158,11,0.8)] scale-110' 
                  : 'opacity-80 group-hover:opacity-100 group-hover:scale-105'
              }`}
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleLightLamp();
            }}
            className="mt-4 px-5 py-2 rounded-full bg-white hover:bg-amber-50 border border-amber-300 text-xs font-semibold text-amber-900 shadow-sm flex items-center gap-1.5 transition-all group-hover:border-amber-400 group-hover:shadow-md"
          >
            <Flame className="w-3.5 h-3.5 text-amber-600" />
            <span>{isLampLit ? t.blessing.litSuccess : t.blessing.lightVilakku}</span>
          </button>
        </div>

        {/* Sacred Sloka & Prayer */}
        <div className="space-y-3 pt-2">
          <div className="inline-flex items-center gap-1.5 text-amber-700 font-serif text-sm sm:text-base font-bold tracking-widest uppercase">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>&ldquo;{t.blessing.slokaTitle}&rdquo;</span>
            <Sparkles className="w-4 h-4 text-amber-500" />
          </div>
          <p className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 tracking-wide leading-relaxed">
            {t.blessing.slokaMalayalam}
          </p>
          <p className="text-xs sm:text-sm text-slate-600 font-light max-w-xl mx-auto italic pt-1">
            &ldquo;{t.blessing.slokaMeaning}&rdquo;
          </p>
        </div>

        <div className="pt-2 text-[11px] font-semibold text-amber-800/80 uppercase tracking-widest">
          {lang === 'ml' ? 'മണല്യാർകാവ് കളരിത്തറ ക്ഷേത്ര ദേവസ്വം' : 'Manalyarkavu Kaladithara Temple Devaswom'}
        </div>

      </div>
    </section>
  );
};
