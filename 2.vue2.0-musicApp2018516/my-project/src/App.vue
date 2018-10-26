<template>
  <div id="app">
    <myHead></myHead>
    <div class="tab">
      <router-link tag="div" class="tab-item" to="/recommend">
        <span>
          推荐
        </span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/singer">
        <span>
          歌手
        </span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/rank">
        <span>
          排行
        </span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/search">
        <span>
          搜索
        </span>
      </router-link>
    </div>
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
  import myHead from "./components/head/head.vue";

  export default {
    components: {
      myHead: myHead
    },
    data() {
      return {};
    }
  };
</script>
<style scoped>
  @import "//at.alicdn.com/t/font_883657_eic9f9d5ppd.css";
  .tab {
    display: flex;
    width: 100%;
    height: 68px;
  }

  .tab-item {
    flex: 1;
    line-height: 68px;
    font-size: 28px;
    color: #8d8d8d;
    text-align: center;
    font-weight: 700;
  }

  .router-link-active.tab-item span {
    color: #ffcd32;
    display: inline-block;
    position: relative;
  }

  .router-link-active.tab-item span::after {
    content: "";
    display: block;
    width: 100%;
    border-top: 3px solid #ffcd32;
    position: absolute;
    left: 0;
    bottom: 10px;
  }

  .content {
    position: absolute;
    top: 142px;
    bottom: 0;
    width: 100%;
    overflow: hidden;
  }
</style>
