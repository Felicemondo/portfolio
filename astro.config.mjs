import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE/BASE come from the deploy workflow. While the domain still points to the
// old WordPress, the site lives at felicemondo.github.io/portfolio (BASE=/portfolio).
export default defineConfig({
  site: process.env.SITE ?? 'https://felicemondo.it',
  base: process.env.BASE ?? '/',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'it', locales: { it: 'it-IT', en: 'en-US' } },
    }),
  ],
});
