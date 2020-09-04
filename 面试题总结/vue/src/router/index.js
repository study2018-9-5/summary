/*
 * @Author: wangsibo
 * @Date: 2020-06-03 09:31:29
 * @LastEditTime: 2020-09-04 10:55:11
 * @LastEditors: Please set LastEditors
 * @Description: 路由管理
 * @FilePath: src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const router = new Router({
  routes: [
    { // 登录页
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/index'),
    },
    { // 有公共头部的页面
      path: '/header',
      name: 'Header',
      redirect: '/header/page/home',
      component: () => import('@/views/header/header'),
      children: [
        {
          path: 'page',
          name: 'Page',
          redirect: 'page/home',
          component: () => import('@/views/home/index'),
          children: [
            { // 首页
              path: 'home',
              name: 'Home',
              component: () => import('@/views/home/home'),
            },
            { // 文章管理
              path: 'articleManage',
              name: 'ArticleManage',
              component: () => import('@/views/blogManage/articleManage'),
            },
          ]
        },
        { // 个人中心
          path: 'personCenter',
          name: 'PersonCenter',
          redirect: 'personCenter/personInfo',
          component: () => import('@/views/personCenter/index'),
          children: [
            { // 个人信息
              path: 'personInfo',
              name: 'PersonInfo',
              component: () => import('@/views/personCenter/personInfo')
            },
            { // 抽奖
              path: 'lotter',
              name: 'Lotter',
              component: () => import('@/views/personCenter/lotter')
            }
          ]
        }
      ]
    },
    { // 404页面
      path: '/404',
      name: 'Page404',
      component: () => import('@/views/errorpage/404.vue'),
    },
    { path: '/', redirect: '/header/page/home'},
    // 如果找不到页面，重定向到404页面。
    { path: '*', redirect: '/404' },
  ]
})
 
/**
 * @description: 路由跳转之前要做的事情。常用于登录的验证。
 * @param {to}: 即将要'进入'的目标路由对象
 * @param {from}: 当前正要'离开'的路由对象
 * @param {next}: 路由控制参数
 */
router.beforeEach((to, from, next) => {
  // console.log('print-beforeEach', to, from, next);
  if (to.fullPath !== '/login') {  // 如果不是登录组件
    if (!window.localStorage.getItem("Token")) {
      next('/login');  // 当前导航被中断，然后进行一个新的导航。
    } else {
      next();  // 如果一切正常，则调用这个方法进入下一个钩子。
    }
  } else {  // 如果是登录组件
    if (window.localStorage.getItem("Token")) {
      // console.log('print-login', to, from, next);
      next(from.fullPath);
    } else {
      next();
    }
  }
})

export default router;