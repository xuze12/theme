<template>
  <div>
    <Header />
    <section class="cart-section section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <table class="table cart-table table-responsive-xs" v-if="shopCartInfo.length">
              <thead>
                <tr class="table-head">
                  <th scope="col">图片</th>
                  <th scope="col">产品名称</th>
                  <th scope="col">价格</th>
                  <th scope="col">数量</th>
                  <th scope="col">删除</th>
                  <th scope="col">优惠金额</th>
                </tr>
              </thead>
              <tbody v-for="(item,index) in shopCartInfo" :key="index">
                <tr>
                  <td style="display: inline-flex; align-items: center;">
                    <input type="checkbox" :id="item.prodId" :value="item.prodId" v-model="new_prodId"
                      @change="checkButton" style="margin-right: 10px;" />
                    <nuxt-link :to="{ path: '/product/sidebar/'+item.prodId}">
                      <img :src="'http://shop-qiniu.redbellnet.com/'+ item.pic" alt />
                    </nuxt-link>
                  </td>
                  <td>
                    <nuxt-link :to="{ path: '/product/sidebar/'+item.prodId}">{{item.prodName}}
                    </nuxt-link>
                    <div class="mobile-cart-content row">
                      <div class="col-xs-3">
                        <div class="qty-box">
                          <div class="input-group">
                            <span class="input-group-prepend">
                              <button type="button" class="btn quantity-left-minus" data-type="minus" data-field
                                @click="decrement(item)" :disabled="item.prodCount<=1">
                                <i class="ti-angle-left"></i>
                              </button>
                            </span>
                            <input type="text" name="quantity" :disabled="item.prodCount > item.stock"
                              class="form-control input-number" v-model="item.prodCount" style="padding: 0px;" />
                            <span class="input-group-prepend">
                              <button type="button" class="btn quantity-right-plus" data-type="plus" data-field
                                @click="increment(item)">
                                <i class="ti-angle-right"></i>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="col-xs-3">
                        <h2 class="td-color">￥{{ item.price }}</h2>
                      </div>
                      <div class="col-xs-3">
                        <h2 class="td-color">
                          <a href="#" @click="removeCartItem(item)" class="icon">
                            <i class="ti-close"></i>
                          </a>
                        </h2>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h2>￥{{ item.price }}</h2>
                  </td>
                  <td>
                    <div class="qty-box">
                      <div class="input-group">
                        <span class="input-group-prepend">
                          <button type="button" class="btn quantity-left-minus" :disabled="item.prodCount<=1"
                            data-type="minus" data-field @click="decrement(item)">
                            <i class="ti-angle-left"></i>
                          </button>
                        </span>
                        <input type="text" name="prodCount" class="form-control input-number"
                          :disabled="item.prodCount > item.stock" v-model="item.prodCount" />
                        <span class="input-group-prepend">
                          <button type="button" class="btn quantity-right-plus" data-type="plus" data-field
                            @click="increment(item)">
                            <i class="ti-angle-right"></i>
                          </button>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <a class="icon" @click="removeCartItem(item)">
                      <i class="ti-close"></i>
                    </a>
                  </td>
                  <td>
                    <h2 class="td-color">￥{{ item.shareReduce || "0.00"}}</h2>
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="table cart-table table-responsive-md" v-if="shopCartInfo.length">
              <tfoot>
                <tr>
                  <td>合计 :</td>
                  <td>
                    <h2>￥{{ calTotalPrice }}</h2>
                  </td>
                </tr>
              </tfoot>
            </table>
            <div class="col-sm-12 empty-cart-cls text-center" v-if="!shopCartInfo.length">
              <img :src='"@/assets/images/icon-empty-cart.png"' class="img-fluid" alt="empty cart" />
              <h3 class="mt-3">
                <strong>你的车是空的</strong>
              </h3>
              <h4 class="mb-3">加些东西让我开心 :)</h4>
              <div class="col-12">
                <nuxt-link :to="{ path: '/'}" class="btn btn-solid">继续购物</nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="row cart-buttons" v-if="shopCartInfo.length">
          <div class="col-6">
            <nuxt-link :to="{ path: '/'}" :class="'btn btn-solid'">继续购物</nuxt-link>
          </div>
          <div class="col-6">
            <!--<nuxt-link :to="{ path: '/page/account/purchase'}" :class="'btn btn-solid'">
              结算（{{ this.new_prodId.length }}）
            </nuxt-link>-->
            <a :class="'btn btn-solid'" @click="onSubmit(new_prodId)">
              结算（{{ this.new_prodId.length }}）
            </a>
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
  import Header from "../../../components/header/header";
  import Footer from "../../../components/footer/footer";
  import Breadcrumbs from "../../../components/widgets/breadcrumbs";
  const {
    mapActions
  } = createNamespacedHelpers("shopCart");

  export default {
    data() {
      return {
        counter: 1,
        new_prodId: [],
        calTotalPrice: 0,
      };
    },
    components: {
      Header,
      Footer,
      Breadcrumbs
    },
    computed: {
      ...mapState({
        shopCartInfo: state => state.shopCart.shopCartInfo
      }),
      ...mapGetters({
        cart: "cart/cartItems",
        cartTotal: "cart/cartTotalAmount",
        curr: "products/changeCurrency"
      }),
      getDetail: function () {
        return this.$store.getters["products/getProductById"](
          this.$route.params.id
        );
      },
    },
    mounted() {
      this.getShopCart({
        basketIdShopCartParamMap: this.$route.params.id,
      })
    },
    methods: {
      ...mapActions(["getShopCart", "deleteCart", "reduce", "plus"]),

      getImgUrl(path) {
        return require("@/assets/images/" + path);
      },
      removeCartItem: function (item) {
        console.log("删除")
        this.deleteCart(
          item
        )
      },
      async increment(product, qty) {
        console.log("++")
        await this.plus(product)
        this.checkButton();
      },
      async decrement(product, qty) {
        console.log("--")
        await this.reduce(product)
        this.checkButton();
      },
      checkButton() {
        const list = this.shopCartInfo;

        if (this.new_prodId.length === 0) {
          this.calTotalPrice = 0;
          return;
        }

        let totalPrice = 0

        for (let item of list) {

          const hasitem = this.new_prodId.find(i => i === item.prodId);
          if (hasitem) {
            totalPrice += item.price * item.prodCount;
          }
        }
        this.calTotalPrice = totalPrice.toFixed(2);

      },
      onSubmit(e) {
        console.log(e, '-----------onSubmit')
        const list = this.shopCartInfo;

        if (this.new_prodId.length === 0) {
          this.calTotalPrice = 0;
          return;
        }

        let totalPrice = 0

        for (let item of list) {
          const hasitem = this.new_prodId.find(i => i === item.prodId);
          console.log(hasitem === item.prodId, '------hasitem')
          if (hasitem === item.prodId) {
            console.log(item, '9999')
            this.$router.push({
              path: '/page/account/purchase',
              query: {
                item: item
              }
            })
          }

        }
      }
    }
  };
</script>