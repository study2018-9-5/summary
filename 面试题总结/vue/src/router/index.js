import Vue from 'vue'
import Router from 'vue-router'
import first from '@/components/路由'
import second from '@/components/模板语法'
import third from '@/components/axios'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '路由',
      component: first
    },
    {
      path: '/template',
      name: '模板语法',
      component: second
    },
    {
      path: '/axios',
      name: 'axios',
      component: third
    }
  ]
})
