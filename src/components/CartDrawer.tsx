import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, Instagram, Send, Check, Sparkles, ArrowRight } from 'lucide-react';
import { Language, Product } from '../types';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  language,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);
  const [orderSent, setOrderSent] = useState(false);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const subtotalUsd = cartItems.reduce(
    (acc, item) =>
      acc + (item.product.priceUsd ?? Math.round(item.product.price / 65)) * item.quantity,
    0
  );

  const generateOrderText = () => {
    const lines = cartItems.map(
      (item, i) => {
        const itemPriceUsd = (item.product.priceUsd ?? Math.round(item.product.price / 65)) * item.quantity;
        return `${i + 1}. ${item.product.nameEn} x${item.quantity} - $${itemPriceUsd} (${item.product.price * item.quantity} ₽)`;
      }
    );

    return `Hello Sori Creations! 🌸\nI would like to place an order for:\n\n${lines.join('\n')}\n\nTotal: $${subtotalUsd} (${subtotal.toLocaleString()} ₽)\n\nPlease let me know your shipping availability!`;
  };

  const handleCopyOrder = () => {
    const text = generateOrderText();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleInstagramDM = () => {
    const text = encodeURIComponent(generateOrderText());
    window.open(`https://ig.me/m/sori.creations5?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-xs flex justify-end animate-fade-in">
      <div 
        className="w-full max-w-md bg-[#FAF7F2] h-full shadow-2xl flex flex-col border-l border-[#EDE2D2]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-white border-b border-[#EFE8DF] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#B28756]" />
            <h3 className="font-serif text-xl text-[#2D231E]">
              {language === 'ru' ? 'Ваша корзина' : 'Your Shopping Bag'}
            </h3>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#FAF0E6] text-[#8C6239]">
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-[#FAF7F2] flex items-center justify-center text-[#7E7167] hover:text-[#2D231E] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 text-[#8C7D73]">
              <div className="w-16 h-16 rounded-full bg-white mx-auto flex items-center justify-center text-[#B28756] mb-3 border border-[#EFE8DF]">
                <ShoppingBag className="w-8 h-8 opacity-40" />
              </div>
              <p className="text-sm font-medium text-[#2D231E]">
                {language === 'ru' ? 'Корзина пуста' : 'Your bag is empty'}
              </p>
              <p className="text-xs text-[#8C7D73] mt-1">
                {language === 'ru' ? 'Выберите букет из каталога или соберите свой' : 'Explore popular bouquets or build a custom one'}
              </p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.product.id}
                className="bg-white rounded-2xl p-3.5 border border-[#EFE8DF] custom-shadow-card flex gap-3 items-center"
              >
                <img
                  src={item.product.image}
                  alt={item.product.nameRu}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 rounded-xl object-cover shrink-0 bg-[#FAF7F2]"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-semibold text-[#2D231E] truncate">
                    {language === 'ru' ? item.product.nameRu : item.product.nameEn}
                  </h4>
                  <div className="text-xs font-bold text-[#B28756] mt-0.5">
                    {language === 'ru'
                      ? `${(item.product.price * item.quantity).toLocaleString()} ₽`
                      : `$${(item.product.priceUsd ?? Math.round(item.product.price / 65)) * item.quantity}`}
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center bg-[#FAF7F2] rounded-lg border border-[#EDE2D2] px-2 py-0.5">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, -1)}
                        className="text-xs font-bold text-[#5A4D45] hover:text-[#B28756] px-1"
                      >
                        -
                      </button>
                      <span className="text-[11px] font-semibold text-[#2D231E] px-2">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, 1)}
                        className="text-xs font-bold text-[#5A4D45] hover:text-[#B28756] px-1"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-[#A89C92] hover:text-red-500 transition-colors p-1"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with Checkout / Instagram DM */}
        {cartItems.length > 0 && (
          <div className="p-6 bg-white border-t border-[#EFE8DF] space-y-3">
            <div className="flex justify-between items-baseline">
              <span className="text-xs uppercase tracking-wider text-[#8C7D73] font-semibold">
                {language === 'ru' ? 'Итого:' : 'Subtotal:'}
              </span>
              <span className="text-xl font-bold text-[#2D231E]">
                {language === 'ru' ? `${subtotal.toLocaleString()} ₽` : `$${subtotalUsd}`}
              </span>
            </div>

            <div className="text-[11px] text-[#8C7D73] flex items-center gap-1.5 bg-[#FAF7F2] p-2.5 rounded-xl border border-[#EDE2D2]">
              <Sparkles className="w-3.5 h-3.5 text-[#B28756] shrink-0" />
              <span>
                {language === 'ru'
                  ? 'Премиальная упаковка и открытка включены в подарок!'
                  : 'Complimentary luxury gift wrapping & greeting card included!'}
              </span>
            </div>

            {/* Instagram DM Primary Order Button */}
            <button
              onClick={handleInstagramDM}
              className="w-full bg-[#B28756] hover:bg-[#9E7345] text-white py-3 px-4 rounded-xl text-xs font-semibold tracking-wide flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <Instagram className="w-4 h-4" />
              <span>{language === 'ru' ? 'Заказать через Instagram DM' : 'Order via Instagram DM'}</span>
            </button>

            {/* Copy order summary */}
            <button
              onClick={handleCopyOrder}
              className="w-full bg-[#FAF7F2] hover:bg-[#F2ECE3] border border-[#EDE2D2] text-[#4A3E37] py-2.5 px-4 rounded-xl text-xs font-medium flex items-center justify-center gap-2 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">
                    {language === 'ru' ? 'Текст заказа скопирован!' : 'Order details copied!'}
                  </span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5 text-[#B28756]" />
                  <span>
                    {language === 'ru' ? 'Скопировать текст для WhatsApp / Сообщений' : 'Copy order text for WhatsApp / DM'}
                  </span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
