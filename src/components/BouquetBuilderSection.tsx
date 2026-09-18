import React, { useState } from 'react';
import { Sparkles, ArrowRight, Check, Plus, Crown, Gift, Palette, Layers, Bookmark, HeartHandshake } from 'lucide-react';
import { Language, CustomBouquetConfig } from '../types';
import { BUILDER_IMAGE, SORI_BLUE_WHITE, SORI_LACE_CROWN, SORI_MONEY, SORI_BURGUNDY } from '../data/soriData';

interface BouquetBuilderSectionProps {
  language: Language;
  onOrderCustomBouquet: (config: CustomBouquetConfig, totalPrice: number) => void;
}

export const BouquetBuilderSection: React.FC<BouquetBuilderSectionProps> = ({
  language,
  onOrderCustomBouquet,
}) => {
  const [activeTab, setActiveTab] = useState<'colors' | 'wrap' | 'toppers' | 'ribbon' | 'card' | 'pearls'>('colors');

  // Custom bouquet state
  const [config, setConfig] = useState<CustomBouquetConfig>({
    flowerCount: 19,
    primaryColor: 'royal-blue',
    secondaryColor: 'pure-white',
    wrappingPaper: 'korean-black-white',
    pearlPins: true,
    crownTiara: false,
    birthdayTopper: true,
    cashOrigami: false,
    cashAmount: 50,
    ribbonBow: 'white-silk',
    cardMessage: 'С наилучшими пожеланиями!',
    fragranceScent: 'rose-vanilla',
  });

  // Calculate pricing dynamically
  const baseFlowerPrice = config.flowerCount * 220; // 220 RUB per handcrafted satin rose
  const pearlsPrice = config.pearlPins ? 450 : 0;
  const crownPrice = config.crownTiara ? 950 : 0;
  const topperPrice = config.birthdayTopper ? 400 : 0;
  const cashCraftFee = config.cashOrigami ? 800 : 0;
  const wrapPrice = 350;
  const ribbonPrice = 200;

  const totalPrice = baseFlowerPrice + pearlsPrice + crownPrice + topperPrice + cashCraftFee + wrapPrice + ribbonPrice;

  // Color options
  const colorOptions = [
    { id: 'royal-blue', nameRu: 'Королевский синий', nameEn: 'Royal Blue', hex: '#1E3A8A' },
    { id: 'pure-white', nameRu: 'Белоснежный шелк', nameEn: 'Pure White Silk', hex: '#FFFFFF' },
    { id: 'dusty-pink', nameRu: 'Нежно-розовый', nameEn: 'Baby Blush Pink', hex: '#F472B6' },
    { id: 'chocolate', nameRu: 'Шоколадный', nameEn: 'Rich Chocolate', hex: '#5C3317' },
    { id: 'amber-yellow', nameRu: 'Янтарно-желтый', nameEn: 'Amber Gold', hex: '#EAB308' },
    { id: 'burgundy', nameRu: 'Винный бордо', nameEn: 'Deep Burgundy', hex: '#831843' },
  ];

  // Wrap options
  const wrapOptions = [
    { id: 'korean-black-white', nameRu: 'Черно-белая корейская', nameEn: 'Korean Black & White' },
    { id: 'soft-blush', nameRu: 'Нежно-пудровая матовая', nameEn: 'Soft Blush Frosted' },
    { id: 'fuchsia-magenta', nameRu: 'Яркая фуксия', nameEn: 'Fuchsia Magenta' },
    { id: 'lace-bowl', nameRu: 'Кружевное кашпо с бусинами', nameEn: 'Ruffled Lace Dish' },
  ];

  // Ribbon options
  const ribbonOptions = [
    { id: 'white-silk', nameRu: 'Белая атласная лента', nameEn: 'White Satin Bow' },
    { id: 'gold-satin', nameRu: 'Золотая лента шампань', nameEn: 'Gold Champagne Ribbon' },
    { id: 'black-velvet', nameRu: 'Черный бархат', nameEn: 'Black Velvet Ribbon' },
  ];

  // Image preview selector based on options
  const getPreviewImage = () => {
    if (config.crownTiara) return SORI_LACE_CROWN;
    if (config.cashOrigami) return SORI_MONEY;
    if (config.primaryColor === 'burgundy') return SORI_BURGUNDY;
    if (config.primaryColor === 'royal-blue') return SORI_BLUE_WHITE;
    return BUILDER_IMAGE;
  };

  return (
    <section id="builder" className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Builder Card Container */}
        <div className="bg-[#FAF4ED] rounded-3xl border border-[#EDE2D2] p-6 sm:p-8 lg:p-10 custom-shadow-soft relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Heading & Description */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-[#EFE4D6] text-[11px] font-semibold text-[#8C6239] uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{language === 'ru' ? 'Конструктор букета' : 'Bouquet Builder'}</span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#2D231E] leading-tight font-normal">
                {language === 'ru' ? 'Создайте букет своей мечты' : 'Create your dream custom bouquet'}
              </h2>

              {/* Description */}
              <p className="mt-4 text-sm text-[#7E7167] leading-relaxed">
                {language === 'ru'
                  ? 'Выбирайте любимые цвета атласных лент, количество роз, жемчужные сердцевины, топпер или корону, и мы бережно соберем уникальную композицию.'
                  : 'Select your favorite satin ribbon colors, rose quantity, pearl centerpins, custom acrylic toppers, or tiara crown, and our atelier will handcraft your bespoke forever bouquet.'}
              </p>

              {/* Action Button */}
              <div className="mt-8">
                <button
                  onClick={() => onOrderCustomBouquet(config, totalPrice)}
                  className="inline-flex items-center gap-2 bg-[#B28756] hover:bg-[#9E7345] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide shadow-md transition-all group"
                  id="builder-create-btn"
                >
                  <span>{language === 'ru' ? 'Собрать и заказать' : 'Customize & Order'}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              {/* Instagram direct notice */}
              <div className="mt-6 flex items-center gap-2 text-xs text-[#8C7D73]">
                <HeartHandshake className="w-4 h-4 text-[#B28756] shrink-0" />
                <span>{language === 'ru' ? 'Согласовываем фото букета в Instagram DM' : 'Full photo & video proof sent via Instagram DM'}</span>
              </div>
            </div>

            {/* Center Column: Interactive Controls & Visual Preview */}
            <div className="lg:col-span-4 flex flex-col items-center">
              
              {/* Category Pills Bar */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-white/70 backdrop-blur-xs rounded-full border border-[#E8DFD3] mb-5 w-full max-w-sm">
                <button
                  onClick={() => setActiveTab('colors')}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activeTab === 'colors' ? 'bg-[#2D231E] text-white shadow-xs' : 'text-[#7E7167] hover:text-[#2D231E]'
                  }`}
                >
                  {language === 'ru' ? 'Цвета' : 'Colors'}
                </button>
                <button
                  onClick={() => setActiveTab('wrap')}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activeTab === 'wrap' ? 'bg-[#2D231E] text-white shadow-xs' : 'text-[#7E7167] hover:text-[#2D231E]'
                  }`}
                >
                  {language === 'ru' ? 'Упаковка' : 'Wrap'}
                </button>
                <button
                  onClick={() => setActiveTab('toppers')}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activeTab === 'toppers' ? 'bg-[#2D231E] text-white shadow-xs' : 'text-[#7E7167] hover:text-[#2D231E]'
                  }`}
                >
                  {language === 'ru' ? 'Детали' : 'Accents'}
                </button>
                <button
                  onClick={() => setActiveTab('pearls')}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activeTab === 'pearls' ? 'bg-[#2D231E] text-white shadow-xs' : 'text-[#7E7167] hover:text-[#2D231E]'
                  }`}
                >
                  {language === 'ru' ? 'Жемчуг' : 'Pearls'}
                </button>
              </div>

              {/* Interactive Visual Preview Box */}
              <div className="relative w-full max-w-[320px] aspect-square rounded-2xl overflow-hidden bg-white border border-[#EAE1D5] custom-shadow-soft flex items-center justify-center group">
                <img
                  src={getPreviewImage()}
                  alt="Custom Bouquet Preview"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-all duration-500"
                />

                {/* Floating Elements Badges on image */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  {config.birthdayTopper && (
                    <span className="bg-white/90 backdrop-blur-xs text-[10px] font-bold text-[#8C6239] px-2.5 py-1 rounded-full shadow-2xs border border-[#F0EAE1]">
                      🎂 Topper
                    </span>
                  )}
                  {config.crownTiara && (
                    <span className="bg-white/90 backdrop-blur-xs text-[10px] font-bold text-[#8C6239] px-2.5 py-1 rounded-full shadow-2xs border border-[#F0EAE1] flex items-center gap-1">
                      <Crown className="w-3 h-3 text-[#B28756]" /> Crown
                    </span>
                  )}
                  {config.pearlPins && (
                    <span className="bg-white/90 backdrop-blur-xs text-[10px] font-bold text-[#4A3E37] px-2.5 py-1 rounded-full shadow-2xs border border-[#F0EAE1]">
                      ✨ Pearls
                    </span>
                  )}
                </div>

                {/* Add Element Quick Pill */}
                <div className="absolute bottom-3 inset-x-3 flex justify-center">
                  <button
                    onClick={() => setActiveTab('toppers')}
                    className="bg-white/90 hover:bg-white backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] font-medium text-[#2D231E] border border-[#EDE4D8] shadow-xs flex items-center gap-1.5 transition-all"
                  >
                    <Plus className="w-3.5 h-3.5 text-[#B28756]" />
                    <span>{language === 'ru' ? 'Добавить элемент' : 'Add element'}</span>
                  </button>
                </div>
              </div>

              {/* Controls Drawer according to activeTab */}
              <div className="mt-4 w-full max-w-sm bg-white/80 backdrop-blur-xs rounded-xl p-3 border border-[#E8DFD3]">
                {activeTab === 'colors' && (
                  <div>
                    <div className="text-[11px] font-semibold text-[#8C7D73] uppercase mb-2">
                      {language === 'ru' ? 'Основной цвет роз' : 'Primary Ribbon Color'}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {colorOptions.map((c) => (
                        <button
                          key={c.id}
                          onClick={() => setConfig({ ...config, primaryColor: c.id })}
                          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] border transition-all ${
                            config.primaryColor === c.id
                              ? 'border-[#B28756] bg-[#FAF4ED] text-[#2D231E] font-medium ring-1 ring-[#B28756]'
                              : 'border-[#EAE1D5] bg-white text-[#7E7167]'
                          }`}
                        >
                          <span
                            className="w-3 h-3 rounded-full border border-black/20"
                            style={{ backgroundColor: c.hex }}
                          />
                          <span>{language === 'ru' ? c.nameRu : c.nameEn}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'wrap' && (
                  <div>
                    <div className="text-[11px] font-semibold text-[#8C7D73] uppercase mb-2">
                      {language === 'ru' ? 'Стиль упаковки' : 'Wrapping Style'}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {wrapOptions.map((w) => (
                        <button
                          key={w.id}
                          onClick={() => setConfig({ ...config, wrappingPaper: w.id })}
                          className={`flex items-center justify-between px-3 py-1.5 rounded-lg text-xs transition-all ${
                            config.wrappingPaper === w.id
                              ? 'bg-[#FAF4ED] border border-[#B28756] text-[#2D231E] font-medium'
                              : 'bg-white border border-[#EAE1D5] text-[#7E7167]'
                          }`}
                        >
                          <span>{language === 'ru' ? w.nameRu : w.nameEn}</span>
                          {config.wrappingPaper === w.id && <Check className="w-3.5 h-3.5 text-[#B28756]" />}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'toppers' && (
                  <div className="space-y-2">
                    <label className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#EAE1D5] cursor-pointer text-xs">
                      <span className="flex items-center gap-2 text-[#2D231E]">
                        🎂 {language === 'ru' ? 'Топпер "Happy Birthday"' : 'Golden "Happy Birthday" topper'}
                      </span>
                      <input
                        type="checkbox"
                        checked={config.birthdayTopper}
                        onChange={(e) => setConfig({ ...config, birthdayTopper: e.target.checked })}
                        className="accent-[#B28756] w-4 h-4 rounded"
                      />
                    </label>

                    <label className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#EAE1D5] cursor-pointer text-xs">
                      <span className="flex items-center gap-2 text-[#2D231E]">
                        👑 {language === 'ru' ? 'Мини-диадема (Корона)' : 'Mini crystal tiara crown'}
                      </span>
                      <input
                        type="checkbox"
                        checked={config.crownTiara}
                        onChange={(e) => setConfig({ ...config, crownTiara: e.target.checked })}
                        className="accent-[#B28756] w-4 h-4 rounded"
                      />
                    </label>

                    <label className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#EAE1D5] cursor-pointer text-xs">
                      <span className="flex items-center gap-2 text-[#2D231E]">
                        💵 {language === 'ru' ? 'Лепестки из купюр (Money)' : 'Money origami cash petals'}
                      </span>
                      <input
                        type="checkbox"
                        checked={config.cashOrigami}
                        onChange={(e) => setConfig({ ...config, cashOrigami: e.target.checked })}
                        className="accent-[#B28756] w-4 h-4 rounded"
                      />
                    </label>
                  </div>
                )}

                {activeTab === 'pearls' && (
                  <div className="space-y-2 text-xs">
                    <label className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#EAE1D5] cursor-pointer">
                      <span className="text-[#2D231E]">
                        ✨ {language === 'ru' ? 'Жемчужины в каждой сердцевине' : 'Pearl pins inside every rose'}
                      </span>
                      <input
                        type="checkbox"
                        checked={config.pearlPins}
                        onChange={(e) => setConfig({ ...config, pearlPins: e.target.checked })}
                        className="accent-[#B28756] w-4 h-4 rounded"
                      />
                    </label>
                    <div className="text-[11px] text-[#8C7D73] px-1">
                      {language === 'ru'
                        ? 'Сияющие перламутровые бусины надежно закреплены в центре каждого бутона.'
                        : 'Luminous faux pearl beads carefully pinned into the center of each satin rosebud.'}
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* Right Column: "Ваш букет" Summary Card (Exact match to screenshot) */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-2xl p-6 border border-[#EFE8DF] custom-shadow-card">
                
                <h3 className="text-base font-semibold text-[#2D231E] pb-3 border-b border-[#F5EFEB]">
                  {language === 'ru' ? 'Ваш букет' : 'Your Bouquet'}
                </h3>

                {/* Itemized list matching the screenshot's exact right card */}
                <div className="py-4 space-y-3 text-xs text-[#4A3E37]">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#F472B6]"></span>
                      <span>{language === 'ru' ? 'Атласные розы (шелковые)' : 'Satin ribbon roses'}</span>
                    </span>
                    <span className="font-semibold text-[#2D231E]">
                      {config.flowerCount} {language === 'ru' ? 'шт.' : 'roses'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#1E3A8A]"></span>
                      <span>{language === 'ru' ? 'Основной тон' : 'Primary shade'}</span>
                    </span>
                    <span className="font-medium capitalize text-[#7E7167]">{config.primaryColor.replace('-', ' ')}</span>
                  </div>

                  {config.pearlPins && (
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#FDE047]"></span>
                        <span>{language === 'ru' ? 'Жемчужные бусины' : 'Embedded pearl pins'}</span>
                      </span>
                      <span className="font-semibold text-[#2D231E]">
                        {config.flowerCount} {language === 'ru' ? 'шт.' : 'pins'}
                      </span>
                    </div>
                  )}

                  {config.birthdayTopper && (
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#B28756]"></span>
                        <span>{language === 'ru' ? 'Топпер Happy Birthday' : 'Acrylic birthday topper'}</span>
                      </span>
                      <span className="font-semibold text-[#2D231E]">
                        1 {language === 'ru' ? 'шт.' : 'pc'}
                      </span>
                    </div>
                  )}

                  {config.crownTiara && (
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#B28756]"></span>
                        <span>{language === 'ru' ? 'Сверкающая диадема' : 'Crystal mini tiara'}</span>
                      </span>
                      <span className="font-semibold text-[#2D231E]">
                        1 {language === 'ru' ? 'шт.' : 'pc'}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#A89C92]"></span>
                      <span>{language === 'ru' ? 'Матовая упаковка' : 'Designer wrapping'}</span>
                    </span>
                    <span className="font-semibold text-[#2D231E]">
                      1 {language === 'ru' ? 'компл.' : 'set'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#D4C5B5]"></span>
                      <span>{language === 'ru' ? 'Лента атласная' : 'Satin ribbon bow'}</span>
                    </span>
                    <span className="font-semibold text-[#2D231E]">
                      1 {language === 'ru' ? 'шт.' : 'pc'}
                    </span>
                  </div>
                </div>

                {/* Divider and Total */}
                <div className="pt-4 border-t border-[#F5EFEB] flex items-baseline justify-between mb-5">
                  <span className="text-xs uppercase tracking-wider text-[#8C7D73] font-semibold">
                    {language === 'ru' ? 'Итого:' : 'Total:'}
                  </span>
                  <div className="text-right">
                    <div className="text-xl font-bold text-[#2D231E]">
                      {language === 'ru' ? `${totalPrice.toLocaleString()} ₽` : `$${Math.round(totalPrice / 65)}`}
                    </div>
                    <div className="text-[10px] text-[#9E7345]">
                      {language === 'ru' ? 'Подарочная упаковка включена' : 'Gift packaging included'}
                    </div>
                  </div>
                </div>

                {/* Primary Button */}
                <button
                  onClick={() => onOrderCustomBouquet(config, totalPrice)}
                  className="w-full bg-[#B28756] hover:bg-[#9E7345] text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-medium tracking-wide shadow-md hover:shadow-lg transition-all active:scale-98 text-center block"
                  id="builder-checkout-btn"
                >
                  {language === 'ru' ? 'Оформить заказ' : 'Order Custom Bouquet'}
                </button>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
