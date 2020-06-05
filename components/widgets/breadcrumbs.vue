<template>
  <div>
    <div class="breadcrumb-section">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="page-title">
            </div>
          </div>
          <div class="col-sm-6">
            <nav aria-label="breadcrumb" class="theme-breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <nuxt-link :to="{ path: '/' }">返回</nuxt-link>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['title']
  }
</script>