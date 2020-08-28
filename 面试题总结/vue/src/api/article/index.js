/*
 * @Author: wangsibo
 * @Date: 2020-08-10 15:00:14
 * @LastEditTime: 2020-08-13 11:18:06
 * @LastEditors: Please set LastEditors
 * @Description: 博客管理的接口
 * @FilePath: src\api\article\index.js
 */
import { ajaxSet } from '@/server/ajax.js';

const prefix = '/mock/'

const api = {
  articleList: { 
      type: 'post',
      url: prefix + 'articleList'
  }
}

const $ajaxArticle = ajaxSet(api);
export default $ajaxArticle