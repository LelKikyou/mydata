<template>
  <div id="app">
    <my-header :seller="seller"></my-header>
    <div class="tab">
      <div class="goods">
          <router-link to="/goods">商品</router-link>
      </div>
      <div class="ratings">
          <router-link to="/ratings">评论</router-link>
      </div>
      <div class="seller">
          <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <div class="content">
      <router-view  :seller="seller"></router-view>
    </div>
  </div>
</template>
<script>
import header from "./components/header/header.vue";
export default {
  name: "App",
  components: {
    "my-header": header
  },
  data() {
    return {
      seller: {}
    };
  },
  created() {
    this.axios.get("http://192.168.0.148:8080/api/seller").then(response => {
      this.seller = response.data.data;
    });
  },
  mounted() {
  }
};
</script>
<style type="text/css" scoped>
.tab {
  display: flex;
  width: 100%;
  height: 80px;
  border-bottom: 4px solid rgba(7, 17, 27, 0.1);
}
.tab > div {
  float: left;
  flex: 1;
}
.tab > div > a {
  display: block;
  width: 100%;
  height: 100%;
  font-size: 36px;
  color: rgb(77, 85, 93);
  line-height: 80px;
  text-align: center;
}
.tab > div > .router-link-active {
  color: rgb(240, 20, 20) !important;
}
</style>
