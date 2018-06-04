<template>
    <div class="singer">
        singer
    </div>
</template>
<script>
import { getSinger } from "@/api/singer.js";
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
            map["hot"] = hot;
            console.log(this.objKeySort(map));
            let reg = /^[a-zA-Z]$/;
            let singersData = [];
            for (let item in map) {
                if (reg.test(item)) {
                }
            }
        },
        objSortArr(obj) {
            let newkey = Object.keys(obj).sort();
            let newObj = []; //创建一个新的对象，用于存放排好序的键值对
            console.log(newkey);
            let reg = /^[a-zA-Z]$/;
            for (let i = 0; i < newkey.length; i++) {
                if (reg.test(item)) {
                }
                let newSinger = {
                    title: newkey[i]
                };
                //遍历newkey数组
                newObj[newkey[i]] = obj[newkey[i]]; //向新创建的对象中按照排好的顺序依次增加键值对
            }
            return newObj; //返回排好序的新对象
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
