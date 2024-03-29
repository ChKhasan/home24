require("dotenv").config();
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "home24",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "bootstrap/dist/css/bootstrap.css",
    "element-ui/lib/theme-chalk/index.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~plugins/element-ui.js", ssr: false },
    { src: "~plugins/vue-js-modal.js", ssr: false },
    { src: "~plugins/vue-the-mask.js", ssr: false },
    { src: "~plugins/vue-toast-notification.js", ssr: false },
    { src: "~/plugins/vuelidate.js", ssr: false },
    // { src: "~plugins/vue-hover.js", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
  ],
  // https://8fde-195-158-30-173.eu.ngrok.io/api/
  axios: {
    credentials: true,
    init(axios) {
      axios.defaults.withCredentials = true;
    },
    baseURL: "https://bombadmin.pythonanywhere.com/api",
  },
  elementUI: {
    components: ["Button", "DatePicker", "Pagination", "Collapse"],
    locale: "",
  },
  mode: "spa",
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // fix to work with swiperjs 8 - need to run with standalone:true. That can make some troubles.
    standalone: true,
    extend(config, ctx) {
      // fix to work with swiperjs 8 add needed deps. you can get them from error when doing nuxt generate
      config.externals = [
        {
          encoding: "encoding",
        },
      ];
    },
  },
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
  },
  privateRuntimeConfig: {
    apiSecret: process.env.API_SECRET,
  },
  env: {
    auth: process.env.VUE_APP_DEFAULT_AUTH || "http://localhost:3000",
    apikey: process.env.VUE_APP_APIKEY,
    authdomain: process.env.VUE_APP_AUTHDOMAIN,
    databaseurl: process.env.VUE_APP_DATABASEURL,
    projectid: process.env.VUE_APP_PROJECTId,
    storgebucket: process.env.VUE_APP_STORAGEBUCKET,
    message: process.env.VUE_APP_MESSAGINGSENDERID,
    appid: process.env.VUE_APP_APPId,
    measurement: process.env.VUE_APP_MEASUREMENTID,
  },
};
