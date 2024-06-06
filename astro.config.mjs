import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import remarkToc from 'remark-toc';

// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: true,
    remarkPlugins:[
      [remarkToc, {maxDepth: 2}]
    ],
    shikiConfig: {
      theme: "github-dark"
    }
  },
  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true
  },
  site: 'https://pinelab.studio',
  integrations: [tailwind(), sitemap(), mdx()]
});