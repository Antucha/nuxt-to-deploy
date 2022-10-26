const path = require('path');
module.exports = {
  // modules: ['bootstrap-vue/nuxt'],
  env: {
    loginSession: process.env.LOGIN_SESSION,
    sessionUrl: process.env.SESSION_URL,
    url: process.env.URL,
    baseUrl: process.env.BASE_URL,
    baseUrlMetric: process.env.BASE_URL_METRIC,
    baseUrlPdf: process.env.BASE_URL_PDF,
    baseUrlLocal: process.env.BASE_URL_LOCAL,
    assetsURL: process.env.ASSETS_URL
  },
  configureWebpack: {
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        'bootstrap-components': path.resolve(__dirname, 'node_modules/bootstrap-vue/es/components')
      }
    }
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/fontawesome',
  ],
  proxy: {
    '/bucket': {
      target: process.env.ASSETS_URL?process.env.ASSETS_URL:"https://d10kixcrv010ns.cloudfront.net",
      pathRewrite: {
        '^/bucket' : '/'
      }
    }
  },
  plugins: [
    '~/plugins/dashboard',
    '~/plugins/bootstrap-vue',
    '~/plugins/fontawsome',
    {src: "~/plugins/chart", ssr: false},
    {src: "~/plugins/hchs-vue-charts", ssr: false},
  ],
  css: [
    'vue-notifyjs/themes/default.css'
  ],
  router: {
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/index.vue')
      })
    },
    middleware: ['auth']
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Testing para deploy',
    meta: [
      {charset: 'utf-8'},
      {'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'},
      {hid: 'description', name: 'description', content: 'Dasboard colegios Queestudiar'}
    ],
    script: [
      {src: `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_KEY}&libraries=${process.env.GOOGLE_MAPS_LIBRARIES}`}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.png'},
      {rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Muli:400,300'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    /*loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css?sourceMap", "resolve-url", "sass?sourceMap"]
        //loaders: ["style", "css", "resolve-url", "sass?sourceMap"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1KO
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1 KO
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]*/

  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  dev: false,
  performance: {
    gzip: false
  }
}

