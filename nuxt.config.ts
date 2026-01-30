// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  ssr: false,
  app: {
    head: {
      style: [
        { innerHTML: 'html, body { background: #05040a !important; color: #e0e0e0; }' }
      ]
    }
  },
  nitro: {
    preset: 'static'
  }
})
