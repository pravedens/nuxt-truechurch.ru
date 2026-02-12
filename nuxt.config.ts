// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
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

  nitro: {
    storage: {
      db: {
        driver: 'fs-lite',
        base: './db'
      }
    }
  },

  app: {
    head: {
      title: 'Магазин Shoppe',
      titleTemplate: '%s | Shoppe',
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

  sitemap: {
    sources: ['/api/sitemap/urls'],
    defaults: {
      lastmod: new Date().toISOString(),
      priority: 0.5,
      changefreq: 'weekly'
    }
  },

  robots: {
    disallow: ['/account']
  },

  modules: [//'@nuxt/fonts',
  '@nuxt/eslint', '@nuxt/image', '@nuxt/scripts', '@nuxt/icon', '@nuxtjs/tailwindcss', '@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt', '@nuxtjs/sitemap', '@nuxtjs/robots']
})