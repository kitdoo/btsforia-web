require('./config');

export default {
  mode: 'spa',

  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
  },

  css: [
    'iview/dist/styles/iview.css',
    '~/assets/css/main.less',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  plugins: [
    {src: '~/plugins/iview', ssr: false},
    {src: '~/plugins/font-awesome', ssr: false},
    {src: '~/plugins/directives', ssr: false},
    {src: '~/plugins/filters', ssr: false},
  ],

  build: {
    extend(config, ctx) {
      ctx.loaders.less.javascriptEnabled = true
    },
    devtools: false,
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    },
    optimizeCSS: true,
    cache: true,
    'html.minify': {
      collapseBooleanAttributes: true,
      decodeEntities: true,
      minifyCSS: true,
      minifyJS: true,
      processConditionalComments: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true,
      trimCustomFragments: true,
      useShortDoctype: true,
      removeComments: true,
      caseSensitive: true
    }
  },

  modules: [
    'nuxt-polyfill',
    '@nuxtjs/device',
    'nuxt-webfontloader',
  ],

  generate: {
    fallback: true,
  },

  polyfill: {
    features: [
      {
        require: 'intersection-observer',
        detect: () => 'IntersectionObserver' in window,
      },

      {
        require: 'smoothscroll-polyfill',
        detect: () => 'scrollBehavior' in document.documentElement.style && window.__forceSmoothScrollPolyfill__ !== true,
        install: (smoothscroll) => smoothscroll.polyfill()
      }
    ]
  },
}
