<!--
 * @Author: wangsibo
 * @Date: 2020-08-26 19:24:56
 * @LastEditTime: 2020-08-28 11:01:54
 * @LastEditors: Please set LastEditors
 * @Description: 抽奖页面
 * @FilePath: vue\src\views\personCenter\lotter.vue
-->
<template>
  <div id="lotter-container">
    <img class="lotter-img" src="@/assets/images/choujiang.png" />
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="抽奖" name="first"></el-tab-pane>
      <el-tab-pane label="抽奖记录" name="second"></el-tab-pane>
    </el-tabs>
    <!-- 抽奖 start -->
    <div class="lotter-div">
      <!-- 左侧规则 start -->
      <div class="left">
        <div class="rule">
          <div class="title">抽奖规则</div>
          <div class="desc">
            <p>1. 学院优惠券与vip优惠券：可用于购买CSDN VIP，中奖后即时发放。</p>
            <p>2. iOS用户请在PC端使用优惠券。</p>
            <p>3. 实物奖品：</p>
            <p class="childp">1) 请抽中实物奖品的用户，将快递地址、收件人、电话、用户名发邮件到kefu@csdn.net中【邮件标题：签到抽奖礼品快递信息】，以便快递。</p>
            <p class="childp">2) 非中国大陆及大陆偏远地区抽中的实物奖品，暂不支持快递【将根据快递信息判定】，将更换为无需邮寄的线上产品【学院优惠券/vip优惠券】，优惠券发放后会邮件通知您。</p>
            <p class="childp">3) 奖品邮寄：每周四之前且收到快递信息的实物奖品，将于每周四下午寄出。请于3~4个工作日注意签收，特殊情况除外。</p>
            <p>4. 中奖相关问题，请联系网站QQ客服。</p>
            <p>5. 本次抽奖活动由CSDN发起，与Apple.Inc无关，本活动最终解释权归CSDN所有。</p>
          </div>
        </div>
        <div class="list">
          <div class="title">获奖名单</div>
          <div class="list-show">
            <el-carousel height="50px" direction="vertical" indicator-position="none" :interval=1500>
              <el-carousel-item v-for="item in winnerList" :key="item">
                <p>{{item}}</p>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
      <!-- 左侧规则 end -->
      <!-- 右侧转盘 start -->
      <div class="right">
        <div class="lotter-box">
          <img class="lotter-bdg" src="@/assets/images/lotter_box.png">
          <ul class="lotter-item-box">
            <li v-for="(item, index) in lotterList" :key="index">
              <div class="content" @click="index == 4? lotterClick(): ''">
                <img :src="require(`@/assets/images/${item.imgName}`)" v-if="item.imgName"/>
                <span class="tit">{{item.title}}</span>
              </div>
              <div :class="[maskShow? 'mask': '', activeIndex === index? 'activeClass': '']"></div>
            </li>
          </ul>
        </div>
        <div class="lotter-time">剩余0次抽奖机会</div>
      </div>
      <!-- 右侧转盘 end -->
    </div>
    <!-- 抽奖 end -->
  </div>
</template>

