/*
 * @Author: wangsibo
 * @Date: 2020-08-01 20:31:58
 * @LastEditTime: 2020-08-02 15:57:39
 * @LastEditors: Please set LastEditors
 * @Description: 使用mock模拟数据
 * @FilePath: src\mock\index.js
 */ 
import Mock from 'mockjs'
// 将所有的mock文件引入
import user from './userMock'
import home from './homeMock'

export default {
	startMock(){
		// 设置所有ajax请求的超时时间，模拟网络传输耗时
		Mock.setup({
		    timeout: 0-300
		})
		//在index.js中引入数据
		Mock.mock('/userLogin', 'get', user.login);
		Mock.mock('/userBaseInfo', 'get', home.userBaseInfo);
	}
}
