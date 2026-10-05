import React from 'react';
import { 
  Compass, 
  Shirt, 
  CameraOff, 
  Car, 
  Droplet, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  ShieldCheck,
  HeartHandshake
} from 'lucide-react';
import type { Language } from '../../types';
import { translations } from '../../i18n/translations';
import { templeInfo } from '../../data/templeData';

interface PlanVisitSectionProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const PlanVisitSection: React.FC<PlanVisitSectionProps> = ({ 
  lang 
}) => {
  const t = translations[lang];

  return (
    <section id="plan-visit" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold mb-3 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.planVisit.subtitle}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight mb-4">
            {t.planVisit.title}
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto mb-6" />

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
            {t.planVisit.intro}
          </p>
        </div>

        {/* 4 Core Pillars: Timings, Dress Code, Photography, Parking */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Pillar 1: Timings */}
          <div className="bg-slate-50/70 rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center shadow-xs">
                <Clock className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="font-serif font-bold text-lg text-slate-900">
                {t.planVisit.timingsCard}
              </h3>
              <div className="text-xs text-slate-600 space-y-1.5 pt-1">
                <p><span className="font-semibold text-slate-900">{t.quickInfo.morning}:</span> {templeInfo.timings.morningOpen} – {templeInfo.timings.morningClose}</p>
                <p><span className="font-semibold text-slate-900">{t.quickInfo.evening}:</span> {templeInfo.timings.eveningOpen} – {templeInfo.timings.eveningClose}</p>
              </div>
            </div>
          </div>

          {/* Pillar 2: Dress Code */}
          <div className="bg-slate-50/70 rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center shadow-xs">
                <Shirt className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="font-serif font-bold text-lg text-slate-900">
                {t.planVisit.dressCodeCard}
              </h3>
              <div className="text-xs text-slate-600 space-y-1 leading-relaxed pt-1">
                <p>{t.planVisit.dressCodeMen}</p>
                <p className="pt-1">{t.planVisit.dressCodeWomen}</p>
              </div>
            </div>
          </div>

          {/* Pillar 3: Photography Rules */}
          <div className="bg-slate-50/70 rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-800 flex items-center justify-center shadow-xs">
                <CameraOff className="w-6 h-6 text-rose-700" />
              </div>
              <h3 className="font-serif font-bold text-lg text-slate-900">
                {t.planVisit.photoCard}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                {t.planVisit.photoDesc}
              </p>
            </div>
          </div>

          {/* Pillar 4: Parking & Access */}
          <div className="bg-slate-50/70 rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center shadow-xs">
                <Car className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="font-serif font-bold text-lg text-slate-900">
                {t.planVisit.parkingCard}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                {t.planVisit.parkingDesc}
              </p>
            </div>
          </div>

        </div>

        {/* Facilities Checklist */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200/80 p-7 sm:p-10 shadow-sm mb-16">
          <h3 className="font-serif font-bold text-xl text-slate-900 mb-6 flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-amber-600" />
            <span>{t.planVisit.facilitiesTitle}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-3.5 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Droplet className="w-5 h-5" />
              </div>
              <span className="font-medium text-slate-800">{t.planVisit.facilityWater}</span>
            </div>
            
            <div className="flex items-center gap-3.5 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-medium text-slate-800">{t.planVisit.facilityRestrooms}</span>
            </div>

            <div className="flex items-center gap-3.5 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-medium text-slate-800">{t.planVisit.facilityPrasadam}</span>
            </div>

            <div className="flex items-center gap-3.5 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <Car className="w-5 h-5" />
              </div>
              <span className="font-medium text-slate-800">{t.planVisit.facilityCloak}</span>
            </div>

            <div className="flex items-center gap-3.5 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs sm:col-span-2 md:col-span-2">
              <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <span className="font-medium text-slate-800">{t.planVisit.facilityElderly}</span>
            </div>
          </div>
        </div>

        {/* Temple Etiquette: Dos & Don'ts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Devotee Observances (Dos) */}
          <div className="bg-emerald-50/40 rounded-3xl border border-emerald-200/80 p-7 sm:p-8 shadow-sm space-y-4">
            <h4 className="font-serif font-bold text-lg text-emerald-950 flex items-center gap-2 pb-3 border-b border-emerald-200/60">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>{t.planVisit.dosTitle}</span>
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{lang === 'ml' ? 'ക്ഷേത്രത്തിൽ പ്രവേശിക്കുന്നതിന് മുൻപ് കൈകാലുകൾ ശുദ്ധമാക്കുക.' : 'Wash hands and feet before entering the sacred temple premises.'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{lang === 'ml' ? 'നാലമ്പലത്തിൽ ഭക്തിസാന്ദ്രമായ നിശ്ശബ്ദതയും നാമജപവും പാലിക്കുക.' : 'Maintain peaceful silence, prayerful contemplation, and chant holy names.'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{lang === 'ml' ? 'പ്രദക്ഷിണം നടത്തുമ്പോൾ ശാന്തതയോടെ പ്രാർത്ഥിക്കുക.' : 'Perform circumambulations (Pradakshinam) with gentle pace and mindfulness.'}</span>
              </li>
            </ul>
          </div>

          {/* Prohibitions (Don'ts) */}
          <div className="bg-rose-50/40 rounded-3xl border border-rose-200/80 p-7 sm:p-8 shadow-sm space-y-4">
            <h4 className="font-serif font-bold text-lg text-rose-950 flex items-center gap-2 pb-3 border-b border-rose-200/60">
              <XCircle className="w-5 h-5 text-rose-600" />
              <span>{t.planVisit.dontsTitle}</span>
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>{lang === 'ml' ? 'നാലമ്പലത്തിനകത്ത് മൊബൈൽ ഫോൺ ഉപയോഗവും ക്യാമറ ചിത്രീകരണവും പാടില്ല.' : 'Do not use mobile phones or capture photography inside the Nalambalam.'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>{lang === 'ml' ? 'പാദരക്ഷകൾ ധരിച്ച് ക്ഷേത്ര പരിസരത്തേക്ക് പ്രവേശിക്കരുത്.' : 'Do not enter the temple complex wearing footwear (leave at designated counter).'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>{lang === 'ml' ? 'ശ്രീകോവിലിന്റെ വാതിലിലോ വിഗ്രഹങ്ങളിലോ സ്പർശിക്കരുത്.' : 'Do not touch sanctum doors, bells, or sacred idols.'}</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
