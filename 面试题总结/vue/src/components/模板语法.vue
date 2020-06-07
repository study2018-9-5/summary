<template>
  <div class="first">
    <p v-html="label"></p>
    <label>颜色<input type="checkbox" v-model="use"></label>
    <p :class="{'activeClass': use}">{{ message }}</p>
    <p :class="['default', use? 'activeClass': '']">class多个值的绑定</p>
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