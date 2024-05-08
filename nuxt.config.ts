// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  app: {
    head: {
      meta: [
        { name: "viewport", content: 'width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0' },
        { name: "description", content: '' },
        { charset: "utf-8" }
      ],
      link: [
        // Favicon
        { rel: "icon", type: "image/x-icon", href: "/sneat-1.0.0/assets/img/favicon/favicon.ico" },
        // Fonts
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {
          href: "https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap",
          rel: "stylesheet"
        },
        // Icons
        {
          rel: "stylesheet", href: "/sneat-1.0.0/assets/vendor/fonts/boxicons.css"
        },
        // Core CSS
        {
          rel: "stylesheet", href: "/sneat-1.0.0/assets/vendor/css/core.css"
        },
        {
          rel: "stylesheet", href: "/sneat-1.0.0/assets/vendor/css/theme-default.css"
        },
        {
          rel: "stylesheet", href: "/sneat-1.0.0/assets/css/demo.css"
        },
        // Vendors CSS
        {
          rel: "stylesheet", href: "/sneat-1.0.0/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css"
        }
      ],
      htmlAttrs: {
        lang: 'en',
        class: 'light-style layout-menu-fixed',
        dir: 'ltr',
        'data-theme': 'theme-default',
        'data-assets-path': '/sneat-1.0.0/assets/',
        'data-template': 'vertical-menu-template-free'
      },
      bodyAttrs: {
        class: 'template-customizer-class template-customizer-core-css'
      },
      script: [
        // Helpers
        {
          src: "/sneat-1.0.0/assets/vendor/js/helpers.js",
          tagPosition: 'head'
        },
        // Core JS
        {
          src: '/sneat-1.0.0/assets/vendor/libs/jquery/jquery.js',
          tagPosition: 'bodyClose'
        },
        {
          src: '/sneat-1.0.0/assets/vendor/libs/popper/popper.js',
          tagPosition: 'bodyClose'
        },
        {
          src: '/sneat-1.0.0/assets/vendor/js/bootstrap.js',
          tagPosition: 'bodyClose'
        },
        {
          src: '/sneat-1.0.0/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js',
          tagPosition: 'bodyClose'
        },
        {
          src: '/sneat-1.0.0/assets/vendor/js/menu.js',
          tagPosition: 'bodyClose'
        },
        // {
        //   src: '/sneat-1.0.0/assets/js/main.js',
        //   tagPosition: 'bodyClose'
        // },
        // Page JS
        {
          src: 'https://buttons.github.io/buttons.js',
          tagPosition: 'bodyClose',
          defer: true,
          async: true
        },
      ]
    }
  },
  ssr: false,
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:8000/api'
    },
  },
  // plugins: [
  //   '~/plugins/loadUser',
  //   '~/plugins/loadDatatable'
  // ]
})
