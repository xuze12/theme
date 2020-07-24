<template>
  <div>
    <Header />
    <section class="login-page section-b-space">
      <div class="container">
        <div class="row" style="justify-content:center">
          <div class="col-sm-6">
            <h3>{{logintitle}}</h3>
            <div class="theme-card">
              <form class="theme-form" v-on:submit="checkForm" method="post">
                <div v-if="errors.length">
                  <ul class="validation-error mb-3">
                    <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                  </ul>
                </div>
                <div class="form-group">
                  <label for="email">邮箱</label>
                  <input type="email" class="form-control" id="email" v-model="email" placeholder="Email" name="email"
                    required />
                </div>
                <div class="form-group">
                  <label for="password">密码</label>
                  <input type="password" class="form-control" id="password" v-model="password"
                    placeholder="Enter your password" required />
                </div>
                <a class="btn-solid btn" href="javascript:void(0)" @click="signUp">登录</a>
                <span>
                  如果您还没注册请点这里
                  <nuxt-link :to="{ path: '/page/account/register'}">
                    注册
                  </nuxt-link>
                </span>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
  import firebase from "firebase";
  import Header from "../../../components/header/header";
  import Footer from "../../../components/footer/footer";
  import Userauth from "./auth/auth";
  import {
    emailLogin
  } from "../../service/api";

  export default {
    components: {
      Header,
      Footer,
    },
    data() {
      return {
        logintitle: "登录",
        registertitle: "新客户",
        errors: [],
        email: "123456789@qq.com",
        password: "123456"
      };
    },
    methods: {
      checkForm: function (e) {
        this.errors = [];
        if (!this.email) {
          this.errors.push("Email required.");
        } else if (!this.validEmail(this.email)) {
          this.errors.push("Valid email required.");
        }
        if (!this.password) {
          this.errors.push("Password required.");
        }
        if (!this.errors.length) return true;
        e.preventDefault();
      },
      validEmail: function (email) {
        const re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },

      async signUp() {
        if (this.email === "" && this.password === "") {
          this.email = "123456789@qq.com";
          this.password = "123456";
        } else {
          const params = {
            principal: this.email,
            credentials: this.password
          };
          try {
            const {
              data
            } = await emailLogin(params);

            const is_true = !(
              data &&
              typeof data === "object" &&
              Reflect.has(data, "access_token")
            );
            console.log(data, "------emailLogin");

            if (is_true) {
              return;
            }
            Userauth.localLogin(data);
            this.$router.replace("/shop/fashion");
            // this.$router.replace("/page/account/checkout");
          } catch (error) {}

        }
      },

    }
  };
</script>