import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Flame, 
  Printer, 
  IndianRupee,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import confetti from 'canvas-confetti';
import type { Language, BookingReceipt, BookingFormData } from '../../types';
import { translations, NAKSHATRAS } from '../../i18n/translations';
import { offerings, templeInfo } from '../../data/templeData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  preselectedOfferingId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  lang,
  preselectedOfferingId
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedOfferingId, setSelectedOfferingId] = useState<string>(
    preselectedOfferingId || offerings[0].id
  );
  const [formData, setFormData] = useState<BookingFormData>({
    offeringId: selectedOfferingId,
    devoteeName: '',
    nakshatra: 'ashwathi',
    gotra: '',
    phone: '',
    email: '',
    bookingDate: new Date(Date.now() + 86400000).toISOString().split('T')[0], // Tomorrow
    address: '',
    specialPrayers: '',
    paymentMethod: 'counter'
  });

  const [receipt, setReceipt] = useState<BookingReceipt | null>(null);
  const receiptRef = useRef<HTMLDivElement>(null);
  const t = translations[lang];

  useEffect(() => {
    if (preselectedOfferingId) {
      setSelectedOfferingId(preselectedOfferingId);
      setFormData((prev) => ({ ...prev, offeringId: preselectedOfferingId }));
    }
  }, [preselectedOfferingId]);

  if (!isOpen) return null;

  const currentOffering = offerings.find((o) => o.id === selectedOfferingId) || offerings[0];

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else if (step === 4) {
      // Generate official Booking Receipt
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const generatedId = `MKV-2026-${randomSuffix}`;

      const generatedReceipt: BookingReceipt = {
        ...formData,
        offeringId: currentOffering.id,
        offeringName: currentOffering.name,
        offeringNameMl: currentOffering.nameMl,
        amount: currentOffering.price,
        bookingId: generatedId,
        createdAt: new Date().toLocaleDateString('en-GB'),
        status: formData.paymentMethod === 'counter' ? 'Confirmed' : 'Confirmed'
      };

      setReceipt(generatedReceipt);
      setStep(5);

      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#d97706', '#059669', '#ffffff']
      });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden my-auto relative animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-white px-6 sm:px-8 py-5 flex items-center justify-between border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 border border-amber-200">
              <Flame className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-slate-900">
                {t.bookingModal.title}
              </h3>
              <p className="text-xs text-amber-700 font-medium">
                {lang === 'ml' ? templeInfo.nameMl : templeInfo.name}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Step Indicator Progress Bar (Steps 1 to 5) */}
        <div className="bg-slate-50 px-6 sm:px-8 py-3.5 border-b border-slate-200/80 flex justify-between items-center text-xs font-semibold text-slate-500">
          <span className={step >= 1 ? 'text-amber-800 font-bold' : ''}>1. {t.bookingModal.step1}</span>
          <span className="text-slate-300">•</span>
          <span className={step >= 2 ? 'text-amber-800 font-bold' : ''}>2. {t.bookingModal.step2}</span>
          <span className="text-slate-300">•</span>
          <span className={step >= 3 ? 'text-amber-800 font-bold' : ''}>3. {t.bookingModal.step3}</span>
          <span className="text-slate-300">•</span>
          <span className={step >= 4 ? 'text-amber-800 font-bold' : ''}>4. {t.bookingModal.step4}</span>
        </div>

        {/* Modal Form Content */}
        <form onSubmit={handleNextStep} className="p-6 sm:p-8 space-y-6">
          
          {/* STEP 1: Select Offering */}
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h4 className="font-serif font-bold text-base text-slate-900">
                {lang === 'ml' ? 'വഴിപാട് തിരഞ്ഞെടുക്കുക' : 'Select Offering & Deity'}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-72 overflow-y-auto pr-1">
                {offerings.map((off) => (
                  <div
                    key={off.id}
                    onClick={() => {
                      setSelectedOfferingId(off.id);
                      setFormData({ ...formData, offeringId: off.id });
                    }}
                    className={`p-4 rounded-2xl border text-left cursor-pointer transition-all ${
                      selectedOfferingId === off.id
                        ? 'bg-amber-50/80 text-amber-950 border-amber-400 ring-2 ring-amber-400/20 shadow-sm'
                        : 'bg-slate-50/60 text-slate-700 border-slate-200/80 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-1.5">
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                        selectedOfferingId === off.id ? 'bg-amber-200/60 text-amber-900' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {lang === 'ml' ? off.deityNameMl : off.deityName}
                      </span>
                      <span className="text-xs font-bold font-serif flex items-center text-slate-900">
                        <IndianRupee className="w-3 h-3" />
                        <span>{off.price}</span>
                      </span>
                    </div>
                    <h5 className="font-serif font-bold text-sm leading-snug">
                      {lang === 'ml' ? off.nameMl : off.name}
                    </h5>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Select Date */}
          {step === 2 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h4 className="font-serif font-bold text-base text-slate-900">
                {t.bookingModal.dateLabel}
              </h4>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-3.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-800">
                  <Flame className="w-4 h-4 text-amber-600" />
                  <span>
                    {lang === 'ml' ? currentOffering.nameMl : currentOffering.name} (₹{currentOffering.price})
                  </span>
                </div>

                <div>
                  <label className="text-xs text-slate-700 font-semibold block mb-1.5">
                    {lang === 'ml' ? 'വഴിപാട് സമർപ്പിക്കേണ്ട തീയതി തിരഞ്ഞെടുക്കുക' : 'Choose Date for Pooja Sankalpam'}
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.bookingDate}
                    onChange={(e) => setFormData({ ...formData, bookingDate: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 font-medium focus:outline-none focus:border-amber-500 shadow-xs"
                  />
                </div>

                <p className="text-[11px] text-slate-500 italic">
                  {lang === 'ml' ? '* നിത്യപൂജകൾ പ്രഭാത പൂജയോടൊപ്പം പുരോഹിതർ സങ്കൽപം ചെയ്തു നടത്തുന്നതാണ്.' : '* Daily poojas are performed during morning hours chanting the devotee nakshatra sankalpam.'}
                </p>
              </div>
            </div>
          )}

          {/* STEP 3: Devotee Information & 27 Malayalam Nakshatras */}
          {step === 3 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h4 className="font-serif font-bold text-base text-slate-900">
                {t.bookingModal.devoteeDetails}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Full Name */}
                <div className="sm:col-span-2">
                  <label className="text-xs text-slate-700 font-semibold block mb-1">
                    {t.bookingModal.devoteeName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.devoteeName}
                    onChange={(e) => setFormData({ ...formData, devoteeName: e.target.value })}
                    placeholder="e.g. Anjali Menon"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white shadow-xs"
                  />
                </div>

                {/* 27 Malayalam Birth Star (Nakshatram) Selector */}
                <div>
                  <label className="text-xs text-slate-700 font-semibold block mb-1">
                    {t.bookingModal.selectNakshatra} *
                  </label>
                  <select
                    value={formData.nakshatra}
                    onChange={(e) => setFormData({ ...formData, nakshatra: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white font-medium shadow-xs"
                  >
                    {NAKSHATRAS.map((n) => (
                      <option key={n.id} value={n.id}>
                        {lang === 'ml' ? n.ml : n.en}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Gotra (Optional) */}
                <div>
                  <label className="text-xs text-slate-700 font-semibold block mb-1">
                    {t.bookingModal.gotra}
                  </label>
                  <input
                    type="text"
                    value={formData.gotra}
                    onChange={(e) => setFormData({ ...formData, gotra: e.target.value })}
                    placeholder="e.g. Kashyapa / Bharadwaja"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white shadow-xs"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-xs text-slate-700 font-semibold block mb-1">
                    {t.bookingModal.phone} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white shadow-xs"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-xs text-slate-700 font-semibold block mb-1">
                    {t.bookingModal.email}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="devotee@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white shadow-xs"
                  />
                </div>

                {/* Special Prayer / Sankalpam */}
                <div className="sm:col-span-2">
                  <label className="text-xs text-slate-700 font-semibold block mb-1">
                    {t.bookingModal.specialPrayer}
                  </label>
                  <input
                    type="text"
                    value={formData.specialPrayers}
                    onChange={(e) => setFormData({ ...formData, specialPrayers: e.target.value })}
                    placeholder={lang === 'ml' ? 'ആയുരാരോഗ്യത്തിനും അഭീഷ്ടസിദ്ധിക്കും...' : 'e.g. For good health, family prosperity, and career success'}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white shadow-xs"
                  />
                </div>

              </div>
            </div>
          )}

          {/* STEP 4: Review, Payment Mode & Confirmation */}
          {step === 4 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h4 className="font-serif font-bold text-base text-slate-900">
                {t.bookingModal.step4}
              </h4>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between pb-2.5 border-b border-slate-200">
                  <span className="text-slate-600">{t.bookingModal.title}:</span>
                  <span className="font-serif font-bold text-slate-900">
                    {lang === 'ml' ? currentOffering.nameMl : currentOffering.name}
                  </span>
                </div>

                <div className="flex justify-between pb-2.5 border-b border-slate-200">
                  <span className="text-slate-600">{lang === 'ml' ? 'പ്രതിഷ്ഠ' : 'Deity'}:</span>
                  <span className="font-semibold text-slate-800">
                    {lang === 'ml' ? currentOffering.deityNameMl : currentOffering.deityName}
                  </span>
                </div>

                <div className="flex justify-between pb-2.5 border-b border-slate-200">
                  <span className="text-slate-600">{t.bookingModal.dateLabel}:</span>
                  <span className="font-semibold text-slate-800">{formData.bookingDate}</span>
                </div>

                <div className="flex justify-between pb-2.5 border-b border-slate-200">
                  <span className="text-slate-600">{t.bookingModal.devoteeName}:</span>
                  <span className="font-bold text-slate-900">{formData.devoteeName}</span>
                </div>

                <div className="flex justify-between pb-2.5 border-b border-slate-200">
                  <span className="text-slate-600">{t.bookingModal.selectNakshatra}:</span>
                  <span className="font-semibold text-slate-800 capitalize">
                    {NAKSHATRAS.find((n) => n.id === formData.nakshatra)?.[lang === 'ml' ? 'ml' : 'en'] || formData.nakshatra}
                  </span>
                </div>

                <div className="flex justify-between pt-1 text-base font-serif font-bold text-amber-800">
                  <span>{t.bookingModal.offeringAmount}:</span>
                  <span className="flex items-center">
                    <IndianRupee className="w-4 h-4" />
                    <span>{currentOffering.price}</span>
                  </span>
                </div>
              </div>

              {/* Payment / Token Selection */}
              <div className="space-y-2">
                <label className="text-xs text-slate-700 font-semibold block">
                  {t.bookingModal.paymentMethodLabel}
                </label>
                
                <label className="flex items-center gap-3 p-4 rounded-2xl bg-amber-50/60 border border-amber-300 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    checked={formData.paymentMethod === 'counter'}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'counter' })}
                    className="text-amber-600 focus:ring-amber-500"
                  />
                  <span className="text-xs font-semibold text-slate-800">
                    {t.bookingModal.payAtCounter}
                  </span>
                </label>
              </div>
            </div>
          )}

          {/* STEP 5: Printable Official Booking Receipt */}
          {step === 5 && receipt && (
            <div className="space-y-5 animate-in zoom-in-95 duration-200">
              
              {/* Receipt Printable Card */}
              <div 
                ref={receiptRef}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-lg text-center space-y-4 text-slate-800"
              >
                {/* Receipt Header */}
                <div className="border-b border-slate-200 pb-4">
                  <img src="/favicon.png" alt="Sree Bhagavathy" className="w-12 h-12 rounded-full border-2 border-amber-300 object-cover mx-auto mb-2 shadow-xs" />
                  <h3 className="font-serif font-bold text-xl text-slate-900">
                    {lang === 'ml' ? templeInfo.nameMl : templeInfo.name}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium">
                    {lang === 'ml' ? templeInfo.locationMl : templeInfo.location}
                  </p>
                  <span className="inline-block mt-2.5 bg-amber-100 text-amber-900 text-[10px] font-bold uppercase tracking-widest px-3.5 py-1 rounded-full border border-amber-200">
                    {t.bookingModal.receiptTitle}
                  </span>
                </div>

                {/* Reference ID & Date Banner */}
                <div className="bg-slate-50 p-4 rounded-2xl flex justify-between items-center text-xs border border-slate-200/80">
                  <div>
                    <span className="text-slate-500 block text-[10px]">{t.bookingModal.bookingRef}:</span>
                    <span className="font-mono font-bold text-sm text-slate-900 tracking-wider">
                      {receipt.bookingId}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-500 block text-[10px]">{t.bookingModal.dateIssued}:</span>
                    <span className="font-semibold text-slate-800">{receipt.createdAt}</span>
                  </div>
                </div>

                {/* Devotee & Pooja Details Table */}
                <div className="text-xs text-left divide-y divide-slate-100 space-y-2 pt-2">
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-500">{t.bookingModal.title}:</span>
                    <span className="font-serif font-bold text-slate-900">
                      {lang === 'ml' ? receipt.offeringNameMl : receipt.offeringName}
                    </span>
                  </div>

                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-500">{t.bookingModal.devoteeName}:</span>
                    <span className="font-bold text-slate-900">{receipt.devoteeName}</span>
                  </div>

                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-500">{t.bookingModal.selectNakshatra}:</span>
                    <span className="font-semibold text-slate-800 capitalize">
                      {NAKSHATRAS.find((n) => n.id === receipt.nakshatra)?.[lang === 'ml' ? 'ml' : 'en'] || receipt.nakshatra}
                    </span>
                  </div>

                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-500">{t.bookingModal.dateLabel}:</span>
                    <span className="font-semibold text-slate-800">{receipt.bookingDate}</span>
                  </div>

                  <div className="flex justify-between py-2 text-sm font-bold text-amber-800">
                    <span>{t.bookingModal.offeringAmount}:</span>
                    <span className="flex items-center">
                      <IndianRupee className="w-3.5 h-3.5" />
                      <span>{receipt.amount}</span>
                    </span>
                  </div>
                </div>

                {/* Blessing Footer */}
                <div className="pt-3 border-t border-slate-100 text-center">
                  <p className="font-serif text-xs text-amber-900 italic font-semibold">
                    &ldquo;{t.bookingModal.blessingFooter}&rdquo;
                  </p>
                </div>
              </div>

              {/* Print / Action Buttons */}
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="flex-1 py-3 bg-slate-900 text-white rounded-2xl font-serif font-bold text-xs shadow-md flex items-center justify-center gap-2 hover:bg-slate-800 transition-all"
                >
                  <Printer className="w-4 h-4 text-amber-400" />
                  <span>{t.bookingModal.downloadReceipt}</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 bg-slate-100 text-slate-700 rounded-2xl font-serif text-xs font-semibold hover:bg-slate-200 transition-all"
                >
                  {t.bookingModal.closeBtn}
                </button>
              </div>

            </div>
          )}

          {/* Form Step Action Buttons (Steps 1 to 4) */}
          {step < 5 && (
            <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 flex items-center gap-1.5 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{lang === 'ml' ? 'പുറകോട്ട്' : 'Back'}</span>
                </button>
              ) : <div />}

              <button
                type="submit"
                className="px-7 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-serif font-bold text-xs sm:text-sm shadow-md hover:shadow-lg active:scale-95 transition-all flex items-center gap-2"
              >
                <span>{step === 4 ? t.bookingModal.confirmBtn : (lang === 'ml' ? 'തുടരുക' : 'Continue')}</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          )}

        </form>

      </div>
    </div>
  );
};
