<template>
  <transition name="slider">
    <div class="singDetails">
      singDetails
    </div>
  </transition>
</template>

<script>
  export default {
    name: "singDetails",
    created(){
      console.log(this.$route.params.id)
    }
  }
</script>

<style lang="stylus" scoped>
  @import "singerDetails.stylus"
</style>
