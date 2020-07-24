import { putRegister } from "../../pages/service/api";

export default {
  namespaced: true,

  state: {},
  actions: {
    // 注册
    async userRegister(context, payload) {
      console.log(payload, "userRegister...注册");
      try {
        const params = {
          userMail: payload.email,
          loginPassword: payload.password,
          confirmLoginPassword: payload.checkNewPsd,
        };
        await putRegister(params);

        console.log("注册成功");
      } catch (err) {
        console.log(err, "注册失败");
      }
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
