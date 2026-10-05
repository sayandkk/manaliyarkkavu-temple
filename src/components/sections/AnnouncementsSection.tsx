import React, { useState } from 'react';
import { 
  Bell, 
  Calendar, 
  AlertCircle, 
  ChevronRight, 
  X,
  Sparkles
} from 'lucide-react';
import type { Language, Announcement } from '../../types';
import { translations } from '../../i18n/translations';
import { announcements } from '../../data/templeData';

interface AnnouncementsSectionProps {
  lang: Language;
}

export const AnnouncementsSection: React.FC<AnnouncementsSectionProps> = ({ lang }) => {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);
  const t = translations[lang];

  return (
    <section id="announcements" className="py-24 bg-white border-b border-slate-100 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold mb-3 shadow-xs">
            <Bell className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.announcements.subtitle}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight mb-4">
            {t.announcements.title}
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto mb-6" />
        </div>

        {/* Announcements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {announcements.map((ann) => (
            <div
              key={ann.id}
              className={`bg-white rounded-3xl border p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${
                ann.isUrgent ? 'border-amber-400 ring-2 ring-amber-400/20' : 'border-slate-200/80'
              }`}
            >
              <div className="space-y-4">
                {/* Header with Date and Urgent / Category Badge */}
                <div className="flex justify-between items-center text-xs">
                  <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-amber-600" />
                    <span>{lang === 'ml' ? ann.dateMl : ann.date}</span>
                  </span>

                  {ann.isUrgent ? (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-rose-50 text-rose-800 border border-rose-200 font-bold text-[11px] animate-pulse">
                      <AlertCircle className="w-3 h-3 text-rose-600" />
                      <span>{t.announcements.urgentBadge}</span>
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold border border-slate-200">
                      {lang === 'ml' ? ann.categoryLabelMl : ann.categoryLabel}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-serif font-bold text-lg text-slate-900 leading-snug">
                  {lang === 'ml' ? ann.titleMl : ann.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {lang === 'ml' ? ann.summaryMl : ann.summary}
                </p>
              </div>

              {/* Read Full Details Trigger */}
              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedAnnouncement(ann)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 hover:text-amber-900 transition-colors group"
                >
                  <span>{t.announcements.readFull}</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <Sparkles className="w-3.5 h-3.5 text-amber-400 opacity-60" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Full Announcement Reading */}
        {selectedAnnouncement && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative space-y-5 animate-in zoom-in-95 duration-200">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedAnnouncement(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs text-amber-700 font-semibold">
                <Calendar className="w-3.5 h-3.5" />
                <span>{lang === 'ml' ? selectedAnnouncement.dateMl : selectedAnnouncement.date}</span>
                <span>•</span>
                <span>{lang === 'ml' ? selectedAnnouncement.categoryLabelMl : selectedAnnouncement.categoryLabel}</span>
              </div>

              <h3 className="font-serif font-bold text-2xl text-slate-900 leading-snug">
                {lang === 'ml' ? selectedAnnouncement.titleMl : selectedAnnouncement.title}
              </h3>

              <div className="bg-slate-50 p-5 rounded-2xl text-sm text-slate-700 leading-relaxed border border-slate-200/80 space-y-3">
                <p className="font-semibold text-slate-900">
                  {lang === 'ml' ? selectedAnnouncement.summaryMl : selectedAnnouncement.summary}
                </p>
                <p className="text-slate-600 text-xs sm:text-sm">
                  {lang === 'ml' ? selectedAnnouncement.detailsMl : selectedAnnouncement.details}
                </p>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedAnnouncement(null)}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors shadow-sm"
                >
                  {lang === 'ml' ? 'ശരി' : 'Close Notice'}
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
