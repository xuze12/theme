<template>
  <div>
    <vue-seamless-scroll :data="products" :class-option="classOption" class="warp">
      <ul class="item">
        <li v-for="(item,index) in products " :key="item.date +'_'+index">
          <nuxt-link class="title" :to="{ path: '/blog/' + item.id }">
            <span class="title">通 知 🎉 ： {{ item.title }}</span>
          </nuxt-link>
        </li>
      </ul>
    </vue-seamless-scroll>
  </div>
</template>
<script>
  import {
    mapState
  } from "vuex";
  import vueSeamless from "vue-seamless-scroll";

  export default {
    props: ["products"],
    components: {
      vueSeamless
    },
    data() {
      return {};
    },
    computed: {
      classOption: function () {
        return {
          step: 0.3,
          limitMoveNum: 1
        };
      }
    },

    mounted() {},
    methods: {}
  };
</script>