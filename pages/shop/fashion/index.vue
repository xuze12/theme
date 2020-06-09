<template>
  <div>
    <Header :isNav='true' />
    <Slider />
    <!-- 通知-->
    <Notice :products="topNoticeList" />
    <CollectionBanner />

    <div v-for="(item,index) in tagProdList" :key="index">
      <ProductTab
        :products="item.productDtoList"
        :title="item.title"
        :tagId='item.id'
        :category="category"
        @openQuickview="showQuickview"
        @openCompare="showCoampre"
        @openCart="showCart"
      />
    </div>
    <Banner />

    <Services />

    <LogoSlider />
    <Footer />
  </div>
</template>
<script>
import { mapState, createNamespacedHelpers } from "vuex";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";

import Slider from "./components/slider";
import CollectionBanner from "./components/collection_banner";
import ProductSlider from "./components/product_slider";
import Banner from "./components/banner";
import ProductTab from "./components/product_tab";
import Services from "./components/services";
import Notice from "./components/notice";
import Instagram from "./components/instagram";
import LogoSlider from "./components/logo_slider";

const z_mapActions = createNamespacedHelpers("xz_home").mapActions;
const h_mapActions = createNamespacedHelpers("hlh_notice").mapActions;

export default {
  components: {
    Header,
    Slider,
    CollectionBanner,
    ProductSlider,
    Banner,
    ProductTab,
    Services,
    Notice,
    Instagram,
    LogoSlider,
    Footer
  },
  data() {
    return {
      products: [],
      category: [],
      showquickviewmodel: false,
      showcomparemodal: false,
      showcartmodal: false,
      quickviewproduct: {},
      comapreproduct: {},
      cartproduct: {}
    };
  },
  computed: {
    ...mapState({
      productslist: state => state.products.productslist,
      tagProdList: state => state.xz_home.tagProdList, // 首页商品分类列表
      prodTagsList: state => state.xz_home.prodTagsList, // 商品分类标签
      topNoticeList: state => state.hlh_notice.topNoticeList // 置顶公告列表信息
    })
  },
  mounted() {
    this.productsArray();
    this.getIndexImgList();
    this.getHomeTagProdList();
    this.getProdTagList();
    this.getCategoryList();
    this.getTopNoticeList();
  },
  methods: {
    ...z_mapActions([
      "getIndexImgList",
      "getHomeTagProdList",
      "getProdTagList",
      "getCategoryList"
    ]),
    ...h_mapActions(["getTopNoticeList"]),
    productsArray: function() {
      this.productslist.map(item => {
        if (item.type === "fashion") {
          this.products.push(item);
          item.collection.map(i => {
            const index = this.category.indexOf(i);
            if (index === -1) this.category.push(i);
          });
        }
      });
    },
    showQuickview(item, productData) {
      this.showquickviewmodel = item;
      this.quickviewproduct = productData;
    },
    showCoampre(item, productData) {
      this.showcomparemodal = item;
      this.comapreproduct = productData;
    },
    closeCompareModal(item) {
      this.showcomparemodal = item;
    },
    showCart(item, productData) {
      this.showcartmodal = item;
      this.cartproduct = productData;
    },
    closeCartModal(item) {
      this.showcartmodal = item;
    }
  }
};
</script>