<template>
  <div class="player" v-show="getPlayList.length">
    <div class="normal-player" v-show="getFullScreen">
      <div class="bg-blur"><img :src="getCurrentSong.mimageid"></div>
      <div class="top">
        <div class="back">
          <i class="iconfont icon-icon_on_the_down"></i>
        </div>
        <h1 class="singName">{{getCurrentSong.name}}</h1>
        <h2 class="singer">{{getCurrentSong.singer}}</h2>
      </div>
      <div class="content">
        <div class="content-l">
          <div class="photoFrame">
            <img :src="getCurrentSong.mimageid">
          </div>
        </div>
        <div class="centent-r"></div>
      </div>
      <div class="bottom"></div>
    </div>
    <div class="min-player" v-show="!getFullScreen"></div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex"

  export default {
    name: "player",
    computed: {
      ...mapGetters({
        getPlayList: "getPlayList",
        getFullScreen: "getFullScreen",
        getCurrentSong: "getCurrentSong"
      })
    },
    watch: {
      getCurrentSong() {
        console.log(this.getCurrentSong)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "player.stylus"
</style>
