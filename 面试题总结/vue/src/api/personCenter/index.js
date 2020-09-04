/*
 * @Author: wangsibo
 * @Date: 2020-08-30 23:50:22
 * @LastEditTime: 2020-09-01 12:24:34
 * @LastEditors: Please set LastEditors
 * @Description: 个人中心
 * @FilePath: src\api\personCenter\index.js
 */
import { ajaxSet } from '@/server/ajax.js';

const prefix = '/mock/'

const api = {
  // 个人资料
  getPersonInfo: {
    type: 'get',
    url: prefix + 'getPersonInfo'
  },
  // 保存账号信息
  editAccountInfo: {
    type: 'post',
    url: prefix + 'editAccountInfo'
  },
  // 上传头像
  uploadAvatar: {
    type: 'post',
    url: prefix + 'upload',
    // config: {
    //   headers: {
    //       'Content-Type': 'multipart/form-data'
    //   }
    // },
  }
}

const $ajaxPersonCenter = ajaxSet(api);
export default $ajaxPersonCenter