<template>
  <div class="cartconcontrol">
      <div class="cart-decrease" v-show="food.count>0">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jian"></use>
        </svg>
      </div>
      <div class="cart-count" v-show="food.count>0">
          {{food.count}}
      </div>
      <div class="cart-add" @click="addCart">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jia"></use>
          </svg>
      </div>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  props: {
    food: Object
  },
  data() {
    return {};
  },
  methods: {
    addCart: function() {
      if (!this.food.count) {
        Vue.set(this.food, "count", 1);
      } else {
        this.food.count++;
      }
    }
  }
};
</script>
<style scoped>
.cartconcontrol {
  font-size: 0;
}
.cart-decrease {
  display: inline-block;
  font-size: 48px;
  color: rgb(0, 160, 220);
}
.cart-count {
  vertical-align: top;
  display: inline-block;
  width: 48px;
  text-align: center;
  font-size: 20px;
  line-height: 48px;
  color: rgb(147, 153, 159);
}
.cart-add {
  display: inline-block;
  font-size: 48px;
  color: rgb(0, 160, 220);
}
</style>