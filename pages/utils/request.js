import axios from "axios";
import Vue from 'vue'

// 请求体拦截
axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token")
    if (token) {
      config.headers.Authorization = `bearer ${token}`
    }
    console.log(config,'-------config')
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 响应体处理
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {

    console.log(error.response,'-----------error')

    const { status, data } = error.response

    if (status === 401) {
      const isLogin = localStorage.getItem("userlogin");
      const errorText = isLogin ? '登陆过期请重新登录' : '您还没有登陆'
      Vue.toasted.show(errorText, {
        theme: "bubble",
        position: "top-right",
        type: "error",
        duration: 2000
      });

      localStorage.clear();
      window.location.href = '/page/account/login-firebase'
    } else if (status === 400) {
      console.log('121221')
      Vue.toasted.show(data, {
        theme: "bubble",
        position: "top-right",
        type: "error",
        duration: 2000
      });
    }

    return Promise.reject(data);
  }
);

//请求函数
export default function request(options = {}, files = false) {
  let myInit = {
    mode: "cors",
    headers: {
      Accept: "application/json",
    },
  };

  if (!files) {
    myInit.headers["Content-Type"] = "application/json";
  }

  Object.assign(options, myInit);

  return new Promise((resolve, reject) => {
    axios(options)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
