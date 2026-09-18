import React from 'react';
import { Heart, ShoppingBag, Instagram, Sparkles, Globe } from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  language: Language;
  onToggleLanguage: () => void;
  favoritesCount: number;
  cartCount: number;
  onOpenCart: () => void;
  onOpenFavorites: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onToggleLanguage,
  favoritesCount,
  cartCount,
  onOpenCart,
  onOpenFavorites,
  onScrollToSection,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#EFE8DF] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => onScrollToSection('hero')} 
          className="cursor-pointer flex items-center gap-3 group"
          id="brand-logo"
        >
          <div className="w-10 h-10 rounded-full bg-[#B28756]/10 border border-[#B28756]/30 flex items-center justify-center text-[#B28756] transition-transform group-hover:rotate-12">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="font-serif text-2xl font-bold tracking-[0.08em] text-[#2D231E] uppercase">
              Sori Creations
            </div>
            <div className="text-[10px] tracking-[0.18em] text-[#8C7D73] uppercase font-medium">
              Handmade Satin Florals Atelier
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4A3E37]">
          <button
            onClick={() => onScrollToSection('collections')}
            className="hover:text-[#B28756] transition-colors"
            id="nav-link-collections"
          >
            {language === 'ru' ? 'Коллекции' : 'Collections'}
          </button>
          <button
            onClick={() => onScrollToSection('popular')}
            className="hover:text-[#B28756] transition-colors"
            id="nav-link-popular"
          >
            {language === 'ru' ? 'Популярные букеты' : 'Bestsellers'}
          </button>
          <button
            onClick={() => onScrollToSection('builder')}
            className="hover:text-[#B28756] transition-colors flex items-center gap-1.5 text-[#B28756]"
            id="nav-link-builder"
          >
            <span>{language === 'ru' ? 'Конструктор' : 'Custom Builder'}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B28756]"></span>
          </button>
          <button
            onClick={() => onScrollToSection('why-us')}
            className="hover:text-[#B28756] transition-colors"
            id="nav-link-why"
          >
            {language === 'ru' ? 'Почему мы' : 'Why Us'}
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Language Switch */}
          <button
            onClick={onToggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#EFE8DF] text-xs font-semibold text-[#5A4D45] hover:border-[#B28756] transition-colors shadow-xs"
            title={language === 'ru' ? 'Switch to English' : 'Переключить на русский'}
            id="lang-toggle-btn"
          >
            <Globe className="w-3.5 h-3.5 text-[#B28756]" />
            <span className="uppercase">{language}</span>
          </button>

          {/* Instagram Link */}
          <a
            href="https://instagram.com/sori.creations5"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF0E6] text-xs font-medium text-[#7A522A] hover:bg-[#F3E2D0] transition-colors"
            id="instagram-header-btn"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>@sori.creations5</span>
          </a>

          {/* Favorites Button */}
          <button
            onClick={onOpenFavorites}
            className="relative p-2 rounded-full hover:bg-white text-[#4A3E37] hover:text-[#B28756] transition-colors"
            title="Wishlist"
            id="header-wishlist-btn"
          >
            <Heart className="w-5 h-5" />
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#B28756] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {favoritesCount}
              </span>
            )}
          </button>

          {/* Shopping Bag Button */}
          <button
            onClick={onOpenCart}
            className="flex items-center gap-2 bg-[#2D231E] hover:bg-[#43352E] text-white px-4 py-2 rounded-full text-xs font-medium transition-colors shadow-xs"
            id="header-cart-btn"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">
              {language === 'ru' ? 'Корзина' : 'Cart'}
            </span>
            <span className="w-5 h-5 bg-[#B28756] text-white text-[11px] font-bold rounded-full flex items-center justify-center ml-1">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
