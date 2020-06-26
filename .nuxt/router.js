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
const _c4a296a8 = () => interopDefault(import('../pages/shop/fashion/index.vue' /* webpackChunkName: "pages/shop/fashion/index" */))
const _3c65b026 = () => interopDefault(import('../pages/utils/api.js' /* webpackChunkName: "pages/utils/api" */))
const _226e3758 = () => interopDefault(import('../pages/utils/request.js' /* webpackChunkName: "pages/utils/request" */))
const _461eefa6 = () => interopDefault(import('../pages/blog/widgets/blog-list.vue' /* webpackChunkName: "pages/blog/widgets/blog-list" */))
const _1e68a2f8 = () => interopDefault(import('../pages/blog/widgets/blog-sidebar.vue' /* webpackChunkName: "pages/blog/widgets/blog-sidebar" */))
const _6029645c = () => interopDefault(import('../pages/page/account/address.vue' /* webpackChunkName: "pages/page/account/address" */))
const _241a781a = () => interopDefault(import('../pages/page/account/addressList.vue' /* webpackChunkName: "pages/page/account/addressList" */))
const _4eba0030 = () => interopDefault(import('../pages/page/account/cart.vue' /* webpackChunkName: "pages/page/account/cart" */))
const _21dc91e4 = () => interopDefault(import('../pages/page/account/checkout.vue' /* webpackChunkName: "pages/page/account/checkout" */))
const _969e12f0 = () => interopDefault(import('../pages/page/account/contact.vue' /* webpackChunkName: "pages/page/account/contact" */))
const _3cc7aefc = () => interopDefault(import('../pages/page/account/dashboard.vue' /* webpackChunkName: "pages/page/account/dashboard" */))
const _04cad93a = () => interopDefault(import('../pages/page/account/forget-password.vue' /* webpackChunkName: "pages/page/account/forget-password" */))
const _699ead5e = () => interopDefault(import('../pages/page/account/login.vue' /* webpackChunkName: "pages/page/account/login" */))
const _a51c119a = () => interopDefault(import('../pages/page/account/login-firebase.vue' /* webpackChunkName: "pages/page/account/login-firebase" */))
const _29f71949 = () => interopDefault(import('../pages/page/account/purchase.vue' /* webpackChunkName: "pages/page/account/purchase" */))
const _3218a1eb = () => interopDefault(import('../pages/page/account/register.vue' /* webpackChunkName: "pages/page/account/register" */))
const _f3786fe6 = () => interopDefault(import('../pages/page/account/wishlist.vue' /* webpackChunkName: "pages/page/account/wishlist" */))
const _67aad818 = () => interopDefault(import('../pages/page/account/auth/auth.js' /* webpackChunkName: "pages/page/account/auth/auth" */))
const _235b9f9f = () => interopDefault(import('../pages/shop/fashion/components/banner.vue' /* webpackChunkName: "pages/shop/fashion/components/banner" */))
const _0976694a = () => interopDefault(import('../pages/shop/fashion/components/collection_banner.vue' /* webpackChunkName: "pages/shop/fashion/components/collection_banner" */))
const _502a5b8f = () => interopDefault(import('../pages/shop/fashion/components/instagram.vue' /* webpackChunkName: "pages/shop/fashion/components/instagram" */))
const _1a560712 = () => interopDefault(import('../pages/shop/fashion/components/logo_slider.vue' /* webpackChunkName: "pages/shop/fashion/components/logo_slider" */))
const _1532014b = () => interopDefault(import('../pages/shop/fashion/components/notice.vue' /* webpackChunkName: "pages/shop/fashion/components/notice" */))
const _b4d9cdb8 = () => interopDefault(import('../pages/shop/fashion/components/product_slider.vue' /* webpackChunkName: "pages/shop/fashion/components/product_slider" */))
const _b02bfd3c = () => interopDefault(import('../pages/shop/fashion/components/product_tab.vue' /* webpackChunkName: "pages/shop/fashion/components/product_tab" */))
const _2f9c85de = () => interopDefault(import('../pages/shop/fashion/components/services.vue' /* webpackChunkName: "pages/shop/fashion/components/services" */))
const _ba6e9258 = () => interopDefault(import('../pages/shop/fashion/components/slider.vue' /* webpackChunkName: "pages/shop/fashion/components/slider" */))
const _138fba79 = () => interopDefault(import('../pages/collection/leftsidebar/_id.vue' /* webpackChunkName: "pages/collection/leftsidebar/_id" */))
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
  mode: 'hash',
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
    path: "/shop/fashion",
    component: _c4a296a8,
    name: "shop-fashion"
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
    path: "/page/account/address",
    component: _6029645c,
    name: "page-account-address"
  }, {
    path: "/page/account/addressList",
    component: _241a781a,
    name: "page-account-addressList"
  }, {
    path: "/page/account/cart",
    component: _4eba0030,
    name: "page-account-cart"
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
    path: "/page/account/forget-password",
    component: _04cad93a,
    name: "page-account-forget-password"
  }, {
    path: "/page/account/login",
    component: _699ead5e,
    name: "page-account-login"
  }, {
    path: "/page/account/login-firebase",
    component: _a51c119a,
    name: "page-account-login-firebase"
  }, {
    path: "/page/account/purchase",
    component: _29f71949,
    name: "page-account-purchase"
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
    path: "/shop/fashion/components/banner",
    component: _235b9f9f,
    name: "shop-fashion-components-banner"
  }, {
    path: "/shop/fashion/components/collection_banner",
    component: _0976694a,
    name: "shop-fashion-components-collection_banner"
  }, {
    path: "/shop/fashion/components/instagram",
    component: _502a5b8f,
    name: "shop-fashion-components-instagram"
  }, {
    path: "/shop/fashion/components/logo_slider",
    component: _1a560712,
    name: "shop-fashion-components-logo_slider"
  }, {
    path: "/shop/fashion/components/notice",
    component: _1532014b,
    name: "shop-fashion-components-notice"
  }, {
    path: "/shop/fashion/components/product_slider",
    component: _b4d9cdb8,
    name: "shop-fashion-components-product_slider"
  }, {
    path: "/shop/fashion/components/product_tab",
    component: _b02bfd3c,
    name: "shop-fashion-components-product_tab"
  }, {
    path: "/shop/fashion/components/services",
    component: _2f9c85de,
    name: "shop-fashion-components-services"
  }, {
    path: "/shop/fashion/components/slider",
    component: _ba6e9258,
    name: "shop-fashion-components-slider"
  }, {
    path: "/collection/leftsidebar/:id?",
    component: _138fba79,
    name: "collection-leftsidebar-id"
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
