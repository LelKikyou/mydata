<template>
  <transition name="slider">
    <div class="singDetails">
      singDetails
    </div>
  </transition>
</template>

<script>
  import {mapGetters} from "vuex"
  import {getSingerDetails} from "@/api/singer.js"

  export default {
    name: "singDetails",
    data() {
      return {
        songs: []
      }
    },
    created() {
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
            url: "http://dl.stream.qqmusic.qq.com/http://dl.stream.qqmusic.qq.com/C400001Qu4I30eVFYb.m4a?guid=2726593840&vkey=05AA5D47AB6E399306219CAA6F46FB85E7AD2164A5F18FA583A7BF87958DC48D2B486716F4632CCB6D646B4EDF10A0D6BAB480DE05925B57&uin=0&fromtag=38"
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
        console.log(this.songs)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "singerDetails.stylus"
</style>
