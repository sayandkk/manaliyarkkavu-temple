import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Copy, 
  Check, 
  Database
} from 'lucide-react';
import type { Language } from '../../types';
import { templeInfo, deities, dailySchedule, offerings, festivals, announcements } from '../../data/templeData';

interface AdminPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const AdminPreviewModal: React.FC<AdminPreviewModalProps> = ({
  isOpen,
  onClose,
  lang
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'info' | 'schema' | 'json'>('info');

  if (!isOpen) return null;

  const fullDataExport = {
    templeInfo,
    deities,
    dailySchedule,
    offerings,
    festivals,
    announcements
  };

  const jsonString = JSON.stringify(fullDataExport, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleDownloadJson = () => {
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `manaliyarkkavu_temple_data.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full border border-slate-200 shadow-2xl overflow-hidden my-auto relative space-y-4 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-white px-6 sm:px-8 py-5 flex items-center justify-between border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 border border-amber-200">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-slate-900">
                {lang === 'ml' ? 'ക്ഷേത്ര ഡാറ്റാ മാനേജ്‌മെന്റ്' : 'Temple Data Management & Admin Preview'}
              </h3>
              <p className="text-xs text-amber-700 font-medium">
                {lang === 'ml' ? 'അഡ്മിനിസ്ട്രേറ്റർമാർക്കുള്ള കോൺഫിഗറേഷൻ' : 'Structured Content Schema for Temple Authorities'}
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

        {/* Tab Controls */}
        <div className="px-6 sm:px-8 pt-2 flex gap-3 border-b border-slate-100 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('info')}
            className={`pb-3 px-4 border-b-2 transition-all ${
              activeTab === 'info' ? 'border-amber-600 text-amber-900 font-bold' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            {lang === 'ml' ? 'ഉള്ളടക്ക വിവരങ്ങൾ' : 'Data Overview'}
          </button>
          <button
            onClick={() => setActiveTab('schema')}
            className={`pb-3 px-4 border-b-2 transition-all ${
              activeTab === 'schema' ? 'border-amber-600 text-amber-900 font-bold' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            {lang === 'ml' ? 'ഡാറ്റാബേസ് സ്കീമ' : 'Database Schema (PostgreSQL)'}
          </button>
          <button
            onClick={() => setActiveTab('json')}
            className={`pb-3 px-4 border-b-2 transition-all ${
              activeTab === 'json' ? 'border-amber-600 text-amber-900 font-bold' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            {lang === 'ml' ? 'JSON എക്സ്പോർട്ട്' : 'JSON Data Export'}
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 pt-2 max-h-[60vh] overflow-y-auto space-y-4 text-xs sm:text-sm">
          
          {activeTab === 'info' && (
            <div className="space-y-4 text-slate-700">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2">
                <span className="font-serif font-bold text-slate-900 block">
                  {lang === 'ml' ? 'സ്ഥിരീകരിച്ച വിവരങ്ങൾ ചേർക്കുന്ന വിധം:' : 'How to Update Temple Records:'}
                </span>
                <p className="text-xs leading-relaxed text-slate-600">
                  {lang === 'ml'
                    ? 'ക്ഷേത്ര ചരിത്രം, പൂജകൾ, നിരക്കുകൾ, ഭഗവതിയുടെ ഐതിഹ്യം, ചിത്രങ്ങൾ എന്നിവ `src/data/templeData.ts` ഫയലിൽ നേരിട്ടോ, അല്ലെങ്കിൽ താഴെയുള്ള JSON ഡൗൺലോഡ് ചെയ്ത് തിരുത്തിയ ശേഷമോ മാറ്റാവുന്നതാണ്.'
                    : 'All temple facts, pooja timings, vazhipad dakshina, festival calendar, and official contacts are strictly decoupled in `src/data/templeData.ts`. Temple administrators can easily modify values or plug into a headless CMS / NestJS backend.'}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                  <span className="text-xs text-slate-500 block">{lang === 'ml' ? 'പ്രതിഷ്ഠകൾ' : 'Deities'}</span>
                  <span className="font-bold text-slate-900 text-lg">{deities.length}</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                  <span className="text-xs text-slate-500 block">{lang === 'ml' ? 'നിത്യ പൂജകൾ' : 'Daily Slots'}</span>
                  <span className="font-bold text-slate-900 text-lg">{dailySchedule.length}</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                  <span className="text-xs text-slate-500 block">{lang === 'ml' ? 'വഴിപാടുകൾ' : 'Vazhipads'}</span>
                  <span className="font-bold text-slate-900 text-lg">{offerings.length}</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                  <span className="text-xs text-slate-500 block">{lang === 'ml' ? 'ഉത്സവങ്ങൾ' : 'Festivals'}</span>
                  <span className="font-bold text-slate-900 text-lg">{festivals.length}</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 sm:col-span-2">
                  <span className="text-xs text-slate-500 block">{lang === 'ml' ? 'അറിയിപ്പുകൾ' : 'Live Announcements'}</span>
                  <span className="font-bold text-slate-900 text-lg">{announcements.length}</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'schema' && (
            <div className="space-y-3 font-mono text-xs bg-slate-900 text-amber-300 p-5 rounded-2xl overflow-x-auto border border-slate-800">
              <pre className="whitespace-pre">{`-- PostgreSQL Schema (Section 36)
CREATE TABLE temple_info (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  name_ml VARCHAR(255),
  subtitle TEXT,
  location VARCHAR(255),
  history TEXT,
  phone VARCHAR(50),
  email VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE deities (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  name_ml VARCHAR(255),
  description TEXT,
  image_url VARCHAR(500)
);

CREATE TABLE poojas (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  name_ml VARCHAR(255),
  deity_id VARCHAR(50) REFERENCES deities(id),
  price NUMERIC(10,2) DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE
);

CREATE TABLE bookings (
  booking_id VARCHAR(50) PRIMARY KEY,
  pooja_id VARCHAR(50) REFERENCES poojas(id),
  devotee_name VARCHAR(255) NOT NULL,
  nakshatra VARCHAR(50) NOT NULL,
  booking_date DATE NOT NULL,
  phone VARCHAR(50) NOT NULL,
  payment_status VARCHAR(50) DEFAULT 'Pending Counter'
);`}</pre>
            </div>
          )}

          {activeTab === 'json' && (
            <div className="space-y-3">
              <div className="flex justify-end gap-2.5">
                <button
                  onClick={handleCopy}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy JSON'}</span>
                </button>
                <button
                  onClick={handleDownloadJson}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>Download .json</span>
                </button>
              </div>

              <div className="bg-slate-900 text-slate-200 p-5 rounded-2xl max-h-64 overflow-auto font-mono text-[11px] border border-slate-800">
                <pre>{jsonString}</pre>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 sm:px-8 py-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors shadow-sm"
          >
            {lang === 'ml' ? 'അടയ്ക്കുക' : 'Close Preview'}
          </button>
        </div>

      </div>
    </div>
  );
};
