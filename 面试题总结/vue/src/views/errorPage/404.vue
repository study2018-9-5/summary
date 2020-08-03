<template>
  <div id="errorpage">
    <div class="errorBox">
      <div class="imgbox">
        <img src="@/assets/images/404.png" alt="">
      </div>
      <div class="infoBox">

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Page404',
    data() {
      return {
        
      }
    },
  }
</script>

<style lang="scss" scoped>
  #errorpage{
    width: 100%;
    height: 100%;
    background: floralwhite;
    position: relative;
    .errorBox{
      width: 1000px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      .imgbox{
        width: 600px;
        img{
          width: 100%;
        }
      }
    }
  }
</style>