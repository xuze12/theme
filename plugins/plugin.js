import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper/dist/ssr";
import Vue2Filters from "vue2-filters";
import { VueMasonryPlugin } from "vue-masonry";
import InfiniteLoading from "vue-infinite-loading";
import firebase from "firebase/app";
import PayPal from "vue-paypal-checkout";
import VueLazyLoad from "vue-lazyload";
import ProductZoomer from "vue-product-zoomer";
import VueScrollTo from "vue-scrollto";
import scroll from "vue-seamless-scroll";
import Toasted from "vue-toasted";
import VueRouter from "vue-router";
import ElementUI from "element-ui";

Vue.use(VueAwesomeSwiper);
Vue.use(Vue2Filters);
Vue.use(VueMasonryPlugin);
Vue.use(InfiniteLoading);
Vue.component("paypal-checkout", PayPal);
Vue.use(VueLazyLoad);
Vue.use(ProductZoomer);
Vue.use(VueScrollTo);
Vue.use(scroll);
Vue.use(Toasted);
Vue.use(VueRouter);
Vue.use(ElementUI);
// const config = {
//   apiKey: "Your API Key",
//   authDomain: "Your Auth Domain",
//   databaseURL: "http://120.77.140.132:9901",
//   projectId: "Your ProjectId",
//   storageBucket: "Your Storage Bucket",
//   messagingSenderId: "Your Messaging SenderId",
// };
// firebase.initializeApp(config);
