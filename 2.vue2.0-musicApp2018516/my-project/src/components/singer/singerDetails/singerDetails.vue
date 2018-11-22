<template>
  <transition name="slider">
    <musicList :title="title" :songs="songs" :bgImg="bgImg"></musicList>
  </transition>
</template>

<script>
  import {mapGetters} from "vuex"
  import {getSingerDetails} from "@/api/singer.js"
  import musicList from "@/base/musicList/musicList.vue"
  export default {
    name: "singDetails",
    data() {
      return {
        songs: [],
        title:"",
        bgImg:""
      }
    },
    components:{
      musicList
    },
    created() {
      this.title=this.getSinger.name;
      this.bgImg=this.getSinger.img;
      getSingerDetails(this.getSinger.id).then(data => {
        if (data.code !== 0) {
          this.$router.push({
            path: "/singer"
          });
          return false;
        }
        this._NormalLizeSingerDetails(data.data)
      })
    },
    computed: {
      ...mapGetters({
        getSinger: "getSinger"
      })
    },
    methods: {
      _NormalLizeSingerDetails(data) {
        class Song {
          constructor({id, mid, singer, name, album, duration, image, url}) {
            this.id = id;
            this.mid = mid;
            this.singer = singer;
            this.name = name;
            this.album = album;
            this.duration = duration;
            this.mimageid = image;
            this.url = url;
          }
        }
        function createSong(musicData) {
          return new Song({
            id: musicData.songid,
            mid: musicData.songmid,
            singer: filterSinger(musicData.singer),
            name: musicData.songname,
            album: musicData.albumname,
            duration: musicData.interval,
            image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
            url: "http://dl.stream.qqmusic.qq.com/http://dl.stream.qqmusic.qq.com/C400001Qu4I30eVFYb.m4a?guid=9248386144&vkey=EC115F389CFBD30532AB55E79F7ABA96513BBDC48C9E9BD2DFFE17D2971FF54EF81A8CC535D4061087E48C311D21B6B7B1FC23BE6EEA430F&uin=0&fromtag=38"
          });
          function filterSinger(singer) {
            let ret = []
            if (!singer) {
              return ''
            }
            singer.forEach((s) => {
              ret.push(s.name)
            });
            return ret.join('/')
          }
        }
        data.list.forEach((item, index) => {
          this.songs.push(createSong(item.musicData))
        });
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "singerDetails.stylus"
</style>
