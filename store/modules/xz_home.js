import {
  getIndexImgs,
  getHomeTagProds,
  getProdTags,
  getCategorys,
} from "../../pages/service/api";

export default {
  namespaced: true,

  state: {
    indexImgs: [], // 轮播图
    categoryList: [], //分类列表
    tagProdList: [], // 分类商品列表
    prodTagsList: [], // 分类标签
  },
  actions: {
    // 获取分类列表
    async getCategoryList(context, payload) {
      const { data } = await getCategorys();

      const is_true = !(data && typeof data == "object" && Array.isArray(data));
      if (is_true) {
        return;
      }

      console.log(data,'---getCategoryList--')

      context.commit("save", { categoryList: data });
    },

    // 获取商品标签
    async getProdTagList(context, payload) {
      const { data } = await getProdTags();

      const is_true = !(data && typeof data == "object" && Array.isArray(data));
      if (is_true) {
        return;
      }

      context.commit("save", { prodTagsList: data });
    },

    // 获取轮播图
    async getIndexImgList(context, payload) {
      const { data } = await getIndexImgs();

      // const is_true = !(data && typeof data == "object" && Array.isArray(data));
      // if (is_true) {
      //   return;
      // }

      // const indexImgs = data.map((item) => {
      //   return Object.assign(item, {
      //     imgUrl: "",
      //     title: "",
      //     subtitle: "",
      //     describetitle: "",
      //     alignclass: "",
      //   });
      // });
      console.log(data, "轮播图");

      context.commit("save", { indexImgs: data });
    },

    // 获取首页所有标签商品
    async getHomeTagProdList(context, payload) {
      console.log("getHomeTagProdList");
      const { data } = await getHomeTagProds();
      console.log(data, "------------------getHomeTagProdList");

      const is_true = !(data && typeof data == "object" && Array.isArray(data));
      if (is_true) {
        return;
      }

      const tagProdList = data.map((item) => {
        const productDtoList = item.productDtoList.map((pitme) => {
          return {
            id: pitme.shopId,
            title: pitme.shopName,
            description: pitme.brief,
            oriPrice: pitme.oriPrice,
            price: pitme.price,
            // sale: true,
            pic: pitme.pic,
          };
        });
        console.log(productDtoList, "------productDtoList");

        return {
          id: item.di,
          title: item.title,
          seq: item.seq,
          style: item.style,
          productDtoList,
        };
      });

      context.commit("save", { tagProdList: data });
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
