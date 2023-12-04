// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-fonts', {
        families: {
          Inter: [400, 500, 700],
        }
      }
    ]
  ]
})