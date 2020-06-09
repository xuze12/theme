import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6c4f3d9e = () => interopDefault(import('../pages/landing.vue' /* webpackChunkName: "pages/landing" */))
const _d746a176 = () => interopDefault(import('../pages/blog/blog-detail.vue' /* webpackChunkName: "pages/blog/blog-detail" */))
const _d04e6b9e = () => interopDefault(import('../pages/blog/blog-leftsidebar.vue' /* webpackChunkName: "pages/blog/blog-leftsidebar" */))
const _d1178592 = () => interopDefault(import('../pages/blog/blog-nosidebar.vue' /* webpackChunkName: "pages/blog/blog-nosidebar" */))
const _24c32434 = () => interopDefault(import('../pages/blog/blog-rightsidebar.vue' /* webpackChunkName: "pages/blog/blog-rightsidebar" */))
const _d92f2ee4 = () => interopDefault(import('../pages/page/404.vue' /* webpackChunkName: "pages/page/404" */))
const _536776f5 = () => interopDefault(import('../pages/service/api.js' /* webpackChunkName: "pages/service/api" */))
const _7c480290 = () => interopDefault(import('../pages/shop/fashion/index.vue' /* webpackChunkName: "pages/shop/fashion/index" */))
const _b8bd5e0e = () => interopDefault(import('../pages/utils/api.js' /* webpackChunkName: "pages/utils/api" */))
const _1caefa64 = () => interopDefault(import('../pages/utils/request.js' /* webpackChunkName: "pages/utils/request" */))
const _c17f589c = () => interopDefault(import('../pages/blog/widgets/blog-list.vue' /* webpackChunkName: "pages/blog/widgets/blog-list" */))
const _25853ef8 = () => interopDefault(import('../pages/blog/widgets/blog-sidebar.vue' /* webpackChunkName: "pages/blog/widgets/blog-sidebar" */))
const _1bde445c = () => interopDefault(import('../pages/page/account/cart.vue' /* webpackChunkName: "pages/page/account/cart" */))
const _3d24bcfc = () => interopDefault(import('../pages/page/account/checkout.vue' /* webpackChunkName: "pages/page/account/checkout" */))
const _fa9824d8 = () => interopDefault(import('../pages/page/account/contact.vue' /* webpackChunkName: "pages/page/account/contact" */))
const _d42dd9f0 = () => interopDefault(import('../pages/page/account/dashboard.vue' /* webpackChunkName: "pages/page/account/dashboard" */))
const _21441946 = () => interopDefault(import('../pages/page/account/login.vue' /* webpackChunkName: "pages/page/account/login" */))
const _cbed8ab2 = () => interopDefault(import('../pages/page/account/login-firebase.vue' /* webpackChunkName: "pages/page/account/login-firebase" */))
const _1c5303bd = () => interopDefault(import('../pages/page/account/purchase.vue' /* webpackChunkName: "pages/page/account/purchase" */))
const _24748c5f = () => interopDefault(import('../pages/page/account/register.vue' /* webpackChunkName: "pages/page/account/register" */))
const _789fb281 = () => interopDefault(import('../pages/page/account/wishlist.vue' /* webpackChunkName: "pages/page/account/wishlist" */))
const _5a06c28c = () => interopDefault(import('../pages/page/account/auth/auth.js' /* webpackChunkName: "pages/page/account/auth/auth" */))
const _7a0e37ab = () => interopDefault(import('../pages/shop/fashion/components/banner.vue' /* webpackChunkName: "pages/shop/fashion/components/banner" */))
const _73eedc84 = () => interopDefault(import('../pages/shop/fashion/components/collection_banner.vue' /* webpackChunkName: "pages/shop/fashion/components/collection_banner" */))
const _69563803 = () => interopDefault(import('../pages/shop/fashion/components/instagram.vue' /* webpackChunkName: "pages/shop/fashion/components/instagram" */))
const _d006d2f4 = () => interopDefault(import('../pages/shop/fashion/components/logo_slider.vue' /* webpackChunkName: "pages/shop/fashion/components/logo_slider" */))
const _6be49957 = () => interopDefault(import('../pages/shop/fashion/components/notice.vue' /* webpackChunkName: "pages/shop/fashion/components/notice" */))
const _813a35a0 = () => interopDefault(import('../pages/shop/fashion/components/product_slider.vue' /* webpackChunkName: "pages/shop/fashion/components/product_slider" */))
const _259090d6 = () => interopDefault(import('../pages/shop/fashion/components/product_tab.vue' /* webpackChunkName: "pages/shop/fashion/components/product_tab" */))
const _5c9e821d = () => interopDefault(import('../pages/shop/fashion/components/services.vue' /* webpackChunkName: "pages/shop/fashion/components/services" */))
const _0d096240 = () => interopDefault(import('../pages/shop/fashion/components/slider.vue' /* webpackChunkName: "pages/shop/fashion/components/slider" */))
const _76083885 = () => interopDefault(import('../pages/collection/leftsidebar/_id.vue' /* webpackChunkName: "pages/collection/leftsidebar/_id" */))
const _48e1d8fe = () => interopDefault(import('../pages/product/sidebar/_id.vue' /* webpackChunkName: "pages/product/sidebar/_id" */))
const _c223ebba = () => interopDefault(import('../pages/blog/_id.vue' /* webpackChunkName: "pages/blog/_id" */))
const _bb24da28 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'hash',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/landing",
    component: _6c4f3d9e,
    name: "landing"
  }, {
    path: "/blog/blog-detail",
    component: _d746a176,
    name: "blog-blog-detail"
  }, {
    path: "/blog/blog-leftsidebar",
    component: _d04e6b9e,
    name: "blog-blog-leftsidebar"
  }, {
    path: "/blog/blog-nosidebar",
    component: _d1178592,
    name: "blog-blog-nosidebar"
  }, {
    path: "/blog/blog-rightsidebar",
    component: _24c32434,
    name: "blog-blog-rightsidebar"
  }, {
    path: "/page/404",
    component: _d92f2ee4,
    name: "page-404"
  }, {
    path: "/service/api",
    component: _536776f5,
    name: "service-api"
  }, {
    path: "/shop/fashion",
    component: _7c480290,
    name: "shop-fashion"
  }, {
    path: "/utils/api",
    component: _b8bd5e0e,
    name: "utils-api"
  }, {
    path: "/utils/request",
    component: _1caefa64,
    name: "utils-request"
  }, {
    path: "/blog/widgets/blog-list",
    component: _c17f589c,
    name: "blog-widgets-blog-list"
  }, {
    path: "/blog/widgets/blog-sidebar",
    component: _25853ef8,
    name: "blog-widgets-blog-sidebar"
  }, {
    path: "/page/account/cart",
    component: _1bde445c,
    name: "page-account-cart"
  }, {
    path: "/page/account/checkout",
    component: _3d24bcfc,
    name: "page-account-checkout"
  }, {
    path: "/page/account/contact",
    component: _fa9824d8,
    name: "page-account-contact"
  }, {
    path: "/page/account/dashboard",
    component: _d42dd9f0,
    name: "page-account-dashboard"
  }, {
    path: "/page/account/login",
    component: _21441946,
    name: "page-account-login"
  }, {
    path: "/page/account/login-firebase",
    component: _cbed8ab2,
    name: "page-account-login-firebase"
  }, {
    path: "/page/account/purchase",
    component: _1c5303bd,
    name: "page-account-purchase"
  }, {
    path: "/page/account/register",
    component: _24748c5f,
    name: "page-account-register"
  }, {
    path: "/page/account/wishlist",
    component: _789fb281,
    name: "page-account-wishlist"
  }, {
    path: "/page/account/auth/auth",
    component: _5a06c28c,
    name: "page-account-auth-auth"
  }, {
    path: "/shop/fashion/components/banner",
    component: _7a0e37ab,
    name: "shop-fashion-components-banner"
  }, {
    path: "/shop/fashion/components/collection_banner",
    component: _73eedc84,
    name: "shop-fashion-components-collection_banner"
  }, {
    path: "/shop/fashion/components/instagram",
    component: _69563803,
    name: "shop-fashion-components-instagram"
  }, {
    path: "/shop/fashion/components/logo_slider",
    component: _d006d2f4,
    name: "shop-fashion-components-logo_slider"
  }, {
    path: "/shop/fashion/components/notice",
    component: _6be49957,
    name: "shop-fashion-components-notice"
  }, {
    path: "/shop/fashion/components/product_slider",
    component: _813a35a0,
    name: "shop-fashion-components-product_slider"
  }, {
    path: "/shop/fashion/components/product_tab",
    component: _259090d6,
    name: "shop-fashion-components-product_tab"
  }, {
    path: "/shop/fashion/components/services",
    component: _5c9e821d,
    name: "shop-fashion-components-services"
  }, {
    path: "/shop/fashion/components/slider",
    component: _0d096240,
    name: "shop-fashion-components-slider"
  }, {
    path: "/collection/leftsidebar/:id?",
    component: _76083885,
    name: "collection-leftsidebar-id"
  }, {
    path: "/product/sidebar/:id?",
    component: _48e1d8fe,
    name: "product-sidebar-id"
  }, {
    path: "/blog/:id?",
    component: _c223ebba,
    name: "blog-id"
  }, {
    path: "/",
    component: _bb24da28,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
