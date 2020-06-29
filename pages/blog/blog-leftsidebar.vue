<template>
  <div>
    <Header />
    <Breadcrumbs title="Blog" />
    <section class="section-b-space blog-page ratio2_3">
      <div class="container">
        <div class="row">
          <BlogSidebar />
          <div class="col-xl-9 col-lg-8 col-md-7 order-sec">
            <BlogList />
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
  import Header from '../../components/header/header'
  import Footer from '../../components/footer/footer'
  import Breadcrumbs from '../../components/widgets/breadcrumbs'
  import BlogSidebar from './widgets/blog-sidebar'
  import BlogList from './widgets/blog-list'
  export default {
    components: {
      Header,
      Breadcrumbs,
      BlogSidebar,
      BlogList,
      Footer
    }
  }
</script>