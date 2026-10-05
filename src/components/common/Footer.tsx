import React from 'react';
import { 
  Flame, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronRight
} from 'lucide-react';
import type { Language } from '../../types';
import { translations } from '../../i18n/translations';
import { templeInfo } from '../../data/templeData';

interface FooterProps {
  lang: Language;
  onOpenBooking: () => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  lang, 
  onOpenBooking,
  onOpenAdmin 
}) => {
  const t = translations[lang];

  const quickLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.history, href: "#history" },
    { label: t.nav.deities, href: "#deities" },
    { label: t.nav.poojas, href: "#poojas" },
    { label: t.nav.festivals, href: "#festivals" },
    { label: t.nav.timings, href: "#schedule" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.announcements, href: "#announcements" },
    { label: t.nav.planVisit, href: "#plan-visit" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="bg-white text-slate-600 border-t border-slate-200 relative overflow-hidden">
      {/* Decorative Dot Pattern Background */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* Column 1: Temple Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center p-2 shadow-xs">
                <img src="/favicon.svg" alt="Vilakku" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-slate-900 text-lg leading-snug">
                  {lang === 'ml' ? templeInfo.nameMl : templeInfo.name}
                </h3>
                <p className="text-xs text-amber-600 font-medium">
                  {lang === 'ml' ? templeInfo.locationMl : templeInfo.location}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              {lang === 'ml' 
                ? "ഭക്തിയും പാരമ്പര്യവും കേരളീയ സംസ്കാരവും സംഗമിക്കുന്ന പുണ്യ സങ്കേതം. സർവ്വേശ്വരിയുടെ കാരുണ്യം സർവ്വ ഭക്തരിലും നിറയട്ടെ."
                : "A sacred sanctuary where profound devotion, Vedic traditions, and Kerala's cultural heritage come together in divine harmony."}
            </p>

            {/* Sacred Mantra Callout */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3.5 text-center">
              <span className="text-xs font-serif text-slate-900 block font-semibold mb-0.5">
                {lang === 'ml' ? "ഓം ശ്രീ മാത്രേ നമഃ" : "Om Sree Mathre Namaha"}
              </span>
              <span className="text-[11px] text-amber-800 italic">
                {lang === 'ml' ? "ലോകാഃ സമസ്താഃ സുഖിനോ ഭവന്തു" : "Lokah Samastah Sukhino Bhavantu"}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-slate-900 text-base mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-500" />
              <span>{t.footer.quickLinks}</span>
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-slate-600">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="hover:text-amber-700 transition-colors flex items-center gap-1.5 py-1 group text-xs sm:text-sm"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-400 group-hover:translate-x-0.5 group-hover:text-amber-600 transition-all" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Temple Timings */}
          <div>
            <h4 className="font-serif font-semibold text-slate-900 text-base mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-500" />
              <span>{t.quickInfo.timingsTitle}</span>
            </h4>
            
            <div className="space-y-3 text-sm text-slate-600">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <span className="text-xs text-amber-800 font-semibold block mb-0.5">
                  {t.quickInfo.morning}
                </span>
                <span className="font-medium text-slate-900 text-xs sm:text-sm">
                  {templeInfo.timings.morningOpen} – {templeInfo.timings.morningClose}
                </span>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <span className="text-xs text-amber-800 font-semibold block mb-0.5">
                  {t.quickInfo.evening}
                </span>
                <span className="font-medium text-slate-900 text-xs sm:text-sm">
                  {templeInfo.timings.eveningOpen} – {templeInfo.timings.eveningClose}
                </span>
              </div>

              <p className="text-[11px] text-slate-400 italic pt-1">
                {lang === 'ml' ? "* ഉത്സവ ദിവസങ്ങളിൽ പ്രത്യേക സമയക്രമം ബാധകം." : "* Special extended timings apply on festive and auspicious days."}
              </p>
            </div>
          </div>

          {/* Column 4: Official Contact & Actions */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-slate-900 text-base mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-500" />
              <span>{t.contact.title}</span>
            </h4>

            <div className="space-y-2.5 text-sm text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  {lang === 'ml' ? templeInfo.contact.addressMl : templeInfo.contact.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                <a href={`tel:${templeInfo.contact.phone}`} className="text-xs hover:text-amber-700 font-medium">
                  {templeInfo.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                <a href={`mailto:${templeInfo.contact.email}`} className="text-xs hover:text-amber-700 break-all font-medium">
                  {templeInfo.contact.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-3 px-4 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow-xs hover:shadow-md active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Flame className="w-3.5 h-3.5 text-amber-200" />
                <span>{t.poojas.bookNow}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Verified Tag & Developer credits */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p className="text-center sm:text-left">
            {t.footer.copyright}
          </p>

          <div className="flex items-center space-x-4">
            <button
              onClick={onOpenAdmin}
              className="text-slate-600 hover:text-amber-700 hover:underline flex items-center gap-1 font-medium"
            >
              <span>{t.nav.adminPreview}</span>
            </button>
            <span className="text-slate-200">|</span>
            <span className="text-slate-400">
              {t.footer.devCredit}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
