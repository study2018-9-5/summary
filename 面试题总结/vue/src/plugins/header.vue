<!--
 * @Author: wangsibo
 * @Date: 2020-08-20 10:42:22
 * @LastEditTime: 2020-08-20 10:55:00
 * @LastEditors: Please set LastEditors
 * @Description: 一个头部插件的模板
 * @FilePath: vue\src\plugins\header.vue
-->
<template>
  <div class="title">
    <span class="tit">{{tit}}</span>
    <span class="operate">{{operate}}</span>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      tit: {
        default: '',
        type: String
      },
      operate: {
        default: '',
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  .title{
    height: 40px;
    line-height: 40px;
    margin-bottom: 20px;
    font-size: 14px;
    font-weight: bold;
    border-bottom: 1px solid #d8d8d8;
    display: flex;
    justify-content: space-between;
    .operate{
      font-size: 14px;
      font-weight: normal;
      cursor: pointer;
      &:hover{
        color: #ca0c16;
      }
    }
  }
</style>