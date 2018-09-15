<template>
    <div class="home">
        <headTab :tabData="tabData"></headTab>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import headTab from '../components/headTab/headTab'

    export default {
        name: 'home',
        data() {
            return {
                //tab列表参数
                tabData: [
                    {
                        name: "标题1",
                        url: 'b1'
                    },
                    {
                        name: "标题2",
                        url: 'b2'
                    }
                ]
            }
        },
        components: {
            headTab: headTab
        }
    }
</script>
<style scoped>
    .home {
        width: 100%;
        height: 100%;
    }

    .home .content {
        width: 100%;
        height: calc(100% - 70px);
    }
</style>
