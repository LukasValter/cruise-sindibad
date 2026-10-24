// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  i18n: {
    // Keep in sync with `languages` in src/i18n/utils.ts.
    locales: ['en', 'de', 'fr', 'ru', 'cs', 'ar', 'pl', 'es'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
