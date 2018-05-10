<template>
  <div class="shopCart">
      <div class="shop">
          <div class="shop-single">
              <span>
                  ¥{{totalPrice}}
              </span>
              <span>
                  另需配送费¥{{seller.deliveryPrice}}元
              </span>
          </div>
          <div class="shop-total">
              还差¥{{seller.minPrice}}起送
          </div>
      </div>
      <div class="cart">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-gouwuchekong"></use>
             </svg>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    seller: Object,
    selectFoods: Array
  },
  data() {
    return {
     
    };
  },
  computed: {
    totalPrice: function() {
      let total = 0;
      // this.selectFoods.forEach(food => {
      //   total += food.price * food.count;
      // });
      return total;
    },
    toPrice:function(){
      
    }
  }
};
</script>
<style scoped>
.shopCart {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 96px;
  z-index: 50;
}
.shop {
  display: flex;
  width: 100%;
  height: 96px;
  background-color: #131d27;
}
.shop-single {
  flex: 1;
  height: 96px;
  font-size: 0;
}
.shop-single span:nth-child(1) {
  position: relative;
  display: inline-block;
  padding: 0 24px 0 160px;
  font-size: 34px;
  color: rgba(255, 255, 255, 0.4);
  line-height: 96px;
}
.shop-single span:nth-child(1)::before {
  content: "";
  display: block;
  position: absolute;
  height: 48px;
  border-right: 2px solid rgba(255, 255, 255, 0.1);
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}
.shop-single span:nth-child(2) {
  display: inline-block;
  padding-left: 24px;
  font-size: 32px;
  color: rgba(255, 255, 255, 0.4);
  line-height: 96px;
}
.shop-total {
  flex: 0 0 210px;
  width: 210px;
  font-size: 28px;
  color: rgba(255, 255, 255, 0.4);
  font-weight: 700;
  line-height: 96px;
  text-align: center;
  background-color: #2b333b;
}
.cart {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  top: -16px;
  left: 24px;
  background-color: #131d27;
}
.cart > div {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background-color: #2b333b;
  margin: 12px auto;
  font-size: 48px;
  color: rgba(255, 255, 255, 0.4);
  text-align: center;
  line-height: 88px;
}
</style>