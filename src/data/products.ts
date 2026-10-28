import type { Dictionary } from '../i18n/utils';

export type ProductId = keyof Dictionary['products']['items'];

/**
 * Typical values per 100 g of the frozen, unseasoned product.
 * `kcal` in kcal, macros in grams, minerals and vitamin C in milligrams.
 * Every value is optional; rows without a value are hidden in the product detail.
 */
export interface Nutrition {
  kcal?: number;
  fat?: number;
  carbs?: number;
  sugars?: number;
  fibre?: number;
  protein?: number;
  /** mg */
  sodium?: number;
  /** mg */
  calcium?: number;
  /** mg */
  iron?: number;
  /** mg */
  vitaminC?: number;
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
  { id: 'mango', category: 'fruits', image: '/images/products/mango.webp', nutrition: { kcal: 60, fat: 0.38, carbs: 15, sugars: 15, fibre: 1.6, protein: 0.82, sodium: 1, calcium: 11, iron: 0.16, vitaminC: 36.4 } },
  { id: 'strawberries', inSeason: true, category: 'fruits', image: '/images/products/strawberries.webp', gallery: ['/images/products/strawberries/01.webp', '/images/products/strawberries/02.webp'], nutrition: { kcal: 46.4, fat: 0.6, carbs: 8.1, sugars: 4.5, fibre: 1.2, protein: 0.8, sodium: 0.2, calcium: 28, iron: 0.8, vitaminC: 0.6 } },
  { id: 'pomegranate', category: 'fruits', image: '/images/products/pomegranate.webp', nutrition: { kcal: 68, fat: 0.3, carbs: 17.17, sugars: 19, fibre: 0.6, protein: 0.95, sodium: 3, calcium: 3, iron: 0.3, vitaminC: 6.1 } },
  { id: 'peas', category: 'vegetables', image: '/images/products/peas.webp', nutrition: { kcal: 68.75, fat: 0.0, carbs: 11.875, sugars: 3.5, fibre: 0.0, protein: 5, sodium: 0.0, calcium: 18.75, iron: 18.875, vitaminC: 13.125 } },
  { id: 'peasCarrots', category: 'vegetables', image: '/images/products/peas-carrots.webp', nutrition: { kcal: 44, fat: 0.05, carbs: 8.75, sugars: 1.84, fibre: 1.34, protein: 2.31, sodium: 17.86, calcium: 112.69, iron: 1.31, vitaminC: 5.09 } },
  { id: 'beans', inSeason: true, category: 'vegetables', image: '/images/products/beans.webp', gallery: ['/images/products/beans/01.webp'], videos: [{ src: '/videos/products/beans-1.mp4', poster: '/videos/products/beans-1-poster.webp' }, { src: '/videos/products/beans-2.mp4', poster: '/videos/products/beans-2-poster.webp' }], nutrition: { kcal: 84.8, fat: 0.44, carbs: 31.61, sugars: 2.86, fibre: 2.22, protein: 6.6, sodium: 432.6, calcium: 24, iron: 1.26, vitaminC: 4.83 } },
  { id: 'mixed', category: 'vegetables', image: '/images/products/mixed-veg-cutout.webp', nutrition: { kcal: 52.51, fat: 1.07, carbs: 8.04, sugars: 3.3, fibre: 1.56, protein: 2.68, sodium: 12, calcium: 46, iron: 0.82, vitaminC: 8.45 } },
  { id: 'fries', category: 'vegetables', image: '/images/products/fries.webp', nutrition: {}},
  { id: 'falafel', category: 'vegetables', image: '/images/products/falafel.webp', nutrition: { kcal: 57, fat: 3, carbs: 5.4, sugars: 0.5, fibre: 1, protein: 2.3, sodium: 50 } },
  { id: 'cauliflower', inSeason: true, category: 'vegetables', image: '/images/products/cauliflower.webp', gallery: ['/images/products/cauliflower/01.webp'], videos: [{ src: '/videos/products/cauliflower-1.mp4', poster: '/videos/products/cauliflower-1-poster.webp' }], nutrition: { kcal: 23, fat: 0.5, carbs: 4.9, protein: 1.92, calcium: 22, iron: 0.42, vitaminC: 48.2 } },
  { id: 'artichoke', category: 'vegetables', image: '/images/products/artichoke.webp', nutrition: { kcal: 42.42, fat: 0.06, carbs: 6.41, protein: 2.03, calcium: 37.04, iron: 0.903, vitaminC: 3.26 } },
  { id: 'broccoli', inSeason: true, category: 'vegetables', image: '/images/products/broccoli.webp', gallery: ['/images/products/broccoli/01.webp'], videos: [{ src: '/videos/products/broccoli-1.mp4', poster: '/videos/products/broccoli-1-poster.webp' }], nutrition: { kcal: 34, fat: 0.6, carbs: 3.2, sugars: 1.39, fibre: 3.3, protein: 4.3, sodium: 41, calcium: 40, iron: 0.67, vitaminC: 64.9 } },
  { id: 'okra', inSeason: true, category: 'vegetables', image: '/images/products/okra.webp', videos: [{ src: '/videos/products/okra-1.mp4', poster: '/videos/products/okra-1-poster.webp' }, { src: '/videos/products/okra-2.mp4', poster: '/videos/products/okra-2-poster.webp' }], nutrition: { kcal: 44, fat: 0.05, carbs: 8.57, sugars: 1.84, fibre: 1.34, protein: 2.31, sodium: 17.86, calcium: 112.69, iron: 1.31, vitaminC: 5.09 } },
  { id: 'molokhia', category: 'vegetables', image: '/images/products/molokhia.webp', nutrition: { kcal: 15.36, fat: 0.04, carbs: 2.46, sugars: 0.8, fibre: 0.32, protein: 1.29, sodium: 12.3, calcium: 90.31, iron: 2.54, vitaminC: 1.44 } },
  { id: 'spinach', inSeason: true, category: 'vegetables', image: '/images/products/spinach.webp', nutrition: { kcal: 36, fat: 0.03, carbs: 7, sugars: 0.8, fibre: 2.7, protein: 1.3, sodium: 25, calcium: 81, iron: 3, vitaminC: 0.3 } },
];