import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'sr'],  // Your supported locales
  defaultLocale: 'en',  // Default locale
    pathnames: {
    '/house-rules': {
      en: '/house-rules',
      sr: '/kucni-red',
    },

    '/contact': {
      en: '/contact',
      sr: '/kontakt',
    },
 '/offer': {
      en: '/offer',
      sr: '/ponuda',
    },
 '/useful-information': {
      en: '/useful-information',
      sr: '/korisne-informacije',
    },
    '/offer/[type]': {
      en: '/offer/[type]',
      sr: '/ponuda/[type]',
    },
 '/offer/[type]/[slug]': {
      en: '/offer/[type]/[slug]',
      sr: '/ponuda/[type]/[slug]',
    },

  }
});
