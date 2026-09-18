/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language, Product, CustomBouquetConfig } from './types';
import { POPULAR_PRODUCTS } from './data/soriData';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeatureBar } from './components/FeatureBar';
import { CollectionsCatalog } from './components/CollectionsCatalog';
import { PopularBouquets } from './components/PopularBouquets';
import { BouquetBuilderSection } from './components/BouquetBuilderSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { NewsletterSection } from './components/NewsletterSection';
import { BottomBannerAndFooter } from './components/BottomBannerAndFooter';
import { ProductModal } from './components/ProductModal';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { VideoModal } from './components/VideoModal';

export default function App() {
  // English is the default language for the application
  const [language, setLanguage] = useState<Language>('en');

  // Favorites state
  const [favorites, setFavorites] = useState<string[]>(['prod-blue-pearl', 'prod-chocolate-silk']);

  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: POPULAR_PRODUCTS[0],
      quantity: 1,
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Modals state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Toggle Language
  const handleToggleLanguage = () => {
    setLanguage((prev) => (prev === 'ru' ? 'en' : 'ru'));
  };

  // Toggle Favorite
  const handleToggleFavorite = (productId: string) => {
    setFavorites((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  // Add to Cart
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  // Update Cart Quantity
  const handleUpdateCartQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  // Remove from Cart
  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Scroll to section helper
  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle ordering custom bouquet from the builder
  const handleOrderCustomBouquet = (config: CustomBouquetConfig, totalPrice: number) => {
    const customProduct: Product = {
      id: `custom-bouquet-${Date.now()}`,
      nameRu: `Индивидуальный букет Sori (${config.flowerCount} роз)`,
      nameEn: `Custom Sori Ribbon Bouquet (${config.flowerCount} roses)`,
      price: totalPrice,
      priceUsd: Math.round(totalPrice / 65),
      category: 'Custom',
      image: '/src/assets/images/builder_ribbon_vase_1789730801645.jpg',
      descriptionRu: `Авторский букет из ${config.flowerCount} атласных роз ручной работы. Основной оттенок: ${config.primaryColor}. Упаковка: ${config.wrappingPaper}. Включает жемчуг, бант и оформление.`,
      descriptionEn: `Bespoke handcrafted satin ribbon bouquet with ${config.flowerCount} roses. Primary color: ${config.primaryColor}. Wrapped in ${config.wrappingPaper}.`,
      detailsRu: [
        `${config.flowerCount} атласных роз ручной работы`,
        config.pearlPins ? 'Жемчужные бусины в сердцевинах' : 'Классические бутоны',
        config.birthdayTopper ? 'Топпер "Happy Birthday"' : 'Без топпера',
        config.crownTiara ? 'Сверкающая мини-диадема (корона)' : '',
      ].filter(Boolean),
      detailsEn: [
        `${config.flowerCount} handcrafted satin ribbon roses`,
        config.pearlPins ? 'Pearl centerpins in buds' : 'Classic rosebud style',
        config.birthdayTopper ? 'Happy Birthday acrylic topper' : '',
        config.crownTiara ? 'Crystal mini tiara' : '',
      ].filter(Boolean),
      ribbonCount: config.flowerCount,
      features: ['Bespoke Custom', 'Handcrafted Satin', 'Everlasting'],
    };

    handleAddToCart(customProduct, 1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2D231E]">
      
      {/* Top Navigation */}
      <Header
        language={language}
        onToggleLanguage={handleToggleLanguage}
        favoritesCount={favorites.length}
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenFavorites={() => handleScrollToSection('popular')}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Content Sections - EXACT ORDER from Screenshot */}
      <main className="flex-1">
        
        {/* 1. Hero Section */}
        <HeroSection
          language={language}
          onExploreClick={() => handleScrollToSection('collections')}
          onWatchVideoClick={() => setIsVideoModalOpen(true)}
          onScrollDownClick={() => handleScrollToSection('collections')}
        />

        {/* 2. Floating Feature Bar */}
        <FeatureBar language={language} />

        {/* 3. Section 1: Каталог коллекций */}
        <CollectionsCatalog
          language={language}
          onSelectCollection={() => handleScrollToSection('popular')}
          onViewAllClick={() => handleScrollToSection('popular')}
        />

        {/* 4. Section 2: Популярные букеты */}
        <PopularBouquets
          language={language}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          onAddToCart={handleAddToCart}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onViewAllClick={() => handleScrollToSection('popular')}
        />

        {/* 5. Section 3: Конструктор букета */}
        <BouquetBuilderSection
          language={language}
          onOrderCustomBouquet={handleOrderCustomBouquet}
        />

        {/* 6. Section 4: Почему нас выбирают */}
        <WhyChooseUs language={language} />

        {/* 7. Section 5: Подписка на привилегии клуба */}
        <NewsletterSection language={language} />

      </main>

      {/* 8. Dark Emotional Banner & Footer */}
      <BottomBannerAndFooter
        language={language}
        onScrollToSection={handleScrollToSection}
      />

      {/* Modals & Drawers */}
      <ProductModal
        product={selectedProduct}
        language={language}
        isFavorite={selectedProduct ? favorites.includes(selectedProduct.id) : false}
        onToggleFavorite={handleToggleFavorite}
        onAddToCart={handleAddToCart}
        onClose={() => setSelectedProduct(null)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        language={language}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={() => setCartItems([])}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        language={language}
      />

    </div>
  );
}
