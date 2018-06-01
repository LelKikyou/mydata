<template>
  <div>
    singer
  </div>
</template>
<script>
import { getSinger } from "@/api/singer.js";
export default {
    data() {
        return {};
    },
    created() {
        let data = {
            comm: { ct: 24, cv: 10000 },
            singerList: {
                module: "Music.SingerListServer",
                method: "get_singer_list",
                param: {
                    area: 200,
                    sex: -100,
                    genre: -100,
                    //热门为-100,1为A...
                    index: -100,
                    sin: 0,
                    cur_page: 1
                }
            }
        };
        let dataString = JSON.stringify(data);
        getSinger(dataString).then(data => {
            console.log(data);
        });
    }
};
</script>
<style scoped>
</style>
