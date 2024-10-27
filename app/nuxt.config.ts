export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: '../',
  compatibilityDate: '2024-10-27',
  modules: ['@formkit/nuxt'],
  formkit: {
    // Support expérimental pour le chargement automatique (voir note) :
    autoImport: true,
  },
  runtimeConfig: {
    POSTGRES_URI: 'postgres://postgres:123321@localhost:5432/nuxt-todo',
  },
})
