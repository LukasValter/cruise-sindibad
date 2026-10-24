import type { Dictionary } from '../i18n/utils';

export type ProductId = keyof Dictionary['products']['items'];

export interface Product {
  id: ProductId;
  category: 'fruits' | 'vegetables';
  image: string;
}

export const products: Product[] = [
  { id: 'strawberries', category: 'fruits', image: '/images/products/strawberries.webp' },
  { id: 'pomegranate', category: 'fruits', image: '/images/products/pomegranate.webp' },
  { id: 'mango', category: 'fruits', image: '/images/products/mango.webp' },
  { id: 'peas', category: 'vegetables', image: '/images/products/peas.webp' },
  { id: 'peasCarrots', category: 'vegetables', image: '/images/products/peas-carrots.webp' },
  { id: 'beans', category: 'vegetables', image: '/images/products/beans.webp' },
  { id: 'mixed', category: 'vegetables', image: '/images/products/mixed-veg.webp' },
  { id: 'fries', category: 'vegetables', image: '/images/products/fries.webp' },
  { id: 'falafel', category: 'vegetables', image: '/images/products/falafel.webp' },
  { id: 'cauliflower', category: 'vegetables', image: '/images/products/cauliflower.webp' },
  { id: 'artichoke', category: 'vegetables', image: '/images/products/artichoke.webp' },
  { id: 'broccoli', category: 'vegetables', image: '/images/products/broccoli.webp' },
  { id: 'okra', category: 'vegetables', image: '/images/products/okra.webp' },
  { id: 'molokhia', category: 'vegetables', image: '/images/products/molokhia.webp' },
  { id: 'spinach', category: 'vegetables', image: '/images/products/spinach.webp' },
];