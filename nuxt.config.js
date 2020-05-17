const colors = require('vuetify/es5/util/colors').default

module.exports = {
  mode: 'universal',
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
  plugins: ['~/plugins/components'],
  buildModules: [
    '@nuxtjs/vuetify'
  ],
  modules: [
    [
      'storyblok-nuxt',
      {
        // TODO:remove it to .env
        accessToken: 'gxRH86qIPeC1TQa00G44Xwtt',
        caceProvider: 'memory'
      }
    ],
    // TODO: do we need this?
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
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
  build: {
    extend(config, ctx) { }
  }
}
