<template>
  <div>
    <!-- <h2 class="title">{{ $t('home.title') }}</h2> -->
    <!-- <h2 class="subtitle">{{ $t('home.introduction') }}</h2> -->
    <!-- Home slider -->
    <section class="p-0">
      <div class="slide-1 home-slider">
        <div v-swiper:mySwiper="swiperOption" >
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in indexImgs" :key="index">
              <div class="home text-center" :class="item.alignclass" 
                v-bind:style="{ 'background-image': 'url(http://img-test.gz-yami.com/' + item.imgUrl + ')' }">
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="slider-contain">
                        <div>
                          <h4>{{ item.title }}</h4>
                          <h1>{{ item.subtitle }}</h1>
                          <h4>{{ item.describetitle }}</h4>
                          <nuxt-link :to="{ path: '/product/sidebar/'+item.relation}" class="btn btn-solid">立即购买
                          </nuxt-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </div>
      </div>
    </section>
    <!-- Home slider end -->
  </div>
</template>
<script type="text/javascript">
  import {
    mapState,
    createNamespacedHelpers
  } from "vuex";
  const {
    mapActions
  } = createNamespacedHelpers("xz_home");

  export default {
    data() {
      return {
        swiperOption: {
          loop: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }
        },
      };
    },
    computed: {
      ...mapState({
        indexImgs: state => state.xz_home.indexImgs,
      })
    },

    mounted() {
      this.getIndexImgList()
    },
    methods: {
      ...mapActions(["getIndexImgList"]),
    }
  };
</script>