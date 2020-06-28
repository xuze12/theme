import Vue from "vue";
import Vuex from "vuex";
import blog from "./modules/blog";
import menu from "./modules/menu";
import products from "./modules/products";
import cart from "./modules/cart";
import filter from "./modules/filter";
import layout from "./modules/layout";

import home from "./modules/home";
import commodity from "./modules/commodity";
import shopCart from "./modules/shopCart";
import notice from "./modules/notice";
import search from "./modules/search";
import addAddr from "./modules/addAddr";
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
      home,
      commodity,
      shopCart,
      notice,
      search,
      addAddr,
    },
  });
};
export default createStore;
