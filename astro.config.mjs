// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://starterbuild.com',
    markdown: {
        shikiConfig: {
            themes: {
                light: 'snazzy-light',
            },
        },
    },
    integrations: [
        sitemap({
            changefreq: 'weekly',
            priority: 0.7,
            lastmod: new Date(),
        }),
    ],
});