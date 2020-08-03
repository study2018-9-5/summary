/*
 * @Author: wangsibo
 * @Date: 2020-08-02 14:24:27
 * @LastEditTime: 2020-08-02 15:56:09
 * @LastEditors: Please set LastEditors
 * @Description: 首页的Mock
 * @FilePath: src\mock\homeMock.js
 */ 
import Mock from 'mockjs';

export default {
  userBaseInfo: confit => {
    return Mock.mock({
      medalList: [
        {srcName: 'chizhiyiheng.png', title: '持之以恒', detail: '授予每个自然月内发布4篇或4篇以上原创或翻译IT博文的用户。不积跬步无以至千里，不积小流无以成江海，程序人生的精彩需要坚持不懈地积累！'},
        {srcName: 'qixiebiaobing.png', title: '勤写标兵Lv1', detail: '授予每个自然周发布1篇到3篇原创IT博文的用户。本勋章将于次周周三上午根据用户上周的博文发布情况由系统自动颁发。'},
      ]
    })
  }
};
