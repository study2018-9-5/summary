<template>
  <div class="axios">
    axios
    <button @click="setStorage()">设置localStroage</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    mounted() {
       
    },
    methods: {
      sendAjax() {
        this.$axios
        .get('https://www.runoob.com/try/ajax/json_demo.json')
        .then(response => (this.info = response))
        .catch(function (error) { // 请求失败处理
          console.log(error);
        });
      },
      setStorage(){
        window.localStorage.setItem('name', '小红')
      }
    }
  }
</script>

<style scoped>

</style>