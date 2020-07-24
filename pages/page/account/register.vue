<template>
  <div>
    <Header />
    <section class="register-page section-b-space">
      <div class="container">
        <div class="row" style="justify-content:center">
          <div class="col-lg-6">
            <h3>{{title}}</h3>
            <div class="theme-card">
              <ValidationObserver>
                <form class="theme-form" :v-model="ruleForm" ref="ruleForm" :rules="rules">
                  <div class="form-row">
                    <div class="col-md-12">
                      <label for="First email">邮箱</label>
                      <ValidationProvider rules="required|email" v-slot="{ errors }" name="email">
                        <input class="form-control" id="First email" type="email" v-model="ruleForm.email"
                          placeholder="请输入邮箱" name="邮箱" />
                        <span class="validate-error" v-if="errors[0]">邮箱是必填字段</span>
                      </ValidationProvider>
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="col-md-6">
                      <label for="password">密码</label>
                      <ValidationProvider rules="required" v-slot="{ errors }" name="password">
                        <input type="password" class="form-control" id="password" v-model="ruleForm.password"
                          placeholder="输入密码" name="密码" />
                        <span class="validate-error" v-if="errors[0]">密码是必填字段</span>
                      </ValidationProvider>
                    </div>
                    <div class="col-md-6">
                      <label for="checkNewPsd">确认密码</label>
                      <ValidationProvider rules="required|confirmed:password" v-slot="{ errors }" name="checkNewPsd">
                        <input type="password" class="form-control" id="checkNewPsd" v-model="ruleForm.checkNewPsd"
                          placeholder="输入确认密码" name="确认密码" />
                        <span class="validate-error" v-if="errors[0]&&errors[0].includes('required')">确认密码是必填字段</span>
                        <span class="validate-error" v-if="errors[0]&&errors[0].includes('confirmation')">两次密码不一致</span>
                      </ValidationProvider>
                    </div>
                  </div>
                  <a class="btn-solid btn" @click="onSave">注册</a>
                  <span>
                    返回
                    <nuxt-link :to="{ path: '/page/account/login-firebase' }">登录</nuxt-link></span>
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
    mapState,
    mapGetters,
    createNamespacedHelpers
  } from "vuex";
  import {
    ValidationProvider,
    ValidationObserver
  } from 'vee-validate/dist/vee-validate.full.esm'

  import Header from '../../../components/header/header'
  import Footer from '../../../components/footer/footer'

  const {
    mapActions
  } = createNamespacedHelpers("register");
  export default {
    components: {
      Header,
      Footer,
      ValidationProvider,
      ValidationObserver
    },
    data() {
      //此处即表单发送之前验证
      let validatePass = (rule, value, callback) => {
        if (value === "") {
          if (this.ruleForm.checkNewPsd !== "") {
            this.$refs.ruleForm.validateField("checkNewPsd");
          }
          callback();
        } else {
          callback(new Error("请输入新密码"));
        }
      };
      let validatePass2 = (rule, value, callback) => {
        console.log(value, '确认密码')
        if (value === "") {
          callback();
        } else if (value !== this.ruleForm.password) {
          callback(new Error("两次输入密码不一致!"));
        } else {
          callback(new Error("请再次输入密码"));
        }
      };
      return {
        title: '注册',
        password: null,
        ruleForm: {},
        rules: {
          email: "",
          password: "",
          checkNewPsd: "",
        },
      }
    },
    methods: {
      ...mapActions(["userRegister"]),
      onSave() {
        console.log(this.ruleForm, "-----onSave");
        if (!this.ruleForm.checkNewPsd == "" || this.ruleForm.email == "" || this.ruleForm.password == "") {

          this.userRegister(this.ruleForm)

        } else if (!this.ruleForm.password === this.ruleForm.checkNewPsd) {

          console.log("密码不一致")

        } else {
          console.log("空空如也")

        }
      },
    }
  }
</script>