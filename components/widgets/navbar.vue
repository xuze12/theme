<template>
  <div>
    <!-- Sample menu definition -->
    <div class="main-navbar">
      <div id="mainnav">
        <div class="toggle-nav" @click="openmobilenav=true">
          <i class="fa fa-bars sidebar-bar"></i>
        </div>
        <ul class="nav-menu" :class="{ opennav: openmobilenav }">
          <li class="back-btn">
            <div class="mobile-back text-right">
              <span @click="openmobilenav=false">返回</span>
              <i class="fa fa-angle-right pl-2" aria-hidden="true"></i>
            </div>
          </li>
          <li
            v-for="(menuItem, index) in prodTagsList"
            :key="index"
            :class="menuItem.megamenu ? 'mega-menu' : 'dropdown'"
          >
            <a class="nav-link" @click="setActive(menuItem.title)" v-scroll-to="'#'+menuItem.title">
             {{menuItem.title}}
              <!-- <span
                class="sub-arrow"
                v-if="menuItem.children || menuItem.megamenu"
              ></span> -->
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("xz_home");
export default {
  data() {
    return {
      openmobilenav: false,
      subnav: false,
      activeItem: "home",
      activeChildItem: "fashion 1",
      activemegaChild: "portfolio"
    };
  },
  computed: {
    ...mapState({
      menulist: state => state.menu.data,
      prodTagsList: state => state.xz_home.prodTagsList
    })
  },
  methods: {
    mobilenav: function() {
      this.openmobilenav = !this.openmobilenav;
    },
    isActive: function(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive: function(menuItem) {
      if (this.activeItem === menuItem) {
        this.activeItem = "";
      } else {
        this.activeItem = menuItem;
      }
         this.openmobilenav= false;

    },
    isActiveChild: function(menuChildItem) {
      return this.activeChildItem === menuChildItem;
    },
    setActiveChild: function(menuChildItem) {
      console.log(menuChildItem);
      if (this.activeChildItem === menuChildItem) {
        this.activeChildItem = "";
      } else {
        this.activeChildItem = menuChildItem;
      }
    },
    isActivesubmega: function(megaChildItem) {
      return this.activemegaChild === megaChildItem;
    },
    setActivesubmega: function(megaChildItem) {
      if (this.activemegaChild === megaChildItem) {
        this.activemegaChild = "";
      } else {
        this.activemegaChild = megaChildItem;
      }
    }
  }
};
</script>
