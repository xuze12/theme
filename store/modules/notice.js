import { getTopNoticeList, getInfo } from "../../pages/service/api";

export default {
  namespaced: true,

  state: {
    topNoticeList: [],
    noticeInfo: {},
  },
  actions: {
    // 置顶公告列表信息复制文
    async getTopNoticeList(context, payload) {
      console.log("置顶公告列表信息复制文");
      const { data } = await getTopNoticeList(payload);
      console.log(data, "置顶公告列表信息复制文-------------getTopNoticeList");

      context.commit("save", { topNoticeList: data });
    },

    // 公告详情
    async getNoticeInfo(context, payload) {
      console.log(payload, "公告详情");
      const params = payload.id;
      const { data } = await getInfo(params);

      context.commit("save", { noticeInfo: data });
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
