<template>
  <div>
    <header>
      <div class="mobile-fix-option"></div>
      <TopBar />
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="main-menu">
              <div class="menu-left">
                <div class="brand-logo">
                  <nuxt-link :to="{ path: '/shop/fashion'}">
                    <img :src='"@/assets/images/icon/logo.png"' class="img-fluid" alt width="30rem" />
                  </nuxt-link>
                </div>
              </div>
              <div class="menu-right pull-right">
                <Nav v-if="isNav" />
                <HeaderWidgets />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
  import TopBar from "../widgets/topbar";
  import LeftSidebar from "../widgets/left-sidebar";
  import Nav from "../widgets/navbar";
  import HeaderWidgets from "../widgets/header-widgets";

  export default {
    props: {
      isNav: {
        type: Boolean,
        default: function () {
          return false;
        }
      }
    },
    data() {
      return {
        leftSidebarVal: false
      };
    },
    components: {
      TopBar,
      LeftSidebar,
      Nav,
      HeaderWidgets
    },
    methods: {
      left_sidebar() {
        this.leftSidebarVal = true;
      },
      closeBarValFromChild(val) {
        this.leftSidebarVal = val;
      }
    }
  };
</script>