<template>
  <div>
    <nuxt id="body-content"/>
    <layoutSetting v-if="this.$route.name !== 'landing'" />
    <div class="tap-top top-cls" v-scroll-to="'#body-content'">
      <div>
          <i class="fa fa-angle-double-up"></i>
      </div>
    </div>
  </div>
</template>

<script>
import layoutSetting from '../components/widgets/layout-setting'
export default {
  head() {
    return {
      title: '亚米科技mall4j'
    }
  },
  components: {
    layoutSetting
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 3000)
    })
  }
}
</script>
