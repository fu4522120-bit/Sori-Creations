export type Language = 'ru' | 'en';

export interface Product {
  id: string;
  nameRu: string;
  nameEn: string;
  price: number;
  originalPrice?: number;
  priceUsd?: number;
  originalPriceUsd?: number;
  category: string;
  tag?: string;
  tagRu?: string;
  tagEn?: string;
  image: string;
  descriptionRu: string;
  descriptionEn: string;
  detailsRu: string[];
  detailsEn: string[];
  ribbonCount: number;
  features: string[];
}

export interface CollectionItem {
  id: string;
  titleRu: string;
  titleEn: string;
  subtitleRu: string;
  subtitleEn: string;
  image: string;
  productCount: number;
  tag?: string;
}

export interface FeatureItem {
  id: string;
  titleRu: string;
  titleEn: string;
  subtitleRu: string;
  subtitleEn: string;
  iconName: string;
}

export interface ReviewItem {
  id: string;
  authorRu: string;
  authorEn: string;
  avatar: string;
  textRu: string;
  textEn: string;
  videoThumbnail: string;
  bouquetName: string;
  rating: number;
}

export interface BuilderOption {
  id: string;
  nameRu: string;
  nameEn: string;
  price: number;
  color?: string;
  image?: string;
}

export interface CustomBouquetConfig {
  flowerCount: number;
  primaryColor: string;
  secondaryColor: string;
  wrappingPaper: string;
  pearlPins: boolean;
  crownTiara: boolean;
  birthdayTopper: boolean;
  cashOrigami: boolean;
  cashAmount: number;
  ribbonBow: string;
  cardMessage: string;
  fragranceScent: string;
}
