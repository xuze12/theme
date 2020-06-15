<template>
  <div>
    <Header />
    <Breadcrumbs title="Register" />
    <section class="register-page section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h3>{{title}}</h3>
            <div class="theme-card">
              <ValidationObserver v-slot="{ invalid }">
                <form class="theme-form" @submit.prevent="onSubmit">
                  <div class="form-row">
                    <div class="col-md-6">
                      <label for="First name">名字</label>
                      <ValidationProvider rules="required" v-slot="{ errors }" name="First name">
                        <input type="text" class="form-control" id="First name" v-model="fname" placeholder="名字"
                          name="名字" />
                        <span class="validate-error">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="col-md-6">
                      <label for="lname">姓</label>
                      <ValidationProvider rules="required" v-slot="{ errors }" name="Last name">
                        <input type="text" class="form-control" id="lname" v-model="lname" placeholder="姓"
                          name="lname" />
                        <span class="validate-error">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-6">
                      <label for="email">电子邮件</label>
                      <ValidationProvider rules="required|email" v-slot="{ errors }" name="Email">
                        <input type="email" class="form-control" id="email" v-model="email" placeholder="邮箱"
                          name="email" />
                        <span class="validate-error">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="col-md-6">
                      <label for="password">密码</label>
                      <ValidationProvider rules="required" v-slot="{ errors }" name="password">
                        <input type="password" class="form-control" id="password" v-model="password" placeholder="输入密码"
                          name="password" />
                        <span class="validate-error">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <button type="submit" class="btn btn-solid mt-2" :disabled="invalid">创建账号</button>
                  </div>
                </form>
              </ValidationObserver>
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
        title: '创建帐号',
        fname: null,
        lname: null,
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