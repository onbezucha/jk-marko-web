// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ['nuxt-gtag', 'nuxt-posthog'],
  gtag: {
    id: 'G-KXZTCZSH'
  },

  runtimeConfig: {
    public: {
      posthogPublicKey: 'phc_50YQ26jgQsHhB0aXWkZyZ0HTawNM73nlbkyx0iwTVnx',
      posthogHost: 'https://us.i.posthog.com'
    }
  }
})