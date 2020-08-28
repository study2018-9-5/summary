// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import ElementUI from 'element-ui';  // 引入ElementUI
import 'element-ui/lib/theme-chalk/index.css'; 
Vue.use(ElementUI);

import MyPlugin from '@/plugins/headerPlugin.js';
Vue.use(MyPlugin);

import Mock from '@/mock/index.js'  // 引入mock
// if (process.env.MOCK) {
	Mock.startMock();
// }

Vue.prototype.$axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
