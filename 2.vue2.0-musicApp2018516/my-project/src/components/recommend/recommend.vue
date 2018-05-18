<template>
  <div>
      recommend
  </div>
</template>
<script>
import getRecommend from "../../api/recommend.js"
export default {
  data () {
    return {
    };
  },
  created:function(){
    getRecommend().then(data=>{
      console.log(data)
    })
  }
}
</script>
<style scoped>

</style>