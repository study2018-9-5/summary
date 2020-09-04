<!--
 * @Author: wangsibo
 * @Date: 2020-08-26 19:23:44
 * @LastEditTime: 2020-09-04 16:31:49
 * @LastEditors: Please set LastEditors
 * @Description: 个人资料页面
 * @FilePath: vue\src\views\personCenter\personInfo.vue
-->
<template>
  <div id="personInfo-container">
    <!-- 头像 start -->
    <div class="avatarBox">
      <div class="left">
        <el-avatar shape="circle" :size="75" fit="fill">
          <div class="imgBox" slot="default">
            <!-- <img class="userImg" src="@/assets/images/user.jpg" alt="user" /> -->
            <img class="userImg" :src="'/mock/' + avatarImgUrl" alt="user" />
            <div class="uploadAvatar" @click="upload">上传头像</div>
          </div>
        </el-avatar>
        <div class="nameInfo">
          <div>@光影@</div>
          <div>码龄2年</div>
        </div>
      </div>
    </div>
    <!-- 头像 end -->
    <!-- 账号信息 start -->
    <div class="accountInfo">
      <div class="head">
        <span class="title">账号信息</span>
        <div class="line"></div>
        <el-button
          :class="['btn', readOrEdit? '': 'saveClass']"
          size="mini"
          @click="editInfo($event)"
          :loading="loading"
        >修改信息</el-button>
      </div>
      <div class="content">
        <el-row class="readInfo" v-if="readOrEdit">
          <el-col :span="24">
            <span class="name">昵称：</span>
            <span class="value">{{formData.nickname}}</span>
          </el-col>
          <el-col :span="24">
            <span class="name">姓名：</span>
            <span class="value">{{formData.name}}</span>
          </el-col>
          <el-col :span="24">
            <span class="name">性别：</span>
            <span class="value">{{formData.sex}}</span>
          </el-col>
          <el-col :span="24">
            <span class="name">简介：</span>
            <span class="value">{{formData.introduce}}</span>
          </el-col>
        </el-row>

        <el-form ref="formData" :model="formData" label-width="75px" v-else>
          <el-row>
            <el-col :span="8">
              <el-form-item label="昵称：">
                <el-input size="small" v-model="formData.nickname" maxlength="10" show-word-limit></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="姓名：">
                <el-input size="small" v-model="formData.name" maxlength="10" show-word-limit></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="性别：">
                <el-radio-group v-model="formData.sex">
                  <el-radio label="男"></el-radio>
                  <el-radio label="女"></el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="20">
              <el-form-item label="简介：">
                <el-input type="textarea" v-model="formData.introduce" maxlength="300" show-word-limit></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
    <!-- 账号信息 end -->
    <!-- 学历信息 start -->
    <div class="educationInfo">
      <div class="head">
        <span class="title">学历信息</span>
        <div class="line"></div>
        <el-button class="btn" size="mini" @click="editInfo">学历认证</el-button>
      </div>
      <div class="content">
        <el-row class="readInfo">
          <el-col :span="24">
            <span class="name">学校：</span>
            <!-- 写法2 -->
            <span class="value">
              <span v-if="baseInfo.school">{{baseInfo.school}}</span>
              <span v-else style="display: flex; color: #267dcc; cursor: pointer;" @click="writeInfo">
                <i class="iconfont bianji"></i>
                <span class="write">请填写</span>
              </span>
            </span>
            <!-- 
              写法1.
              在v-html中要想使用filters应该用 $options.filters 
            -->
            <!-- <span class="value" v-html="$options.filters.valNull(baseInfo.school)" @click="baseInfo.school? '': writeInfo($event)"></span> -->
          </el-col>
          <el-col :span="24">
            <span class="name">毕业时间：</span>
            <span class="value">{{baseInfo.graduationTime}}</span>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 学历信息 end -->
    <!-- 任职信息 start -->
    <div class="companyInfo">
      <div class="head">
        <span class="title">任职信息</span>
        <div class="line"></div>
        <el-button class="btn" size="mini" @click="editInfo">公司认证</el-button>
      </div>
      <div class="content">
        <el-row class="readInfo">
          <el-col :span="24">
            <span class="name">公司：</span>
            <span class="value">{{baseInfo.company}}</span>
          </el-col>
          <el-col :span="24">
            <span class="name">职位：</span>
            <span class="value">{{baseInfo.office}}</span>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 任职信息 end -->
    <!-- 简历上传 start -->
    <div class="resumeUpload">
      <div class="head">
        <span class="title">简历上传</span>
        <div class="line"></div>
        <el-upload
          class="fileUpload"
          action="http://localhost:3000/filesUpload"
          :show-file-list="false"
          :before-upload="beforeUpload"
          :on-success="uploadSuccess">
          <el-button class="btn" size="mini">简历上传</el-button>
        </el-upload>
        <!-- <FilesUpload/> -->
      </div>
      <div class="content">
        <el-row class="readInfo">
          <el-col :span="24">
            <span class="name">简历：</span>
            <span class="first" v-if="!resume.name">未上传</span>
            <span class="second" v-else @click="downloadFile(resume.name)">
              <span class="write">{{resume.name}}</span>
              <i class="iconfont download"></i>
            </span>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 简历上传 end -->
    <!-- 上传头像 - 组件 -->
    <Upload ref="uploadComp" @getImg="getImgUrl"/>
  </div>
