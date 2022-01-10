const pkg = require('./package');
// Reset this to allow server renderer to work
window = undefined;

// gitana config
var config = require("./gitana.json");

// additional config for module
config.renditions = true;
config.preview = true;
config.basePageUrl = "http://localhost:3000";


module.exports = {
  target: "static",

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    script: [
      { src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.0/jquery.min.js" },
      { src: "/js/bootstrap.min.js" },
      { src: "/js/bootstrap-hover-dropdown.min.js" },
      { src: "/js/echo.min.js" },
      { src: "/js/jquery.easing.min.js" },
      { src: "/js/wow.min.js" },
      { src: "/js/bootstrap-select.min.js" },
      { src: "/js/jquery-ui.min.js" },
      { src: "/js/scripts.js" },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500italic,500,700,700italic,900,900italic" },
      { rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.9.4/css/bootstrap-select.min.css" },
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.0/jquery-ui.min.css" },
      { rel: "stylesheet", href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    "@/static/css/main.css",
    "@/static/css/green.css",
    "@/static/css/animate.min.css",
    "@/static/css/elegant-fonts.css",
    "@/static/css/custom.css"
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "./plugins/sample.js",
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
      ["cloudcms-nuxt", config]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },

  router: {
    extendRoutes(routes) {
      routes.forEach((route) => {
        // ensure that index.html works for any landing pages
        route.alias = route.path.length > 1 ? `${route.path}/index.html` : '/index.html'
      })
    },
  },

  env: {
    repositoryId: process.env.repositoryId ||  "81dda12c285ffa7851c4",
    branchId: process.env.branchId || "master"
  },
}
