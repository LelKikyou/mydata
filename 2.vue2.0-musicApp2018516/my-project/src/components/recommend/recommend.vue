<template>
  <div class="recommend">
    <myScroll ref="scroll" :data="musicList">
      <div>
        <div v-if="sliderData.length" class="slider">
          <mySlide>
            <div v-for="item in sliderData">
              <a :href="item.linkUrl">
                <img class="recImg" :src="item.picUrl">
              </a>
            </div>
          </mySlide>
        </div>
        <div class="recommend-title">
          <p>热门歌单推荐</p>
        </div>
        <div class="musicLIst">
          <div class="musicItem" v-for="item in musicList">
            <div class="musicImg">
              <img v-lazy="item.imgurl">
            </div>
            <div class="musicTitle">
              <p>
                {{item.creator.name}}
              </p>
              <p :title="item.dissname">
                {{item.dissname}}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-show="!musicList.length" class="loading-contain">
        <myLoading></myLoading>
      </div>
    </myScroll>
  </div>
</template>
<script>
  import {getRecommend} from "../../api/recommend.js";
  import slider from "../../base/swipe/swipe.vue";
  import axios from "axios";
  import Scroll from "@/base/scroll/scroll.vue";
  import loading from "@/base/loading/loading.vue"

  export default {
    data() {
      return {
        sliderData: [],
        musicList: []
      };
    },
    components: {
      mySlide: slider,
      myScroll: Scroll,
      myLoading: loading
    },
    created: function () {
      getRecommend().then(data => {
        this.sliderData = data.data.slider;
      });
      this.axios
        .get("/api/musicLis", {
          params: {
            g_tk: 1928093487,
            inCharset: "utf-8",
            outCharset: "utf-8",
            notice: 0,
            format: "json",
            platform: "yqq",
            hostUin: 0,
            sin: 0,
            ein: 29,
            sortId: 5,
            needNewCode: 0,
            categoryId: 10000000,
            rnd: Math.random()
          }
        })
        .then(data => {
          this.musicList = data.data.data.list;
        });
    }
  };
</script>
<style scoped>
  .recommend {
    height: 100%;
    width: 100%;
  }

  .slider {
    width: 100%;
    overflow: hidden;
  }

  .recImg {
    width: 100%;
  }

  .recommend-title {
    width: 100%;
    height: 100px;
  }

  .recommend-title p {
    color: #fccb32;
    font-size: 24px;
    line-height: 100px;
    text-align: center;
  }

  .musicItem {
    display: flex;
    margin-top: 15px;
  }

  .musicImg {
    flex: 0 0 100px;
    margin: 0 30px 15px;
    width: 100px;
    height: 100px;
  }

  .musicImg img {
    width: 100px;
  }

  .musicTitle {
    flex: 1;
    padding-right: 60px;
    min-width: 0;
  }

  .musicTitle p:nth-child(1) {
    padding: 15px 0 25px;
    font-size: 25px;
    color: #fff;
  }

  .musicTitle p:nth-child(2) {
    font-size: 22px;
    color: #656565;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
