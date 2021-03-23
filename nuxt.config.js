import colors from 'vuetify/es5/util/colors'
import axios from 'axios'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Browse Open Jobs',
    titleTemplate: '%s | Esteemed.io',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '%s'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/styles.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
    // https://go.nuxtjs.dev/vuetify
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'bootstrap-vue/nuxt',
    '@nuxtjs/gtm'
  ],

  gtm: {
    id: 'GTM-WHGM9PZ',
    layer: 'dataLayer',
    scriptId: 'gtm-script',
    scriptDefer: false,
    scriptURL: 'https://www.googletagmanager.com/gtm.js',
    crossOrigin: false,
    noscript: true,
    noscriptId: 'gtm-noscript',
    noscriptURL: 'https://www.googletagmanager.com/ns.html'
  },

  publicRuntimeConfig: {
    gtm: {
      id: 'GTM-WHGM9PZ'
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      name: 'App',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'https://esteemed.io/android-icon-36x36.png',
          sizes: '36x36',
          type: 'image/png',
          density: '0.75'
        },
        {
          src: 'https://esteemed.io/android-icon-48x48.png',
          sizes: '48x48',
          type: 'image/png',
          density: '1.0'
        },
        {
          src: 'https://esteemed.io/android-icon-72x72.png',
          sizes: '72x72',
          type: 'image/png',
          density: '1.5'
        },
        {
          src: 'https://esteemed.io/android-icon-96x96.png',
          sizes: '96x96',
          type: 'image/png',
          density: '2.0'
        },
        {
          src: 'https://esteemed.io/android-icon-144x144.png',
          sizes: '144x144',
          type: 'image/png',
          density: '3.0'
        },
        {
          src: 'https://esteemed.io/android-icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          density: '4.0'
        }
      ]
    }
  },

  // target: 'static',

  router: {
    base: '/jobs/'
  },

  generate: {
    routes() {
      return axios
        .get('https://esteemed-api-97dnt.ondigitalocean.app/jobs')
        .then(res => {
          return res.data.map(job => {
            console.log('job.id==>>', job.id)
            return { route: '/' + job.id, payload: job }
          })
        })
    }
    // fallback: '404.html'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
