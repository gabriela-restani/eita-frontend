// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
