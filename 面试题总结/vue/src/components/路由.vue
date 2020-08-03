<template>
  <!--
  通过传入to属性指定链接
  <router-link>默认会被渲染成一个<a>标签 
  -->
  <div class="routers">
    <router-link to="/template" replace>模板语法</router-link>
    <router-link to="/axios" tag="li">axios</router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  html,body{
    width: 100px;
    height: 200px;
  }
</style>