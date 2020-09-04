<!--
 * @Author: wangsibo
 * @Date: 2020-07-30 21:11:11
 * @LastEditTime: 2020-09-02 16:41:26
 * @LastEditors: Please set LastEditors
 * @Description: 首页
 * @FilePath: src\views\home\home.vue
--> 
<template>
  <div id="home-container">
      <!-- 头部 start -->
      <el-header>
        <div class="nav">
          <div class="logoImg" @mouseenter="enterFun" @mouseleave="leaveFun">
            <img class="logo" src="@/assets/images/csdn-logo.png" alt="logo">
            <img :class="['qr', qrIsShow? 'qrShow': '']" src="@/assets/images/csdnqr.png" alt="csdnqr">
          </div>
          <el-menu
            :default-active="activeNav"
            mode="horizontal"
            @select="handleSelectNav"
            background-color="#fff"
            text-color="#555"
            active-text-color="#E33E33">
            <el-menu-item index="/1">博客</el-menu-item>
            <el-menu-item index="2">学院</el-menu-item>
            <el-menu-item index="3">下载</el-menu-item>
          </el-menu>
        </div>
        <ul class="toolBox">
          <li class="collection">
            <i class="iconfont shoucang"></i>
          </li>
          <li class="remind">
            <i class="iconfont tixing"></i>
            <!-- 这是一个提醒消息数量的小标记 -->
            <span :class="['badge', remindNum<10? 'singleNum': 'evenNum']" v-if="remindNum">
              <span class="msgNum">{{remindNum>99? 99: remindNum}}</span>
              <span class="addIcon" v-if="remindNum>99">+</span>
            </span>
          </li>
          <li class="userLogin">
            <el-dropdown @command="operate">
              <span class="el-dropdown-link">
                <img class="userImg" src="@/assets/images/user.jpg" alt="user">
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item :divided="item.line" :command="item.flag" v-for="(item, index) in userMenu" :key="index">
                  <i :class="['iconfont', item.icon]"></i>
                  {{ item.name }}
                </el-dropdown-item>
                <!-- <el-dropdown-item><i class="iconfont guanzhu"></i>我的关注</el-dropdown-item>
                <el-dropdown-item><i class="iconfont shoucang"></i>我的收藏</el-dropdown-item>
                <el-dropdown-item><i class="iconfont gerenxinxi"></i>个人中心</el-dropdown-item>
                <el-dropdown-item divided><i class="iconfont qianbao"></i>我的钱包</el-dropdown-item>
                <el-dropdown-item><i class="iconfont dingdan"></i>我的订单</el-dropdown-item>
                <el-dropdown-item divided><i class="iconfont bangzhu"></i>帮助</el-dropdown-item>
                <el-dropdown-item><i class="iconfont tuichu"></i>退出</el-dropdown-item> -->
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
      </el-header>
      <!-- 头部 end -->
      <div class="home-main">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeNav: '1',
      qrIsShow: false,
      remindNum: 10,
      userMenu: [
        {name: '我的关注', icon: 'guanzhu'},
        {name: '我的收藏', icon: 'shoucang'},
        {name: '个人中心', icon: 'gerenxinxi', flag: "personCenter"},
        {name: '我的钱包', icon: 'qianbao', line: true},
        {name: '我的订单', icon: 'dingdan'},
        {name: '帮助', icon: 'bangzhu', line: true},
        {name: '退出', icon: 'tuichu', flag: "signOut"}
      ],
      
    }
  },
  created () {
    
  },
  methods: {
    /**
     * @description: 选择头部导航事件
     * @param {index}: 选中菜单的index
     * @param {indexPath}: 选中菜单的indexPath
     */
    handleSelectNav(index, indexPath) {
      console.log(index, indexPath);
    },
    /**
     * @description: 鼠标进入/离开logo图片时显示/隐藏二维码图片
     */
    enterFun() {
      this.qrIsShow = true;
    },
    leaveFun() {
      this.qrIsShow = false;
    },
    // 点击用户菜单时的操作
    operate(flag) {
      console.log(flag);
      switch (flag) {
        case 'signOut':  // 退出账号
          window.localStorage.removeItem('Token');
          window.location.reload();  // todo 页面的刷新的做法
          // this.$router.push({path: '/login'});
          break;
        case 'personCenter':
          this.$router.push({
            path: '/header/personCenter'
          })
        default:
          break;
      }
    },  
  },
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
#home-container {
  @include widthAndHeight;
  background-color: $f1color;
  overflow: hidden;
  // 头部
  /deep/ .el-header {
    width: 100%;
    height: 60px!important;
    background: $ffcolor;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    // 头部导航栏
    .nav{
      margin: 0 30px;
      display: flex;
      .logoImg{
        height: 100%;
        position: relative;
        .logo{
          height: 100%;
        }
        .qr{
          width: 150px;
          height: 150px;
          background: #fff;
          padding: 10px;
          box-shadow: 0 2px 3px 0 rgba(0,0,0,.1);
          display: none;
          position: absolute;
          top: 60px;
          left: -22px;
          z-index: 100;
        }
        .qrShow{
          display: block;
        }
      }
      // 导航菜单
      .el-menu--horizontal{
        margin: 0 10px;
        border: 0;
        &::before{
          display: none;
        }
        .el-menu-item{
          font-size: 20px;
        }
      }
    }
    // 右侧工具组
    .toolBox{
      height: 100%;
      display: flex;
      li{
        margin: 0 10px;
        line-height: 60px;
        cursor: pointer;
        .iconfont{
          font-size: 24px;
          color: #acacac;
        }
        .userImg{
          width: 40px;
          height: 40px;
          margin: 10px 0;
          border-radius: 50%;
        }
      }
      // 提醒样式
      .remind{
        position: relative;
        .badge{
          height: 14px;
          background: #CA0C16;
          line-height: 15px;
          color: #fff;
          text-align: center;
          border: 1px solid $ffcolor;
          box-sizing: content-box;
          display: flex;
          position: absolute;
          top: 10px;
          left: 10px;
          .msgNum{
            width: 100%;
          }
          .addIcon{
            line-height: 14px;
          }
        }
        .singleNum{
          width: 14px;
          border-radius: 50%;
        }
        .evenNum{
          padding: 0 5px;
          border-radius: 16px;
        }
      }
    }
  }
  .home-main{
    width: 100%;
    height: calc(100% - 68px);
  }
}

// 修改下拉菜单的样式
body .el-dropdown-menu{
  margin-top: 0;
  padding: 5px 0;
}
body .el-dropdown-menu .el-dropdown-menu__item{
  font-size: 16px;
  color: #555;
}
body .el-dropdown-menu .el-dropdown-menu__item:hover{
  background: #f1f1f1;
}
</style>
