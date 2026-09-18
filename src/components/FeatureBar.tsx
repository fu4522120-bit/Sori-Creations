import React from 'react';
import { ShieldCheck, Truck, Camera, Gift, Headphones } from 'lucide-react';
import { Language } from '../types';
import { FEATURES_DATA } from '../data/soriData';

interface FeatureBarProps {
  language: Language;
}

export const FeatureBar: React.FC<FeatureBarProps> = ({ language }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#B28756]" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-[#B28756]" />;
      case 'Camera':
        return <Camera className="w-5 h-5 text-[#B28756]" />;
      case 'Gift':
        return <Gift className="w-5 h-5 text-[#B28756]" />;
      case 'Headset':
      default:
        return <Headphones className="w-5 h-5 text-[#B28756]" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-[#F0EAE1] custom-shadow-soft px-4 py-5 sm:px-6 sm:py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-2 divide-y lg:divide-y-0 lg:divide-x divide-[#F2ECE3]">
          {FEATURES_DATA.map((item, idx) => (
            <div
              key={item.id}
              className={`flex items-center gap-3.5 px-3 py-2 ${idx !== 0 ? 'pt-3 lg:pt-0' : ''}`}
            >
              <div className="w-10 h-10 rounded-full bg-[#FAF4ED] flex items-center justify-center shrink-0 border border-[#F0E5D8]">
                {getIcon(item.iconName)}
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-[13px] font-semibold text-[#2D231E] truncate">
                  {language === 'ru' ? item.titleRu : item.titleEn}
                </div>
                <div className="text-[11px] text-[#8C7D73] truncate">
                  {language === 'ru' ? item.subtitleRu : item.subtitleEn}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
