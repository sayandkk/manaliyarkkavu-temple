import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight, 
  Flame, 
  Info
} from 'lucide-react';
import type { Language, CalendarEvent } from '../../types';
import { translations } from '../../i18n/translations';
import { calendarEvents } from '../../data/templeData';

interface FestivalCalendarSectionProps {
  lang: Language;
}

export const FestivalCalendarSection: React.FC<FestivalCalendarSectionProps> = ({ lang }) => {
  // Default to February 2026 (Makaram 30 Utsavam)
  const [selectedMonth, setSelectedMonth] = useState<number>(1); // 0 = Jan, 1 = Feb, etc.
  const [selectedYear, setSelectedYear] = useState<number>(2026);
  const [activeDayEvent, setActiveDayEvent] = useState<CalendarEvent | null>(calendarEvents[0]);

  const t = translations[lang];

  const monthNamesEn = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const monthNamesMl = [
    "ജനുവരി (മകരം)", "ഫെബ്രുവരി (കുംഭം)", "മാർച്ച് (മീനം)", "ഏപ്രിൽ (മേടം)",
    "മേയ് (ഇടവം)", "ജൂൺ (മിഥുനം)", "ജൂലൈ (കർക്കിടകം)", "ആഗസ്റ്റ് (ചിങ്ങം)",
    "സെപ്റ്റംബർ (കന്നി)", "ഒക്ടോബർ (തുലാം)", "നവംബർ (വൃശ്ചികം)", "ഡിസംബർ (ധനു)"
  ];

  const handlePrevMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  };

  // Filter events for selected month and year
  const currentMonthEvents = calendarEvents.filter(
    (ev) => ev.month === selectedMonth && ev.year === selectedYear
  );

  return (
    <section id="calendar" className="py-24 bg-white text-slate-800 relative overflow-hidden">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-semibold mb-3">
            <CalendarIcon className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.calendar.subtitle}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight mb-4">
            {t.calendar.title}
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6" />

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {t.calendar.intro}
          </p>

          {/* Visual Indicators Legend */}
          <div className="flex flex-wrap justify-center items-center gap-3 mt-6 text-xs text-slate-600">
            <div className="flex items-center gap-1.5 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200 font-medium">
              <span className="text-base">🪔</span>
              <span>{t.calendar.legendPooja}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200 font-medium">
              <span className="text-base">🎉</span>
              <span>{t.calendar.legendFestival}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200 font-medium">
              <span className="text-base">📿</span>
              <span>{t.calendar.legendSpecial}</span>
            </div>
          </div>
        </div>

        {/* Calendar Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Month Selector & Events List */}
          <div className="lg:col-span-7 bg-slate-50 rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
            
            {/* Month Navigation Header */}
            <div className="flex justify-between items-center pb-4 border-b border-slate-200">
              <button
                onClick={handlePrevMonth}
                className="p-2 rounded-xl bg-white text-slate-700 hover:bg-amber-50 hover:text-amber-800 transition-colors border border-slate-200 shadow-sm"
                aria-label="Previous Month"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="text-center">
                <span className="font-serif font-bold text-2xl text-slate-900 block">
                  {lang === 'ml' ? monthNamesMl[selectedMonth] : monthNamesEn[selectedMonth]} {selectedYear}
                </span>
                <span className="text-xs text-amber-800 font-semibold">
                  {currentMonthEvents.length} {lang === 'ml' ? 'വിശേഷങ്ങൾ' : 'Events Scheduled'}
                </span>
              </div>

              <button
                onClick={handleNextMonth}
                className="p-2 rounded-xl bg-white text-slate-700 hover:bg-amber-50 hover:text-amber-800 transition-colors border border-slate-200 shadow-sm"
                aria-label="Next Month"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Month Events Cards */}
            <div className="space-y-3">
              {currentMonthEvents.length > 0 ? (
                currentMonthEvents.map((ev) => (
                  <div
                    key={ev.id}
                    onClick={() => setActiveDayEvent(ev)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                      activeDayEvent?.id === ev.id
                        ? 'bg-amber-50 border-amber-300 shadow-sm scale-[1.01]'
                        : 'bg-white text-slate-800 border-slate-200/80 hover:border-amber-300'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      {/* Day Number Box */}
                      <div className={`w-12 h-12 rounded-2xl flex flex-col items-center justify-center font-serif font-bold ${
                        activeDayEvent?.id === ev.id ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-800 border border-slate-200'
                      }`}>
                        <span className="text-lg leading-none">{ev.dayOfMonth}</span>
                        <span className="text-[10px] uppercase opacity-75">{lang === 'ml' ? 'തീയതി' : 'Date'}</span>
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5 text-xs font-semibold mb-0.5">
                          <span>{ev.type === 'festival' ? '🎉' : ev.type === 'pooja' ? '🪔' : '📿'}</span>
                          <span className={activeDayEvent?.id === ev.id ? 'text-amber-900 font-bold' : 'text-slate-600'}>
                            {lang === 'ml' ? ev.typeLabelMl : ev.typeLabel}
                          </span>
                        </div>
                        <h4 className="font-serif font-bold text-sm sm:text-base text-slate-900">
                          {lang === 'ml' ? ev.titleMl : ev.title}
                        </h4>
                      </div>
                    </div>

                    {ev.time && (
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        activeDayEvent?.id === ev.id ? 'bg-amber-100 text-amber-950 font-bold' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {ev.time}
                      </span>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-10 text-slate-400 bg-white rounded-2xl border border-slate-200">
                  <CalendarIcon className="w-8 h-8 mx-auto text-slate-400 mb-2" />
                  <p className="text-sm">{t.calendar.noEvents}</p>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Selected Event Details Spotlight Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-5">
            {activeDayEvent ? (
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                  <span className="text-xs font-serif font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
                    <Info className="w-4 h-4 text-amber-600" />
                    <span>{t.calendar.eventsOnDate} {activeDayEvent.date}</span>
                  </span>
                  <span className="text-sm">
                    {activeDayEvent.type === 'festival' ? '🎉' : activeDayEvent.type === 'pooja' ? '🪔' : '📿'}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-2xl text-slate-900">
                    {lang === 'ml' ? activeDayEvent.titleMl : activeDayEvent.title}
                  </h3>
                  {activeDayEvent.time && (
                    <span className="inline-block text-xs font-semibold bg-amber-50 text-amber-900 px-3 py-1 rounded-full border border-amber-200/70">
                      {lang === 'ml' ? 'സമയം:' : 'Timing:'} {activeDayEvent.time}
                    </span>
                  )}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed font-normal bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  {lang === 'ml' ? activeDayEvent.descriptionMl : activeDayEvent.description}
                </p>

                <div className="pt-3">
                  <a
                    href="#poojas"
                    className="w-full py-3 px-4 bg-slate-900 hover:bg-[#85182a] text-white font-serif font-bold text-xs rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
                  >
                    <Flame className="w-4 h-4 text-amber-400" />
                    <span>{t.poojas.bookNow}</span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-slate-400">
                <p className="text-sm">{lang === 'ml' ? 'വിവരങ്ങൾ കാണാൻ ഒരു തീയതി തിരഞ്ഞെടുക്കുക' : 'Select a date on the left to view event details.'}</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

