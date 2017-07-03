<template>
  <div id="app">
    <router-view></router-view>
    <div class="list">
      <router-link to="/">
        <img :src="[isChoice?homeImg:homeImg1]">
        <p>首页</p>
      </router-link>
      <router-link to="/List">
        <img src="./assets/list.png" alt="">
        <p>分类</p>
      </router-link>
      <router-link to="/Buys">
        <img src="./assets/buy.png" alt="">
        <p>购物车</p>
      </router-link>
      <router-link to="/Mymy">
        <img src="./assets/mymy.png" alt="">
        <p>个人中心</p>
      </router-link>
    </div>
  </div>
</template>

<script>
  import homeImg from './assets/home.png'
  import homeImg1 from './assets/home1.png'
  import list from './assets/list.png'
  import list1 from './assets/list1.png'
  import buy from './assets/buy.png'
  import buy1 from './assets/buy1.png'
  import mymy from './assets/mymy.png'
  import mymy1 from './assets/mymy1.png'
  export default {
    data () {
      return {
        homeImg: homeImg,
        homeImg1: homeImg1,
        listImg:list,
        listImg1:list1,
        buyImg:buy,
        buyImg1:buy1,
        mymyImg:mymy,
        mymyImg1:mymy1,
        isChoice: true
      }
    },
    mounted: function () {
      this.getRem(document, window)
    },
    methods: {
      getRem (doc, win, undefined) {
        let docEl = doc.documentElement,
          resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',
          recalc = function () {
            let clientWidth = docEl.clientWidth;
            if (clientWidth === undefined) return;
            docEl.style.fontSize = clientWidth / 10 + 'px'
          };
        if (doc.addEventListener === undefined) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false)
      }
    }
  }
</script>

<style>
  #app {
    font-family: "Microsoft YaHei UI";
    text-align: center;
  }

  .list {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 1.5rem;
    background: #000;
    opacity: 0.8;
  }

  .list a {
    display: block;
    float: left;
    width: 25%;
    height: 1.5rem;
    text-decoration: none;
  }

  .list a p {
    color: white;
    font-size: 0.4em;
  }

  .list a img {
    margin: 0 auto;
    display: block;
    width: .9em;
  }
</style>
