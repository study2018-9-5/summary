<!--
 * @Author: wangsibo
 * @Date: 2020-07-29 11:48:07
 * @LastEditTime: 2020-08-02 21:36:21
 * @LastEditors: Please set LastEditors
 * @Description: 用户的登录页面
 * @FilePath: src\views\login\index.vue
--> 
<template>
  <!-- 用户的登录页面 -->
  <div id="login-container">
    <div id="login-box">
      <div id="title-box">Login</div>
      <!-- 登录的表单 start-->
      <el-form ref="loginForm" :model="loginData">
        <el-form-item>
          <el-input
            ref="username"
            v-model="loginData.username" 
            placeholder="Username">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input 
            ref="password"
            v-model="loginData.password" 
            :type="passwordType"
            placeholder="Password"
            @keyup.enter.native="handleLogin">
            <i slot="suffix" :class="['iconfont', passwordType == 'password'? 'eyes_close': 'eyes_open']" @click="showPwd"></i>
          </el-input>
        </el-form-item>
        <el-button class="loginBtn" type="primary" :loading="loading" @click="handleLogin">Login</el-button>
      </el-form>
      <!-- 登录的表单 end-->
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      passwordType: "password",
      loading: false,
      loginData: {
        username: "",
        password: ""
      },
      // loginRules: []
    };
  },
  created() {

  },
  mounted () {
    // 在mounted时dom元素已经挂载完毕了，可以在这里进行dom操作。
    // 判断用户或密码是否为空，如果是则获取焦点。
    if (this.loginData.username == '') {
      this.$refs.username.focus()
    } else if(this.loginData.password == '') {
      this.$refs.password.focus()
    }
  },
  methods: {
    // 是否显示密码
    showPwd() {
      if (this.passwordType == "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      // 在数据变化后要执行的某个操作，而这个操作需要使用"随数据改变而改变的DOM结构"的时候，
      // 这个操作都应该放进Vue.nextTick()的回调函数中。
      this.$nextTick(() => {
        this.$refs.password.focus();
      })
    },
    // 登录
    handleLogin() {
      // this.$refs.loginForm.validate(valid => {
      //   if (valid) {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            window.localStorage.setItem('Admin-Token','admin-token')
            this.$router.push({
              path: '/page/home'
            })
          }, 2000);
          // this.$store.dispatch('user/login', this.loginForm)
          //   .then(() => {
          //     this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
          //     this.loading = false
          //   })
          //   .catch(() => {
          //     this.loading = false
          //   })
        // } else {
        //   console.log('error submit!!')
        //   return false
        // }
      // })
    },
  }
};
</script>

<style lang="scss" scoped>
#login-container {
  width: 100%;
  height: 100%;
  background: #006a99;
  #login-box {
    width: 400px;
    height: 450px;
    background-color: rgba($color: #000, $alpha: 0.2);
    padding: 40px;
    margin: 20px;
    border-radius: 5px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    #title-box{
      width: 100%;
      margin-bottom: 20px;
      text-align: center;
      font-size: 30px;
      font-weight: bold;
      color: #fff;
    }
    /* 输入框的样式 start */ 
    /deep/ .el-form-item {
      border: 1px solid rgba($color: lightgray, $alpha: 0.1);
      background: rgba($color: lightgray, $alpha: 0.1);
      .el-input {
        input {
          background: transparent; // 背景透明
          color: #fff;
          border: 0;
          caret-color: red; // 光标颜色
        }
        // input中图标的样式
        .el-input__suffix{
          top: 1px;
          .el-input__suffix-inner{
            height: 100%;
            display: inline-block;
            .iconfont{
              font-size: 28px;
            }
          }
        }
      }
    }
    /* 输入框的样式 end */
    .loginBtn{
      width: 100%;
      font-size: 16px;
    }
  }
}
</style>