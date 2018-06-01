<template>
    <div class="loading">
        <div>
            <img src="../../../static/img/loading.gif" />
        </div>
        <p>{{title}}</p>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: "正在载入..."
        }
    }
};
</script>
<style scoped>
.loading {
    width: 100%;
    text-align: center;
}
.loading div{
    margin: 0 auto;
    width:60px;
    height: 60px;
    border-radius: 7px;
    overflow: hidden
}
.loading div img {
    width: 60px;
    height: 60px;
}
.loading p {
    line-height: 60px;
    font-size: 22px;
    color: #656565;
}
</style>
