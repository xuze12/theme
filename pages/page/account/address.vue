<template>
  <div>
    <Header />
    <section class="section-b-space">
      <div class="container">
        <div class="checkout-page">
          <div class="checkout-form">
            <ValidationObserver>
              <form @submit.prevent="onSubmit">
                <div class="row">
                  <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="checkout-title">
                      <h3>{{ isShowAddButton ? "添加" : "修改" }}地址</h3>
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
                        <ValidationProvider rules="required|digits:11" v-slot="{ errors }" name="手机号码">
                          <div class="field-label">手机号码</div>
                          <input type="text" v-model="user.phone" name="Phone" placeholder="请输入手机号码" />
                          <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>

                      <div class="form-group col-md-6 col-sm-6 col-xs-12">
                        <div class="field-label">所在地区</div>
                        <v-distpicker :province="user.province" :city="user.city" :area="user.area" @selected="sel"
                          class="pc-address-distpicker"></v-distpicker>

                        <!--省市区三级联动-->
                        <div class="divwrap" v-if="show">
                          <v-distpicker type="mobile" :province="user.province" :city="user.city" :area="user.area"
                            @selected="sel"></v-distpicker>
                        </div>
                        <!--遮罩层-->
                        <div class="blacks" v-if="show" @click="countermand"></div>
                        <!--触发选择-->
                        <div @click="choose" class="mobile-address-distpicker">
                          <input type="text" :value="user.mobileCity" name="名字" placeholder="请选择地址" />
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
                          <input type="text" v-model="user.postCode" name="Postal Code" placeholder="请输入邮政编号" />
                          <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <button v-if="isShowAddButton" class="btn-solid btn" style="color:#fff" @onClick="onSubmit">
                          添加地址
                        </button>
                        <nuxt-link v-else :to="{ path: '/page/account/addressList' }">
                          <a class="btn-solid btn" style="color:#fff" @click="onModify">
                            修改地址
                          </a>
                        </nuxt-link>

                      </div>
                    </div>
                  </div>
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
    mapGetters,
    mapState,
    createNamespacedHelpers
  } from "vuex";
  import Header from "../../../components/header/header";
  import Footer from "../../../components/footer/footer";
  import {
    stringify
  } from "qs";
  import storage from "good-storage";

  const {
    mapActions
  } = createNamespacedHelpers("addAddr");
  export default {
    components: {
      VDistpicker,
      Header,
      Footer,
      ValidationProvider,
      ValidationObserver,
    },
    computed: {
      ...mapState({}),
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
          phone: "",
          email: "",
          address: "",
          city: "",
          postCode: "",
          //省市区
          province: "",
          area: "",
          cityId: "",
          areaId: "",
          provinceId: "",
          addrId: 0,
          mobileCity: ""
        },
        addrParam: {},
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
        isShowAddButton: true,
      };
    },
    mounted() {
      const isHasQuery = JSON.stringify(this.$route.query);
      if (isHasQuery !== "{}") {
        console.log(this.$route.query, "----$route.params.item");
        // localStorage.setItem("addrParam", JSON.stringify(this.$route.query));

        // this.addrParam = sessionStorage.getItem("addrParam");
        this.user.firstName = this.$route.query.receiver;
        this.user.phone = this.$route.query.mobile;
        this.user.address = this.$route.query.addr;
        this.user.postCode = this.$route.query.postCode;
        this.user.addrId = this.$route.query.addrId;
        this.user.area = this.$route.query.area;
        this.user.areaId = this.$route.query.areaId;
        this.user.city = this.$route.query.city;
        this.user.cityId = this.$route.query.cityId;
        this.user.province = this.$route.query.province;
        this.user.provinceId = this.$route.query.provinceId;
        console.log(this.addrParam, "this.addrParam");
        this.isShowAddButton = false;
      } else {
        this.isShowAddButton = true;
      }
    },
    methods: {
      ...mapActions(["postAddress", "updateAddr"]),
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
      sel(e) {
        console.log(e);
        this.user.area = e.area.value;
        this.user.city = e.city.value;
        this.user.province = e.province.value;
        this.user.areaId = e.area.code;
        this.user.cityId = e.city.code;
        this.user.provinceId = e.province.code;
        this.show = false;
        this.user.mobileCity = this.user.province + this.user.city + this.user.area;
      },
      city: () => {
        console.log("city");
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
      onSubmit(e) {
        console.log(e, "onSubmit------->");
        const firstName = this.user.firstName;
        const phone = this.user.phone;
        const postCode = this.user.postCode;
        const address = this.user.address;
        const area = this.user.area;
        const city = this.user.city;
        const province = this.user.province;
        const addrId = this.user.addrId;
        const areaId = this.user.areaId;
        const cityId = this.user.cityId;
        const provinceId = this.user.provinceId;

        if (
          firstName == "" ||
          phone == "" ||
          postCode == "" ||
          address == "" ||
          area == "" ||
          city == "" ||
          province == ""
        ) {
          alert("请输入信息，不能为空");
        } else {
          this.postAddress({
            firstName,
            phone,
            postCode,
            address,
            addrId,
            area,
            areaId,
            city,
            cityId,
            province,
            provinceId,
          });
        }
      },
      onModify(e) {
        console.log(e, "onModify------->");
        const firstName = this.user.firstName;
        const phone = this.user.phone;
        const postCode = this.user.postCode;
        const address = this.user.address;
        const area = this.user.area;
        const city = this.user.city;
        const province = this.user.province;
        const addrId = this.user.addrId;
        const areaId = this.user.areaId;
        const cityId = this.user.cityId;
        const provinceId = this.user.provinceId;

        if (
          firstName == "" ||
          phone == "" ||
          postCode == "" ||
          address == "" ||
          area == "" ||
          city == "" ||
          province == ""
        ) {
          alert("请输入信息，不能为空");
        } else {
          this.updateAddr({
            firstName,
            phone,
            postCode,
            address,
            addrId,
            area,
            areaId,
            city,
            cityId,
            province,
            provinceId,
          });
        }
      },
    },
  };
</script>