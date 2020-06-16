<template>
  <div>
    <Header />
    <section class="section-b-space">
      <div class="container">
        <div class="checkout-page">
          <div class="checkout-form">
            <ValidationObserver v-slot="{ invalid }">
              <form @submit.prevent="onSubmit">
                <div class="row">
                  <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="checkout-title">
                      <h3>添加地址</h3>
                    </div>

                    <div class="row check-out">
                      <div class="form-group col-md-6 col-sm-6 col-xs-12">
                        <div class="field-label">收货人</div>
                        <ValidationProvider rules="required" v-slot="{ errors }" name="收货人">
                          <input type="text" v-model="user.firstName" name="名字" placeholder="请输入收货人" />
                          <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>

                      <div class="form-group col-md-6 col-sm-6 col-xs-12">
                        <ValidationProvider rules="required|digits:10" v-slot="{ errors }" name="手机号码">
                          <div class="field-label">手机号码</div>
                          <input type="text" v-model="user.phone" name="Phone" placeholder="请输入手机号码" />
                          <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>

                      <div class="form-group col-md-6 col-sm-6 col-xs-12">
                        <div class="field-label">所在地区</div>
                        <v-distpicker @selected="sel" class="pc-address-distpicker"></v-distpicker>
                        <!--省市区三级联动-->
                        <div class="divwrap" v-if="show">
                          <v-distpicker type="mobile" @province="onChangeProvince1" @city="onChangeCity"
                            @area="onChangeArea"></v-distpicker>
                        </div>
                        <!--遮罩层-->
                        <div class="blacks" v-if="show" @click="countermand"></div>
                        <!--触发选择-->
                        <div @click="choose" class="mobile-address-distpicker">
                          <input type="text" :value="city" name="名字" placeholder="请选择地址" />
                        </div>
                      </div>

                      <div class="form-group col-md-6 col-sm-6 col-xs-12">
                        <div class="field-label">详细地址</div>
                        <ValidationProvider rules="required" v-slot="{ errors }" name="详细地址">
                          <input type="text" v-model="user.address" name="Address" placeholder="如道路、门牌号、小区、楼栋号、单元室等" />
                          <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>

                      <div class="form-group col-md-6 col-sm-6 col-xs-12">
                        <div class="field-label">邮政编号</div>
                        <ValidationProvider rules="required" v-slot="{ errors }" name="邮政编号">
                          <input type="text" v-model="user.pincode" name="Postal Code" placeholder="请输入邮政编号" />
                          <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <a href="#" class="btn-solid btn" style="color:#fff">添加地址</a>
                      </div>
                    </div>
                  </div>
                  <!--<div class="col-lg-6 col-sm-12 col-xs-12">
                    <div class="checkout-details">
                      <div class="order-box">
                        <div class="title-box">
                          <div>
                            Product
                            <span>Total</span>
                          </div>
                        </div>
                        <ul class="qty" v-if="cart.length">
                          <li v-for="(item,index) in cart" :key="index">
                            {{ item.title | uppercase }} X {{ item.quantity }}
                            <span>{{ (item.price * curr.curr) * item.quantity | currency(curr.symbol) }}</span>
                          </li>
                        </ul>
                        <ul class="sub-total">
                          <li>
                            Subtotal
                            <span class="count">{{ cartTotal * curr.curr | currency(curr.symbol) }}</span>
                          </li>
                          <li>Shipping
                            <div class="shipping">
                              <div class="shopping-option">
                                <input type="checkbox" name="free-shipping" id="free-shipping">
                                <label for="free-shipping">免费送货</label>
                              </div>
                              <div class="shopping-option">
                                <input type="checkbox" name="local-pickup" id="local-pickup">
                                <label for="local-pickup">Local Pickup</label>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <ul class="sub-total">
                          <li>
                            Total
                            <span class="count">{{ cartTotal * curr.curr | currency(curr.symbol) }}</span>
                          </li>
                        </ul>
                      </div>
                      <div class="payment-box">
                        <div class="upper-box">
                          <div class="payment-options">
                            <ul>
                              <li>
                                <div class="radio-option">
                                  <input type="radio" name="payment-group" id="payment-1" checked="checked"
                                    v-model="payment" :value="false" />
                                  <label for="payment-1">
                                    Stripe
                                    <span class="small-text">Please send a check to Store Name, Store Street, Store
                                      Town, Store State / County, Store Postcode.</span>
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div class="radio-option paypal">
                                  <input type="radio" :value="true" v-model="payment" name="payment-group"
                                    id="payment-3" />
                                  <label for="payment-3">
                                    PayPal
                                    <span class="image">
                                      <img src="../../../assets/images/paypal.png" alt />
                                    </span>
                                  </label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="text-right">
                          <no-ssr>
                            <paypal-checkout :amount=getamt() currency="USD" :client="paypal" :env="environment"
                              :button-style="button_style" v-if="payment" v-on:payment-authorized="onPaymentComplete"
                              v-on:payment-cancelled="onCancelled()">
                            </paypal-checkout>
                          </no-ssr>
                          <button type="submit" @click="order()" v-if="cart.length && !payment" :disabled="invalid"
                            class="btn-solid btn">Place Order</button>
                        </div>
                      </div>
                    </div>
                  </div>-->
                </div>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
  import VDistpicker from "v-distpicker";
  import {
    ValidationProvider,
    ValidationObserver,
  } from "vee-validate/dist/vee-validate.full.esm";
  import {
    mapGetters
  } from "vuex";
  import Header from "../../../components/header/header";
  import Footer from "../../../components/footer/footer";

  export default {
    components: {
      VDistpicker,
      Header,
      Footer,
      ValidationProvider,
      ValidationObserver,
    },
    computed: {
      ...mapGetters({
        cart: "cart/cartItems",
        cartTotal: "cart/cartTotalAmount",
        curr: "products/changeCurrency",
      }),
    },
    data() {
      return {
        user: {
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          city: "",
          state: "",
          pincode: "",
          lxr: "",
          lxdh: "",
          //省市区
          province: "",
          area: "",
        },
        show: false,
        props: ["ips"],
        isLogin: false,
        paypal: {
          sandbox: "Your Sandbox ID",
        },
        payment: false,
        environment: "sandbox",
        button_style: {
          label: "checkout",
          size: "medium", // small | medium | large | responsive
          shape: "pill", // pill | rect
          color: "blue", // gold | blue | silver | black
        },
        amtchar: "",
      };
    },
    methods: {
      //取消选择地区
      countermand: function () {
        this.show = false;
        console.log(this.show, "======>>>");
      },
      //打开选择地区
      choose() {
        console.log(this.show, "11233132======>>>");
        this.show = true;
      },
      onChangeProvince1: function (a) {
        this.province = a.value;
        if (a.value == "台湾省") {
          this.show = false;
        }
      },
      onChangeCity: function (a) {
        this.city = a.value;
        console.log(this.city, "onChangeCity");
      },
      onChangeArea: function (a) {
        this.area = a.value;
        this.show = false;
        this.city = this.province + this.city + this.area;
        console.log(this.city, "onChangeArea");
      },
      order() {
        this.isLogin = localStorage.getItem("userlogin");
        if (this.isLogin) {
          this.payWithStripe();
        } else {
          this.$router.replace("/page/account/login-firebase");
        }
      },
      payWithStripe() {
        const handler = window.StripeCheckout.configure({
          key: "PUBLISHBLE_KEY", // 'PUBLISHBLE_KEY' publishble key
          locale: "auto",
          closed: function () {
            handler.close();
          },
          token: (token) => {
            this.$store.dispatch("products/createOrder", {
              product: this.cart,
              userDetail: this.user,
              token: token.id,
              amt: this.cartTotal,
            });
            this.$router.push("/page/order-success");
          },
        });
        handler.open({
          name: "Multikart ",
          description: "Reach to your Dream",
          amount: this.cartTotal * 100,
        });
      },
      getamt() {
        return this.cartTotal.toString();
      },
      onPaymentComplete: function (data) {
        this.$store.dispatch("products/createOrder", {
          product: this.cart,
          userDetail: this.user,
          token: data.orderID,
          amt: this.cartTotal,
        });
        this.$router.push("/page/order-success");
      },
      onCancelled() {
        console.log("You cancelled a window");
      },
      onSubmit() {
        console.log("Form has been submitted!");
      },
    },
  };
</script>