<script>
export default {
  name: "Lotter",
  data() {
    return {
      activeName: "first",  // tabs切换name
      activeIndex: -1,      // 抽奖列表的下标
      maskShow: false,      // 遮罩层是否显示
      lotterArr: [0, 1, 2, 5, 8, 7, 6, 3],  // 奖品旋转的数组(顺时针)
      lotterList: [  // 抽奖转盘列表
        {imgName: 'book.png', title: '实体书一本'},
        {imgName: 'cup.png', title: '陶瓷杯'},
        {imgName: 'nianka.png', title: '年卡'},
        {imgName: '', title: '谢谢参与'},
        {imgName: '', title: '立即抽奖'},
        {imgName: 'mousepad.png', title: '鼠标垫'},
        {imgName: 'CB.png', title: '1 C币'},
        {imgName: 'clothes.png', title: 'CSDN T恤'},
        {imgName: 'vipCard.png', title: 'VIP月卡'},
      ],
      winnerList: [  // 中奖名单
        '恭喜用户qq_5666689抽中30元现金券',
        '恭喜用户qq_7999689抽中30元现金券',
        '恭喜用户qq_8999689抽中40元现金券'
      ],
    };
  },
  created() {},
  methods: {
    handleClick() {

    },
    // 抽奖 todo(需要优化)
    lotterClick() {
      this.maskShow = true;
      this.lotterFor(this.lotterArr);
    },
    lotterFor(arr) {
      let that = this;
      let array = [];
      // 拼接一个循环旋转的数组
      for (let i = 0; i <= 4; i++) {
        array = array.concat(arr)
      }
      for(let i=0; i<array.length; i++){
        (function (j) {
          setTimeout(function () {
            that.activeIndex = array[j];
            if(j == array.length -1) {
              that.getRandom(arr)
            }
          }, j*100)
        })(i)
      }
    },
    // 获取随机数
    getRandom(arr) {
      let that = this;
      // let index = Math.floor((Math.random()*arr.length)); // 随机选取index
      // let endArr = arr.concat(arr.slice(0, index+1));
      let index = arr.indexOf(that.percentage());          // 选中的index
      let endArr = arr.concat(arr.slice(0, index+1));      // 选中之后多旋转一周
      let selectItem = that.lotterList[arr[index]].title;  // 选中选项的名称
      for (let i = 0; i < endArr.length; i++) {
        (function(j) {
          setTimeout(function () {
            that.activeIndex = endArr[j];
            if (j == endArr.length -1) {
              setTimeout(() => {
                that.maskShow = false;
              }, 2000);
            }
          }, j*300)
        })(i)
      }
    },
    // 按比例随机
    percentage() {
      let num = Math.random() * 100;
      let arr = [0,1,2,6,7,8]
      if (num > 0 && num <= 70) {
        return 3
      } else if(num > 70 && num <= 90) {
        return 5
      } else {
        return arr[Math.floor(Math.random()*arr.length)]
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#lotter-container {
  .lotter-img {
    width: 100%;
  }
  /deep/ .el-tabs {
    .el-tabs__header {
      margin: 0;
      .el-tabs__nav-wrap {
        &::after {
          height: 1px;
          background: #ccc;
        }
        .el-tabs__nav-scroll {
          .el-tabs__nav {
            // bar的颜色
            .el-tabs__active-bar {
              background: #ca0c16;
            }
            .el-tabs__item:hover {
              color: #ca0c16;
            }
            .is-active {
              color: #ca0c16;
            }
          }
        }
      }
    }
  }
  .lotter-div{
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    .title{
      font-size: 16px;
      color: #ca0c16;
      margin: 20px 0;
    }
    .left{
      width: 50%;
      .rule{
        .desc{
          padding-left: 20px;
          p{
            line-height: 25px;
            font-size: 13px;
            color: #000;
            text-align:justify;
            &.childp{
              padding-left: 10px;
            }
          }
        }
      }
      .list{
        .list-show{
          padding-left: 20px;
          .el-carousel{
            border: 1px solid #ccc;
            border-radius: 3px;
            p{
              height: 50px;
              line-height: 50px;
              text-align: center;
              font-size: 16px;
            }
          }
        }
      }
    }
    .right{
      width: 50%;
      .lotter-box{
        height: 360px;
        margin-top: 30px;
        position: relative;
        .lotter-bdg,.lotter-item-box{
          width: 360px;
          height: 360px;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%);
        }
        .lotter-item-box{
          margin-top: 12px;
          padding: 16px 20px 22px;
          z-index: 10;
          display: flex;
          justify-content: space-around;
          // align-items: center;
          flex-wrap: wrap;
          li{
            width: 100px;
            height: 90px;
            background: #fff;
            border-radius: 20px;
            position: relative;
            .content{
              width: 100px;
              height: 90px;
              background: #ffe0e6;
              border-radius: 20px;
              box-shadow: 0 -8px 0 0 #ffc7d0;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              img{
                width: 60px;
                height: 60px;
              }
              .tit{
                font-size: 12px;
                color: #d92e2e;
                text-align: center;
              }
            }
            .mask{
              width: 100px;
              height: 100px;
              background: rgba($color: #000, $alpha: 0.3);
              border-radius: 20px;
              position: absolute;
              top: -8px;
              z-index: 100;
            }
            .activeClass{
              z-index: -100;
            }
            &:nth-of-type(5) {
              .content{
                background: linear-gradient(180deg,#fff266,#ffd500);
                box-shadow: 0 -8px 0 0 #f2a201;
                cursor: pointer;
              }
              .tit{
                width: 50px;
                font-size: 20px;
                font-weight: bold;
                color: #d92e2e;
                text-align: center;
              }
            }
            &:nth-of-type(4) {
              .tit{
                font-size: 16px;
              }
            }
          }
          .liActiveClass{
            border: 5px solid #0bcc599e;
          }
        }
      }
      .lotter-time{
        height: 40px;
        margin-top: 10px;
        line-height: 40px;
        text-align: center;
        font-size: 20px;
      }
    }
  }
}
</style>