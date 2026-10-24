import en from './locales/en.json';
import de from './locales/de.json';
import fr from './locales/fr.json';
import ru from './locales/ru.json';
import cs from './locales/cs.json';
import ar from './locales/ar.json';
import pl from './locales/pl.json';
import es from './locales/es.json';

export type Dictionary = typeof en;

/** Keep in sync with `i18n.locales` in astro.config.mjs. */
export const languages = {
  en: { label: 'English', flag: '/flags/gb.svg', dir: 'ltr' },
  de: { label: 'Deutsch', flag: '/flags/de.svg', dir: 'ltr' },
  fr: { label: 'Français', flag: '/flags/fr.svg', dir: 'ltr' },
  ru: { label: 'Русский', flag: '/flags/ru.svg', dir: 'ltr' },
  cs: { label: 'Čeština', flag: '/flags/cz.svg', dir: 'ltr' },
  ar: { label: 'العربية', flag: '/flags/sa.svg', dir: 'rtl' },
  pl: { label: 'Polski', flag: '/flags/pl.svg', dir: 'ltr' },
  es: { label: 'Español', flag: '/flags/es.svg', dir: 'ltr' },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

const dictionaries: Record<Lang, Dictionary> = { en, de, fr, ru, cs, ar, pl, es };

export function getLang(locale: string | undefined): Lang {
  return locale && locale in languages ? (locale as Lang) : defaultLang;
}

/** Recursively fills keys missing from a translation with the English value. */
function withFallback<T>(base: T, override: unknown): T {
  if (Array.isArray(base)) return (Array.isArray(override) ? override : base) as T;
  if (base && typeof base === 'object') {
    const src = (override && typeof override === 'object' ? override : {}) as Record<string, unknown>;
    return Object.fromEntries(
      Object.entries(base).map(([key, value]) => [key, withFallback(value, src[key])]),
    ) as T;
  }
  return (typeof override === typeof base ? override : base) as T;
}

export function useTranslations(lang: Lang): Dictionary {
  return lang === defaultLang ? en : withFallback(en, dictionaries[lang]);
}
