<template>
  <div id="app">
    <myHead></myHead>
    <div class="apptab">
      <router-link tag="div" class="apptab-item" to="/recommend">
        <span>
          推荐
        </span>
      </router-link>
      <router-link tag="div" class="apptab-item" to="/singer">
        <span>
          歌手
        </span>
      </router-link>
      <router-link tag="div" class="apptab-item" to="/rank">
        <span>
          排行
        </span>
      </router-link>
      <router-link tag="div" class="apptab-item" to="/search">
        <span>
          搜索
        </span>
      </router-link>
    </div>
    <div class="appcontent">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <player></player>
  </div>
</template>
<script>
  import myHead from "./components/head/head.vue";
  import player from "@/components/player/player"

  export default {
    components: {
      myHead: myHead,
      player: player
    },
    data() {
      return {};
    }
  };
</script>
<style>
  @import "../static/reset/reset.css";
  @import "//at.alicdn.com/t/font_883657_0wz8bsg6kycf.css";

  #app {
    width: 100%;
    height: 100%;
  }

  .apptab {
    display: flex;
    width: 100%;
    height: 68px;
  }

  .apptab-item {
    flex: 1;
    line-height: 68px;
    font-size: 28px;
    color: #8d8d8d;
    text-align: center;
    font-weight: 700;
  }

  .router-link-active.apptab-item span {
    color: #ffcd32;
    display: inline-block;
    position: relative;
  }

  .router-link-active.apptab-item span::after {
    content: "";
    display: block;
    width: 100%;
    border-top: 3px solid #ffcd32;
    position: absolute;
    left: 0;
    bottom: 10px;
  }

  .appcontent {
    position: absolute;
    top: 142px;
    bottom: 0;
    width: 100%;
    overflow: hidden;
  }
</style>
