<template>
  <div class="head">
    <div class="head-title">
      <img src="../../../static/img/default.png" alt="">
      <p>Music</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    };
  }
}
</script>
<style scoped>
.head{
  width: 100%;
  height: 74px;
  text-align: center;
}
.head-title{
  margin: 0 auto;
  display: inline-block;
  font-size: 0;
  height: 100%;
}
.head-title>img{
  margin-top: 10px;
  display: inline-block;
  width: 54px;
  height: 54px;
}
.head-title>p{
  margin-left: 15px;
  vertical-align: top;
  line-height: 85px;
  display: inline-block;
  font-size: 30px;
  font-weight: 700;
  color: #ffcd32;
}
</style>