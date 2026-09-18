import React from 'react';
import { Language } from '../types';
import { Sparkles, Gift, Truck, Mail, Camera, HeartHandshake } from 'lucide-react';

interface WhyChooseUsProps {
  language: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ language }) => {
  const items = [
    {
      id: 'why-1',
      titleRu: 'Премиальные атласные ленты',
      titleEn: 'Handpicked Satin Ribbons',
      descRu: 'Благородный шелковистый блеск, не осыпаются и не выцветают',
      descEn: 'Luxury silky sheen, never withers, crafted to last forever',
      badge: 'Forever',
      icon: (
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#F5E6DC] to-[#FFF5ED] flex items-center justify-center text-[#B28756] border border-[#ECD9CE] shadow-xs group-hover:scale-105 transition-transform">
          <Sparkles className="w-8 h-8" />
        </div>
      ),
    },
    {
      id: 'why-2',
      titleRu: 'Стильная упаковка в подарок',
      titleEn: 'Luxury Gift Wrap Included',
      descRu: 'Многослойная корейская бумага, банты и фирменная коробка',
      descEn: 'Layered Korean matte wrapping, satin bow & boutique boxing',
      badge: 'Free Gift',
      icon: (
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#FCECEE] to-[#FFF5F6] flex items-center justify-center text-[#E17A8C] border border-[#FAD3D9] shadow-xs group-hover:scale-105 transition-transform">
          <Gift className="w-8 h-8" />
        </div>
      ),
    },
    {
      id: 'why-3',
      titleRu: 'Бережная доставка точно в срок',
      titleEn: 'Careful On-Time Delivery',
      descRu: 'Надежная фиксация каждого бутона при транспортировке',
      descEn: 'Shockproof protective shipping across USA & worldwide',
      badge: 'Express',
      icon: (
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#EAF0F6] to-[#F5F8FC] flex items-center justify-center text-[#5A7E9E] border border-[#D5E1ED] shadow-xs group-hover:scale-105 transition-transform">
          <Truck className="w-8 h-8" />
        </div>
      ),
    },
    {
      id: 'why-4',
      titleRu: 'Открытка с вашими словами',
      titleEn: 'Letter with Wax Seal',
      descRu: 'Крафтовая открытка с сургучной печатью и личным пожеланием',
      descEn: 'Handwritten parchment card with authentic sealing wax stamp',
      badge: 'Personal',
      icon: (
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#F7EFE8] to-[#FFFBF7] flex items-center justify-center text-[#9E5A47] border border-[#E8DACD] shadow-xs group-hover:scale-105 transition-transform">
          <Mail className="w-8 h-8" />
        </div>
      ),
    },
    {
      id: 'why-5',
      titleRu: 'Фото букета перед отправкой',
      titleEn: 'Photo Proof Before Shipping',
      descRu: 'Отправляем видео и фото в Instagram DM перед отправкой',
      descEn: 'Full video and high-res photos shared in DM for approval',
      badge: 'Verified',
      icon: (
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#F5EFE6] to-[#FFFDF9] flex items-center justify-center text-[#9E7D5A] border border-[#E8DECE] shadow-xs group-hover:scale-105 transition-transform">
          <Camera className="w-8 h-8" />
        </div>
      ),
    },
  ];

  return (
    <section id="why-us" className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.24em] text-[#8C7D73] font-semibold block">
            {language === 'ru' ? 'Почему нас выбирают' : 'Why Choose Sori Creations'}
          </span>
          <div className="w-12 h-0.5 bg-[#B28756]/40 mx-auto mt-2.5 rounded-full"></div>
        </div>

        {/* 5 Cards Row matching reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="group bg-white/80 hover:bg-white rounded-2xl border border-[#F0EAE1] hover:border-[#E8DEC8] p-5 sm:p-6 flex flex-col items-center text-center custom-shadow-soft hover:custom-shadow-elevated transition-all duration-300 transform hover:-translate-y-1"
              id={item.id}
            >
              {/* Visual Icon Container */}
              <div className="mb-4">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xs sm:text-sm font-semibold text-[#2D231E] leading-snug min-h-[32px] flex items-center justify-center">
                {language === 'ru' ? item.titleRu : item.titleEn}
              </h3>

              {/* Description */}
              <p className="mt-2 text-[11px] text-[#8C7D73] leading-relaxed">
                {language === 'ru' ? item.descRu : item.descEn}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
