// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', "@nuxt/content"],
  // color themes - code - 
  content: {
    highlight: {
      theme: {
        default: 'min-light',
        dark: 'min-dark',
      }
    }
  },
  colorMode: {
    classSuffix: ''
  }
})