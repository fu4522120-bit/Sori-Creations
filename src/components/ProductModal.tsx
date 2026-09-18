import React, { useState } from 'react';
import { X, Heart, ShoppingBag, Check, Sparkles, Instagram, ArrowRight } from 'lucide-react';
import { Language, Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  language: Language;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  language,
  isFavorite,
  onToggleFavorite,
  onAddToCart,
  onClose,
}) => {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 900);
  };

  const getInstagramDMUrl = () => {
    const text = encodeURIComponent(
      `Hello Sori Creations! I would like to order: "${product.nameEn}" ($${Math.round(product.price / 65)} / ${product.price} RUB). Quantity: ${quantity}. Please let me know availability!`
    );
    return `https://ig.me/m/sori.creations5?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden border border-[#EDE2D2] custom-shadow-elevated flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/80 backdrop-blur-xs flex items-center justify-center text-[#7E7167] hover:text-[#2D231E] transition-colors shadow-xs"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left: Product Image */}
        <div className="md:w-1/2 relative bg-[#FAF7F2] aspect-square md:aspect-auto">
          <img
            src={product.image}
            alt={language === 'ru' ? product.nameRu : product.nameEn}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />

          {product.tag && (
            <div className="absolute top-4 left-4 bg-[#2D231E] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
              {language === 'ru' ? (product.tagRu || product.tag) : (product.tagEn || product.tag)}
            </div>
          )}
        </div>

        {/* Right: Details & Order */}
        <div className="md:w-1/2 p-6 sm:p-7 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E7345] font-semibold block">
                  {product.category}
                </span>
                <h3 className="font-serif text-2xl text-[#2D231E] font-normal mt-0.5 leading-snug">
                  {language === 'ru' ? product.nameRu : product.nameEn}
                </h3>
              </div>

              <button
                onClick={() => onToggleFavorite(product.id)}
                className="w-8 h-8 rounded-full bg-[#FAF7F2] flex items-center justify-center text-[#7E7167] hover:text-[#B28756] transition-colors shrink-0"
              >
                <Heart className={`w-4 h-4 ${isFavorite ? 'fill-[#B28756] text-[#B28756]' : ''}`} />
              </button>
            </div>

            {/* Price */}
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-xl font-bold text-[#2D231E]">
                {language === 'ru'
                  ? `${product.price.toLocaleString()} ₽`
                  : `$${product.priceUsd ?? Math.round(product.price / 65)}`}
              </span>
              {(product.originalPrice || product.originalPriceUsd) && (
                <span className="text-xs text-[#A89C92] line-through">
                  {language === 'ru'
                    ? `${product.originalPrice?.toLocaleString()} ₽`
                    : `$${product.originalPriceUsd ?? Math.round((product.originalPrice || 0) / 65)}`}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="mt-3 text-xs text-[#7E7167] leading-relaxed">
              {language === 'ru' ? product.descriptionRu : product.descriptionEn}
            </p>

            {/* Details list */}
            <div className="mt-4 pt-3 border-t border-[#F5EFEB] space-y-1.5">
              {(language === 'ru' ? product.detailsRu : product.detailsEn).map((d, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#4A3E37]">
                  <Sparkles className="w-3 h-3 text-[#B28756] shrink-0" />
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="mt-6 pt-4 border-t border-[#F5EFEB] space-y-3">
            {/* Quantity Selector */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#8C7D73] font-medium">
                {language === 'ru' ? 'Количество:' : 'Quantity:'}
              </span>
              <div className="flex items-center gap-3 bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#EDE2D2]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-sm font-bold text-[#5A4D45] hover:text-[#B28756]"
                >
                  -
                </button>
                <span className="text-xs font-semibold text-[#2D231E] min-w-4 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-sm font-bold text-[#5A4D45] hover:text-[#B28756]"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-2">
              <button
                onClick={handleAdd}
                className="w-full bg-[#B28756] hover:bg-[#9E7345] text-white py-2.5 px-4 rounded-xl text-xs font-semibold tracking-wide flex items-center justify-center gap-2 shadow-xs transition-all"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>{language === 'ru' ? 'Добавлено в корзину' : 'Added to cart'}</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>{language === 'ru' ? 'Добавить в корзину' : 'Add to cart'}</span>
                  </>
                )}
              </button>

              <a
                href={getInstagramDMUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#2D231E] hover:bg-[#43352E] text-white py-2.5 px-4 rounded-xl text-xs font-semibold tracking-wide flex items-center justify-center gap-2 transition-all"
              >
                <Instagram className="w-4 h-4 text-[#C49A6C]" />
                <span>{language === 'ru' ? 'Заказать в Instagram DM' : 'Order via Instagram DM'}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
