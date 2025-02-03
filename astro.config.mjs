import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://wenbin.dev",
  integrations: [
    react(),
    sitemap({
      changefreq: "monthly",
      priority: 1,
      lastmod: new Date("2025-01-30"),
    }),
  ],
});
