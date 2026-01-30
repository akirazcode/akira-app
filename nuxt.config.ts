// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  ssr: false,
  nitro: {
    preset: 'static'
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR',
        'data-theme': 'deep-night-ocean',
      },
      title: 'Gustavo Akira | Links & Projetos',
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        {
          name: 'description',
          content:
            'Na paz, com negócios digitais e foco em resultado. Veja os meus projetos e redes sociais.',
        },
        {
          name: 'keywords',
          content:
            'Gustavo Akira, Link na bio, Indie Builder, Engenharia Mecatrônica, Projetos, Apptime, Forus, Startups',
        },
        { name: 'author', content: 'Gustavo Akira' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Gustavo Akira | Links & Projetos' },
        {
          property: 'og:description',
          content:
            'Na paz, com negócios digitais e foco em resultado. Veja os meus projetos e redes sociais.',
        },
        {
          property: 'og:image',
          content:
            'https://storage.googleapis.com/storage.apptime.app/public/apps/VRMi9FSnwI9A9YhWGlJ3/storage/libraries/default/0RvXo5Wfh9OASQTTrxTW/imgHd.png',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Gustavo Akira | Links & Projetos' },
        {
          name: 'twitter:description',
          content:
            'Na paz, com negócios digitais e foco em resultado. Veja los meus projetos e redes sociais.',
        },
        {
          name: 'twitter:image',
          content:
            'https://storage.googleapis.com/storage.apptime.app/public/apps/VRMi9FSnwI9A9YhWGlJ3/storage/libraries/default/0RvXo5Wfh9OASQTTrxTW/imgHd.png',
        },
        { name: 'theme-color', content: '#05040a' },
      ],
      link: [
        {
          href: 'https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100..900&display=swap',
          rel: 'stylesheet',
        },
      ],
      script: [
        {
          src: 'https://cdn.apptime.app/apptime.js',
        },
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-W2V2P99KZG',
          async: true,
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-W2V2P99KZG');
          `,
        },
      ],
    },
  },
})

