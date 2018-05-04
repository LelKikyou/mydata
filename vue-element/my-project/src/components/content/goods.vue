<template>
  <div class="goods">
      <div class="menu-wrapper">
        <div v-for="data in goods" class="good">
          <span class="good-data">{{data.name}}</span>
        </div>
      </div>
      <div class="menu-goods">
        <div class="goods-item" v-for="data in goods">
          <div class="good-name">
            {{data.name}}
          </div>
          <div class="good-content" v-for="foodData in data.foods">
            <div class="good-img">
              <img :src="foodData.icon">
            </div>
            <div>
              <p>
                {{foodData.name}}
              </p>
              <p>
                {{foodData.description}}
              </p>
              <div>
                 <span>
                   月销{{foodData.sellCount}}份
                 </span>
                   <span>
                   好评率{{foodData.rating}}%
                 </span>
              </div>
              <p>
                ¥{{foodData.price}}
                </p>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goods: []
    };
  },
  props: {
    seller: Object
  },
  created() {
    this.axios.get("/api/goods").then(response => {
      this.goods = response.data.data;
    });
  }
};
</script>
<style scoped>
.goods {
  position: absolute;
  top: 342px;
  display: flex;
  bottom: 128px;
  width: 100%;
  overflow: hidden;
}
.menu-wrapper {
  flex: 0 0 160px;
  width: 160px;
  background-color: #f3f5f7;
}
.menu-goods {
  flex: 1;
}
.good {
  position: relative;
  font-size: 24px;
  height: 108px;
}
.good-data {
  position: absolute;
  padding: 0 24px;
  left: 0;
  top: 50%;
  font-size: 24px;
  line-height: 28px;
  transform: translateY(-50%);
}
</style>