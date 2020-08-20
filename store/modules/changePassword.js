import { postPassword } from "../../pages/service/api";

export default {
  namespaced: true,

  state: {},
  actions: {
    // 修改密码
    async userPassword(context, payload) {
      console.log(payload, payload.checkNewPsd, "修改密码");
      const params = {
        password: payload.oldPsd,
        newPassword: payload.newPsd,
      };
      const data = await postPassword(params);
      console.log(data, "data----------修改密码");
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
