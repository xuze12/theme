import {
  getProdInfo,
  getLastedProdPage,
  getMoreBuyProdList,
  getProdListByTagId,
  getProdComm,
  getCollection,
  postAddOrCancel,
  getCategorys,
  getPageProds, // 获取分类商品列表
} from "../../pages/service/api";

export default {
  namespaced: true,

  state: {
    categoryList: [], //分类列表
    prodInfo: {},
    records: [],
    moreBuyProdList: [],
    prodList: {},
    userCollection: [],
    page: 1,
    pageSize: 10,
    total: 0,
    hlh_pages: [],
    tagId: 0,
    categoryId: "",
    skuId: 0, // skuid
    totalStocks: 0, // 库存
  },
  actions: {
    // 获取商品列表 公共方法
    async getCommonList({ commit, state }, payload) {
      const { method, params } = payload;

      const parma = {
        ...params,
        current: state.page,
        size: state.pageSize,
      };
      const { data } = await method(parma);

      const is_true = !(
        data &&
        typeof data == "object" &&
        Reflect.has(data, "records") &&
        Array.isArray(data.records)
      );

      if (is_true) {
        commit("save", {
          prodList: [],
          pageSize: 10,
          total: 0,
          page: 1,
          hlh_pages: [],
        });
        return;
      }

      const { current, size, total } = data;

      const paginates = Math.ceil(total / size);
      const pages = [];
      for (let i = 0; i < paginates; i++) {
        pages.push(i + 1);
      }

      commit("save", {
        prodList: data,
        pageSize: size,
        total,
        page: current,
        hlh_pages: pages,
      });
    },
    // 获取分类列表
    async getCategoryList(context, payload) {
      const { data } = await getCategorys();

      const is_true = !(data && typeof data == "object" && Array.isArray(data));
      if (is_true) {
        return;
      }

      context.commit("save", { categoryList: data });
    },
    // 通过分类id商品列表
    async getPageProdsList({ commit, dispatch }, payload) {
      commit("save", {
        prodList: [],
        pageSize: 10,
        total: 0,
        page: 1,
        hlh_pages: [],
        categoryId: payload,
      });
      dispatch("getCommonList", {
        method: getPageProds,
        params: { categoryId: payload },
      });
    },

    async getProdInfo(context, payload) {
      console.log(payload, "商品详情页");
      const { data } = await getProdInfo(payload);

      const is_true = !(
        data &&
        typeof data == "object" &&
        Reflect.has(data, "prodId")
      );
      if (is_true) {
        context.commit("save", { prodInfo: [], skuId: 0 });
        return;
      }

      // const skuId = data.skuList && data.skuList[0] ? data.skuList[0].skuId : 0

      console.log(data, "商品详情页");
      context.commit("save", { prodInfo: data, totalStocks: data.totalStocks });
    },
    //切换类型
    changeSkuId(context, payload) {
      context.commit("save", {
        skuId: payload.skuId,
        totalStocks: payload.stocks === -1 ? 99999 : payload.stocks,
      });
    },
    // 改变库存值
    changeTotalStocks(context, payload) {
      context.commit("save", { totalStocks: payload.stocks - 1 });
    },

    totalStocksCincrement({ commit, state }, payload) {
      const { totalStocks } = state;

      commit("save", { totalStocks: totalStocks - 1 });
    },

    // 新品推荐
    async getLastedProdPage(context, payload) {
      const parma = {
        current: 1,
        size: 10,
      };
      const { data } = await getLastedProdPage(parma);
      console.log(data, "新品推荐");
      context.commit("save", { records: data.records });
    },

    // 每日疯抢
    async getMoreBuyProdList(context, payload) {
      const { data } = await getMoreBuyProdList(payload);
      console.log(data, "每日疯抢");
      context.commit("save", { moreBuyProdList: data.records });
    },

    // 根据分组标签id获取列表
    async getProdByTagIdList({ commit, dispatch }, payload) {
      commit("save", { tagId: payload, categoryId: "" });
      dispatch({ type: "getProdByTagId" });
    },

    // 通过分组标签获取商品列表
    async getProdByTagId({ commit, state, dispatch }, payload) {
      dispatch("getCommonList", {
        method: getProdListByTagId,
        params: { tagId: state.tagId },
      });
    },

    // 商品分页函数
    async pageSizeChange({ dispatch, commit, state }, payload) {
      commit("save", { page: payload });

      if (state.categoryId) {
        dispatch("getCommonList", {
          method: getPageProds,
          params: { categoryId: state.categoryId },
        });
        return;
      }

      dispatch("getCommonList", {
        method: getProdListByTagId,
        params: { tagId: state.tagId },
      });
    },

    // 根据商品返回评论分页数据
    async prodCommPageByProd(context, payload) {
      console.log(payload, "根据商品返回评论分页数据");
      // const paramt = {
      //   evaluate: null,
      //   prodId: payload.prodId,
      //   current: 1,
      //   size: 10,
      // };
      // await getProdComm(paramt);
    },

    // 获取用户收藏商品列表
    async getUserCollection(context, payload) {
      const params = {
        current: 1,
        size: 10,
      };
      const { data } = await getCollection(params);

      context.commit("save", { userCollection: data });
      console.log(data, "获取用户收藏商品列表");
    },

    // 添加/取消收藏复制
    async addOrCancel({ commit, state }, payload) {
      try {
        alert("收藏/取消收藏");
        const { prodId } = payload;
        let { userCollection } = state;
        let { records } = userCollection;

        console.log(records, "-------records-userCollection");

        await postAddOrCancel(prodId);
        const list = records.filter((item) => item.prodId !== prodId);
        console.log(userCollection, "-------userCollection-userCollection");

        commit("save", { userCollection: { records: list } });
      } catch (err) {
        console.log(err, "收藏/取消失败");
      }
    },

    // 价格排序
    async priceSorting({ commit, state }, payload) {
      console.log(payload, "payload");

      let { prodList } = state;
      console.log(prodList.records, "价格排序");

      if (payload === "low") {
        const pro = prodList.records.sort((a, b) => {
          a.price - b.price;
          console.log(a.price, b.price, "a.price - b.price");
        });
        console.log(pro, "pro============");
        commit("save", { prodList: pro });
        return;
      } else if (payload === "high") {
        return prodList.records.sort((a, b) => {
          a.price < b.price;
        });
      }
    },
  },

  mutations: {
    save(state, payload) {
      for (let [keys, value] of Object.entries(payload)) {
        state[`${keys}`] = value;
      }
    },
  },
};
