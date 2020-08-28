<!--
 * @Author: wangsibo
 * @Date: 2020-08-02 18:33:38
 * @LastEditTime: 2020-08-26 19:39:12
 * @LastEditors: Please set LastEditors
 * @Description: 博客管理-文章管理
 * @FilePath: src\views\blogManage\articleManage.vue
-->
<template>
  <div id="article-Manage">
    <!-- tabs切换 -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部" name="first"></el-tab-pane>
      <el-tab-pane label="公开" name="second"></el-tab-pane>
      <el-tab-pane label="私密" name="third"></el-tab-pane>
      <el-tab-pane label="审核" name="fourth"></el-tab-pane>
      <el-tab-pane label="草稿箱" name="fifth"></el-tab-pane>
      <el-tab-pane label="回收站" name="sixth"></el-tab-pane>
    </el-tabs>
    <!-- 文章列表 -->
    <ArticleList :typeAndStatus="type"/>
  </div>
</template>

<script>
  import ArticleList from '@/views/blogManage/articleList.vue';
  export default {
    name: 'ArticleManage',
    data() {
      return {
        activeName: 'first',
        type: 'all',
        typeObj: {
          '全部': 'all',
          '公开': 'public',
          '私密': 'private',
          '审核': 'check',
          '草稿箱': 'draft'
        }
      }
    },
    components: {
      ArticleList
    },
    created () {
      
    },
    methods: {
      // 切换tabs事件
      handleClick(tab, event) {
        // switch (tab.label) {
        //   case '全部':
        //     this.type = 'all'
        //     break;
        //   case '公开':
        //     this.type = 'public'
        //     break;
        //   case '私密':
        //     this.type = 'private'
        //     break;
        //   case '审核':
        //     this.type = 'check'
        //     break;
        //   case '草稿箱':
        //     this.type = 'draft'
        //     break;
        //   default:
        //     break;
        // }
        
        // 对ifelse/switchcase的优化
        this.type = this.typeObj[tab.label];
      },
    },
  }
</script>

<style lang="scss" scoped>
  @mixin widthAndHeight{
    width: 100%;
    height: 100%;
  }
  #article-Manage{
    min-height: 100%;
    background: #fff;
    padding: 10px 30px{
      bottom: 20px;
    };
    /deep/ .el-tabs{
      .el-tabs__header{
        margin: 0;
        .el-tabs__nav-wrap{
          &::after{
            height: 1px;
            background: #ccc;
          }
          .el-tabs__nav-scroll{
            .el-tabs__nav{
              // bar的颜色
              .el-tabs__active-bar{
                background: #ca0c16;
              }
              .el-tabs__item:hover{
                color: #ca0c16;
              }
              .is-active{
                color: #ca0c16;
              }
            }
          }
        }
      }
    }
  }
</style>