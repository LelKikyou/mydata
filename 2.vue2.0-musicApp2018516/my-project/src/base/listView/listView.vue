<template>
  <scroll class="listView" :data="data">
    <ul class="list">
      <li v-for="group in data">
        <h2 class="title">{{group.title}}</h2>
        <ul>
          <li class="singer" @click="selectItem(singer)" v-for="singer in group.data">
            <img class="singer-img" v-lazy="singer.img">
            <span class="singer-name">{{singer.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <ul class="nav" v-show="data.length">
      <li v-for="(item,index) in navList" @touchstart.stop="onTouchstart(index)" :class="{active:active===index}">
        {{item}}
      </li>
    </ul>
    <h2 v-show="data.length" class="title list-fixed">{{fixTit}}</h2>
    <loading v-show="!data.length" class="loading"></loading>
  </scroll>
</template>

<script>
  import Scroll from "../scroll/scroll"
  import Loading from '@/base/loading/loading'

  export default {
    name: "listView",
    props: {
      data: Array
    },
    data() {
      return {
        active: 0
      }
    },
    components:
      {
        Scroll,
        Loading
      }
    ,
    computed: {
      fixTit() {
        let data = this.data[this.active];
        return data ? data.title : "";
      },
      navList() {
        return this.data.map((i, v) => {
          return i.title.substr(0, 1)
        })
      }
    },
    methods: {
      onTouchstart(index) {
        this.active = index;
      },
      selectItem(singer){
        this.$emit("select",singer)
      }
    }
  }
</script>

<style scoped>
  .title.list-fixed {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    color: #ffcd32;
  }

  .listView {
    position: relative;
  }

  .loading {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .title {
    height: 50px;
    padding-left: 20px;
    line-height: 50px;
    background-color: #333;
    font-size: 20px;
    color: #999;
  }

  .singer-img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-top: 10px;
  }

  .singer-name {
    vertical-align: top;
    color: #8b8b8b;
    font-size: 18px;
    line-height: 100px;
    padding-left: 30px;
  }

  .singer {
    height: 100px;
    padding-left: 40px;
  }

  .nav {
    padding: 30px 0;
    position: fixed;
    top: 50%;
    right: 0;
    transform: translateY(-40%);
    width: 32px;
    text-align: center;
    background-color: rgba(0, 0, 0, .3);
    color: #999;
    line-height: 30px;
    font-size: 20px;
    border-radius: 16px;
  }

  .nav > li.active {
    color: #ffcd32;
  }
</style>
