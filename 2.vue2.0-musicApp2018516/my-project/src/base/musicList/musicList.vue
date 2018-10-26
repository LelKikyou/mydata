<template>
  <div class="musicList">
    <div class="imgLayer" v-show="showImg" :style="bgimg_url"></div>
    <div class="back" @touchstart.stop="backUrl">
      <i class="iconfont icon-fanhui"></i>
    </div>
    <h1 class="title">{{title}}</h1>
    <div class="singerInfo" :style="singerInfoC">
      <div class="play-box" v-show="songs.length">
        <i class="iconfont icon-bofang"></i>
        <span>随机播放全部</span>
      </div>
    </div>
    <div class="songsList">
      <div class="backgroundLayer" :style="topVal"></div>
      <scroll :style="scrolldeviationC" @scroll="scroll" :probeType="3" :scrollLock="true" :rel="scroll">
        <ul>
          <li class="item" v-show="songs.length" v-for="item in songs">
            <p class="songName">{{item.name}}</p>
            <p class="songInfo">{{item.singer+"·"+item.album}}</p>
          </li>
        </ul>
      </scroll>
      <loading v-show="!songs.length" class="load"></loading>
    </div>
  </div>
</template>

<script>
  import loading from "@/base/loading/loading.vue"
  import scroll from "@/base/scroll/scroll.vue"

  export default {
    name: "musicList",
    props: {
      bgImg: {
        type: String,
        default: ""
      },
      songs: {
        type: Array,
        default: function () {
          return []
        }
      },
      title: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        layerTop: 0,
        backHight: 0,
        scrolldeviation: 0,
        heightS:0,
        scale:1,
        showImg:true
      }
    },
    components: {
      loading,
      scroll
    },
    mounted() {
      this.backHight = this.backHightC;
    },
    methods: {
      backUrl() {
        this.$router.go(-1);
      },
      scroll(pos) {
        let posY = pos.y;
        if (posY > -this.backHight) {
          this.showImg=true;
          this.layerTop = posY;
        } else {
          this.layerTop = -this.backHight
        }
        if (posY >= 0) {
          this.showImg=false;
          this.scrolldeviation=posY;
          this.scale=(posY+this.heightS)/this.heightS;
        }else {
          this.scrolldeviation=0;
        }
      }
    },
    computed: {
      bgimg_url() {
        return `background-image:url("${this.bgImg}")`
      },
      topVal() {
        return `top:${this.layerTop}px`
      },
      backHightC() {
        let heightB = document.querySelector(".back").offsetHeight;
        let heightS = document.querySelector(".singerInfo").offsetHeight;
        this.heightS=heightS;
        return heightS - heightB;
      },
      scrolldeviationC() {
        return `transform:translate3d(0,${this.scrolldeviation}px, 0)`
      },
      singerInfoC(){
        return `background-image:url("${this.bgImg}");transform:scale(${this.scale})`
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "musicList.stylus"
</style>
