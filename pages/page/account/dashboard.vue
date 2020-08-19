<template>
  <div>
    <Header />
    <section class="section-b-space">
      <div class="container">
        <div class="row">
          <b-card no-body v-bind:class="'dashboardtab'">
            <b-tabs pills card vertical>
              <b-tab title="帐户信息" active>
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>我的账户</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>你好!</p>
                      </div>
                      <div class="box-account box-info">
                        <div class="box-head">
                          <h2>帐户信息</h2>
                        </div>

                        <div>
                          <div class="box">
                            <div class="box-title">
                              <h3>地址簿</h3>
                              <nuxt-link :to="{ path: '/page/account/addressList' }">
                                <a>管理地址</a>
                              </nuxt-link>
                            </div>
                            <div class="row">
                              <div class="col-sm-6">
                                <h6>添加账单地址</h6>
                                <address>
                                  您尚未添加帐单邮寄地址。
                                  <br />
                                  <nuxt-link :to="{ path: '/page/account/address' }">
                                    <a>添加地址</a>
                                  </nuxt-link>
                                  <a href="#"></a>
                                </address>
                              </div>
                              <div class="col-sm-6">
                                <h6>管理送货地址</h6>
                                <address>
                                  <br />
                                  <nuxt-link :to="{ path: '/page/account/addressList' }">
                                    <a>管理地址</a>
                                  </nuxt-link>
                                </address>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>

              <b-tab title="我的订单">
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>我的订单</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>您好, MARK JECNO !</p>
                        <p>从您的订单中，您可以查看所有订单和订单状态。</p>
                      </div>
                      <div class="box-account box-info">
                        <div class="box-head">
                          <h2>订单信息</h2>
                        </div>
                        <div>
                          <div class="box">
                            <div class="box-title mb-3">
                              <h3>订单清单</h3>
                            </div>
                            <div class="row">
                              <div class="col-sm-6">
                                <h4>订货号：2105</h4>
                                <h6>修身棉质衬衫</h6>
                              </div>
                              <div class="col-sm-6">
                                <h4>订货号：1032</h4>
                                <h6>修身棉质衬衫</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="box mt-2">
                            <div class="row">
                              <div class="col-sm-6">
                                <h4>订货号：2105</h4>
                                <h6>修身棉质衬衫</h6>
                              </div>
                              <div class="col-sm-6">
                                <h4>订货号：1032</h4>
                                <h6>修身棉质衬衫</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>

              <b-tab title="修改密码">
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>修改密码</h2>
                      </div>

                      <el-form :inline="true" :model="ruleForm" ref="ruleForm" :rules="rules" label-width="120px"
                        size="medium">
                        <el-row class="text-center">
                          <el-col :span="24">
                            <el-form-item label="旧密码" prop="oldPsd">
                              <el-input type="password" v-model="ruleForm.oldPsd" placeholder="请输入旧密码"></el-input>
                            </el-form-item>
                          </el-col>
                          <el-col :span="24">
                            <el-form-item label="新密码" prop="newPsd">
                              <el-input type="newPsd" v-model="ruleForm.newPsd" placeholder="请输入新密码"></el-input>
                            </el-form-item>
                          </el-col>
                          <el-col :span="24">
                            <el-form-item label="确认新密码" prop="checkNewPsd">
                              <el-input type="password" v-model="ruleForm.checkNewPsd" placeholder="请再次输入新密码">
                              </el-input>
                            </el-form-item>
                          </el-col>
                          <el-col :span="24">
                            <el-form-item label="验证码" prop="code">
                              <el-input type="code" v-model="ruleForm.code" placeholder="请输入验证码" >
                              </el-input>
                              <div style="position: absolute;display: inline-flex;width: 100px;margin-left: 10px;">
                                <span v-show="show" @click="getCode">获取验证码</span>
                                <span v-show="!show" class="count">{{ count }} s</span>
                              </div>
                            </el-form-item>
                          </el-col>
                        </el-row>
                        <el-row class="text-center">
                          <el-col :span="24">
                            <el-form-item name="onSubmit" size="small" class="text-center subBtn">
                              <el-button type="primary" @click="onSave">确定修改</el-button>
                            </el-form-item>
                          </el-col>
                        </el-row>
                      </el-form>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
  import {
    ValidationProvider,
    ValidationObserver,
  } from "vee-validate/dist/vee-validate.full.esm";

  import Header from "../../../components/header/header";
  import Footer from "../../../components/footer/footer";
  import Breadcrumbs from "../../../components/widgets/breadcrumbs";
  export default {
    components: {
      Header,
      Footer,
      Breadcrumbs,
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
        if (value === "") {
          callback();
        } else if (value !== this.ruleForm.newPsd) {
          callback(new Error("两次输入密码不一致!"));
        } else {
          callback(new Error("请再次输入密码"));
        }
      };

      return {
        show: true,
        count: "",
        timer: null,
        loading: false,
        ruleForm: {},
        userData: {},
        rules: {
          oldPsd: [{
            required: true,
            message: "请输入密码",
            trigger: "blur",
          }, ],
          newPsd: [{
            required: true,
            validator: validatePass,
            trigger: "blur",
          }, ],
          checkNewPsd: [{
            required: true,
            validator: validatePass2,
            trigger: "blur",
          }, ],
          code: [{
            required: true,
            message: "请输入验证码",
            trigger: "blur",
          }, ],
          old_password: ""
        },
      };
    },
    methods: {
      getCode() {

        if (!this.ruleForm.oldPsd == "") {
          const TIME_COUNT = 5;
          if (!this.timer) {
            this.count = TIME_COUNT;
            this.show = false;
            this.timer = setInterval(() => {
              if (this.count > 0 && this.count <= TIME_COUNT) {
                this.count--;
              } else {
                this.show = true;
                clearInterval(this.timer);
                this.timer = null;
              }
            }, 1000);
          }

        } else {
          this.$refs.ruleForm.validateField("oldPsd")

          console.log("空空如也");
          return;
        }
      },
      onSave() {
        console.log(this.ruleForm, "-----onSave");
        if (!this.ruleForm.newPsd == "" && this.ruleForm.checkNewPsd == "" && this.ruleForm.code == "") {
          console.log("提交---onSave");

        } else {
          this.$refs.ruleForm.validateField("oldPsd")
          this.$refs.ruleForm.validateField("newPsd")
          this.$refs.ruleForm.validateField("checkNewPsd")
          this.$refs.ruleForm.validateField("code")
          console.log("空空如也---onSave");
          return;
        }
      },
    },
  };
</script>