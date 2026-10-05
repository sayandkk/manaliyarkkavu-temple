import React, { useState } from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Scroll, 
  Flame, 
  ChevronDown, 
  ChevronUp,
  Award
} from 'lucide-react';
import type { Language } from '../../types';
import { translations } from '../../i18n/translations';
import { templeInfo } from '../../data/templeData';

interface AboutTempleProps {
  lang: Language;
}

export const AboutTemple: React.FC<AboutTempleProps> = ({ lang }) => {
  const [showFullDetails, setShowFullDetails] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<'daylight' | 'rain'>('daylight');
  const t = translations[lang];

  return (
    <section id="about" className="py-24 bg-white border-b border-slate-100 relative overflow-hidden">
      {/* Background Subtle Modern Dots */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-semibold mb-3">
            <Flame className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.about.subtitle}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight mb-4">
            {lang === 'ml' ? `മണല്യാർകാവ് കളരിത്തറ ക്ഷേത്രം` : t.about.title}
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6" />

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {t.about.intro}
          </p>
        </div>

        {/* Two Column Showcase: Image & Structured Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
          
          {/* Left Column: Traditional Temple Architectural Showcase */}
          <div className="lg:col-span-5 relative">
            {/* View Selector Controls */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-amber-600" />
                {lang === 'ml' ? 'ക്ഷേത്ര ദൃശ്യങ്ങൾ:' : 'Temple Views:'}
              </span>
              <div className="inline-flex p-0.5 rounded-xl bg-slate-100 border border-slate-200 text-[11px] font-semibold">
                <button
                  type="button"
                  onClick={() => setSelectedPhoto('daylight')}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    selectedPhoto === 'daylight'
                      ? 'bg-white text-amber-900 shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {lang === 'ml' ? 'പകൽ ദൃശ്യം' : 'Daylight View'}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPhoto('rain')}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    selectedPhoto === 'rain'
                      ? 'bg-white text-amber-900 shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {lang === 'ml' ? 'മഴ തോർന്ന ദൃശ്യം' : 'After Rain'}
                </button>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-md border border-slate-200 bg-white group">
              <img
                src={selectedPhoto === 'daylight' ? '/images/temple_courtyard.png' : '/images/temple_courtyard_rain.png'}
                alt={selectedPhoto === 'daylight' ? 'Manalyarkavu Temple Sanctum Architecture' : 'Manalyarkavu Temple Courtyard After Rain'}
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-1">
                  <Award className="w-4 h-4" />
                  <span>{lang === 'ml' ? 'പരമ്പരാഗത വാസ്തുശൈലി' : 'Traditional Kerala Vastu Architecture'}</span>
                </div>
                <h3 className="font-serif font-bold text-xl leading-snug">
                  {selectedPhoto === 'daylight'
                    ? (lang === 'ml' ? 'ശ്രീകോവിലും കളരിത്തറയും' : 'Sacred Sreekovil & Kaladithara')
                    : (lang === 'ml' ? 'മഴ നനഞ്ഞ ക്ഷേത്രാങ്കണം' : 'Temple Courtyard After Rain')}
                </h3>
              </div>
            </div>

            {/* Decorative Floating Badge */}
            <div className="absolute -bottom-5 -right-5 hidden sm:flex items-center gap-3 bg-white text-slate-800 p-4 rounded-2xl shadow-xl border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 border border-amber-200/60">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xs text-amber-700 font-semibold">{lang === 'ml' ? 'ക്ഷേത്ര പാരമ്പര്യം' : 'Spiritual Lineage'}</span>
                <span className="text-sm font-bold font-serif text-slate-900">{lang === 'ml' ? 'വേദ താന്ത്രിക വിധി' : 'Tantric Traditions'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Specifications Table */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <h3 className="font-serif font-bold text-slate-900 text-xl flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-amber-600" />
                  <span>{t.about.specificationsTitle}</span>
                </h3>
                <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200/80">
                  {lang === 'ml' ? 'ഔദ്യോഗിക രേഖ' : 'Devaswom Record'}
                </span>
              </div>

              {/* Data Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <span className="text-xs text-slate-500 font-medium block mb-1">
                    {t.about.templeNameLabel}
                  </span>
                  <span className="font-serif font-bold text-slate-900 text-base">
                    {lang === 'ml' ? templeInfo.nameMl : templeInfo.name}
                  </span>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <span className="text-xs text-slate-500 font-medium block mb-1">
                    {t.about.locationLabel}
                  </span>
                  <span className="font-semibold text-slate-800">
                    {lang === 'ml' ? templeInfo.locationMl : templeInfo.location}
                  </span>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <span className="text-xs text-slate-500 font-medium block mb-1">
                    {t.about.mainDeityLabel}
                  </span>
                  <span className="font-serif font-bold text-[#85182a]">
                    {lang === 'ml' ? 'ശ്രീ ഭഗവതി (ആദിപരാശക്തി)' : 'Sree Bhagavathy (Mother Goddess)'}
                  </span>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <span className="text-xs text-slate-500 font-medium block mb-1">
                    {t.about.traditionLabel}
                  </span>
                  <span className="font-semibold text-slate-800">
                    {lang === 'ml' ? 'കേരളീയ താന്ത്രിക വിധി & കളരിത്തറ' : 'Kerala Tantric Rites & Kaladithara'}
                  </span>
                </div>

                <div className="sm:col-span-2 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <span className="text-xs text-slate-500 font-medium block mb-1">
                    {t.about.significanceLabel}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {lang === 'ml' ? templeInfo.specialSignificanceMl : templeInfo.specialSignificance}
                  </p>
                </div>

              </div>

              {/* Verified Records Advisory */}
              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/60 text-xs text-amber-900 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>{t.about.verifiedNotice}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Sacred Traditions List & Expandable Details */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
          <h3 className="font-serif font-bold text-slate-900 text-xl mb-4 flex items-center gap-2">
            <Scroll className="w-5 h-5 text-amber-600" />
            <span>{t.about.culturalImportanceTitle}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
            {(lang === 'ml' ? templeInfo.traditionsMl : templeInfo.traditions).map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                <span className="text-xs sm:text-sm text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          {showFullDetails && (
            <div className="pt-4 border-t border-slate-100 text-sm text-slate-700 space-y-4 animate-in fade-in duration-300">
              <p className="leading-relaxed">
                {lang === 'ml' ? templeInfo.fullHistoryMl : templeInfo.fullHistory}
              </p>
              <div className="p-4 bg-slate-900 text-slate-100 rounded-2xl text-xs space-y-2">
                <span className="text-amber-400 font-serif font-bold block">
                  {lang === 'ml' ? 'ആചാരപരമായ പ്രത്യേകതകൾ:' : 'Ritualistic Distinctiveness:'}
                </span>
                <p>
                  {lang === 'ml'
                    ? 'മണല്യാർകാവ് കളരിത്തറ ക്ഷേത്രത്തിൽ നടക്കുന്ന എല്ലാ പ്രധാന പൂജകളും തന്ത്രിമാരുടെയും മേൽശാന്തിമാരുടെയും കൃത്യമായ മേൽനോട്ടത്തിലാണ് അനുഷ്ഠിക്കപ്പെടുന്നത്.'
                    : 'All auspicious ceremonies, Kalasha poojas, and Deeparadhana at Manalyarkavu Kaladithara Temple are executed under the strict stewardship of the designated temple Thanthri and Melshanthi.'}
                </p>
              </div>
            </div>
          )}

          <div className="text-center pt-2">
            <button
              onClick={() => setShowFullDetails(!showFullDetails)}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#85182a] hover:text-amber-700 transition-colors"
            >
              <span>{showFullDetails ? t.about.showLess : t.about.readMore}</span>
              {showFullDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

