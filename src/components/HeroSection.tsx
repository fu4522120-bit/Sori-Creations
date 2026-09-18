import React from 'react';
import { Play, ArrowRight, Mouse } from 'lucide-react';
import { Language } from '../types';
import { HERO_IMAGE } from '../data/soriData';

interface HeroSectionProps {
  language: Language;
  onExploreClick: () => void;
  onWatchVideoClick: () => void;
  onScrollDownClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  onExploreClick,
  onWatchVideoClick,
  onScrollDownClick,
}) => {
  return (
    <section id="hero" className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typography and CTA */}
          <div className="lg:col-span-6 z-10 flex flex-col justify-center">
            {/* Main Luxury Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.08] font-normal text-[#2D231E] uppercase tracking-wide">
              {language === 'ru' ? (
                <>
                  Эмоции,<br />
                  которые живут<br />
                  в памяти
                </>
              ) : (
                <>
                  Emotions<br />
                  that live in<br />
                  memory forever
                </>
              )}
            </h1>

            {/* Subtext */}
            <p className="mt-6 text-sm sm:text-base text-[#7E7167] max-w-lg leading-relaxed font-normal">
              {language === 'ru' ? (
                'Авторские букеты из атласных лент и вечные композиции ручной работы Sori Creations для самых важных моментов в жизни.'
              ) : (
                'Handcrafted satin ribbon flower bouquets and everlasting floral arrangements by Sori Creations for life’s most cherished celebrations.'
              )}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              {/* Primary Caramel Button */}
              <button
                onClick={onExploreClick}
                className="group inline-flex items-center gap-2.5 bg-[#B28756] hover:bg-[#9E7345] text-white px-7 py-3.5 rounded-full text-sm font-medium tracking-wide shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                id="hero-choose-bouquet-btn"
              >
                <span>{language === 'ru' ? 'Выбрать букет' : 'Explore Bouquets'}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Watch Video Button */}
              <button
                onClick={onWatchVideoClick}
                className="group inline-flex items-center gap-3 px-5 py-3 rounded-full hover:bg-white/80 transition-all text-sm font-medium text-[#3A2E28]"
                id="hero-watch-video-btn"
              >
                <div className="w-9 h-9 rounded-full bg-white shadow-xs border border-[#EFE8DF] flex items-center justify-center text-[#B28756] group-hover:scale-105 transition-transform">
                  <Play className="w-3.5 h-3.5 fill-[#B28756] ml-0.5" />
                </div>
                <span>{language === 'ru' ? 'Смотреть видео' : 'Watch Story'}</span>
              </button>
            </div>

            {/* Scroll Down Indicator */}
            <div className="mt-12 sm:mt-16 pt-2">
              <button
                onClick={onScrollDownClick}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#E8DFD3] text-xs text-[#8C7D73] hover:text-[#2D231E] hover:border-[#B28756] transition-colors"
                id="hero-scroll-down-btn"
              >
                <Mouse className="w-3.5 h-3.5 text-[#B28756] animate-bounce" />
                <span>{language === 'ru' ? 'Листайте вниз' : 'Scroll down'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Artwork */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-radial from-[#F5EADB]/80 via-transparent to-transparent rounded-full blur-2xl -z-10 scale-110"></div>
            
            <div className="relative w-full max-w-xl aspect-4/3 rounded-3xl overflow-hidden custom-shadow-elevated border border-[#F2ECE3] bg-white/40">
              <img
                src={HERO_IMAGE}
                alt="Sori Creations Luxury Ribbon Bouquet"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
              />
              {/* Soft overlay gradient for seamless light blend */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2]/30 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Instagram badge overlay */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#EDE4D8] text-[11px] font-semibold text-[#5A4332] shadow-xs flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#B28756] animate-pulse"></span>
                <span>@sori.creations5 • Handmade</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
