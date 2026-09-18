import React from 'react';
import { Instagram, Send, Heart, Sparkles, MapPin, Mail, Phone } from 'lucide-react';
import { Language } from '../types';
import { SORI_BURGUNDY } from '../data/soriData';

interface BottomBannerAndFooterProps {
  language: Language;
  onScrollToSection: (sectionId: string) => void;
}

export const BottomBannerAndFooter: React.FC<BottomBannerAndFooterProps> = ({
  language,
  onScrollToSection,
}) => {
  return (
    <footer className="mt-12">
      {/* Dark Emotional Banner (Exact match to screenshot bottom banner) */}
      <div className="relative bg-[#1E1714] text-white py-16 sm:py-24 overflow-hidden">
        
        {/* Background Subtle Gradient & Floral Imagery */}
        <div className="absolute inset-0 bg-radial from-[#3A2A22]/40 via-transparent to-transparent"></div>
        
        {/* Decorative Rose Accent on the Right */}
        <div className="absolute -right-12 -bottom-12 w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden opacity-30 pointer-events-none blur-xs">
          <img
            src={SORI_BURGUNDY}
            alt="Satin Roses"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-[#C49A6C] text-xs uppercase tracking-[0.24em] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sori Creations Atelier</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight font-light tracking-wide text-[#F5EFEB]">
              {language === 'ru' ? (
                <>
                  Дарите чувства,<br />
                  которые остаются<br />
                  в сердце навсегда
                </>
              ) : (
                <>
                  Gift feelings<br />
                  that stay in the heart<br />
                  forever and ever
                </>
              )}
            </h2>
          </div>

          {/* Direct Instagram Order CTA */}
          <div className="flex flex-col items-center sm:items-end gap-3 shrink-0">
            <a
              href="https://instagram.com/sori.creations5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#B28756] hover:bg-[#C49A6C] text-white px-7 py-3.5 rounded-full text-sm font-medium tracking-wide shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <Instagram className="w-4 h-4" />
              <span>{language === 'ru' ? 'Написать в Instagram DM' : 'Message on Instagram DM'}</span>
            </a>
            <span className="text-xs text-[#A8988C]">
              {language === 'ru' ? 'Принимаем заказы и согласовываем дизайн онлайн' : 'Bespoke commissions & order inquiries'}
            </span>
          </div>
        </div>

      </div>

      {/* Main Footer Links & Info */}
      <div className="bg-[#181210] text-[#9E8E82] py-12 border-t border-[#2D231E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#2D231E]">
            
            {/* Column 1: Brand Info */}
            <div className="md:col-span-1">
              <div className="font-serif text-2xl text-[#F5EFEB] font-normal uppercase tracking-wider mb-2">
                Sori Creations
              </div>
              <p className="text-xs leading-relaxed text-[#8A7B70]">
                {language === 'ru'
                  ? 'Студия авторских букетов из атласных лент. Вечные цветы ручной работы, денежные композиции, короны и эксклюзивные подарки.'
                  : 'Exclusive handcrafted satin ribbon flowers, everlasting rose bouquets, money arrangements, and bespoke gift sets.'}
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-[#C49A6C]">
                <Instagram className="w-4 h-4" />
                <a 
                  href="https://instagram.com/sori.creations5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  @sori.creations5
                </a>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.16em] text-[#F5EFEB] font-semibold mb-3">
                {language === 'ru' ? 'Навигация' : 'Navigation'}
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button onClick={() => onScrollToSection('collections')} className="hover:text-white transition-colors">
                    {language === 'ru' ? 'Каталог коллекций' : 'Collections'}
                  </button>
                </li>
                <li>
                  <button onClick={() => onScrollToSection('popular')} className="hover:text-white transition-colors">
                    {language === 'ru' ? 'Популярные букеты' : 'Bestsellers'}
                  </button>
                </li>
                <li>
                  <button onClick={() => onScrollToSection('builder')} className="hover:text-white transition-colors">
                    {language === 'ru' ? 'Конструктор букета' : 'Custom Bouquet Builder'}
                  </button>
                </li>
                <li>
                  <button onClick={() => onScrollToSection('why-us')} className="hover:text-white transition-colors">
                    {language === 'ru' ? 'Преимущества' : 'Why Choose Us'}
                  </button>
                </li>
                <li>
                  <button onClick={() => onScrollToSection('newsletter')} className="hover:text-white transition-colors">
                    {language === 'ru' ? 'Клуб привилегий' : 'Atelier Club'}
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Sori Special Services */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.16em] text-[#F5EFEB] font-semibold mb-3">
                {language === 'ru' ? 'Особенности Sori' : 'Specialties'}
              </h4>
              <ul className="space-y-2 text-xs">
                <li>{language === 'ru' ? 'Букеты из атласных лент' : 'Handmade Satin Ribbon Roses'}</li>
                <li>{language === 'ru' ? 'Инкрустация жемчугом в бутоны' : 'Pearl Pin Rose Centers'}</li>
                <li>{language === 'ru' ? 'Денежные букеты оригами' : 'Money Origami Sunflower Bouquets'}</li>
                <li>{language === 'ru' ? 'Композиции с диадемой и короной' : 'Scalloped Lace & Tiara Dishes'}</li>
                <li>{language === 'ru' ? 'Мини-букеты брелоки' : 'Mini Bouquet Keychains'}</li>
              </ul>
            </div>

            {/* Column 4: Orders & Contact */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.16em] text-[#F5EFEB] font-semibold mb-3">
                {language === 'ru' ? 'Как заказать' : 'How To Order'}
              </h4>
              <p className="text-xs leading-relaxed text-[#8A7B70] mb-3">
                {language === 'ru'
                  ? 'Каждый букет создается вручную. Напишите нам в директ Instagram, чтобы выбрать цвет лент и дату доставки.'
                  : 'Every arrangement is made by hand with love. Send us a message on Instagram DM to reserve your colors and delivery date.'}
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#241C18] border border-[#332822] text-[11px] text-[#C49A6C]">
                <span>DM to order 💌</span>
              </div>
            </div>

          </div>

          {/* Bottom Copyright */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#6E6056] gap-2">
            <div>
              © {new Date().getFullYear()} Sori Creations. {language === 'ru' ? 'Все права защищены.' : 'All rights reserved.'}
            </div>
            <div className="flex items-center gap-4">
              <span>Handmade with love & satin ribbons</span>
              <span>•</span>
              <span>@sori.creations5</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
