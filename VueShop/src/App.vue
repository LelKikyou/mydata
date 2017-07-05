<template>
  <div id="app">
    <router-view></router-view>
    <div class="list">
      <router-link to="/" :class="{listColor:isHome}" @click.native="numCli(1)">
        <img :src="[isHome?homeImg:homeImg1]">
        <p>首页</p>
      </router-link>
      <router-link to="/List" :class="{listColor:isList}" @click.native="numCli(2)">
        <img :src="[isList?listImg:listImg1]" alt="">
        <p>分类</p>
      </router-link>
      <router-link to="/Buys" :class="{listColor:isBuy}" @click.native="numCli(3)">
        <img :src="[isBuy?buyImg:buyImg1]" alt="">
        <p>购物车</p>
      </router-link>
      <router-link to="/Mymy" :class="{listColor:isMymy}" @click.native="numCli(4)">
        <img :src="[isMymy?mymyImg:mymyImg1]" alt="">
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
        listImg: list,
        listImg1: list1,
        buyImg: buy,
        buyImg1: buy1,
        mymyImg: mymy,
        mymyImg1: mymy1,
        isHome: true,
        isList: false,
        isBuy: false,
        isMymy: false,
        listColor: 'listColor'
      }
    },
    mounted: function () {
      this.getRem(document, window)
    },
    methods: {
      numCli(num){
        switch (num) {
          case 1 :
            this.isHome = true;
            this.isList = false;
            this.isBuy = false;
            this.isMymy = false;
            break;
          case 2:
            this.isHome = false;
            this.isList = true;
            this.isBuy = false;
            this.isMymy = false;
            break;
          case 3:
            this.isHome = false;
            this.isList = false;
            this.isBuy = true;
            this.isMymy = false;
            break;
          case 4:
            this.isHome = false;
            this.isList = false;
            this.isBuy = false;
            this.isMymy = true;
            break;
        }
      },
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

  * {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  #app ul {
    list-style: none;
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

  .listColor {
    background-color: white;
    opacity: 0.8;
  }

  .listColor p {
    color: black !important;
  }
</style>
