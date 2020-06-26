<template>
  <div>
    <Header />
    <br />
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <table class="table table-bordered table-striped text-center pc-table-addr">
            <thead>
              <tr>
                <th>默认地址</th>
                <th>收货人</th>
                <th>地址</th>
                <th>手机号码</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in userAddressList" :key="index">
                <td>
                  <input type="radio" name="item.commonAddr" :value="item.addrId" :id="item.commonAddr"
                    v-model="radioAddr" @click="onChoice(item.addrId)" />
                </td>
                <td>{{ item.receiver }}</td>
                <td>
                  {{ item.province }} {{ item.city }} {{ item.area }} {{ item.addr }}
                </td>
                <td>{{ item.mobile }}</td>
                <td>
                  <button v-on:click="remove(item.addrId)">删除</button>
                  <nuxt-link :to="{ path: '/page/account/address', query: item }">
                    <button>修改</button>
                  </nuxt-link>
                </td>
              </tr>
            </tbody>
          </table>

          <table class="table table-bordered table-striped text-center mobile-table">
            <thead>
              <tr>
                <th>收货人</th>
                <th>地址</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in userAddressList" :key="index">
                <td>
                  {{item.commonAddr == 1 ? "默认" : ""}}
                  <input type="radio" name="item.commonAddr" :value="item.addrId" :id="item.commonAddr"
                    v-model="radioAddr" @click="onChoice(item.addrId)" />
                  {{ item.receiver }} {{ item.mobile }}</td>
                <td>
                  {{ item.province }} {{ item.city }} {{ item.area }} {{ item.addr }}
                </td>
                <td>
                  <button v-on:click="remove(item.addrId)">删除</button>
                  <nuxt-link :to="{ path: '/page/account/address', query: item }">
                    <button>修改</button>
                  </nuxt-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
  import VDistpicker from "v-distpicker";
  import {
    ValidationProvider,
    ValidationObserver,
  } from "vee-validate/dist/vee-validate.full.esm";
  import {
    mapGetters,
    mapState,
    createNamespacedHelpers
  } from "vuex";
  import Header from "../../../components/header/header";
  import Footer from "../../../components/footer/footer";

  const {
    mapActions
  } = createNamespacedHelpers("addAddr");
  export default {
    components: {
      VDistpicker,
      Header,
      Footer,
      ValidationProvider,
      ValidationObserver,
    },
    computed: {
      ...mapState({
        userAddressList: (state) => state.addAddr.userAddressList,
      }),
      ...mapGetters({
        cart: "cart/cartItems",
        cartTotal: "cart/cartTotalAmount",
        curr: "products/changeCurrency",
      }),
    },
    data() {
      return {
        picked: false,
        radio: 1,
        radioAddr: 0,
        user: {},
      };
    },
    async mounted() {
      const commonAddrId = await this.getAddList();
      if (commonAddrId) {
        this.radioAddr = commonAddrId
      }
    },
    methods: {
      ...mapActions(["getAddList", "delAddress", "defaultAddr"]),
      remove: function (index) {
        this.delAddress(index);
        // this.users.splice(index, 1)
      },

      onChoice(e) {
        this.defaultAddr(e)
      }
    },
  };
</script>