/*
 * @Author: wangsibo
 * @Date: 2020-08-07 10:32:50
 * @LastEditTime: 2020-08-13 14:51:41
 * @LastEditors: Please set LastEditors
 * @Description: 封装方法
 * @FilePath: src\server\ajax.js
 */
import axios from '@/server/axios.js';

export const ajaxSet = function (api) {
  let $ajax = {};
  for (const key in api) {
    switch (api[key].type) {
      case 'get':
        $ajax[key] = (function (key) {
          return function (params, callback, errCallback) {
            let url = api[key].url;
            if (typeof (params) == 'string') {
              url = url + params;
              axios.get(url).then(function (res) {
                callback(res.data)
              }).catch(function (err) {
                typeof (errCallback) == 'function'? errCallback(err): ''
              })
            } else {
              axios.get(url, {params: params}).then(function (res) {
                callback(res.data)
              }).catch(function (err) {
                typeof (errCallback) == 'function'? errCallback(err): ''
              })
            }
          }
        })(key)
        break;
      case 'post':
        $ajax[key] = (function (key) {
          return function (params, callback, errCallback) {
            let url = api[key].url;
            if (typeof (params) == 'string') {
              url = url + params;
              axios.post(url, {}, api[key].config).then(function (res) {
                callback(res.data)
              }).catch(function (err) {
                typeof (errCallback) == 'function'? errCallback(err): ''  // 判断之后可以不用写错误的回调函数
              })
            } else {
              axios.post(url, params, api[key].config).then(function (res) {
                callback(res.data)
              }).catch(function (err) {
                typeof (errCallback) == 'function'? errCallback(err): ''  // 判断之后可以不用写错误的回调函数
              })
            }
          }
        })(key)
        break;
      default:
        break;
    }
  }
  return $ajax;
}

