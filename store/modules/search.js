import { searchGoods } from "../../pages/service/api";

export default {
  namespaced: true,

  state: {
    searchProdList: [], // 轮播图
  },
  actions: {
    // 获取分类列表
    async searchProdList(context, payload) {
      const params = {
        prodName: payload || "", // 商品名
        shopId: "1", // 店铺id
        orderBy: "",
        size: 10,
        sort: 1,
      };
      const { data } = await searchGoods(params);

      const is_true = !(
        data &&
        typeof data == "object" &&
        Reflect.has(data, "records")
      );
      if (is_true) {
        return;
      }
      context.commit("save", { searchProdList: data.records });
    },
    clearSearchProdList(context, payload) {
      context.commit("save", { searchProdList: [] });
    },

    async searchOff(context, payload) {
      console.log("关闭----searchOff");
      context.commit("save", { searchProdList: [] });
    },
  },
  mutations: {
    save(state, payload) {
      for (let [keys, value] of Object.entries(payload)) {
        state[`${keys}`] = value;
      }
      // state.indexImgs=payload.indexImgs
    },
  },
};
