<template>
  <scroll class="listView"
          :data="data"
          ref="scroll"
          :scrollLock="true"
          :probeType="3"
          @scroll="scroll">
    <ul class="list">
      <li v-for="group in data">
        <h2 class="title" ref="groups">{{group.title}}</h2>
        <ul>
          <li class="singer" @click.stop="selectItem(singer)" v-for="singer in group.data">
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
        this.$refs.scroll.scrollToElement(this.$refs.groups[index]);
      },
      selectItem(singer) {
        this.$emit("select", singer)
      },
      scroll(pos) {
        let calListHeight = this._calListHeight();
        let judgeNav = this._judgeNav(calListHeight, pos.y);
        this.active = judgeNav;
      },
      _calListHeight() {
        let groups = this.$refs.groups;
        let listHeight = [];
        let item1Y;
        groups.forEach((item, index) => {
          let itemY = item.getBoundingClientRect().y;
          if (index === 0) item1Y = itemY;
          listHeight.push(itemY - item1Y)
        });
        return listHeight;
      },
      _judgeNav(calListHeight, y) {
        let navIndex;
        if (y > 0) {
          navIndex = 0;
        } else {
          for (let i = 0; i < calListHeight.length; i++) {
            if (i === calListHeight.length - 1) {
              navIndex = i;
              break
            }
            if (-y >= calListHeight[i] && -y < calListHeight[i + 1]) {
              navIndex = i;
              break
            }
          }
        }
        return navIndex
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
    z-index: 20;
  }

  .nav > li.active {
    color: #ffcd32;
  }
</style>
