// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://cruise-sindibad.com',
  integrations: [sitemap()],
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