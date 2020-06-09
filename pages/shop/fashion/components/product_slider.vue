<template>
  <div>
    <div :id="title"></div>
    <div class="title1 section-t-space">
      <h4>{{ subtitle }}</h4>
      <h2 class="title-inner1">{{ title }}</h2>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div class="product-para">
            <p class="text-center">{{ description }}</p>
          </div>
        </div>
      </div>
    </div>
    <section class="section-b-space p-t-0 ratio_asos">
      <div class="container">
        <div class="row">
          <div class="col">
            <div v-swiper:mySwiper="swiperOption">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(product, index) in products" :key="index">
                  <div class="product-box">
                    <productBox1 @opencartmodel="showCartModal" @showCompareModal="showcomparemodal"
                      @openquickview="showquickview" @showalert="alert" @alertseconds="alert" :product="product"
                      :index="index" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <b-alert :show="true" variant="success" @dismissed="dismissCountDown = 0" @dismiss-count-down="alert">
      <p>Product Is successfully added to your wishlist.</p>
    </b-alert> -->
  </div>
</template>

<script>
  import productBox1 from "../../../../components/product-box/product-box1";

  export default {
    props: ["products", "title"],
    components: {
      productBox1,
    },
    data() {
      return {
        // title: "",
        subtitle: "",
        showCart: false,
        showquickviewmodel: false,
        showcomapreModal: false,
        quickviewproduct: {},
        comapreproduct: {},
        cartproduct: {},
        dismissSecs: 5,
        dismissCountDown: 0,
        description: "",
        swiperOption: {
          slidesPerView: 4,
          spaceBetween: 20,
          freeMode: false,
          breakpoints: {
            1199: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            991: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            420: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          },
        },
      };
    },
    computed: {

    },

    methods: {
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
      },
    },
  };
</script>