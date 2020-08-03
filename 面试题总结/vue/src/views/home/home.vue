<!--
 * @Author: wangsibo
 * @Date: 2020-08-02 19:51:33
 * @LastEditTime: 2020-08-02 22:44:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: src\views\home\home.vue
-->
<template>
  <div id="home-page">
    <div class="home-person">
      <div class="userInfo">
        <img class="userImg" src="@/assets/images/user.jpg" alt="user" />
        <div class="detail">
          <div class="name">@光影@</div>
          <ul class="medalList">
            <li class="medalItem" v-for="(item, index) in medalList" :key="index">
              <!-- 在webpack中会将图片来当做模块来用，因为是动态加载的，
              所以url-loader将无法解析图片地址，所以要用require-->
              <!-- <img :src="require(`@/assets/images/${item.srcName}`)"> -->
              <el-popover
                placement="bottom"
                trigger="hover"
                width="300"
                :open-delay="200"
                :close-delay="100"
                :offset="66"
              >
                <img :src="require(`@/assets/images/${item.srcName}`)" slot="reference" />
                <div class="popoverBox">
                  <img :src="require(`@/assets/images/${item.srcName}`)" />
                  <div class="content">
                    <div class="title">{{item.title}}</div>
                    <div class="detail">{{item.detail}}</div>
                  </div>
                </div>
              </el-popover>
            </li>
            <li class="medalItem nullTag" v-if="medalList.length">
              <img src="@/assets/images/liubianxing.png" />
              <span class="total">{{medalList.length}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      medalList: [] // 勋章列表
    };
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    /**
     * @description: 获取用户的基本信息
     * @param {type} 
     * @return {type} 
     */
    getUserInfo(){
      var that = this;  //用that去保存vue的实例
      that.$axios.get('/userBaseInfo').then(function (res) {
        that.medalList = res.data.medalList
      })
    }
  }
};
</script>

<style lang="scss" scoped>
$f1color: #f1f1f1;
$ffcolor: #ffffff;
#home-page {
  width: 100%;
  height: 100%;
  .home-person {
    width: 100%;
    height: 100px;
    background: $ffcolor;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    .userInfo {
      display: flex;
      justify-content: flex-start;
      .userImg {
        width: 75px;
        height: 75px;
        margin-top: 12.5px;
        border-radius: 50%;
      }
      .detail {
        margin: 0 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .name {
          font-size: 20px;
          font-weight: bold;
          height: 30px;
          line-height: 30px;
        }
        // 勋章样式
        .medalList {
          display: flex;
          .medalItem {
            width: 36px;
            height: 36px;
            margin-right: 5px;
            img {
              width: 36px;
              height: 36px;
              cursor: pointer;
            }
          }
          .nullTag {
            position: relative;
            img {
              cursor: default;
            }
            .total {
              width: 36px;
              height: 36px;
              line-height: 36px;
              text-align: center;
              position: absolute;
              top: 0;
              left: 0;
            }
          }
        }
      }
    }
  }
}

// 设置弹框el-popover中内容的样式
body .el-popover .popoverBox{
  width: 100%;
  // height: 100px;
  display: flex;
  img{
    width: 50px;
    height: 50px;
    margin: auto;
  }
  .content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title{
      font-size: 16px;
      font-weight: bold;
    }
    .detail{
      font-size: 12px;
    }
  }
}
</style>