import type { Dictionary } from '../i18n/utils';

export type ProductId = keyof Dictionary['products']['items'];

/** Typical values per 100 g of the frozen, unseasoned product (kcal, then grams). */
export interface Nutrition {
  kcal: number;
  fat: number;
  carbs: number;
  sugars: number;
  fibre: number;
  protein: number;
  salt: number;
}

/** Supplier video. Files live in public/videos/products/. */
export interface ProductVideo {
  src: string;
  /** Still frame shown before playback, so the video itself is not downloaded up front. */
  poster?: string;
}

export interface Product {
  id: ProductId;
  category: 'fruits' | 'vegetables';
  image: string;
  /** Extra supplier photos (public/images/products/<id>/01.webp, ...). */
  gallery?: string[];
  videos?: ProductVideo[];
  /** Featured in the "In Season" section and tagged with a badge. */
  inSeason?: boolean;
  nutrition: Nutrition;
}

export const products: Product[] = [
  { id: 'mango', category: 'fruits', image: '/images/products/mango.webp', nutrition: { kcal: 60, fat: 0.4, carbs: 15.0, sugars: 13.5, fibre: 1.6, protein: 0.8, salt: 0 } },
  { id: 'strawberries', inSeason: true, category: 'fruits', image: '/images/products/strawberries.webp', gallery: ['/images/products/strawberries/01.webp', '/images/products/strawberries/02.webp'], nutrition: { kcal: 32, fat: 0.3, carbs: 7.7, sugars: 4.9, fibre: 2.0, protein: 0.7, salt: 0 } },
  { id: 'pomegranate', category: 'fruits', image: '/images/products/pomegranate.webp', nutrition: { kcal: 83, fat: 1.2, carbs: 18.7, sugars: 13.7, fibre: 4.0, protein: 1.7, salt: 0 } },
  { id: 'peas', category: 'vegetables', image: '/images/products/peas.webp', nutrition: { kcal: 77, fat: 0.4, carbs: 13.6, sugars: 5.0, fibre: 5.1, protein: 5.2, salt: 0 } },
  { id: 'peasCarrots', category: 'vegetables', image: '/images/products/peas-carrots.webp', nutrition: { kcal: 64, fat: 0.4, carbs: 12.5, sugars: 5.0, fibre: 4.0, protein: 3.3, salt: 0.1 } },
  { id: 'beans', inSeason: true, category: 'vegetables', image: '/images/products/beans.webp', gallery: ['/images/products/beans/01.webp'], videos: [{ src: '/videos/products/beans-1.mp4', poster: '/videos/products/beans-1-poster.webp' }, { src: '/videos/products/beans-2.mp4', poster: '/videos/products/beans-2-poster.webp' }], nutrition: { kcal: 31, fat: 0.2, carbs: 6.9, sugars: 2.0, fibre: 3.0, protein: 1.8, salt: 0 } },
  { id: 'mixed', category: 'vegetables', image: '/images/products/mixed-veg-cutout.webp', nutrition: { kcal: 65, fat: 0.3, carbs: 12.6, sugars: 3.5, fibre: 4.0, protein: 3.3, salt: 0.1 } },
  { id: 'fries', category: 'vegetables', image: '/images/products/fries.webp', nutrition: { kcal: 150, fat: 5.0, carbs: 24.0, sugars: 0.5, fibre: 2.5, protein: 2.2, salt: 0.1 } },
  { id: 'falafel', category: 'vegetables', image: '/images/products/falafel.webp', nutrition: { kcal: 330, fat: 17.0, carbs: 32.0, sugars: 3.0, fibre: 5.0, protein: 13.0, salt: 0.9 } },
  { id: 'cauliflower', inSeason: true, category: 'vegetables', image: '/images/products/cauliflower.webp', gallery: ['/images/products/cauliflower/01.webp'], videos: [{ src: '/videos/products/cauliflower-1.mp4', poster: '/videos/products/cauliflower-1-poster.webp' }], nutrition: { kcal: 23, fat: 0.3, carbs: 4.1, sugars: 1.8, fibre: 2.5, protein: 1.8, salt: 0.1 } },
  { id: 'artichoke', category: 'vegetables', image: '/images/products/artichoke.webp', nutrition: { kcal: 40, fat: 0.3, carbs: 8.5, sugars: 1.0, fibre: 5.0, protein: 2.5, salt: 0.1 } },
  { id: 'broccoli', inSeason: true, category: 'vegetables', image: '/images/products/broccoli.webp', gallery: ['/images/products/broccoli/01.webp'], videos: [{ src: '/videos/products/broccoli-1.mp4', poster: '/videos/products/broccoli-1-poster.webp' }], nutrition: { kcal: 28, fat: 0.3, carbs: 5.3, sugars: 1.4, fibre: 3.0, protein: 2.8, salt: 0.1 } },
  { id: 'okra', inSeason: true, category: 'vegetables', image: '/images/products/okra.webp', videos: [{ src: '/videos/products/okra-1.mp4', poster: '/videos/products/okra-1-poster.webp' }, { src: '/videos/products/okra-2.mp4', poster: '/videos/products/okra-2-poster.webp' }], nutrition: { kcal: 31, fat: 0.3, carbs: 6.7, sugars: 1.5, fibre: 3.4, protein: 1.8, salt: 0 } },
  { id: 'molokhia', category: 'vegetables', image: '/images/products/molokhia.webp', nutrition: { kcal: 34, fat: 0.3, carbs: 5.8, sugars: 0.5, fibre: 2.0, protein: 4.7, salt: 0.1 } },
  { id: 'spinach', category: 'vegetables', image: '/images/products/spinach.webp', nutrition: { kcal: 23, fat: 0.3, carbs: 3.6, sugars: 0.4, fibre: 2.4, protein: 2.9, salt: 0.2 } },
];