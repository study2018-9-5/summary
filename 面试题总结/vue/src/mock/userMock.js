/*
 * @Author: wangsibo
 * @Date: 2020-08-02 13:00:19
 * @LastEditTime: 2020-08-02 15:56:00
 * @LastEditors: Please set LastEditors
 * @Description: 用户登录的Mock
 * @FilePath: src\mock\userMock.js
 */ 
import Mock from 'mockjs'

export default {
  login: confit => { 
    // confit中存放的是{url: "/userLogin", type: "GET", body: null}
    // body是传过来的值
    return Mock.mock({
      
    })
  }
}