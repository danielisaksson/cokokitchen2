export default defineNuxtConfig({
  routeRules: {
    // revalidated every 60 seconds, in the background
    '/**': { isr: true }
  },
  nitro: {
    preset: 'vercel-edge',
  },
})