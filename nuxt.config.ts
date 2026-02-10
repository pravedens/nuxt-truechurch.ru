// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    token: "",
    public: {
      apiurl: "",
      imageurl: ""
    },
    
  },

  icon: {
    customCollections: [
      {
        prefix: "icons",
        dir: "./assets/icons"
      }
    ]

  },

  app: {
    head: {
      title: 'Магазин Shoppe',
      htmlAttrs: {
        lang: 'ru'
      },
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
        { rel: 'manifest', crossorigin: "anonymous", href: '/manifest.webmanifest'}
      ]

    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },

  modules: [//'@nuxt/fonts',
  '@nuxt/eslint', '@nuxt/image', '@nuxt/scripts', '@nuxt/icon', '@nuxtjs/tailwindcss', '@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt']
})