import React from 'react';
import { X, Sparkles, Instagram, Play } from 'lucide-react';
import { Language } from '../types';
import { SORI_BLUE_WHITE } from '../data/soriData';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-[#1F1714] text-white rounded-3xl overflow-hidden border border-[#3A2D25] shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-white/80 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Video Simulation Preview with Audio & Motion */}
        <div className="relative aspect-9/16 sm:aspect-4/5 w-full bg-black overflow-hidden flex items-center justify-center">
          <img
            src={SORI_BLUE_WHITE}
            alt="Studio Craft Video Preview"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-85"
          />

          {/* Video Overlay Info */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 flex flex-col justify-between p-6">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></div>
              <span className="text-xs uppercase tracking-wider font-semibold text-white/90">
                Sori Creations Studio Craft
              </span>
            </div>

            <div className="space-y-3">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
                  {language === 'ru' ? 'Искусство атласных роз' : 'The Art of Satin Ribbon Roses'}
                </h3>
                <p className="mt-1.5 text-xs text-white/75 leading-relaxed">
                  {language === 'ru'
                    ? 'Каждый лепесток складывается вручную с любовью, создавая вечную композицию, которая никогда не завянет.'
                    : 'Each petal is folded by hand with passion from luxury satin ribbons, crafted to remain a cherished forever keepsake.'}
                </p>
              </div>

              <a
                href="https://instagram.com/sori.creations5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#B28756] hover:bg-[#C49A6C] text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-colors shadow-md"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>{language === 'ru' ? 'Смотреть Reels в Instagram' : 'Watch Reels on Instagram'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
