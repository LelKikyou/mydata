<template>
  <scroll :data="data">
    <ul class="list">
      <li v-for="group in data">
        <h4 class="title">{{group.title}}</h4>
        <ul>
          <li class="singer" v-for="singer in group.data">
            <img class="singer-img" :src="singer.img">
            <span class="singer-name">{{singer.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
  </scroll>
</template>

<script>
  import Scroll from "../scroll/scroll"

  export default {
    name: "listView",
    props: {
      data: Array
    },
    components: {
      Scroll
    }
  }
</script>

<style scoped>
  .title {
    height: 50px;
    padding-left: 20px;
    line-height: 50px;
    background-color: #333;
    font-size: 20px;
    color: #999;
  }
  .singer-img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-top: 10px;
  }
  .singer-name{
    vertical-align: top;
    color:#8b8b8b ;
    font-size: 18px;
    line-height: 100px;
    padding-left: 30px;
  }
  .singer{
    height: 100px;
    padding-left: 40px;
  }
</style>
