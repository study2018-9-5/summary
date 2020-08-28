/*
 * @Author: wangsibo
 * @Date: 2020-08-06 15:30:21
 * @LastEditTime: 2020-08-13 20:25:02
 * @LastEditors: Please set LastEditors
 * @Description: 封装axios
 * @FilePath: src\server\axios.js
 */
import axios from 'axios';
import router from '@/router'

// 创建实例
const Axios = axios.create();

Axios.defaults.baseURL = '/';    // 配置默认路径
Axios.defaults.timeout = 3000;   // 设置超时时间 3s
// Axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN'; 
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Axios.defaults.responseType = 'json'; // 返回数据类型

console.log('打印axios',Axios.defaults);

// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const token = window.localStorage.getItem("Token")
  if (token) {
    config.headers.Authorization = `Bearer ` + token;
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // console.log('response', response);
  return response;
}, function (error) {
  // 对响应错误做点什么
  if (error.response) {
    switch (error.response.status) {
      case 401:
        router.replace({
          path: '/login',
          query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
        })
        break;
      // case 404:
      //   // console.log('router', router.currentRoute.fullPath);
      //   router.replace({
      //     path: '/login',
      //     query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      //   })
      //   break;
    
      default:
        break;
    }
  }
  return Promise.reject(error);
});

export default Axios;
