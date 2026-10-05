import React from 'react';
import { 
  History, 
  ShieldCheck, 
  Flame 
} from 'lucide-react';
import type { Language } from '../../types';
import { translations } from '../../i18n/translations';
import { timelineEvents } from '../../data/templeData';

interface TempleHistoryProps {
  lang: Language;
}

export const TempleHistory: React.FC<TempleHistoryProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="history" className="py-24 bg-white text-slate-800 relative overflow-hidden">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-35 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-semibold mb-3">
            <History className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.history.subtitle}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight mb-4">
            {t.history.title}
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6" />

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {t.history.intro}
          </p>

          {/* Authoritative Disclaimer Note */}
          <div className="mt-6 max-w-2xl mx-auto bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 text-xs text-amber-900 leading-relaxed flex items-start gap-3 text-left">
            <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block mb-0.5 uppercase tracking-wider text-[11px] text-amber-900">
                {lang === 'ml' ? 'ആധികാരിക ചരിത്ര രേഖ' : 'Authoritative Record Notice'}
              </span>
              <p className="text-slate-600">
                {t.history.disclaimer}
              </p>
            </div>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-amber-300 ml-4 sm:ml-32 space-y-12">
          {timelineEvents.map((event, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Marker Icon */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-white border-2 border-amber-400 flex items-center justify-center text-amber-600 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all shadow-sm">
                <Flame className="w-4 h-4" />
              </div>

              {/* Time Period Badge */}
              <div className="sm:absolute sm:-left-32 sm:top-2 mb-2 sm:mb-0">
                <span className="inline-block text-xs font-serif font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 sm:text-right">
                  {lang === 'ml' ? event.periodMl : event.period}
                </span>
              </div>

              {/* Timeline Card */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-amber-300 transition-all space-y-3">
                <h4 className="font-serif font-bold text-xl text-slate-900">
                  {lang === 'ml' ? event.titleMl : event.title}
                </h4>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {lang === 'ml' ? event.descriptionMl : event.description}
                </p>

                {event.verifiedNote && (
                  <div className="pt-2 flex items-center gap-2 text-xs text-amber-700 italic font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                    <span>{event.verifiedNote}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

