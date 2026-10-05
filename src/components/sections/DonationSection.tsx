import React, { useState } from 'react';
import { 
  Heart, 
  IndianRupee, 
  ShieldCheck, 
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import type { Language } from '../../types';
import { translations } from '../../i18n/translations';
import { donationOptions } from '../../data/templeData';

interface DonationSectionProps {
  lang: Language;
}

export const DonationSection: React.FC<DonationSectionProps> = ({ lang }) => {
  const [selectedDonationId, setSelectedDonationId] = useState<string>(donationOptions[0].id);
  const [selectedAmount, setSelectedAmount] = useState<number>(1001);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState(false);

  const t = translations[lang];

  const currentOption = donationOptions.find((d) => d.id === selectedDonationId) || donationOptions[0];

  const handlePresetClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    const num = parseInt(e.target.value);
    if (!isNaN(num) && num > 0) {
      setSelectedAmount(num);
    }
  };

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#f59e0b', '#d97706', '#059669', '#ffffff']
    });
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="support" className="py-24 bg-white border-b border-slate-100 relative overflow-hidden">
      {/* Background Motifs */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold mb-3 shadow-xs">
            <Heart className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.donation.subtitle}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight mb-4">
            {t.donation.title}
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto mb-6" />

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
            {t.donation.intro}
          </p>
        </div>

        {/* Donation Dashboard Card */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-7 sm:p-10 shadow-xl space-y-8">
          
          {/* Step 1: Select Seva Purpose */}
          <div className="space-y-4">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
              1. {lang === 'ml' ? 'സംഭാവന ഇനം തിരഞ്ഞെടുക്കുക' : 'Select Seva / Contribution Cause'}
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {donationOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setSelectedDonationId(opt.id);
                    setSelectedAmount(opt.suggestedAmounts[1] || 1001);
                    setCustomAmount('');
                  }}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    selectedDonationId === opt.id
                      ? 'bg-amber-50/80 text-amber-950 border-amber-400 shadow-sm font-bold ring-2 ring-amber-400/20'
                      : 'bg-slate-50/60 text-slate-700 border-slate-200 hover:border-amber-300 hover:bg-slate-50'
                  }`}
                >
                  <h4 className="font-serif text-sm mb-1 leading-snug">
                    {lang === 'ml' ? opt.titleMl : opt.title}
                  </h4>
                  <p className={`text-[11px] line-clamp-2 ${selectedDonationId === opt.id ? 'text-amber-800' : 'text-slate-500'}`}>
                    {lang === 'ml' ? opt.descriptionMl : opt.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Select or Enter Amount */}
          <div className="space-y-4 pt-5 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
              2. {lang === 'ml' ? 'സംഭാവന തുക തിരഞ്ഞെടുക്കുക' : 'Select or Customise Contribution Amount'}
            </span>

            <div className="flex flex-wrap gap-3">
              {currentOption.suggestedAmounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => handlePresetClick(amt)}
                  className={`px-5 py-2.5 rounded-xl font-serif font-bold text-sm sm:text-base border transition-all flex items-center gap-1 ${
                    selectedAmount === amt && customAmount === ''
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md scale-105'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <IndianRupee className="w-4 h-4" />
                  <span>{amt}</span>
                </button>
              ))}
            </div>

            {/* Custom Amount Input */}
            <div className="pt-2 max-w-xs">
              <label className="text-xs font-medium text-slate-600 block mb-1.5">
                {t.donation.customAmount}
              </label>
              <div className="relative">
                <IndianRupee className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="number"
                  min="10"
                  value={customAmount}
                  onChange={handleCustomChange}
                  placeholder="e.g. 5000"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white text-sm"
                />
              </div>
            </div>
          </div>

          {/* Action Submission */}
          <form onSubmit={handleDonateSubmit} className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>{t.donation.securityNotice}</span>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-serif font-bold text-sm sm:text-base shadow-lg hover:shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>{t.donation.donateBtn} (₹{selectedAmount})</span>
            </button>
          </form>

          {/* Success Notification */}
          {isSuccess && (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 font-serif text-sm font-semibold text-center animate-in zoom-in-95 duration-200 shadow-sm flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                {lang === 'ml'
                  ? 'നന്ദി! നിങ്ങളുടെ ഭക്തിനിർഭരമായ സമർപ്പണം രേഖപ്പെടുത്തിയിരിക്കുന്നു. ഭഗവതിയുടെ സർവ്വ ഐശ്വര്യങ്ങളും ഉണ്ടാകട്ടെ.'
                  : 'Thank you! Your sacred contribution has been noted. May Sree Bhagavathy shower abundant blessings upon you and your family.'}
              </span>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
