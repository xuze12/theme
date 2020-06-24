import {
  postAddAddr,
  getAddressList,
  deleteAddr,
  putUpdateAddr,
  putDefaultAddr,
} from "../../pages/service/api";

export default {
  namespaced: true,
  state: {
    userAddressList: [],
  },

  actions: {
    // 新增用户地址
    async postAddress(_, payload) {
      console.log(payload, "payload----postAddress");
      const params = {
        addr: payload.address,
        addrId: payload.addrId,
        area: payload.area,
        areaId: payload.areaId,
        city: payload.city,
        cityId: payload.cityId,
        mobile: payload.phone,
        province: payload.province,
        provinceId: payload.provinceId,
        receiver: payload.firstName,
        postCode: payload.postCode,
      };

      const data = await postAddAddr(params);
      const is_true = !(
        data &&
        typeof data === "object" &&
        Reflect.has(data, "data") &&
        Array.isArray(data.data)
      );

      if (is_true) {
        return;
      }
      alert("添加地址成功！");
    },

    // 获取地址列表
    async getAddList(context, payload) {
      const data = await getAddressList();
      console.log(data, "获取地址列表---------------------->");

      const is_true = !(
        data &&
        typeof data === "object" &&
        Reflect.has(data, "data") &&
        Array.isArray(data.data)
      );

      if (is_true) {
        return;
      }

      const commonItem = data.data.find((item) => item.commonAddr === 1);

      context.commit("save", {
        userAddressList: data.data,
      });
      return commonItem.addrId;
    },

    // 删除订单用户地址
    async delAddress({ commit, state }, payload) {
      console.log(payload, "删除订单用户地址");
      try {
        const params = payload;
        await deleteAddr(params);
        let { userAddressList } = state;
        const userList = userAddressList.filter(
          (item) => item.addrId !== payload
        );
        console.log(userList, "userList=====");
        commit("save", { userAddressList: userList });
        alert("删除地址成功！");
      } catch (err) {
        console.log(err, "err=====delAddress");
      }
    },

    // 修改订单用户地址
    async updateAddr(_, payload) {
      console.log(payload, "修改用户接口");
      try {
        const params = {
          addr: payload.address,
          addrId: payload.addrId,
          area: payload.area,
          areaId: payload.areaId,
          city: payload.city,
          cityId: payload.cityId,
          mobile: payload.phone,
          province: payload.province,
          provinceId: payload.provinceId,
          receiver: payload.firstName,
          postCode: payload.postCode,
        };
        const data = await putUpdateAddr(params);
        const is_true = !(
          data &&
          typeof data === "object" &&
          Reflect.has(data, "data") &&
          Array.isArray(data.data)
        );

        if (is_true) {
          return;
        }
      } catch (err) {
        console.log(err);
      }
    },

    // 设置默认地址
    async defaultAddr(context, payload) {
      try {
        console.log(payload, "设置默认地址");
        const params = payload;
        const data = await putDefaultAddr(params);

        console.log("addrList-----====");

        const addrList = await getAddressList();
        console.log(addrList, "addrList-----");
        context.commit("save", { userAddressList: addrList.data });
      } catch (err) {
        console.log(err);
      }
    },
  },

  mutations: {
    save(state, payload) {
      for (let [keys, value] of Object.entries(payload)) {
        state[`${keys}`] = value;
      }
      console.log(state, "用户地址-----save");
    },
  },
};
