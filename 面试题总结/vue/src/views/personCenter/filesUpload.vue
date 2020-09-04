<!--
 * @Author: wangsibo
 * @Date: 2020-09-02 19:37:59
 * @LastEditTime: 2020-09-02 20:47:53
 * @LastEditors: Please set LastEditors
 * @Description: 文件上传
 * @FilePath: vue\src\views\personCenter\filesUpload.vue
-->
<template>
  <el-upload
    class="upload-demo"
    action="http://localhost:3000/filesUpload"
    :show-file-list="false"
    :before-upload="beforeUpload"
    :on-change="uploadChange"
  >
    <el-button size="small" type="primary">点击上传</el-button>
  </el-upload>
</template>

<script>
export default {
  data() {
    return {
      key: ""
    };
  },
  methods: {
    // 上传前的事件
    beforeUpload(file) {
      console.log(file);
    },
    // 文件状态改变时的钩子
    uploadChange(file, fileList) {}
  }
};
</script>

<style lang="scss" scoped>
</style>