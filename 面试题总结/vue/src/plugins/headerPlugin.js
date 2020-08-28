/*
 * @Author: wangsibo
 * @Date: 2020-08-19 20:24:38
 * @LastEditTime: 2020-08-20 11:02:40
 * @LastEditors: Please set LastEditors
 * @Description: 一个头部的插件
 * @FilePath: vue\src\plugins\headerPlugin.js
 */
import HeaderPlugin from './header.vue';
// 声明一个插件
const MyPlugin = {
  /**
   * @description: 实现一个install方法
   * @param {Vue} 实例
   * @param {options} 其他的一些参数
   * @return {type} 
   */
  install(Vue, options) {
    Vue.component(HeaderPlugin.name, HeaderPlugin)
  }
}
// Vue.use()方法：
// 会自动阻止多次注册相同插件，届时即使多次调用也只会注册一次该插件。
// 它需要在你调用new Vue()启动应用之前完成
// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(MyPlugin)
}

export default MyPlugin