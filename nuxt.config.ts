// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['nuxt-gtag', '@nuxt/icon'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  gtag: {
    id: 'G-KXZTCZSH'
  },

  runtimeConfig: {
    public: {
      posthogPublicKey: "phc_3QRZsJvUxYolNaspDmh1Zpq9cjSG4TG6Pvc0HFCjtH9",
      posthogHost: "https://eu.i.posthog.com"
     }
   }

})