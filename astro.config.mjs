import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://atasoglu.github.io',
  base: '/', // Root path for user/org GitHub Pages sites (username.github.io)
  integrations: [
    sitemap(),
    mdx()
  ],
  output: 'static',
  build: {
    assets: 'assets'
  }
});