</template>

<script>
import {$ajaxPersonCenter} from '@/api';
import Upload from '@/views/personCenter/upload.vue';
import FilesUpload from '@/views/personCenter/filesUpload.vue';
export default {
  data() {
    return {
      loading: false,
      readOrEdit: true,
      avatarImgUrl: '',
      formData: {
        nickname: "@光影@",
        name: "王光影",
        sex: "男",
        introduce: "初级前端"
      },
      baseInfo: {
        school: '',  // 辽宁工业大学
        graduationTime: '2018.07.05',
        company: '北京中科江南',
        office: 'web前端工程师',
      },
      resume: {
        name: '',  // 简历名
        path: ''   // 简历路径
      },
    };
  },
  components: {
    Upload,
    FilesUpload
  },
  created() {
    this.getPersonInfo()
  },
  methods: {
    // 获取个人资料
    getPersonInfo() {
      // this.avatarImgUrl = '/mock/uploads/avatar_492.jpg'
      let params = {};
      $ajaxPersonCenter.getPersonInfo(params, res => {
        if (res.data.code == '0000') {
          this.avatarImgUrl = res.data.personInfo.avatarUrl;
          this.formData.nickname = res.data.personInfo.nickname;
          this.formData.name = res.data.personInfo.name;
          this.formData.sex = res.data.personInfo.sex;
          this.formData.introduce = res.data.personInfo.introduce;
        } else {
          
        }
      }, err => {
        
      })
    },
    // 修改头像的时候获取返回来的路径
    getImgUrl(url) {
      console.log(url);
      this.avatarImgUrl = url;
    },
    // 上传头像
    upload() {
      // 父调子
      this.$refs.uploadComp.uploadFn();
    },
    // 编辑信息
    editInfo(e) {
      if (e.target.innerHTML == '修改信息') {
        e.target.innerHTML = '保存';
        this.readOrEdit = false;
      } else {
        this.formData.id = 1;
        let params = this.formData;
        this.loading = true;
        $ajaxPersonCenter.editAccountInfo(params, res => {
          if (res.data.code == '0000') {
            this.readOrEdit = true;
            e.target.innerHTML = '修改信息';
            this.loading = false;
          } else {
            this.loading = false;
          }
        }, err => {
          this.loading = false;
        })
      }
    },
    // 简历上传
    // 上传前的事件
    beforeUpload(file) {
      console.log(file);
    },
    // 文件上传成功时的钩子
    uploadSuccess(res, file, fileList) {
      console.log(res, file, fileList);
      this.resume.name = res.data.filename;
    },
    // 简历下载
    downloadFile(name) {
      window.location.href = `/mock/uploads/${name}`
    },
    // 填写信息 (写法1)
    // writeInfo(e) {
    //   if (e.target.className == 'write' || e.target.className.indexOf('iconfont') !== -1) {
    //     console.log('跳转填写信息页面');
    //   } else {
        
    //   }
    // },

    // 填写信息 (写法2)
    writeInfo() {
      console.log('跳转填写信息页面');
    }
  },
  filters: {
    valNull: function(value) {
      if(value) {
        return value;
      }else {
        // v-html的特性：将添加进去的@click事件按string形式插入，没有作为Vue模板进行编译。
        // 所以不能在这里的span中绑定事件
        // 在单文件组件里，scoped的样式不会应用在v-html内部
        return `<span style="display: flex; color: #267dcc; cursor: pointer;">
                  <i class="iconfont bianji"></i>
                  <span class="write">请填写</span>
                </span>`;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#personInfo-container {
  .avatarBox {
    height: 75px;
    .left {
      display: flex;
      .imgBox {
        position: relative;
        .userImg {
          width: 75px;
          height: 75px;
        }
        .uploadAvatar {
          width: 100%;
          height: 30px;
          background: rgba($color: #000, $alpha: 0.5);
          line-height: 25px;
          text-align: center;
          font-size: 12px;
          position: absolute;
          left: 0;
          bottom: 0;
          z-index: -100;
        }
        &:hover .uploadAvatar {
          cursor: pointer;
          z-index: 100;
        }
      }
      .nameInfo {
        padding: 10px;
        div:nth-of-type(1) {
          height: 30px;
          line-height: 30px;
          text-align: center;
          font-size: 20px;
          font-weight: bold;
        }
        div:nth-of-type(2) {
          height: 25px;
          line-height: 25px;
          text-align: center;
          font-size: 14px;
        }
      }
    }
  }
  .accountInfo, .educationInfo, .companyInfo, .resumeUpload{
    .head {
      width: 100%;
      padding: 15px 0;
      display: flex;
      justify-content: space-between;
      position: relative;
      // &::after {
      //   content: '';
      //   width: 100%;
      //   height: 1px;
      //   background: #e5e5e5;
      //   position: absolute;
      //   top: 50%;
      // }
      .title {
        padding-right: 10px;
        line-height: 28px;
        font-size: 16px;
        font-weight: bold;
      }
      .line {
        height: 1px;
        background: #e5e5e5;
        margin-top: 14px;
        flex: 1;
      }
      .btn {
        padding: 0 15px;
        border: 1px solid #e33e33;
        font-size: 14px;
        color: #e33e33;
        &:hover {
          background: #fae5e5;
        }
        &:focus {
          background: #fff;
        }
      }
      .saveClass {
        background: #e33e33;
        color: #fff;
        &:hover,
        &:focus {
          background: #e33e33;
        }
      }
      // 上传的按钮样式
      .fileUpload {
        .el-upload {
          .btn {
            height: 28px;
          }
        }
      }
    }
    .content {
      // 只读信息
      .readInfo {
        font-size: 14px;
        .el-col {
          height: 20px;
          line-height: 20px;
          margin-bottom: 15px;
          display: flex;
          .name {
            width: 75px;
            text-align: right;
          }
          .value {
            width: calc(100% - 75px);
          }
          .first {

          }
          .second {
            display: flex; 
            color: #267dcc; 
            cursor: pointer;
            .download {
              display: none;
            }
            &:hover {
              color: #e33e33;
              .download {
                display: block;
              }
            }
          }
        }
      }

      // 表单样式
      /deep/ .el-form {
        width: 100%;
        .el-row {
          margin: 0 !important;
          .el-form-item {
            margin-bottom: 15px;
          }
          .el-form-item__label {
            padding-right: 0;
            font-size: 14px;
            color: #333;
          }
          .el-input__inner {
            width: 100%;
            height: 30px;
            padding: 0 10px;
            font-size: 14px;
            .el-range__icon,
            .el-range__close-icon,
            .el-range-separator {
              line-height: 22px;
            }
            .el-range-separator {
              padding: 0;
            }
            .el-range-input {
              font-size: 14px;
            }
          }
          .el-select {
            width: 100%;
            .el-tag {
              background: #fff;
              line-height: 26px;
              margin: 0 0 0 8px !important;
              padding: 0;
              .el-tag__close {
                right: 0px;
              }
            }
            .el-input__inner {
              height: 30px !important;
              font-size: 14px;
            }
          }
          .el-textarea__inner {
            font-size: 14px;
            min-height: 48px !important;
            padding: 5px 10px;
          }
          .el-col-textarea {
            .el-form-item__content {
              margin: 5px 0;
            }
          }
        }
      }
    }
  }
}
</style>