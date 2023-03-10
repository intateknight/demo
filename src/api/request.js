import axios from "axios";

axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";

const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  // baseURL: "http://49.232.216.15:5004",
  // 超时
  timeout: 10000,
});

// request拦截器
service.interceptors.request.use(
  (config) => {
    var token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `bearer ${token}`
    }
    return config;
  },
  (error) => {
    console.log(error);
    Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (res) => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200;
    // 获取错误信息
    // const msg = errorCode[code] || res.data.msg || errorCode["default"];
    // 二进制数据则直接返回
    // if (code === 401) {

    //   return Promise.reject("无效的会话，或者会话已过期，请重新登录。");
    // } else if (code === 500) {
    //   Message({ message: msg, type: "error" });
    //   return Promise.reject(new Error(msg));
    // } else if (code === 601) {
    //   Message({ message: msg, type: "warning" });
    //   return Promise.reject("error");
    // } else if (code !== 200) {
    //   Notification.error({ title: msg });
    //   return Promise.reject("error");
    // } else {
    //   return res.data;
    // }
    return res.data;
  },
  (error) => {
    console.log("err" + error);
    let { message } = error;
    if (message == "Network Error") {
      message = "后端接口连接异常";
    } else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    } else if (message.includes("Request failed with status code")) {
      message = "系统接口" + message.substr(message.length - 3) + "异常";
    }
    Message({ message: message, type: "error", duration: 5 * 1000 });
    return Promise.reject(error);
  }
);

export default service;