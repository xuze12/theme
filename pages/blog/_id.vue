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
  import Header from '../../components/header/xz_header1'
  import Footer from '../../components/footer/hlh_footer1'
  import Breadcrumbs from '../../components/widgets/breadcrumbs'
  const {
    mapActions
  } = createNamespacedHelpers("hlh_notice");

  export default {
    components: {
      Header,
      Breadcrumbs,
      Footer
    },
    computed: {
      ...mapState({
        noticeInfo: state => state.hlh_notice.noticeInfo, // 置顶公告列表信息
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