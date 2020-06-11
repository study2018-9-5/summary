<template>
  <div class="first">
    <p v-html="label"></p>
    <label>颜色<input type="checkbox" v-model="use"></label>
    <p :class="{'activeClass': use}">{{ message }}</p>
    <p :class="['default', use? 'activeClass': '']">class多个值的绑定</p>
    <button @click="setStorage()">设置localStroage</button>
  </div>
</template>
  
<script>
  export default {
    name: '模板语法',
    data() {
      return {
        label: '<h3>模板语法</h3>',
        message: '文本插值 - {{ }}',
        use: false
      }
    },
    mounted() {

    },
    methods: {
      setStorage(){
        window.localStorage.setItem('name', '小明')
      }
    }
  }
</script>

<style scoped>
  .default{
    color: red;
  }
  .activeClass{
    color: yellowgreen;
  }
</style>