<template>
  <div class="singer">
    <listView @select="pathSinger" :data="singers"></listView>
    <router-view></router-view>
  </div>
</template>
<script>
  import {getSinger} from "@/api/singer.js";
  import listView from "@/base/listView/listView"
  import {mapMutations} from "vuex"

  export default {
    data() {
      return {
        singers: []
      };
    },
    components: {
      listView
    },
    created() {
      this.getSinger();
    },
    methods: {
      ...mapMutations({
        setSinger:"setSinger"
      }),
      getSinger() {
        getSinger().then(data => {
          this._NormalLizeSingers(data.data.list);
        });
      },
      _NormalLizeSingers(list) {
        function singer(name, id, mid) {
          this.name = name;
          this.id = id;
          this.img =
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000" +
            mid +
            ".jpg?max_age=2592000";
        }

        let hot = [];
        let map = {};
        list.forEach((element, index) => {
          if (!map[element.Findex]) {
            map[element.Findex] = [];
          }
          map[element.Findex].push(
            new singer(
              element.Fsinger_name,
              element.Fsinger_mid,
              element.Fsinger_mid
            )
          );
          if (index < 10) {
            hot.push(
              new singer(
                element.Fsinger_name,
                element.Fsinger_mid,
                element.Fsinger_mid
              )
            );
          }
        });
        let singers = [];
        for (let i in map) {
          if (i.match(/[a-z,A-Z]/)) {
            singers.push({
              title: i,
              data: map[i]
            })
          }
        }
        singers.sort((a, b) => {
          return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        });
        singers.unshift({
          title: "热门",
          data: hot
        });
        this.singers = singers;
      },
      pathSinger(singer) {
        this.$router.push({
          path: `/singer/${singer.id}`
        });
        this.setSinger(singer)
      }
    }
  };
</script>
<style scoped>
  .singer {
    width: 100%;
    height: 100%;
  }
</style>
