<!--
 * @Author: wangsibo
 * @Date: 2020-08-02 19:51:33
 * @LastEditTime: 2020-08-20 11:39:20
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
    <div class="home-swiper">
      <div class="left">
        <el-carousel trigger="click" arrow="always" :autoplay=false height="120px">
          <el-carousel-item v-for="(item,index) in swiperList" :key="index">
            <img :src="require(`@/assets/images/${item.srcName}`)"/>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="right">
        <div class="create">
          <span class="title">创作活动</span>
          <span class="more">更多</span>
        </div>
        <ul class="list-ul">
          <li v-for="item in 2" :key="item">
            <div class="lf">
              <span></span>
              <span>遇见技术栈 - 分享个人技术栈</span>
              <img src="@/assets/images/hot.png" alt="">
            </div>
            <div class="rf">460人参与</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="home-common-entrance">
      <!-- <div class="title">
        <span class="tit">常用入口</span>
        <span class="operate">数据详情</span>
      </div> -->
      <Header :tit="'常用入口'" :operate="'数据详情'"/>
      <div class="btnDiv">
        <el-button size="medium">上传资源</el-button>
        <el-button size="medium">收益中心</el-button>
        <el-button size="medium">博文数据</el-button>
        <el-button size="medium">下载数据</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      medalList: [],   // 勋章列表
      swiperList: [
        {srcName: 'swiper_1.jpg'},
        {srcName: 'swiper_2.jpg'},
      ],  // 轮播图列表
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
    margin-bottom: 8px;
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
  .home-swiper{
    width: 100%;
    height: 120px;
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    .left{
      width: 600px;
      .el-carousel{
        img{
          border-radius: 3px;
        }
      }
    }
    .right{
      width: calc(100% - 608px);
      background: #ffffff;
      padding: 10px 15px;
      border-radius: 3px;
      .create{
        width: 100%;
        height: 20px;
        line-height: 20px;
        margin-bottom: 15px;
        display: flex;
        justify-content: space-between;
        .title{
          font-size: 16px;
          font-weight: bold;
        }
        .more{
          font-size: 14px;
          cursor: pointer;
        }
      }
      .list-ul{
        li{
          height: 20px;
          line-height: 20px;
          margin-bottom: 8px;
          font-size: 14px;
          display: flex;
          justify-content: space-between;
          .lf{
            display: flex;
            justify-content: start;
            span:nth-of-type(1){
              width: 5px;
              height: 5px;
              background: #d8d8d8;
              margin-top: 7.5px;
              margin-right: 10px;
              border-radius: 50%;
            }
            span:nth-of-type(2){
              cursor: pointer;
            }
            img{
              width: 14px;
              height: 14px;
              margin-top: 2px;
              margin-left: 8px;
            }
          }
        }
      }
    }
  }
  .home-common-entrance{
    height: 130px;
    background: #ffffff;
    padding: 0 16px;
    border-radius: 3px;
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
    .btnDiv{
      display: flex;
      justify-content: center;
      .el-button{
        width: 230px;
        height: 50px;
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