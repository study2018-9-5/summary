<!--
 * @Author: wangsibo
 * @Date: 2020-08-26 15:19:54
 * @LastEditTime: 2020-08-28 10:36:48
 * @LastEditors: Please set LastEditors
 * @Description: 个人中心页面
 * @FilePath: vue\src\views\personCenter\personCenter.vue
-->
<template>
  <el-container id="person-center">
    <el-aside>
      <div class="btn-menu" v-for="(item, index) in btnMenu" :key="index">
        <el-button
          :class="[$route.fullPath == item.route? 'activeBtn': '']"
          size="small"
          @click="btnMenuClick(item)"
        >{{item.name}}</el-button>
      </div>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "PersonCenter",
  data() {
    return {
      btnMenu: [
        { name: "个人资料", route: "/header/personCenter/personInfo" },
        { name: "我的钱包", route: "2" },
        { name: "我的博客", route: "3" },
        { name: "抽奖", route: "/header/personCenter/lotter" }
      ]
    };
  },
  created() {},
  methods: {
    // 左侧菜单点击事件
    btnMenuClick(item) {
      this.$router.push({
        path: item.route
      });
    }
  }
};
</script>

<style lang="scss" scoped>
$ffcolor: #ffffff;
#person-center {
  width: 1200px;
  height: 100%;
  margin: auto;
  .el-aside {
    width: 160px !important;
    height: 100%;
    background: $ffcolor;
    padding: 16px 0;
    .btn-menu {
      margin-bottom: 10px;
      display: flex;
      .el-button {
        width: 130px;
        font-size: 14px;
        border: 0;
        margin: auto;
        &:hover {
          background: #f1f1f1;
          color: #000;
        }
      }
      .activeBtn {
        background: #e33e33;
        color: #fff;
        &:hover {
          background: #e33e33;
          color: #fff;
        }
      }
    }
  }
  .el-main {
    background: $ffcolor;
    margin-left: 10px;
  }
}
</style>