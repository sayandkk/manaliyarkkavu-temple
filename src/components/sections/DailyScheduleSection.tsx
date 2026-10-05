import React from 'react';
import { 
  Clock, 
  Sun, 
  Moon
} from 'lucide-react';
import type { Language } from '../../types';
import { translations } from '../../i18n/translations';
import { dailySchedule } from '../../data/templeData';

interface DailyScheduleSectionProps {
  lang: Language;
}

export const DailyScheduleSection: React.FC<DailyScheduleSectionProps> = ({ lang }) => {
  const t = translations[lang];

  const morningSlots = dailySchedule.filter((s) => s.period === 'morning');
  const eveningSlots = dailySchedule.filter((s) => s.period === 'evening');

  return (
    <section id="schedule" className="py-24 bg-white border-b border-slate-100 relative overflow-hidden">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-semibold mb-3">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.schedule.subtitle}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight mb-4">
            {t.schedule.title}
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6" />

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {lang === 'ml'
              ? 'നിത്യേന പുലർച്ചെ നിർമ്മാല്യ ദർശനം മുതൽ രാത്രി തൃപ്പുക വരെയുള്ള പൂജാ ക്രമങ്ങൾ.'
              : 'The sacred sequence of daily worship and darshan windows observed with timeless devotion.'}
          </p>
        </div>

        {/* Morning & Evening Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Morning Schedule Column */}
          <div className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50/60 p-6 flex items-center justify-between border-b border-amber-100">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-sm">
                  <Sun className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-slate-900">
                    {t.schedule.morningDarshan}
                  </h3>
                  <span className="text-xs text-amber-800 font-semibold">05:00 AM – 11:30 AM</span>
                </div>
              </div>
              <span className="text-xs bg-white text-amber-900 px-3 py-1 rounded-full border border-amber-200 font-semibold shadow-sm">
                {morningSlots.length} {lang === 'ml' ? 'പൂജകൾ' : 'Poojas'}
              </span>
            </div>

            <div className="p-6 space-y-3.5">
              {morningSlots.map((slot) => (
                <div 
                  key={slot.id} 
                  className="bg-slate-50/70 rounded-2xl p-4 border border-slate-100 flex items-start gap-4 hover:border-amber-300 hover:bg-white hover:shadow-sm transition-all group"
                >
                  <div className="w-20 shrink-0 font-serif font-bold text-amber-900 text-xs sm:text-sm bg-amber-100/70 px-2.5 py-1 rounded-xl text-center border border-amber-200/50">
                    {slot.time}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-sm sm:text-base text-slate-900 group-hover:text-[#85182a] transition-colors">
                      {lang === 'ml' ? slot.nameMl : slot.name}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {lang === 'ml' ? slot.descriptionMl : slot.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Evening Schedule Column */}
          <div className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 flex items-center justify-between border-b border-slate-700">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center shadow-sm">
                  <Moon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-white">
                    {t.schedule.eveningDarshan}
                  </h3>
                  <span className="text-xs text-amber-300 font-medium">05:00 PM – 08:00 PM</span>
                </div>
              </div>
              <span className="text-xs bg-slate-800 text-amber-300 px-3 py-1 rounded-full border border-slate-700 font-semibold">
                {eveningSlots.length} {lang === 'ml' ? 'പൂജകൾ' : 'Poojas'}
              </span>
            </div>

            <div className="p-6 space-y-3.5">
              {eveningSlots.map((slot) => (
                <div 
                  key={slot.id} 
                  className="bg-slate-50/70 rounded-2xl p-4 border border-slate-100 flex items-start gap-4 hover:border-amber-300 hover:bg-white hover:shadow-sm transition-all group"
                >
                  <div className="w-20 shrink-0 font-serif font-bold text-slate-800 text-xs sm:text-sm bg-slate-200/80 px-2.5 py-1 rounded-xl text-center border border-slate-300/50">
                    {slot.time}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-sm sm:text-base text-slate-900 group-hover:text-[#85182a] transition-colors">
                      {lang === 'ml' ? slot.nameMl : slot.name}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {lang === 'ml' ? slot.descriptionMl : slot.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

