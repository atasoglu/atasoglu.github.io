import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://yourusername.github.io', // GitHub Pages URL - update this
  base: '/my-portfolio', // Repository name - update this if different
  integrations: [
    sitemap(),
    mdx()
  ],
  output: 'static',
  build: {
    assets: 'assets'
  }
});
