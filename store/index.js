import Vue from "vue";
import Vuex from "vuex";
import blog from "./modules/blog";
import menu from "./modules/menu";
import products from "./modules/products";
import cart from "./modules/cart";
import filter from "./modules/filter";
import layout from "./modules/layout";

import xz_home from "./modules/xz_home";
import hlh_commodity from "./modules/hlh_commodity";
import shopCart from "./modules/shopCart";
import hlh_notice from "./modules/hlh_notice";
import search from "./modules/search";
Vue.use(Vuex);
const createStore = () => {
  return new Vuex.Store({
    modules: {
      blog,
      menu,
      products,
      cart,
      filter,
      layout,
      xz_home,
      hlh_commodity,
      shopCart,
      hlh_notice,
      search,
    },
  });
};
export default createStore;
