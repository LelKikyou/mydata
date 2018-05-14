<template>
  <div class="cartconcontrol">
    <transition-group name="slide-left">
      <div class="cart-decrease" :key="index" @click="minCart" v-show="food.count>0">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jian"></use>
        </svg>
      </div>
    </transition-group>
   <transition-group name="slide">
      <div class="cart-count" :key="index" v-show="food.count>0">
          {{food.count}}
      </div>
    </transition-group>
    <div class="cart-add" @click="addCart">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jia"></use>
        </svg>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    food: Object,
    index: Number
  },
  data() {
    return {};
  },
  methods: {
    addCart: function() {
      this.food.count++;
    },
    minCart: function() {
      if (this.food.count > 0) {
        this.food.count--;
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
  padding: 5px;
  font-size: 42px;
  color: rgb(0, 160, 220);
}
.cart-count {
  vertical-align: top;
  display: inline-block;
  width: 28px;
  text-align: center;
  font-size: 22px;
  line-height: 52px;
  color: rgb(147, 153, 159);
}
.cart-add {
  display: inline-block;
  padding: 5px;
  font-size: 44px;
  color: rgb(0, 160, 220);
}
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.5s ease;
}
.slide-left-enter,
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(98px) rotate(180deg);
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(48px);
}
</style>