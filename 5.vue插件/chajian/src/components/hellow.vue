<template>
    <div class="hellow" @click="xx">
        hellow
    </div>
</template>

<script>
    export default {
        name: "hellow",
        methods:{
            xx(){
                console.log(this)
            }
        }
    }
</script>

<style scoped>

</style>