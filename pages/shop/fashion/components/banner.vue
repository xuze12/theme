<template>
  <div>
    <section class="p-0">
      <div class="full-banner parallax text-center p-left"
        v-bind:style="{ 'background-image': `url(${imagepath})`,'width': '100%' }">
        <img :src="imagepath" alt class="bg-img d-none" />
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="banner-contain">
                <h2>{{title}}</h2>
                <h3>{{subtitle}}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        imagepath: require('@/assets/images/parallax/28.jpg'),
        title: '商品特惠',
        subtitle: '活动特价',
      }
    }
  }
</script>