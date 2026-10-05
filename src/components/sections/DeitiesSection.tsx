import React from 'react';
import { 
  Sparkles, 
  Flame, 
  Calendar, 
  Gift, 
  Heart
} from 'lucide-react';
import type { Language } from '../../types';
import { translations } from '../../i18n/translations';
import { deities } from '../../data/templeData';

interface DeitiesSectionProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const DeitiesSection: React.FC<DeitiesSectionProps> = ({ 
  lang, 
  onOpenBooking 
}) => {
  const t = translations[lang];

  return (
    <section id="deities" className="py-24 bg-white relative overflow-hidden">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.deities.subtitle}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight mb-4">
            {t.deities.title}
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6" />

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {t.deities.intro}
          </p>
        </div>

        {/* Deity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {deities.map((deity) => (
            <div
              key={deity.id}
              className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Deity Image Header with Clean Gradient */}
                <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-900">
                  <img
                    src={deity.image}
                    alt={deity.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                  
                  {/* Deity Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-slate-200 px-3.5 py-1 rounded-full text-xs font-serif font-bold text-slate-800 shadow-sm">
                    {lang === 'ml' ? deity.titleMl : deity.title}
                  </div>

                  {/* Deity Name Banner at Image Bottom */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white drop-shadow-md">
                      {lang === 'ml' ? deity.nameMl : deity.name}
                    </h3>
                  </div>
                </div>

                {/* Deity Details Body */}
                <div className="p-6 sm:p-7 space-y-5">
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {lang === 'ml' ? deity.descriptionMl : deity.description}
                  </p>

                  {/* Significance Callout */}
                  <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-200/60 text-xs sm:text-sm text-slate-800 leading-relaxed flex items-start gap-2.5">
                    <Heart className="w-4 h-4 text-[#85182a] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-amber-950 block mb-0.5">
                        {lang === 'ml' ? 'വിശേഷ പ്രാധാന്യം:' : 'Divine Significance:'}
                      </span>
                      <span className="text-slate-700">{lang === 'ml' ? deity.significanceMl : deity.significance}</span>
                    </div>
                  </div>

                  {/* Rituals, Special Days & Offerings Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    
                    {/* Special Days */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
                      <span className="font-serif font-bold text-slate-900 flex items-center gap-1.5 text-xs">
                        <Calendar className="w-3.5 h-3.5 text-amber-600" />
                        <span>{t.deities.specialDaysTitle}</span>
                      </span>
                      <ul className="space-y-1 text-slate-600 font-medium">
                        {(lang === 'ml' ? deity.specialDaysMl : deity.specialDays).map((day, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                            <span>{day}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Important Offerings */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
                      <span className="font-serif font-bold text-slate-900 flex items-center gap-1.5 text-xs">
                        <Gift className="w-3.5 h-3.5 text-amber-600" />
                        <span>{t.deities.offeringsTitle}</span>
                      </span>
                      <ul className="space-y-1 text-slate-600 font-medium">
                        {(lang === 'ml' ? deity.offeringsMl : deity.offerings).map((off, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#85182a]" />
                            <span>{off}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Dhyana Sloka */}
                  {deity.mantra && (
                    <div className="p-4 bg-slate-900 text-white rounded-2xl text-center border border-slate-800 shadow-sm">
                      <span className="text-[11px] font-serif text-amber-400 block mb-1 uppercase tracking-wider font-semibold">
                        {t.deities.chantMantra}
                      </span>
                      <p className="text-xs sm:text-sm font-serif italic text-slate-200">
                        {deity.mantra}
                      </p>
                    </div>
                  )}

                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 px-4 bg-slate-900 hover:bg-[#85182a] text-white font-serif font-semibold text-xs sm:text-sm rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>{t.deities.bookSpecialPooja}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

