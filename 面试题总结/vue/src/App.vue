<!--
 * @Author: wangsibo
 * @Date: 2020-06-03 09:31:29
 * @LastEditTime: 2020-07-31 10:05:04
 * @LastEditors: Please set LastEditors
 * @Description: 根组件
 * @FilePath: src\App.vue
--> 
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import './assets/css/reset.css';
  @import './assets/fonts/iconfont.css';  /* 引入iconfont */
  #app {
    width: 100%;
    height: 100%;
  }
</style>
