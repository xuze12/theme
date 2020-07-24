import {
  getShopCartInfo,
  postAddToCart,
  deleteCartItem,
} from "../../pages/service/api";
import Vue from "vue";

export default {
  namespaced: true,

  state: {
    shopCartInfo: [],
    shopCartItems: [],
    addToCart: {},
    selectedSize: 0,
  },
  actions: {
    // 获取用户购物车信息
    async getShopCart(context, payload) {
      const { data } = await getShopCartInfo({});
      const is_true = !(data && typeof data == "object" && Array.isArray(data));
      if (is_true) {
        return;
      }

      const shopCartInfo = [];
      for (let i = 0; i < data.length; i++) {
        const { shopCartItemDiscounts } = data[i];
        const { shopCartItems } = shopCartItemDiscounts[0];
        console.log(shopCartItems, "------shopCartItems");
        shopCartInfo.push(...shopCartItems);
      }

      context.commit("save", {
        shopCartInfo,
      });
    },

    // 加入购物车
    async addToCart({ dispatch }, payload) {
      try {
        const param = {
          basketId: 0,
          count: payload.num,
          prodId: payload.prodId,
          shopId: payload.shopId,
          skuId: payload.skuId,
        };
        await postAddToCart(param);
        Vue.toasted.show("添加购物车成功", {
          theme: "bubble",
          position: "top-right",
          type: "success",
          duration: 2000,
        });

        dispatch("getShopCart");

        return true;
      } catch (err) {
        Vue.toasted.show("添加购物车失败", {
          theme: "bubble",
          position: "top-right",
          type: "error",
          duration: 2000,
        });
      }
    },

    // 删除购物车列表
    async deleteCart({ commit, state }, payload) {
      try {
        const param = [payload.basketId];
        let { shopCartInfo } = state;
        await deleteCartItem(param);
        const newShopCartInfo = shopCartInfo.filter(
          (item) => item.basketId !== payload.basketId
        );
        commit("save", {
          shopCartInfo: newShopCartInfo,
        });
      } catch (err) {
        console.log(err, "删除购物车列表失败");
      }
    },

    async plus({ dispatch, commit, state }, payload) {
      try {
        const parent = {
          basketId: 0,
          count: 1,
          prodId: payload.prodId,
          shopId: payload.shopId,
          shopId: payload.shopId,
          skuId: payload.skuId,
        };
        await postAddToCart(parent);
        await dispatch("getShopCart");
        return;
      } catch (err) {
        console.log(err, "--------err");
      }
    },

    async reduce({ dispatch, commit, state }, payload) {
      console.log(payload, "减-----reduce");

      try {
        const parent = {
          basketId: 0,
          count: -1,
          prodId: payload.prodId,
          shopId: payload.shopId,
          shopId: payload.shopId,
          skuId: payload.skuId,
        };
        await postAddToCart(parent);
        await dispatch("getShopCart");
        return;
      } catch (err) {
        console.log(err, "--------reduce");
      }
    },
  },

  mutations: {
    save(state, payload) {
      for (let [keys, value] of Object.entries(payload)) {
        state[`${keys}`] = value;
      }
      console.log(state, "-----save");
    },
  },
};
