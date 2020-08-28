/*
 * @Author: wangsibo
 * @Date: 2020-08-10 15:46:23
 * @LastEditTime: 2020-08-13 10:52:15
 * @LastEditors: Please set LastEditors
 * @Description: 登录
 * @FilePath: src\api\login\index.js
 */
import { ajaxSet } from '@/server/ajax.js';

const prefix = '/mock/'

const api = {
  login: {
    type: 'post',
    url: prefix + 'login',
    // config: {
    //   headers: {
    //       'Content-Type': 'application/json;charset=UTF-8'
    //   }
    // },
  }
}

const $ajaxLogin = ajaxSet(api);
export default $ajaxLogin