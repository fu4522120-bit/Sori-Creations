import React, { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language, CollectionItem } from '../types';
import { COLLECTIONS_DATA } from '../data/soriData';

interface CollectionsCatalogProps {
  language: Language;
  onSelectCollection: (collection: CollectionItem) => void;
  onViewAllClick: () => void;
}

export const CollectionsCatalog: React.FC<CollectionsCatalogProps> = ({
  language,
  onSelectCollection,
  onViewAllClick,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="collections" className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#9E7345] font-semibold block mb-1">
              {language === 'ru' ? 'Каталог коллекций' : 'Collection Catalog'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2D231E] font-normal tracking-tight">
              {language === 'ru' ? 'Выберите идею для вашего события' : 'Choose an idea for your occasion'}
            </h2>
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-4">
            {/* Scroll buttons for desktop */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => handleScroll('left')}
                className="w-9 h-9 rounded-full bg-white border border-[#EFE8DF] flex items-center justify-center text-[#5A4D45] hover:border-[#B28756] hover:text-[#B28756] transition-colors shadow-xs"
                title="Scroll Left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="w-9 h-9 rounded-full bg-white border border-[#EFE8DF] flex items-center justify-center text-[#5A4D45] hover:border-[#B28756] hover:text-[#B28756] transition-colors shadow-xs"
                title="Scroll Right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* View all link */}
            <button
              onClick={onViewAllClick}
              className="text-xs sm:text-sm font-medium text-[#7E7167] hover:text-[#B28756] flex items-center gap-1.5 group transition-colors"
              id="collections-view-all-btn"
            >
              <span>{language === 'ru' ? 'Смотреть все' : 'View all'}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* 8 Cards Carousel Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 pt-1 snap-x scrollbar-none no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {COLLECTIONS_DATA.map((col) => (
            <div
              key={col.id}
              onClick={() => onSelectCollection(col)}
              className="group relative shrink-0 w-[170px] sm:w-[200px] md:w-[220px] aspect-3/4 rounded-2xl overflow-hidden bg-white border border-[#EFE8DF] custom-shadow-soft cursor-pointer transform hover:-translate-y-1.5 transition-all duration-300 snap-start"
              id={`col-card-${col.id}`}
            >
              {/* Product Image */}
              <img
                src={col.image}
                alt={language === 'ru' ? col.titleRu : col.titleEn}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
              />

              {/* Top soft vignette */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60 pointer-events-none"></div>

              {/* Bottom Frosted Pill matching reference */}
              <div className="absolute bottom-3 inset-x-3 bg-white/85 backdrop-blur-md rounded-xl p-2.5 sm:p-3 border border-white/40 shadow-xs flex items-center justify-between transition-all group-hover:bg-white">
                <div className="min-w-0 pr-2">
                  <h3 className="text-xs sm:text-sm font-semibold text-[#2D231E] truncate leading-tight">
                    {language === 'ru' ? col.titleRu : col.titleEn}
                  </h3>
                  <p className="text-[10px] text-[#8C7D73] truncate mt-0.5">
                    {language === 'ru' ? col.subtitleRu : col.subtitleEn}
                  </p>
                </div>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#FAF7F2] group-hover:bg-[#B28756] text-[#7E7167] group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
