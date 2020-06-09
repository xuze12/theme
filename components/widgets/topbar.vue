<template>
  <div class="top-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="header-contact">
            <ul>
              <li>Welcome to 商城</li>
              <li>
                <i class="fa fa-phone" aria-hidden="true"></i>致电我们: 123 - 456 - 7890
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 text-right">
          <ul class="header-dropdown">
            <li class="mobile-wishlist">
              <nuxt-link :to="{ path: '/page/account/wishlist' }">
                <i class="fa fa-heart" aria-hidden="true"></i>
              </nuxt-link>
            </li>
            <li class="onhover-dropdown mobile-account">
              <i class="fa fa-user" aria-hidden="true"></i> 我的账户
              <ul class="onhover-show-div">
                <li>
                  <a v-if="isLogin" @click="logout">退出登陆</a>
                  <nuxt-link v-if="!isLogin" :to="{ path: '/page/account/login-firebase' }">登录</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{ path: '/page/account/dashboard' }">我的帐户</nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import UserAuth from "../../pages/page/account/auth/auth";
export default {
  data() {
    return {
      isLogin: false
    };
  },
  created() {
    this.isLogin = localStorage.getItem("userlogin");
  },
  methods: {
    logout: function() {
      UserAuth.Logout();
      this.$router.replace("/page/account/login-firebase");
    }
  }
};
</script>