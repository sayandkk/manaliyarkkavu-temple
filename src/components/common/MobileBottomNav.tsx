import React from 'react';
import { 
  Home, 
  Clock, 
  Calendar, 
  Flame, 
  Navigation
} from 'lucide-react';
import type { Language } from '../../types';
import { translations } from '../../i18n/translations';
import { templeInfo } from '../../data/templeData';

interface MobileBottomNavProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ 
  lang, 
  onOpenBooking 
}) => {
  const t = translations[lang];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/80 px-2 py-1.5 shadow-xl">
      <div className="grid grid-cols-5 gap-1 text-center">
        {/* Home */}
        <a 
          href="#home" 
          className="flex flex-col items-center justify-center py-1 text-slate-600 hover:text-slate-900 active:scale-95 transition-all"
        >
          <Home className="w-5 h-5 mb-0.5 text-slate-600" />
          <span className="text-[10px] font-medium leading-none truncate w-full">
            {t.nav.home}
          </span>
        </a>

        {/* Timings */}
        <a 
          href="#schedule" 
          className="flex flex-col items-center justify-center py-1 text-slate-600 hover:text-slate-900 active:scale-95 transition-all"
        >
          <Clock className="w-5 h-5 mb-0.5 text-slate-600" />
          <span className="text-[10px] font-medium leading-none truncate w-full">
            {lang === 'ml' ? 'സമയം' : 'Timings'}
          </span>
        </a>

        {/* Central Book Offering Button */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center -mt-4 bg-gradient-to-tr from-amber-500 to-amber-600 text-white rounded-full p-2.5 shadow-lg border-2 border-white active:scale-90 transition-transform"
          aria-label="Book Pooja Offering"
        >
          <Flame className="w-5 h-5 animate-pulse" />
          <span className="text-[9px] font-bold leading-tight mt-0.5 whitespace-nowrap">
            {lang === 'ml' ? 'വഴിപാട്' : 'Offerings'}
          </span>
        </button>

        {/* Festivals */}
        <a 
          href="#festivals" 
          className="flex flex-col items-center justify-center py-1 text-slate-600 hover:text-slate-900 active:scale-95 transition-all"
        >
          <Calendar className="w-5 h-5 mb-0.5 text-slate-600" />
          <span className="text-[10px] font-medium leading-none truncate w-full">
            {lang === 'ml' ? 'ഉത്സവം' : 'Festivals'}
          </span>
        </a>

        {/* Directions / Call */}
        <a 
          href={templeInfo.contact.googleMapsLink || `tel:${templeInfo.contact.phone}`}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center py-1 text-slate-600 hover:text-slate-900 active:scale-95 transition-all"
        >
          <Navigation className="w-5 h-5 mb-0.5 text-slate-600" />
          <span className="text-[10px] font-medium leading-none truncate w-full">
            {lang === 'ml' ? 'വഴി' : 'Navigate'}
          </span>
        </a>
      </div>
    </div>
  );
};
