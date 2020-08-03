<!--
 * @Author: wangsibo
 * @Date: 2020-08-03 15:26:47
 * @LastEditTime: 2020-08-03 19:04:13
 * @LastEditors: Please set LastEditors
 * @Description: 文章列表
 * @FilePath: src\views\blogManage\articleList.vue
-->
<template>
  <!-- 查询 -->
  <div class="articleBox">
    <div class="searchBox">
      <el-form :model="searchCondition" label-width="auto">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item class="multi-input" label="创作时间:">
              <el-col :span="12">
                <el-select size="small" v-model="searchCondition.year" placeholder="年份">
                  <el-option label="2020年" value="1"></el-option>
                  <el-option label="2019年" value="2"></el-option>
                </el-select>
              </el-col>
              <el-col :span="12">
                <el-select size="small" v-model="searchCondition.month" placeholder="月份">
                  <el-option label="1月份" value="1"></el-option>
                  <el-option label="2月份" value="2"></el-option>
                </el-select>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="文章类型:">
              <el-select size="small" v-model="searchCondition.articleType" placeholder="文章类型">
                <el-option label="原创" value="1"></el-option>
                <el-option label="转载" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="分类专栏:">
              <el-select size="small" v-model="searchCondition.classColumn" placeholder="文章类型">
                <el-option label="项目中的问题" value="1"></el-option>
                <el-option label="Vue" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="关键词:">
              <el-input size="small" v-model="searchCondition.keyWord" placeholder="请输入关键词"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="2">
            <el-form-item class="btn">
              <el-button
                class="searchBtn"
                size="small"
                type="primary"
                :loading="loading"
                @click="searchArticle"
              >搜索</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <ul class="articleList">
      <li class="listItem" v-for="(item, index) in articleList" :key="index">
        <!-- 文章的标题 -->
        <div class="top">
          <span class="articleStatus">{{item.articleStatus}}</span>
          <span class="articleTitle">{{item.articleTitle}}</span>
        </div>
        <!-- 文章的创作时间、阅读评论的数量、对文章的操作 -->
        <div class="bottom">
          <div class="baseInfo">
            <span class="articleType">{{item.articleType}}</span>
            <span class="createTime">{{item.createTime}}</span>
            <ul class="readComment">
              <li>
                <i class="iconfont yuedu" title="阅读数"></i>
                <span class="num">{{item.yueduNum}}</span>
              </li>
              <li>
                <i class="iconfont pinglun" title="评论数"></i>
                <span class="num">{{item.pinglunNum}}</span>
              </li>
              <li>
                <i class="iconfont shoucangk" title="收藏数"></i>
                <span class="num">{{item.shoucangkNum}}</span>
              </li>
            </ul>
          </div>
          <ul class="operate">
            <li v-for="(it, idx) in item.operate" :key="idx" 
                :class="it.flag == 'delete'? 'delete': ''"
                @click="operate(it.flag)">
                {{it.name}}
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <div class="pageBox">
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleList",
  data() {
    return {
      loading: false,
      searchCondition: {
        year: '',
        month: '',
        articleType: '',
        classColumn: '',
        keyWord: ''
      },
      articleList: [
        {
          articleStatus: '草稿',
          articleTitle: 'way.js的使用',
          articleType: '原创',
          createTime: '2020年08月03日 00:30:00',
          yueduNum: '9',
          pinglunNum: '10',
          shoucangkNum: '99',
          operate: [
            {name: '置顶', flag: 'goTop'},
            {name: '查看', flag: 'look'},
            {name: '删除', flag: 'delete'},
          ]
        }
      ]
    };
  },
  created () {
    
  },
  methods: {
    // 搜索文章
    searchArticle() {

    },
    // 操作
    operate(flag) {
      switch (flag) {
        case 'delete':
          this.delArticle();
          break;
        default:
          break;
      }
    },
    // 删除文章
    delArticle() {
      this.$confirm('确定要删除该文章吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    }
  },
};
</script>

<style lang="scss" scoped>
// 文章列表样式
.articleBox {
  height: calc(100% - 100px);
  // 搜索查询样式
  .searchBox {
    background: #f2f5f7;
    margin-top: 15px;
    /deep/ .el-form {
      .el-row {
        margin: 0 !important;
        .el-col {
          .el-form-item {
            margin-bottom: 0;
            .el-form-item__label-wrap {
              .el-form-item__label {
                line-height: 44px;
              }
            }
            .el-form-item__content {
              .el-select {
                width: 100%;
                .el-input {
                  width: 100%;
                }
              }
            }
          }
          // 一个el-form-item中存放多个输入框的样式
          .multi-input {
            .el-form-item__content {
              .el-col:first-of-type {
                padding-left: 0 !important;
              }
              .el-col:last-of-type {
                padding-right: 0 !important;
              }
            }
          }
          // 存放按钮的el-form-item
          .btn {
            .el-form-item__content {
              height: 44px;
              margin-left: 0 !important;
              .searchBtn {
                background: #ca0c16;
                margin-top: 7px;
                border: 0;
                &:hover {
                  background: #b50a13;
                }
              }
            }
          }
        }
      }
    }
  }
  .articleList {
    .listItem {
      border-bottom: 1px solid #eee;
      padding: 15px 0;
      .top {
        height: 30px;
        line-height: 30px;
        margin-bottom: 5px;
        display: flex;
        .articleStatus {
          width: 40px;
          height: 26px;
          line-height: 26px;
          margin-top: 2px;
          margin-right: 15px;
          text-align: center;
          color: #999;
          border: 1px solid #e9e9e9;
          border-radius: 3px;
          box-sizing: border-box;
        }
        .articleTitle {
          font-size: 20px;
          color: #4d4d4d;
        }
      }
      .bottom {
        display: flex;
        justify-content: space-between;
        .baseInfo {
          height: 30px;
          line-height: 30px;
          color: #999;
          display: flex;
          .articleType,
          .createTime {
            margin-right: 15px;
          }
          .readComment {
            display: flex;
            li {
              margin-right: 15px;
              display: flex;
              .iconfont {
                margin-right: 3px;
              }
            }
          }
        }
        .operate {
          line-height: 30px;
          display: flex;
          li {
            margin-left: 10px;
            color: #349edf;
            cursor: pointer;
          }
          .delete {
            color: #ca0c16;
          }
        }
      }
    }
  }
  .pageBox {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    /deep/ .el-pagination.is-background .el-pager {
      li:not(.disabled).active {
        background-color: #e33e33;
        color: #fff;
      }
      li:hover {
        color: #e33e33;
      }
    }
  }
}
</style>