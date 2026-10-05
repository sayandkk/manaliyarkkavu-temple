import React from 'react';
import { 
  Clock, 
  MapPin, 
  Flame, 
  Calendar, 
  ArrowRight
} from 'lucide-react';
import type { Language } from '../../types';
import { translations } from '../../i18n/translations';
import { templeInfo } from '../../data/templeData';

interface QuickInfoProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const QuickInfo: React.FC<QuickInfoProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="quick-info" className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Card 1: Temple Timings */}
        <div className="bg-white rounded-2xl p-6 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-xl hover:-translate-y-1 hover:border-amber-300/60 transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-colors shadow-xs border border-amber-200/60">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-slate-900 text-lg mb-1.5">
              {t.quickInfo.timingsTitle}
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              {t.quickInfo.timingsDesc}
            </p>
            
            <div className="space-y-2 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs">
              <div className="flex justify-between items-center text-slate-600">
                <span className="font-semibold text-amber-700">{t.quickInfo.morning}:</span>
                <span className="font-medium text-slate-900">{templeInfo.timings.morningOpen} – {templeInfo.timings.morningClose}</span>
              </div>
              <div className="flex justify-between items-center text-slate-600 pt-1.5 border-t border-slate-200/60">
                <span className="font-semibold text-amber-700">{t.quickInfo.evening}:</span>
                <span className="font-medium text-slate-900">{templeInfo.timings.eveningOpen} – {templeInfo.timings.eveningClose}</span>
              </div>
            </div>
          </div>

          <a 
            href="#schedule" 
            className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors"
          >
            <span>{lang === 'en' ? 'Full Schedule' : 'സമയക്രമം കാണുക'}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Card 2: Location */}
        <div className="bg-white rounded-2xl p-6 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-xl hover:-translate-y-1 hover:border-emerald-300/60 transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-xs border border-emerald-200/60">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-slate-900 text-lg mb-1.5">
              {t.quickInfo.locationTitle}
            </h3>
            <p className="text-xs font-semibold text-slate-800 mb-1">
              {lang === 'ml' ? templeInfo.nameMl : templeInfo.name}
            </p>
            <p className="text-xs text-slate-500 line-clamp-2 mb-4">
              {lang === 'ml' ? templeInfo.contact.addressMl : templeInfo.contact.address}
            </p>
          </div>

          <a 
            href={templeInfo.contact.googleMapsLink || "#contact"}
            target="_blank"
            rel="noreferrer"
            className="mt-2 w-full py-2.5 px-3.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-emerald-600 transition-all flex items-center justify-center gap-1.5 shadow-xs"
          >
            <MapPin className="w-3.5 h-3.5 text-emerald-300" />
            <span>{t.quickInfo.getDirections}</span>
          </a>
        </div>

        {/* Card 3: Poojas & Offerings */}
        <div className="bg-white rounded-2xl p-6 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-xl hover:-translate-y-1 hover:border-amber-300/60 transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-colors shadow-xs border border-amber-200/60">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-slate-900 text-lg mb-1.5">
              {t.quickInfo.poojasTitle}
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              {t.quickInfo.poojasDesc}
            </p>

            <ul className="text-xs text-slate-600 space-y-1.5 mb-2 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>{lang === 'ml' ? 'രക്തപുഷ്പാഞ്ജലി' : 'Raktha Pushpanjali'}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>{lang === 'ml' ? 'ഭഗവതി സേവ' : 'Bhagavathy Seva'}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>{lang === 'ml' ? 'അയ്യപ്പന് നീരാജനം' : 'Ayyappa Neeranjanam'}</span>
              </li>
            </ul>
          </div>

          <a 
            href="#poojas"
            className="mt-4 w-full py-2.5 px-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs"
          >
            <span>{t.quickInfo.viewPoojas}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Card 4: Festivals */}
        <div className="bg-white rounded-2xl p-6 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-xl hover:-translate-y-1 hover:border-emerald-300/60 transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-xs border border-emerald-200/60">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-slate-900 text-lg mb-1.5">
              {t.quickInfo.festivalsTitle}
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              {t.quickInfo.festivalsDesc}
            </p>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-600">
              <span className="font-semibold text-emerald-800 block mb-0.5">
                {lang === 'ml' ? 'വാർഷിക മഹോത്സവം' : 'Annual Utsavam:'}
              </span>
              <span className="text-slate-700 font-medium">
                {lang === 'ml' ? 'ഫെബ്രുവരി (മകരം 30)' : 'February (Makaram 30)'}
              </span>
            </div>
          </div>

          <a 
            href="#festivals"
            className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
          >
            <span>{lang === 'en' ? 'Festival Calendar' : 'ഉത്സവ കലണ്ടർ'}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
