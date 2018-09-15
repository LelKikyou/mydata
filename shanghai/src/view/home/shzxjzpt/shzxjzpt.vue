<template>
    <div class="shzxjzpt">
        <div class="home-tab">
            <Tag v-for="(item,index) in tab" :class="{'active':index===active}"
                 @click.native="linkUrl(item.url,index)">
                {{item.name}}
            </Tag>
        </div>
        <div class="home-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "shzxjzpt",
        data() {
            return {
                active:0,
                tab: [
                    {
                        name: "数据概览",
                        url:"sjgl"
                    },
                    {
                        name: "关联分析",
                        url:"glfx"
                    },
                    {
                        name: "临时分析",
                        url:""
                    },
                    {
                        name: "流入分析",
                        url:""
                    }
                ]
            }
        },
        methods:{
            linkUrl(name,index){
                this.$router.push({
                    name: name,
                });
            }
        }
    }
</script>

<style scoped>

</style>