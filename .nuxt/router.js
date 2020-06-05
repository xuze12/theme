import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _57c84886 = () => interopDefault(import('../pages/landing.vue' /* webpackChunkName: "pages/landing" */))
const _04e75b8e = () => interopDefault(import('../pages/blog/blog-detail.vue' /* webpackChunkName: "pages/blog/blog-detail" */))
const _b5064086 = () => interopDefault(import('../pages/blog/blog-leftsidebar.vue' /* webpackChunkName: "pages/blog/blog-leftsidebar" */))
const _35f845c3 = () => interopDefault(import('../pages/blog/blog-nosidebar.vue' /* webpackChunkName: "pages/blog/blog-nosidebar" */))
const _68bc7fb0 = () => interopDefault(import('../pages/blog/blog-rightsidebar.vue' /* webpackChunkName: "pages/blog/blog-rightsidebar" */))
const _5cd780fc = () => interopDefault(import('../pages/page/404.vue' /* webpackChunkName: "pages/page/404" */))
const _940d3e2e = () => interopDefault(import('../pages/service/api.js' /* webpackChunkName: "pages/service/api" */))
const _12364a5d = () => interopDefault(import('../pages/shop/xz_fashion/index.vue' /* webpackChunkName: "pages/shop/xz_fashion/index" */))
const _3c65b026 = () => interopDefault(import('../pages/utils/api.js' /* webpackChunkName: "pages/utils/api" */))
const _226e3758 = () => interopDefault(import('../pages/utils/request.js' /* webpackChunkName: "pages/utils/request" */))
const _461eefa6 = () => interopDefault(import('../pages/blog/widgets/blog-list.vue' /* webpackChunkName: "pages/blog/widgets/blog-list" */))
const _1e68a2f8 = () => interopDefault(import('../pages/blog/widgets/blog-sidebar.vue' /* webpackChunkName: "pages/blog/widgets/blog-sidebar" */))
const _21dc91e4 = () => interopDefault(import('../pages/page/account/checkout.vue' /* webpackChunkName: "pages/page/account/checkout" */))
const _969e12f0 = () => interopDefault(import('../pages/page/account/contact.vue' /* webpackChunkName: "pages/page/account/contact" */))
const _3cc7aefc = () => interopDefault(import('../pages/page/account/dashboard.vue' /* webpackChunkName: "pages/page/account/dashboard" */))
const _67afb43a = () => interopDefault(import('../pages/page/account/hlh_cart.vue' /* webpackChunkName: "pages/page/account/hlh_cart" */))
const _f7fbe43e = () => interopDefault(import('../pages/page/account/hlh_dashboard.vue' /* webpackChunkName: "pages/page/account/hlh_dashboard" */))
const _2b9a6c78 = () => interopDefault(import('../pages/page/account/hlh_purchase.vue' /* webpackChunkName: "pages/page/account/hlh_purchase" */))
const _467f7888 = () => interopDefault(import('../pages/page/account/hlh_wishlist.vue' /* webpackChunkName: "pages/page/account/hlh_wishlist" */))
const _699ead5e = () => interopDefault(import('../pages/page/account/login.vue' /* webpackChunkName: "pages/page/account/login" */))
const _a51c119a = () => interopDefault(import('../pages/page/account/login-firebase.vue' /* webpackChunkName: "pages/page/account/login-firebase" */))
const _3218a1eb = () => interopDefault(import('../pages/page/account/register.vue' /* webpackChunkName: "pages/page/account/register" */))
const _f3786fe6 = () => interopDefault(import('../pages/page/account/wishlist.vue' /* webpackChunkName: "pages/page/account/wishlist" */))
const _67aad818 = () => interopDefault(import('../pages/page/account/auth/auth.js' /* webpackChunkName: "pages/page/account/auth/auth" */))
const _30c333d0 = () => interopDefault(import('../pages/shop/xz_fashion/components/banner.vue' /* webpackChunkName: "pages/shop/xz_fashion/components/banner" */))
const _db6a070e = () => interopDefault(import('../pages/shop/xz_fashion/components/collection_banner.vue' /* webpackChunkName: "pages/shop/xz_fashion/components/collection_banner" */))
const _07b0dab7 = () => interopDefault(import('../pages/shop/xz_fashion/components/hlh_notice.vue' /* webpackChunkName: "pages/shop/xz_fashion/components/hlh_notice" */))
const _38c08dbe = () => interopDefault(import('../pages/shop/xz_fashion/components/instagram.vue' /* webpackChunkName: "pages/shop/xz_fashion/components/instagram" */))
const _36286981 = () => interopDefault(import('../pages/shop/xz_fashion/components/logo_slider.vue' /* webpackChunkName: "pages/shop/xz_fashion/components/logo_slider" */))
const _4d3fec55 = () => interopDefault(import('../pages/shop/xz_fashion/components/product_slider.vue' /* webpackChunkName: "pages/shop/xz_fashion/components/product_slider" */))
const _7887385e = () => interopDefault(import('../pages/shop/xz_fashion/components/product_tab.vue' /* webpackChunkName: "pages/shop/xz_fashion/components/product_tab" */))
const _3a050902 = () => interopDefault(import('../pages/shop/xz_fashion/components/services.vue' /* webpackChunkName: "pages/shop/xz_fashion/components/services" */))
const _9f9f69f6 = () => interopDefault(import('../pages/shop/xz_fashion/components/slider.vue' /* webpackChunkName: "pages/shop/xz_fashion/components/slider" */))
const _2c67929a = () => interopDefault(import('../pages/collection/xz_leftsidebar/_id.vue' /* webpackChunkName: "pages/collection/xz_leftsidebar/_id" */))
const _7a131c0d = () => interopDefault(import('../pages/product/sidebar/_id.vue' /* webpackChunkName: "pages/product/sidebar/_id" */))
const _45cc3dd2 = () => interopDefault(import('../pages/blog/_id.vue' /* webpackChunkName: "pages/blog/_id" */))
const _38264078 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/landing",
    component: _57c84886,
    name: "landing"
  }, {
    path: "/blog/blog-detail",
    component: _04e75b8e,
    name: "blog-blog-detail"
  }, {
    path: "/blog/blog-leftsidebar",
    component: _b5064086,
    name: "blog-blog-leftsidebar"
  }, {
    path: "/blog/blog-nosidebar",
    component: _35f845c3,
    name: "blog-blog-nosidebar"
  }, {
    path: "/blog/blog-rightsidebar",
    component: _68bc7fb0,
    name: "blog-blog-rightsidebar"
  }, {
    path: "/page/404",
    component: _5cd780fc,
    name: "page-404"
  }, {
    path: "/service/api",
    component: _940d3e2e,
    name: "service-api"
  }, {
    path: "/shop/xz_fashion",
    component: _12364a5d,
    name: "shop-xz_fashion"
  }, {
    path: "/utils/api",
    component: _3c65b026,
    name: "utils-api"
  }, {
    path: "/utils/request",
    component: _226e3758,
    name: "utils-request"
  }, {
    path: "/blog/widgets/blog-list",
    component: _461eefa6,
    name: "blog-widgets-blog-list"
  }, {
    path: "/blog/widgets/blog-sidebar",
    component: _1e68a2f8,
    name: "blog-widgets-blog-sidebar"
  }, {
    path: "/page/account/checkout",
    component: _21dc91e4,
    name: "page-account-checkout"
  }, {
    path: "/page/account/contact",
    component: _969e12f0,
    name: "page-account-contact"
  }, {
    path: "/page/account/dashboard",
    component: _3cc7aefc,
    name: "page-account-dashboard"
  }, {
    path: "/page/account/hlh_cart",
    component: _67afb43a,
    name: "page-account-hlh_cart"
  }, {
    path: "/page/account/hlh_dashboard",
    component: _f7fbe43e,
    name: "page-account-hlh_dashboard"
  }, {
    path: "/page/account/hlh_purchase",
    component: _2b9a6c78,
    name: "page-account-hlh_purchase"
  }, {
    path: "/page/account/hlh_wishlist",
    component: _467f7888,
    name: "page-account-hlh_wishlist"
  }, {
    path: "/page/account/login",
    component: _699ead5e,
    name: "page-account-login"
  }, {
    path: "/page/account/login-firebase",
    component: _a51c119a,
    name: "page-account-login-firebase"
  }, {
    path: "/page/account/register",
    component: _3218a1eb,
    name: "page-account-register"
  }, {
    path: "/page/account/wishlist",
    component: _f3786fe6,
    name: "page-account-wishlist"
  }, {
    path: "/page/account/auth/auth",
    component: _67aad818,
    name: "page-account-auth-auth"
  }, {
    path: "/shop/xz_fashion/components/banner",
    component: _30c333d0,
    name: "shop-xz_fashion-components-banner"
  }, {
    path: "/shop/xz_fashion/components/collection_banner",
    component: _db6a070e,
    name: "shop-xz_fashion-components-collection_banner"
  }, {
    path: "/shop/xz_fashion/components/hlh_notice",
    component: _07b0dab7,
    name: "shop-xz_fashion-components-hlh_notice"
  }, {
    path: "/shop/xz_fashion/components/instagram",
    component: _38c08dbe,
    name: "shop-xz_fashion-components-instagram"
  }, {
    path: "/shop/xz_fashion/components/logo_slider",
    component: _36286981,
    name: "shop-xz_fashion-components-logo_slider"
  }, {
    path: "/shop/xz_fashion/components/product_slider",
    component: _4d3fec55,
    name: "shop-xz_fashion-components-product_slider"
  }, {
    path: "/shop/xz_fashion/components/product_tab",
    component: _7887385e,
    name: "shop-xz_fashion-components-product_tab"
  }, {
    path: "/shop/xz_fashion/components/services",
    component: _3a050902,
    name: "shop-xz_fashion-components-services"
  }, {
    path: "/shop/xz_fashion/components/slider",
    component: _9f9f69f6,
    name: "shop-xz_fashion-components-slider"
  }, {
    path: "/collection/xz_leftsidebar/:id?",
    component: _2c67929a,
    name: "collection-xz_leftsidebar-id"
  }, {
    path: "/product/sidebar/:id?",
    component: _7a131c0d,
    name: "product-sidebar-id"
  }, {
    path: "/blog/:id?",
    component: _45cc3dd2,
    name: "blog-id"
  }, {
    path: "/",
    component: _38264078,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
