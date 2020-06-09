<template>
  <div>
    <div class="title1 section-t-space">
      <h2 :id="title" class="title-inner1">{{title}}</h2>
      <h4>
        <nuxt-link :to="{ path: `/collection/leftsidebar/${tagId}`}" :style="{color:'red',cursor:'pointer'}">更多商品
        </nuxt-link>
      </h4>
    </div>
    <section class="section-b-space p-t-0 ratio_asos">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="theme-tab">
              <b-tabs content-class="mt-3">
                <!-- <b-tab
                  :title="collection"
                  v-for="(collection,index) in category"
                  :key="index"
                >-->
                <div class="no-slider row">
                  <div class="product-box" v-for="(product,index) in products" :key="index">
                    <productBox1 @opencartmodel="showCartModal" @showCompareModal="showcomparemodal"
                      @openquickview="showquickview" @showalert="alert" @alertseconds="alert" :product="product"
                      :index="index" />
                  </div>
                </div>
                <!-- </b-tab> -->
              </b-tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
    <b-alert :show="dismissCountDown" variant="success" @dismissed="dismissCountDown=0" @dismiss-count-down="alert">
      <p>Product Is successfully added to your wishlist.</p>
    </b-alert>
  </div>
</template>
<script type="text/javascript">
  import productBox1 from "../../../../components/product-box/product-box1";
  export default {
    props: ["products", "category", "title", "tagId"],
    components: {
      productBox1
    },
    data() {
      return {
        // title: '特殊产品',
        // subtitle: '独家产品',
        showCart: false,
        showquickviewmodel: false,
        showcomapreModal: false,
        quickviewproduct: {},
        comapreproduct: {},
        cartproduct: {},
        dismissSecs: 5,
        dismissCountDown: 0
      };
    },
    methods: {
      getCategoryProduct(collection) {
        return this.products.filter(item => {
          if (item.collection.find(i => i === collection)) {
            return item;
          }
        });
      },
      alert(item) {
        this.dismissCountDown = item;
      },
      showCartModal(item, productData) {
        this.showCart = item;
        this.cartproduct = productData;
        this.$emit("openCart", this.showCart, this.cartproduct);
      },
      showquickview(item, productData) {
        this.showquickviewmodel = item;
        this.quickviewproduct = productData;
        this.$emit(
          "openQuickview",
          this.showquickviewmodel,
          this.quickviewproduct
        );
      },
      showcomparemodal(item, productData) {
        this.showcomapreModal = item;
        this.comapreproduct = productData;
        this.$emit("openCompare", this.showcomapreModal, this.comapreproduct);
      }
    }
  };
</script>