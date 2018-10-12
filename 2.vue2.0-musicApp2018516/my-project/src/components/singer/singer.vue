<template>
  <div class="singer">
    singer
  </div>
</template>
<script>
  import {getSinger} from "@/api/singer.js";

  export default {
    data() {
      return {
        singers: []
      };
    },
    created() {
      this.getSinger();
    },
    methods: {
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
              element.Fsinger_id,
              element.Fsinger_mid
            )
          );
          if (index < 10) {
            hot.push(
              new singer(
                element.Fsinger_name,
                element.Fsinger_id,
                element.Fsinger_mid
              )
            );
          }
        });
        console.log(map)

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
