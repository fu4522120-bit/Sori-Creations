import React from 'react';
import { Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import { Language, Product } from '../types';
import { POPULAR_PRODUCTS } from '../data/soriData';

interface PopularBouquetsProps {
  language: Language;
  favorites: string[];
  onToggleFavorite: (productId: string) => void;
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  onViewAllClick: () => void;
}

export const PopularBouquets: React.FC<PopularBouquetsProps> = ({
  language,
  favorites,
  onToggleFavorite,
  onAddToCart,
  onSelectProduct,
  onViewAllClick,
}) => {
  return (
    <section id="popular" className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#9E7345] font-semibold block mb-1">
              {language === 'ru' ? 'Популярные букеты' : 'Popular Bouquets'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2D231E] font-normal tracking-tight">
              {language === 'ru' ? 'Бестселлеры Sori Creations' : 'Sori Creations Bestsellers'}
            </h2>
          </div>

          <button
            onClick={onViewAllClick}
            className="text-xs sm:text-sm font-medium text-[#7E7167] hover:text-[#B28756] flex items-center gap-1.5 group transition-colors"
            id="popular-view-all-btn"
          >
            <span>{language === 'ru' ? 'Смотреть все' : 'View all'}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 6 Product Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {POPULAR_PRODUCTS.map((product) => {
            const isFav = favorites.includes(product.id);

            return (
              <div
                key={product.id}
                className="group bg-white rounded-2xl border border-[#F0EAE1] custom-shadow-card hover:custom-shadow-elevated p-3 sm:p-3.5 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1"
                id={`popular-card-${product.id}`}
              >
                {/* Top Card Area: Image + Badges */}
                <div className="relative">
                  {/* Badge */}
                  {product.tag && (
                    <div className="absolute top-2 left-2 z-10 bg-[#2D231E] text-white text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-xs">
                      {language === 'ru' ? (product.tagRu || product.tag) : (product.tagEn || product.tag)}
                    </div>
                  )}

                  {/* Favorite Toggle Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleFavorite(product.id);
                    }}
                    className="absolute top-2 right-2 z-10 w-7 h-7 rounded-full bg-white/85 backdrop-blur-xs flex items-center justify-center text-[#7E7167] hover:text-[#B28756] transition-colors shadow-2xs"
                    title="Add to wishlist"
                    id={`fav-btn-${product.id}`}
                  >
                    <Heart
                      className={`w-3.5 h-3.5 ${isFav ? 'fill-[#B28756] text-[#B28756]' : ''}`}
                    />
                  </button>

                  {/* Product Image Container */}
                  <div
                    onClick={() => onSelectProduct(product)}
                    className="w-full aspect-square rounded-xl overflow-hidden bg-[#FAF7F2] cursor-pointer mb-3"
                  >
                    <img
                      src={product.image}
                      alt={language === 'ru' ? product.nameRu : product.nameEn}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Bottom Details & Add to Cart */}
                <div className="flex flex-col flex-1 justify-between pt-1">
                  <div 
                    onClick={() => onSelectProduct(product)} 
                    className="cursor-pointer min-h-[36px]"
                  >
                    <h3 className="text-xs sm:text-[13px] font-medium text-[#2D231E] line-clamp-2 leading-snug group-hover:text-[#B28756] transition-colors">
                      {language === 'ru' ? product.nameRu : product.nameEn}
                    </h3>
                  </div>

                  <div className="mt-3 pt-2 border-t border-[#F7F2EA] flex items-center justify-between">
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-[#2D231E]">
                        {language === 'ru'
                          ? `${product.price.toLocaleString()} ₽`
                          : `$${product.priceUsd ?? Math.round(product.price / 65)}`}
                      </div>
                      {(product.originalPrice || product.originalPriceUsd) && (
                        <div className="text-[10px] text-[#A89C92] line-through">
                          {language === 'ru'
                            ? `${product.originalPrice?.toLocaleString()} ₽`
                            : `$${product.originalPriceUsd ?? Math.round((product.originalPrice || 0) / 65)}`}
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => onAddToCart(product)}
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#B28756] hover:bg-[#9E7345] text-white flex items-center justify-center transition-all transform active:scale-95 shadow-xs"
                      title={language === 'ru' ? 'В корзину' : 'Add to cart'}
                      id={`add-cart-btn-${product.id}`}
                    >
                      <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
