<template>
    <div id="app">
        <hellow></hellow>
        <!--<div class="demo" v-demo>-->
        <!--</div>-->
        <div class="xx" @click="aa">qaaaaaaaaaaaaaa</div>
    </div>
</template>

<script>
    import hellow from "./components/hellow.vue"
    import Vue from "vue"
    Vue.component('jsx-example', {
        render: function render(h) {
            // <-- h must be in scope
            return h(
                "div",
                {
                    attrs: { id: "foo" },
                    on: {
                        "click": "xx"
                    }
                },
                ["bar"]
            );
        },

        method: {
            xx: function xx() {
                console.log(1111);
            }
        }
    });
    export default {
        name: 'app',
        components: {
            hellow
        },
        methods:{
            aa(){
                this.$loading.show("xxx")
                setTimeout(()=>{
                    this.$loading.hide()
                },1000)
            }
        },

    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .demo {
        height: 200px;
        width: 100%;
        background-color: antiquewhite;
    }
</style>
