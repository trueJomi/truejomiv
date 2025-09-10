// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  // output: "server",
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },

    imageService: "cloudflare",
  }),

  vite: {
    plugins: [tailwindcss()],
    define: {
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
    },
    ssr: {
      external: ["@prisma/client"],
    },
  },

  site: "https://truejomi.com",

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-PE",
          en: "en-US",
        },
      },
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],

  // Configuración de i18n
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
