import React, { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { SORI_PINK_RED } from '../data/soriData';

interface NewsletterSectionProps {
  language: Language;
}

export const NewsletterSection: React.FC<NewsletterSectionProps> = ({ language }) => {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && agreed) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section id="newsletter" className="py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#FAF4ED] rounded-3xl border border-[#EDE2D2] p-8 sm:p-12 custom-shadow-soft overflow-hidden">
          
          {/* Corner Floral Decoration */}
          <div className="absolute -bottom-10 -right-10 w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden pointer-events-none opacity-85 shadow-lg border-4 border-white/60 transform rotate-12">
            <img
              src={SORI_PINK_RED}
              alt="Floral Accent"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Form Content */}
          <div className="relative z-10 max-w-lg">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE4D6] text-[10px] font-bold text-[#8C6239] uppercase tracking-[0.2em] mb-3">
              <Sparkles className="w-3 h-3" />
              <span>{language === 'ru' ? 'Клуб привилегий' : 'Exclusive Atelier Club'}</span>
            </div>
            
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2D231E] leading-tight font-normal">
              {language === 'ru' ? 'Подпишитесь и получайте привилегии' : 'Subscribe & unlock member benefits'}
            </h3>

            <p className="mt-3 text-xs sm:text-sm text-[#7E7167] leading-relaxed">
              {language === 'ru'
                ? 'Скидки, секретные дропы коллекций и вдохновение каждую неделю прямо на вашу почту.'
                : 'Special discounts, private collection drops, and handcrafted inspirations delivered weekly to your inbox.'}
            </p>

            {/* Form */}
            {isSubscribed ? (
              <div className="mt-6 p-4 bg-white/95 rounded-2xl border border-[#B28756]/40 flex items-center gap-2.5 text-xs sm:text-sm text-[#3A2E28] shadow-xs">
                <Check className="w-5 h-5 text-[#B28756] shrink-0" />
                <span>
                  {language === 'ru'
                    ? 'Спасибо за подписку! Промокод на 10% отправлен на вашу почту.'
                    : 'Thank you for subscribing! Your 10% welcome gift code is on the way.'}
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-6 space-y-3">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={language === 'ru' ? 'Ваш e-mail' : 'Your email address'}
                    className="flex-1 bg-white border border-[#E8DFD3] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#2D231E] placeholder:text-[#A89C92] focus:outline-hidden focus:border-[#B28756] shadow-2xs"
                  />
                  <button
                    type="submit"
                    className="bg-[#B28756] hover:bg-[#9E7345] text-white px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wide shadow-xs transition-colors shrink-0"
                  >
                    {language === 'ru' ? 'Подписаться' : 'Subscribe'}
                  </button>
                </div>

                {/* Privacy consent checkbox */}
                <label className="flex items-start gap-2 text-[10px] text-[#8C7D73] cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="accent-[#B28756] w-3.5 h-3.5 mt-0.5 rounded"
                  />
                  <span>
                    {language === 'ru'
                      ? 'Нажимая на кнопку, вы соглашаетесь на обработку персональных данных'
                      : 'By subscribing, you agree to our privacy policy and email updates.'}
                  </span>
                </label>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
