<template>
    <div class="loading" v-if="show" v-text="text">
    </div>
</template>

<script>
    export default {
        name: "loading",
        data: function () {
            return {
                text: "loading",
                show: false
            }
        }
    }
</script>

<style scoped>
    .loading {
        position: fixed;
        z-index: 999;
        display: inline-block;
        width: 200px;
        height: 50px;
        text-align: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: aqua;
    }
</style>