import React, { useState } from 'react';
import { 
  Play, 
  X, 
  Video, 
  Clock 
} from 'lucide-react';
import type { Language, VideoItem } from '../../types';
import { translations } from '../../i18n/translations';
import { videoItems } from '../../data/templeData';

interface VideoGallerySectionProps {
  lang: Language;
}

export const VideoGallerySection: React.FC<VideoGallerySectionProps> = ({ lang }) => {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const t = translations[lang];

  return (
    <section id="videos" className="py-24 bg-white border-b border-slate-100 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold mb-3 shadow-xs">
            <Video className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.videos.subtitle}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight mb-4">
            {t.videos.title}
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto mb-6" />
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videoItems.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-amber-400/80 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Video Thumbnail with Play Button Overlay */}
                <div className="relative h-56 overflow-hidden bg-slate-950">
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />

                  {/* Play Button Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all">
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>{video.duration}</span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-amber-300 text-[10px] font-semibold px-3 py-1 rounded-full border border-white/10 shadow-xs">
                    {lang === 'ml' ? video.categoryMl : video.category}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-2">
                  <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-amber-800 transition-colors leading-snug">
                    {lang === 'ml' ? video.titleMl : video.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {lang === 'ml' ? video.descriptionMl : video.description}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <span className="text-xs font-semibold text-amber-700 group-hover:text-amber-900 flex items-center gap-1">
                  <span>{t.videos.watchVideo}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Video Player Modal */}
        {activeVideo && (
          <div 
            onClick={() => setActiveVideo(null)}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="bg-white border border-slate-200 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative space-y-4"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video Player Frame */}
              <div className="relative aspect-video bg-black">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0"
                  title={activeVideo.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="p-6 pt-0 space-y-2">
                <span className="text-xs text-amber-700 font-semibold">
                  {lang === 'ml' ? activeVideo.categoryMl : activeVideo.category} • {activeVideo.duration}
                </span>
                <h3 className="font-serif font-bold text-xl text-slate-900">
                  {lang === 'ml' ? activeVideo.titleMl : activeVideo.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {lang === 'ml' ? activeVideo.descriptionMl : activeVideo.description}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
