// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  ssr: false,
  css: ["@/public/css/font.css"],
  plugins: [{ src: "~/plugins/bootstrap", mode: 'client' } 
  ],

  modules: ["@nuxt/ui" , '@pinia/nuxt'],
  colorMode: {
    preference: 'light'
  },
  
  app: {
    baseURL: '/Digital-Menu/', 
    buildAssetsDir: '/-assets/',
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        }
      ]
    }
  }
})
