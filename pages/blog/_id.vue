<template>
  <div>
    <Header />
    <section class="blog-detail-page section-b-space ratio2_3" style=" width:70%; margin: 0 auto; text-align: center">
      <div class="blog-content x-blog-container" v-html="noticeInfo.content" style="overflow: auto;">
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
  import Header from '../../components/header/header'
  import Footer from '../../components/footer/footer'
  const {
    mapActions
  } = createNamespacedHelpers("notice");

  export default {
    components: {
      Header,
      Footer
    },
    computed: {
      ...mapState({
        noticeInfo: state => state.notice.noticeInfo, // 置顶公告列表信息
      })
    },
    mounted() {
      this.getNoticeInfo({
        id: this.$route.params.id,
      })
    },
    methods: {
      ...mapActions(["getNoticeInfo"])
    },
  }
</script>