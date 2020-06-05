<template>
  <div>
    <Header />
    <section class="wishlist-section section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <table class="table cart-table table-responsive-xs" v-if="!userCollection.length">
              <thead>
                <tr class="table-head">
                  <th scope="col">图片</th>
                  <th scope="col">产品名称</th>
                  <th scope="col">价格</th>
                  <th scope="col">库存</th>
                  <th scope="col">删除/购买</th>
                </tr>
              </thead>
              <tbody v-for="(item,index) in userCollection.records" :key="index">
                <tr>
                  <td>
                    <nuxt-link :to="{ path: '/product/sidebar/'+item.prodId}">
                      <img :src="'http://img-test.gz-yami.com/'+item.pic" :alt="item.brief">
                    </nuxt-link>
                  </td>
                  <td>
                    <nuxt-link :to="{ path: '/product/sidebar/'+item.prodId}">
                      <a href="#">{{item.prodName}}</a>
                    </nuxt-link>
                    <div class="mobile-cart-content row">
                      <div>
                        <h2>￥{{ item.price }} </h2>
                      </div>
                      <div style="margin-top:5px">
                        <a href="javascript:void(0)" class="icon mr-3" @click="removeWishlistItem(item)">
                          <i class="ti-close"></i>
                        </a>
                      </div>
                      <div style="margin-top:5px">
                        <nuxt-link :to="{ path: '/product/sidebar/'+item.prodId}">
                          <i class="ti-shopping-cart" @click="addToCart(item)"></i>
                        </nuxt-link>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h2>{{ item.price }}</h2>
                  </td>
                  <td>
                    <p>{{ item.totalStocks || "0" }}</p>
                  </td>
                  <td>
                    <a href="javascript:void(0)" class="icon mr-3" @click="removeWishlistItem(item)">
                      <i class="ti-close"></i>
                    </a>
                    <nuxt-link :to="{ path: '/product/sidebar/'+item.prodId}">
                      <i class="ti-shopping-cart" @click="addToCart(item)"></i>
                    </nuxt-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="row wishlist-buttons" v-if="userCollection.length">
          <div class="col-12">
            <nuxt-link :to="{ path: '/'}" :class="'btn btn-solid'">continue shopping</nuxt-link>
          </div>
        </div>
        <div class="col-sm-12 empty-cart-cls text-center" v-if="userCollection.length">
          <img :src='"@/assets/images/empty-wishlist.png"' class="img-fluid" alt="empty cart" />
          <h3 class="mt-3">
            <strong>你的愿望单是空的</strong>
          </h3>
          <div class="col-12">
            <nuxt-link :to="{ path: '/'}" class="btn btn-solid">继续购物</nuxt-link>
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
  } from 'vuex'
  import Header from '../../../components/header/xz_header1'
  import Footer from '../../../components/footer/hlh_footer1'

  const {
    mapActions
  } = createNamespacedHelpers("hlh_commodity")
  export default {
    components: {
      Header,
      Footer,
    },
    computed: {
      ...mapState({
        userCollection: (state) => state.hlh_commodity.userCollection,
      }),
      ...mapGetters({
        wishlist: 'products/wishlistItems',
        curr: 'products/changeCurrency'
      })
    },
    mounted() {
      this.getUserCollection()
    },
    methods: {
      ...mapActions(["getUserCollection", "addOrCancel"]),
      getImgUrl(path) {
        return require('@/assets/images/' + path)
      },
      removeWishlistItem: function (item) {
        console.log("删除收藏")
        this.addOrCancel(item)
        // this.$store.dispatch('products/removeWishlistItem', product)
      },
      addToCart: function (product) {
        console.log("加入购物车")
        // this.$store.dispatch('cart/addToCart', product)
      }
    }
  }
</script>