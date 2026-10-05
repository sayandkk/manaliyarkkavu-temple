import React, { useState } from 'react';
import { 
  Flame, 
  Search, 
  Sparkles, 
  Clock, 
  Filter,
  IndianRupee
} from 'lucide-react';
import type { Language } from '../../types';
import { translations } from '../../i18n/translations';
import { dailySchedule, specialPoojas, offerings } from '../../data/templeData';

interface PoojasSectionProps {
  lang: Language;
  onSelectOfferingToBook: (offeringId: string) => void;
}

export const PoojasSection: React.FC<PoojasSectionProps> = ({ 
  lang, 
  onSelectOfferingToBook 
}) => {
  const [activeTab, setActiveTab] = useState<'vazhipad' | 'daily' | 'special'>('vazhipad');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const t = translations[lang];

  // Filter offerings based on search and category
  const filteredOfferings = offerings.filter((off) => {
    const matchesSearch = 
      off.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      off.nameMl.includes(searchQuery) ||
      off.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      off.deityName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = 
      selectedCategory === 'all' || off.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="poojas" className="py-24 bg-white relative overflow-hidden">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-semibold mb-3">
            <Flame className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.poojas.subtitle}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight mb-4">
            {t.poojas.title}
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6" />

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {t.poojas.intro}
          </p>
        </div>

        {/* Tab Navigation Controls (Modern Segmented Pill Bar) */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-full bg-slate-100 border border-slate-200/80 shadow-inner text-xs sm:text-sm">
            <button
              onClick={() => setActiveTab('vazhipad')}
              className={`px-5 py-2.5 rounded-full font-serif font-semibold transition-all ${
                activeTab === 'vazhipad'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.poojas.tabVazhipad}
            </button>
            <button
              onClick={() => setActiveTab('daily')}
              className={`px-5 py-2.5 rounded-full font-serif font-semibold transition-all ${
                activeTab === 'daily'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.poojas.tabDaily}
            </button>
            <button
              onClick={() => setActiveTab('special')}
              className={`px-5 py-2.5 rounded-full font-serif font-semibold transition-all ${
                activeTab === 'special'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.poojas.tabSpecial}
            </button>
          </div>
        </div>

        {/* TAB 1: VAZHIPAD & OFFERINGS LIST */}
        {activeTab === 'vazhipad' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Search & Category Filter Bar */}
            <div className="bg-slate-50 p-4 sm:p-5 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
              
              {/* Search Box */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.poojas.searchPlaceholder}
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-400 transition-colors shadow-sm"
                />
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 text-xs">
                <Filter className="w-4 h-4 text-slate-600 shrink-0" />
                {[
                  { id: 'all', label: t.poojas.filterAll },
                  { id: 'archana', label: t.poojas.filterDaily },
                  { id: 'special', label: t.poojas.filterSpecial },
                  { id: 'lamp', label: t.poojas.filterLamp },
                  { id: 'naivedyam', label: t.poojas.filterNaivedyam },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all font-medium ${
                      selectedCategory === cat.id
                        ? 'bg-slate-900 text-white font-semibold shadow-sm'
                        : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Offerings Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredOfferings.map((offering) => (
                <div
                  key={offering.id}
                  className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-amber-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    {/* Deity & Category Badges */}
                    <div className="flex justify-between items-start gap-2">
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {lang === 'ml' ? offering.deityNameMl : offering.deityName}
                      </span>
                      <span className="text-sm font-bold font-serif text-amber-900 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/60 flex items-center gap-0.5">
                        <IndianRupee className="w-3.5 h-3.5" />
                        <span>{offering.price}</span>
                      </span>
                    </div>

                    {/* Offering Title */}
                    <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-[#85182a] transition-colors leading-snug">
                      {lang === 'ml' ? offering.nameMl : offering.name}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {lang === 'ml' ? offering.descriptionMl : offering.description}
                    </p>

                    {/* Benefits Tag */}
                    {offering.benefits && (
                      <div className="bg-amber-50/70 p-3 rounded-2xl border border-amber-200/50 text-[11px] text-amber-950 flex items-start gap-1.5 font-medium">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span>{lang === 'ml' ? offering.benefitsMl : offering.benefits}</span>
                      </div>
                    )}
                  </div>

                  {/* Book Offering Button */}
                  <div className="pt-5 mt-3 border-t border-slate-100">
                    <button
                      onClick={() => onSelectOfferingToBook(offering.id)}
                      className="w-full py-2.5 px-4 bg-slate-900 hover:bg-[#85182a] text-white font-serif font-bold text-xs rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
                    >
                      <Flame className="w-3.5 h-3.5 text-amber-400" />
                      <span>{t.poojas.bookNow}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Verified Note */}
            <div className="text-center text-xs text-slate-500 italic max-w-xl mx-auto pt-4">
              {t.poojas.bookingNotice}
            </div>
          </div>
        )}

        {/* TAB 2: DAILY POOJA SCHEDULE TABLE */}
        {activeTab === 'daily' && (
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden animate-in fade-in duration-300">
            <div className="bg-slate-900 text-white p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <h3 className="font-serif font-bold text-xl text-amber-400">
                  {t.poojas.tabDaily}
                </h3>
                <p className="text-xs text-slate-300">
                  {lang === 'ml' ? 'നിത്യേന നടക്കുന്ന പൂജാ ക്രമങ്ങൾ' : 'Sacred chronological order of daily poojas & darshans'}
                </p>
              </div>
              <span className="text-xs px-3 py-1 bg-slate-800 border border-slate-700 text-amber-300 rounded-full">
                {lang === 'ml' ? 'ക്ഷേത്ര തന്ത്രി വിധി പ്രകാരം' : 'As per Tantric Protocol'}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 border-b border-slate-200 text-xs font-serif font-bold text-slate-700 uppercase tracking-wider">
                  <tr>
                    <th className="py-4 px-6">{t.schedule.timeLabel}</th>
                    <th className="py-4 px-6">{t.schedule.ritualLabel}</th>
                    <th className="py-4 px-6 hidden md:table-cell">{lang === 'ml' ? 'വിവരണം' : 'Description'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {dailySchedule.map((slot) => (
                    <tr key={slot.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-4 px-6 font-bold text-amber-900 whitespace-nowrap text-xs sm:text-sm">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-amber-600" />
                          <span>{slot.time}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 font-semibold text-slate-800 text-xs sm:text-sm">
                        {lang === 'ml' ? slot.nameMl : slot.name}
                      </td>
                      <td className="py-4 px-6 text-xs text-slate-500 hidden md:table-cell leading-relaxed">
                        {lang === 'ml' ? slot.descriptionMl : slot.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: SPECIAL POOJAS */}
        {activeTab === 'special' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
            {specialPoojas.map((sp) => (
              <div
                key={sp.id}
                className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-sm space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {lang === 'ml' ? sp.deityMl : sp.deity}
                    </span>
                    <h3 className="font-serif font-bold text-xl text-slate-900 mt-2">
                      {lang === 'ml' ? sp.nameMl : sp.name}
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-amber-900 bg-amber-50 border border-amber-200/60 px-2.5 py-1 rounded-full">
                    {sp.time}
                  </span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-2xl text-xs text-slate-700 border border-slate-100">
                  <span className="font-semibold text-slate-900 block mb-0.5">
                    {lang === 'ml' ? 'വിശേഷ അവസരം:' : 'Occasion:'}
                  </span>
                  <span>{lang === 'ml' ? sp.occasionMl : sp.occasion}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {lang === 'ml' ? sp.descriptionMl : sp.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <span className="text-xs font-serif font-bold text-slate-900 block">
                    {t.deities.offeringsTitle}:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {(lang === 'ml' ? sp.offeringsMl : sp.offerings).map((off, idx) => (
                      <span key={idx} className="text-[11px] bg-slate-50 border border-slate-200 px-2.5 py-0.5 rounded-full text-slate-700 font-medium">
                        {off}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

