const colors = require('vuetify/es5/util/colors').default
const axios = require('axios')

module.exports = {
  head: {
    // titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: colors.blue.darken2 },
  plugins: [],
  buildModules: [
    '@nuxtjs/vuetify',
    // TODO: Remove when upgrading to nuxt 2.13+
    '@nuxt/components'
  ],
  modules: [
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.NODE_ENV === "production" ? 'RWdQ7L81dLfNGsdXr0M0Gwtt' : 'gxRH86qIPeC1TQa00G44Xwtt',
        caceProvider: 'memory'
      }
    ],
    ['vue-scrollto/nuxt', { duration: 300 }],
  ],
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  generate: {
    routes: () => {
      let cacheVersion = Math.floor(Date.now() / 1e3)
      return axios.get(`https://api.storyblok.com/v1/cdn/stories?version=published&token=RWdQ7L81dLfNGsdXr0M0Gwtt&starts_with=articles&cv=${cacheVersion}`)
        .then(res => {
          console.log(res.data.stories)
          const articles = res.data.stories.map(ar => ar.full_slug)
          return ['/', '/articles', ...articles]
        })
    }
  }
}
