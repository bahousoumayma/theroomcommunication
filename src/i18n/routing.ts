import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  // Hides the prefix for your default language (e.g., /about instead of /en/about)
  localePrefix: 'as-needed',
});
