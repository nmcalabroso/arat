export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
          title: 'arat',
        }
    },
    tailwindcss: {
      cssPath: '~/assets/css/tailwind.css',
      configPath: 'tailwind.config.ts',
      exposeConfig: false,
      config: {},
      injectPosition: 0,
      viewer: true,
    },
    vite: {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: '@use "~/assets/stylesheets/main.scss" as *;'
          }
        }
      }
    },
})
