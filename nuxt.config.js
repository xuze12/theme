
export default {
  mode: "spa",
  subdirectory: "/",
  /*
   ** Headers of the page
   */
  head: {
    title: "亚米科技mall4j",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/multikart/favicon.png" },
      {
        rel: "stylesheet",
        href: "http://r-order-api.bosenkeji.cn/styles/style.css",
      },
    ],
    script: [{ src: "http://r-order-api.bosenkeji.cn/styles/checkout.js" }],
  },

  router: {
    base: "/",
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#ff4c3b", throttle: 200, height: "3px" },
  /*
   ** Global CSS
   */
  css: ["@/assets/scss/app.scss", "swiper/dist/css/swiper.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/plugin.js", ssr: false },
    { src: "~/plugins/localStorage.js", ssr: false },
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "vue-scrollto/nuxt",
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true,
  },
  proxy: {
    "/api": {
      target: "http://120.77.140.132:9901/",
      pathRewrite: { "^/api": "" },
    },
  },
  generate: {
    fallback: true,
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: ["vee-validate/dist/rules"],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
