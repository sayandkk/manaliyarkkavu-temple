import React, { useState } from 'react';
import { 
  Image as ImageIcon, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn
} from 'lucide-react';
import type { Language } from '../../types';
import { translations } from '../../i18n/translations';
import { galleryItems } from '../../data/templeData';

interface GallerySectionProps {
  lang: Language;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const t = translations[lang];

  const categories = [
    { id: 'all', label: t.gallery.all },
    { id: 'temple', label: t.gallery.temple },
    { id: 'festivals', label: t.gallery.festivals },
    { id: 'poojas', label: t.gallery.poojas },
    { id: 'historical', label: t.gallery.historical },
  ];

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold mb-3 shadow-xs">
            <ImageIcon className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.gallery.subtitle}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight mb-4">
            {t.gallery.title}
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto mb-6" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 rounded-full bg-slate-100 border border-slate-200 shadow-inner gap-1.5 text-xs sm:text-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Modern Grid Photo Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/80 hover:border-amber-400 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group h-72 sm:h-80"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6 text-white" />

              {/* Hover Zoom Icon & Category Badge */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/50 shadow-md">
                <ZoomIn className="w-4 h-4" />
              </div>

              <div className="absolute top-4 left-4">
                <span className="text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm text-amber-300 border border-white/10 shadow-xs">
                  {lang === 'ml' ? item.categoryLabelMl : item.categoryLabel}
                </span>
              </div>

              {/* Title & Description at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-serif font-bold text-base sm:text-lg text-white group-hover:text-amber-300 transition-colors drop-shadow leading-snug">
                  {lang === 'ml' ? item.titleMl : item.title}
                </h3>
                {item.description && (
                  <p className="text-xs text-slate-200 line-clamp-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-light">
                    {lang === 'ml' ? item.descriptionMl : item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal with Zoom & Navigation Controls */}
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <div 
            onClick={handleCloseLightbox}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          >
            {/* Close Button */}
            <button
              onClick={handleCloseLightbox}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/20 z-50"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Nav Arrow */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 hover:text-amber-300 transition-all border border-white/20 z-50 active:scale-95"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Lightbox Content */}
            <div 
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl relative"
            >
              <div className="relative aspect-video sm:aspect-[16/10] bg-black flex items-center justify-center">
                <img
                  src={filteredItems[lightboxIndex].imageUrl}
                  alt={filteredItems[lightboxIndex].title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Caption & Metadata */}
              <div className="p-6 bg-slate-900 border-t border-slate-800 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="space-y-1">
                  <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                    {lang === 'ml' ? filteredItems[lightboxIndex].categoryLabelMl : filteredItems[lightboxIndex].categoryLabel}
                  </span>
                  <h3 className="font-serif font-bold text-xl text-white">
                    {lang === 'ml' ? filteredItems[lightboxIndex].titleMl : filteredItems[lightboxIndex].title}
                  </h3>
                  {filteredItems[lightboxIndex].description && (
                    <p className="text-xs text-slate-300 font-light max-w-xl">
                      {lang === 'ml' ? filteredItems[lightboxIndex].descriptionMl : filteredItems[lightboxIndex].description}
                    </p>
                  )}
                </div>

                <div className="text-xs font-mono text-slate-400 shrink-0">
                  {lightboxIndex + 1} / {filteredItems.length}
                </div>
              </div>
            </div>

            {/* Right Nav Arrow */}
            <button
              onClick={handleNextImage}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 hover:text-amber-300 transition-all border border-white/20 z-50 active:scale-95"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
