import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Send, 
  ExternalLink, 
  CheckCircle2,
  Clock,
  Compass
} from 'lucide-react';
import type { Language } from '../../types';
import { translations } from '../../i18n/translations';
import { templeInfo } from '../../data/templeData';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const t = translations[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 6000);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold mb-3 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.contact.subtitle}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight mb-4">
            {t.contact.title}
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto mb-6" />
        </div>

        {/* Contact Info Grid & Map Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Left Column: Official Contact Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200/80 shadow-sm space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0 shadow-xs">
                  <MapPin className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-slate-900 mb-1">
                    {t.contact.addressLabel}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {lang === 'ml' ? templeInfo.contact.addressMl : templeInfo.contact.address}
                  </p>
                </div>
              </div>

              {/* Action Buttons: Phone & Map */}
              <div className="pt-3 border-t border-slate-200 flex flex-wrap gap-2.5">
                <a
                  href={`tel:${templeInfo.contact.phone}`}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.contact.callUs}</span>
                </a>

                <a
                  href={`mailto:${templeInfo.contact.email}`}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-semibold hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-600" />
                  <span>{t.contact.emailUs}</span>
                </a>
              </div>

              {/* WhatsApp Option */}
              {templeInfo.contact.whatsapp && (
                <a
                  href={`https://wa.me/${templeInfo.contact.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.contact.chatWhatsapp}</span>
                </a>
              )}
            </div>

            {/* Quick Timing Reference */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <span className="text-xs font-bold font-serif text-slate-900 block">
                    {lang === 'ml' ? 'ദർശന സമയം' : 'Darshan Hours'}
                  </span>
                  <span className="text-xs text-slate-600 font-medium">
                    5:00 AM – 11:30 AM | 5:00 PM – 8:00 PM
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Embed with Directions Trigger */}
          <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-sm">
            <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-200">
              <iframe
                title="Manalyarkavu Temple Location Map"
                src={templeInfo.contact.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            <div className="pt-4 flex flex-col sm:flex-row justify-between items-center gap-3">
              <span className="text-xs text-slate-600 font-medium">
                {lang === 'ml' ? 'ഗൂഗിൾ മാപ്പ് വഴികാട്ടി ഉപയോഗിക്കുക' : 'Locate Manalyarkavu Kaladithara Temple with GPS navigation'}
              </span>

              <a
                href={templeInfo.contact.googleMapsLink || "https://maps.google.com"}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
              >
                <Compass className="w-4 h-4" />
                <span>{t.contact.getDirections}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Enquiry Message Form */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200/80 p-7 sm:p-10 shadow-sm max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-serif font-bold text-2xl text-slate-900 mb-2">
              {t.contact.enquiryTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              {lang === 'ml'
                ? 'നിങ്ങളുടെ പ്രാർത്ഥനകളും പൂജാ അന്വേഷണങ്ങളും ക്ഷേത്ര ഓഫീസിലേക്ക് അയക്കാം.'
                : 'Send your devotional enquiries or prayer requests directly to the temple office.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs text-slate-700 font-semibold block mb-1">
                  {t.contact.nameField} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sreejith Nair"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 shadow-xs"
                />
              </div>

              <div>
                <label className="text-xs text-slate-700 font-semibold block mb-1">
                  {t.contact.phoneField} *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 shadow-xs"
                />
              </div>

              <div>
                <label className="text-xs text-slate-700 font-semibold block mb-1">
                  {t.contact.emailField}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 shadow-xs"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-slate-700 font-semibold block mb-1">
                {t.contact.messageField} *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={lang === 'ml' ? 'നിങ്ങളുടെ സന്ദേശം ഇവിടെ രേഖപ്പെടുത്തുക...' : 'Enter your enquiry or message here...'}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 shadow-xs"
              />
            </div>

            <div className="text-center pt-2">
              <button
                type="submit"
                className="px-8 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-serif font-bold text-sm shadow-md hover:shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 mx-auto"
              >
                <Send className="w-4 h-4 text-amber-400" />
                <span>{t.contact.sendBtn}</span>
              </button>
            </div>

            {isSubmitted && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-semibold text-center flex items-center justify-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{t.contact.msgSentSuccess}</span>
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};
