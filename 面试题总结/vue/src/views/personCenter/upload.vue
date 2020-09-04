<!--
 * @Author: wangsibo
 * @Date: 2020-08-30 19:40:02
 * @LastEditTime: 2020-09-02 16:16:43
 * @LastEditors: Please set LastEditors
 * @Description: 上传头像/文件
 * @FilePath: vue\src\views\personCenter\upload.vue
-->
<template>
  <div id="upload">
    <el-dialog title="上传头像" :visible.sync="dialogVisible" width="600px">
      <div class="content">
        <!-- 上传头像 start -->
        <el-upload
          ref="upload"
          class="upload-box"
          drag
          action="/"
          :show-file-list="false"
          :before-upload="beforeUpload"
          :on-change="uploadChange"
          :auto-upload="false"
          v-if="uploadShow">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em class="up">点击上传</em>
          </div>
          <div class="el-upload__tip" slot="tip">图片宽度*高度至少为150*150像素，大小不超过2MB</div>
        </el-upload>
        <!-- 上传头像 end -->
        <!-- 修改头像 start -->
        <div class="edit-avatar" v-else>
          <div class="left">
            <div class="original-img">
              <img :src="bigImg">
            </div>
          </div>
          <div class="right">
            <div class="avatar-show">
              <img class="avatar-look" :src="smallImg">
              <div class="tit">头像预览</div>
            </div>
          </div>
        </div>
        <!-- 修改头像 end -->
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogVisible = false" v-if="uploadShow">取 消</el-button>
        <div class="btn-box" v-else>
          <el-button size="mini" @click="uploadShow = true" >上一步</el-button>
          <el-button size="mini" type="danger" @click="submitUpload">确 定</el-button>
        </div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { $ajaxPersonCenter } from '@/api';
import { transformImg, dataURLtoBlob, blobToFile } from '@/utils/transformImgBase64.js';
export default {
  name: "Upload",
  data() {
    return {
      dialogVisible: false,  // 弹框是否显示
      loading: true,
      uploadShow: true,  // 
      files: {},    // 要上传的图片文件
      bigImg: '',   // 原始的图片
      smallImg: '', // 压缩之后的图片
    };
  },
  methods: {
    // 显示上传弹窗
    uploadFn() {
      this.dialogVisible = true;
    },
    // 上传前的事件
    beforeUpload(file) {
      console.log(file);
    },
    // 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
    uploadChange(file, fileList) {
      const isJPG = file.raw.type === "image/jpeg";
      const isLimit2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLimit2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      if (isJPG && isLimit2M) {
        let that = this;
        transformImg(file.raw, function (oldBase64, newBase64) {
          that.bigImg = oldBase64;
          that.smallImg = newBase64;
          let blob = dataURLtoBlob(newBase64);
          let newFile = blobToFile(blob, file.name)
          that.files = newFile;
        })
      }
      this.uploadShow = false;
    },
    // 上传
    submitUpload() {
      // this.$refs.upload.submit();  // 自带的上传
      let params = new FormData();
      params.append("files", this.files);
      $ajaxPersonCenter.uploadAvatar(params, res => {
        if (res.data.code == '0000') {
          // 子传父
          this.$emit('getImg', res.data.filepath);
          this.dialogVisible = false;
          this.uploadShow = true;
        } else {
          
        }
      }, err => {
        
      })
    },
  }
};
</script>

<style lang="scss" scoped>
#upload {
  /deep/ .el-dialog {
    .el-dialog__body {
      padding: 0;
      .content {
        width: 100%;
        padding: 10px 20px;
        // 上传头像
        .upload-box {
          .el-upload,
          .el-upload-dragger {
            width: 100%;
            &:hover {
              border-color: #CA0C16;
            }
          }
          .el-upload__tip {
            margin-top: 0;
          }
          .el-icon-upload {
            color: #e33e33;
          }
          .up {
            color: #CA0C16;
          }
        }
        // 编辑头像
        .edit-avatar {
          display: flex;
          .left {
            .original-img {
              width: 250px;
              height: 250px;
              border: 1px solid #ccc;
              display: flex;
              img {
                width: 200px;
                height: 200px;
                margin: auto;
              }
            }
          }
          .right {
            flex: 1;
            position: relative;
            background: #f1f1f1;
            .avatar-show {
              width: 150px;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%,-50%);
              .avatar-look {
                width: 150px;
                height: 150px;
                border-radius: 50%;
              }
              .tit {
                padding: 10px 0;
                text-align: center;
              }
            }
          }
        }
      }
    }
    .el-dialog__footer {
      padding-top: 0;
    }
  }
}
</style>