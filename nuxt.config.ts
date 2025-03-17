// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["nuxt-gtag", "@nuxt/icon", "@nuxt/content"],

  vite: {
    plugins: [tailwindcss()],
  },

  gtag: {
    id: "G-KXZTCZSH",
  },

  runtimeConfig: {
    public: {
      posthogPublicKey: "phc_3QRZsJvUxYolNaspDmh1Zpq9cjSG4TG6Pvc0HFCjtH9",
      posthogHost: "https://eu.i.posthog.com",
    },
  },

  content: {
    // Základní konfigurace content modulu
    documentDriven: true,
    navigation: {
      fields: ["title", "description"],
    },
    // Pokud používáte Markdown s frontmatter, můžete zde nastavit další parametry
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3,
      },
    },
  },
});
