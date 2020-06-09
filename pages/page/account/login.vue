<template>
  <div>
    <Header />
    <Breadcrumbs title="Login" />
    <section class="login-page section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h3>{{logintitle}}</h3>
            <div class="theme-card">
              <ValidationObserver v-slot="{ invalid }">
                <form class="theme-form" @submit.prevent="onSubmit">
                  <div class="form-group">
                    <label for="email">邮箱</label>
                    <ValidationProvider rules="required|email" v-slot="{ errors }" name="email">
                      <input type="email" class="form-control" id="email" v-model="email" placeholder="Email"
                        name="email" />
                      <span class="validate-error">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="form-group">
                    <label for="password">密码</label>
                    <ValidationProvider rules="required" v-slot="{ errors }" name="password">
                      <input type="password" class="form-control" id="password" v-model="password"
                        placeholder="Enter your password" />
                      <span class="validate-error">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <button type="submit" class="btn btn-solid" :disabled="invalid">登录</button>
                </form>
              </ValidationObserver>
            </div>
          </div>
          <div class="col-lg-6 right-login">
            <h3>{{registertitle}}</h3>
            <div class="theme-card authentication-right">
              <h6 class="title-font">创建帐户</h6>
              <p>在我们商店注册一个免费帐户。注册既快又容易。它允许您从我们的商店订购。要开始购物，请单击“注册”</p>
              <nuxt-link :to="{ path: '/page/account/register'}" class="btn btn-solid">创建帐户</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
  import {
    ValidationProvider,
    ValidationObserver
  } from 'vee-validate/dist/vee-validate.full.esm'
  import Header from '../../../components/header/header'
  import Footer from '../../../components/footer/footer'
  import Breadcrumbs from '../../../components/widgets/breadcrumbs'
  export default {
    components: {
      Header,
      Footer,
      Breadcrumbs,
      ValidationProvider,
      ValidationObserver
    },
    data() {
      return {
        logintitle: '登录',
        registertitle: '新客户',
        email: null,
        password: null
      }
    },
    methods: {
      onSubmit() {
        console.log('Form has been submitted!')
      }
    }
  }
</script>