<template>
  <div class="axios">
    axios
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    mounted() {
       this.$axios
      .get('https://www.runoob.com/try/ajax/json_demo.json')
      .then(response => (this.info = response))
      .catch(function (error) { // 请求失败处理
        console.log(error);
      });
    }
  }
</script>

<style scoped>

</style>