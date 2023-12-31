// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  routeRules: {
    '/**': { ssr: false },
  },
  modules: [
    'nuxt-quasar-ui',
    '@vueuse/nuxt'
  ],
  runtimeConfig: {
    public: {
      host: 'http://localhost:3001'
    }
  }
})
