<!--
 * @Author: wangsibo
 * @Date: 2020-07-30 21:11:11
 * @LastEditTime: 2020-08-26 16:42:28
 * @LastEditors: Please set LastEditors
 * @Description: 首页
 * @FilePath: src\views\home\home.vue
--> 
<template>
  <el-container id="main-container">
    <!-- 侧边导航栏 start -->
    <el-aside>
      <el-menu
        :default-active="$route.path"
        class="el-menu-aside"
        background-color="#fff"
        text-color="#000"
        active-text-color="#CA0C16"
        :unique-opened="true"
        router
      >
        <el-menu-item index="/header/page/home">
          <template slot="title">
            <i class="iconfont home"></i>
            <span class="tit">首页</span>
          </template>
        </el-menu-item>
        <el-submenu index="/page">
          <template slot="title">
            <i class="iconfont guanli"></i>
            <span class="tit">博客管理</span>
          </template>
          <el-menu-item index="/header/page/articleManage">文章管理</el-menu-item>
        </el-submenu>
        <el-submenu index="/downloadManage">
          <template slot="title">
            <i class="iconfont xiazai"></i>
            <span class="tit">下载管理</span>
          </template>
          <el-menu-item index="/page/downloadDetail">下载明细</el-menu-item>
        </el-submenu>
        <el-menu-item index="/incomeCenter">
          <template slot="title">
            <i class="iconfont shouyi"></i>
            <span class="tit">收益中心</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/ataDatail">
          <i class="iconfont shuju"></i>
          <span slot="title" class="tit">数据观星</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <!-- 侧边导航栏 end -->
    <!-- 主体 start -->
    <el-main>
      <router-view></router-view>
    </el-main>
    <!-- 主体 end -->
  </el-container>
</template>

<script>
export default {
  name: "Page",
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
$f1color: #f1f1f1;
$ffcolor: #ffffff;
// 设置宽高都是100%
@mixin widthAndHeight() {
  width: 100%;
  height: 100%;
}
#main-container {
  @include widthAndHeight;
  background-color: $f1color;
  width: 1200px;
  height: 100%;
  margin: auto;
  // 侧边栏
  .el-aside {
    width: 200px !important;
    height: 100%;
    background: $ffcolor;
    .el-menu {
      border-right: 0;
      .el-submenu {
        .el-submenu__title {
          .iconfont {
            color: #ca0c16;
          }
          .tit {
            font-weight: bold;
          }
          &:hover {
            background: #fff !important;
          }
        }
      }
      .el-menu-item {
        .iconfont {
          color: #ca0c16;
        }
        .tit {
          font-weight: bold;
        }
        &:hover {
          background: #fff !important;
        }
      }
    }
  }
  // 主体
  .el-main {
    @include widthAndHeight;
    background: $f1color;
    padding: 0;
    margin-left: 8px;
  }
}
</style>
