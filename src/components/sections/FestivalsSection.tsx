import React from 'react';
import { 
  Calendar, 
  Sparkles, 
  Flame, 
  Award, 
  ChevronRight, 
  CheckCircle2,
  Image as ImageIcon
} from 'lucide-react';
import type { Language } from '../../types';
import { translations } from '../../i18n/translations';
import { festivals } from '../../data/templeData';

interface FestivalsSectionProps {
  lang: Language;
}

export const FestivalsSection: React.FC<FestivalsSectionProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="festivals" className="py-24 bg-white border-b border-slate-100 relative overflow-hidden">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-semibold mb-3">
            <Calendar className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.festivals.subtitle}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight mb-4">
            {t.festivals.title}
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6" />

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {t.festivals.intro}
          </p>
        </div>

        {/* Festival Showcase Cards */}
        <div className="space-y-16">
          {festivals.map((festival, index) => (
            <div
              key={festival.id}
              className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-300 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              
              {/* Image & Key Badges Column */}
              <div className={`lg:col-span-5 relative min-h-[320px] lg:min-h-full ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                <img
                  src={festival.image}
                  alt={festival.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-black/20 to-transparent" />

                {/* Festival Badge */}
                {festival.badge && (
                  <div className="absolute top-4 left-4 bg-amber-400 text-slate-950 font-bold text-xs px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-slate-950" />
                    <span>{festival.badge}</span>
                  </div>
                )}

                {/* Date & Month Ribbon at Bottom of Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs text-amber-300 font-semibold block uppercase tracking-wider mb-1">
                    {festival.malayalamMonth} • {lang === 'ml' ? festival.durationMl : festival.duration}
                  </span>
                  <p className="text-sm font-bold font-serif text-white">
                    {festival.dateRange}
                  </p>
                </div>
              </div>

              {/* Festival Details & Events Column */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-6 flex flex-col justify-between">
                <div>
                  
                  {/* Festival Titles */}
                  <div className="space-y-1 mb-4">
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                      {lang === 'ml' ? festival.nameMl : festival.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-amber-800 font-semibold">
                      {lang === 'ml' ? festival.monthMl : festival.month}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {lang === 'ml' ? festival.descriptionMl : festival.description}
                  </p>

                  {/* Main Rituals & Highlights in 2 Columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-xs">
                    
                    {/* Main Rituals */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
                      <span className="font-serif font-bold text-slate-900 flex items-center gap-1.5">
                        <Flame className="w-3.5 h-3.5 text-amber-600" />
                        <span>{t.festivals.mainRitualsLabel}</span>
                      </span>
                      <ul className="space-y-1 text-slate-600 font-medium">
                        {(lang === 'ml' ? festival.mainRitualsMl : festival.mainRituals).map((ritual, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1" />
                            <span>{ritual}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Highlights */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
                      <span className="font-serif font-bold text-slate-900 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                        <span>{t.festivals.highlightsLabel}</span>
                      </span>
                      <ul className="space-y-1 text-slate-600 font-medium">
                        {(lang === 'ml' ? festival.highlightsMl : festival.highlights).map((hl, hIdx) => (
                          <li key={hIdx} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Event Schedule Timeline */}
                  {festival.events && festival.events.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <span className="font-serif font-bold text-xs text-slate-900 block">
                        {t.festivals.scheduleLabel}:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {festival.events.map((ev, eIdx) => (
                          <div key={eIdx} className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-xs">
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-bold text-amber-900">
                                {lang === 'ml' ? ev.dayMl : ev.day}
                              </span>
                              <span className="text-[10px] bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded-full font-semibold">
                                {ev.time}
                              </span>
                            </div>
                            <span className="font-semibold text-slate-800 block truncate">
                              {lang === 'ml' ? ev.titleMl : ev.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

                {/* Festival Footer Button */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href="#gallery"
                    className="inline-flex items-center gap-1.5 text-xs font-serif font-bold text-[#85182a] hover:text-amber-700 transition-colors"
                  >
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>{t.festivals.viewFestivalPhotos}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="#calendar"
                    className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-[#85182a] transition-colors"
                  >
                    {lang === 'ml' ? 'കലണ്ടറിൽ കാണുക' : 'View on Calendar'}
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

