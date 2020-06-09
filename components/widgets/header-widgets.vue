<template>
  <div>
    <div class="icon-nav">
      <ul>
        <li class="onhover-div mobile-search" style="display: inline-flex;align-items: center;">
          <div style="margin-left:10px">
            <img alt :src="getImgUrl('icon/layout4/search.png')" @click="openSearch()" class="img-fluid" />
            <i class="ti-search" @click="openSearch()"></i>
          </div>
          <div id="search-overlay" class="search-overlay" :class="{ opensearch:search }">
            <div>
              <span class="closebtn" @click="closeSearch()" title="Close Overlay">×</span>
              <div class="overlay-content">
                <div class="container">
                  <div class="row">
                    <div class="col-xl-12">
                      <form>
                        <div class="form-group mb-0">
                          <input type="text" class="form-control" v-model="searchString" @keyup="searchProduct"
                            placeholder="搜索产品" />
                        </div>
                        <button type="submit" class="btn btn-primary">
                          <i class="fa fa-search"></i>
                        </button>
                      </form>
                      <ul class="search-results" v-if="searchProdList.length">
                        <li v-for="(product,index) in searchProdList" :key="index" class="product-box"
                          :style="{'padding-top':'20px'}" @click="goToProductDetail(product)">
                          <div class="img-wrapper">
                            <img :src="'http://img-test.gz-yami.com/'+ product.pic" class="img-fluid bg-img"
                              :style="{display:'block'}" :key="index" />
                          </div>
                          <div class="product-detail">
                            <h6>{{ product.prodName }}</h6>

                            <h4>{{ product.price }}</h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li class="onhover-div mobile-cart">
          <a @click="goToAccountCart">
            <img alt :src="getImgUrl('icon/layout4/cart.png')" class="img-fluid mobile-img-cart" />
            <i class="ti-shopping-cart"></i>
            <span class="cart_qty_cls">{{shopCartInfo.length}}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {
    mapState,
    mapGetters,
    createNamespacedHelpers
  } from "vuex";
  const {
    mapActions
  } = createNamespacedHelpers("shopCart");
  const s_mapActions = createNamespacedHelpers("search").mapActions;
  export default {
    data() {
      return {
        currencyChange: {},
        isLogin: false,
        search: false,
        searchString: ""
      };
    },
    computed: {
      ...mapState({
        searchProdList: state => state.search.searchProdList,
        shopCartInfo: state => state.shopCart.shopCartInfo
      }),
      ...mapGetters({
        cart: "cart/cartItems",
        cartTotal: "cart/cartTotalAmount",
        curr: "products/changeCurrency"
      })
    },
    created() {
      this.isLogin = localStorage.getItem("userlogin");
    },
    mounted() {
      if (this.isLogin) {
        this.getShopCart();
      }
    },
    methods: {
      ...mapActions(["getShopCart"]),
      getImgUrl(path) {
        return require("@/assets/images/" + path);
      },
      goToAccountCart() {
        if (this.isLogin) {
          this.$router.push("/page/account/cart");
          return;
        }
        this.$toasted.show("您还没有登陆，请登陆", {
          theme: "bubble",
          position: "top-right",
          duration: 2000
        });
        this.$router.push("/page/account/login-firebase");
      },
      openSearch() {
        this.$store.dispatch("search/clearSearchProdList");
        this.search = true;
      },
      closeSearch() {
        this.search = false;
        this.$store.dispatch("search/clearSearchProdList");
      },
      goToProductDetail(product) {
        this.$store.dispatch("search/clearSearchProdList");
        this.$router.push(`/product/sidebar/${product.prodId}`);
      },
      searchProduct() {
        const that = this;
        let timeout; // 定时器变量
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          this.$store.dispatch("search/searchProdList", this.searchString);
        }, 300);
      },
      removeCartItem: function (product) {
        this.$store.dispatch("cart/removeCartItem", product);
      },
      updateCurrency: function (currency, currSymbol) {
        this.currencyChange = {
          curr: currency,
          symbol: currSymbol
        };
        this.$store.dispatch("products/changeCurrency", this.currencyChange);
      }
    }
  };
</script>