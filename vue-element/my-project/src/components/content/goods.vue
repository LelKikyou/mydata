<template>
  <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
        <div>
            <div @click="selectMenu(index)" v-for="(data,index) in goods" class="good" :class="{active:currentIndex===index}">
               <span class="good-data">{{data.name}}</span>
            </div>
        </div>
      </div>
      <div class="menu-goods" ref="goodsWrapper">
        <div>
          <div class="goods-item food-list-hook" v-for="data in goods">
            <div class="good-name">
              {{data.name}}
            </div>
            <div class="good-content" v-for="(foodData,index) in data.foods">
              <div class="good-img">
                <img :src="foodData.icon">
              </div>
              <div class="good-details">
                <p class="details-1">
                  {{foodData.name}}
                </p>
                <p class="details-2">
                  {{foodData.description}}
                </p>
                <div class="details-3">
                    <span>
                      月销{{seller.sellCount}}份
                    </span>
                      <span>
                      好评率{{foodData.rating}}%
                    </span>
                </div>
                <div class="details-4">
                  <span> ¥{{foodData.price}}</span>
                  <span v-show="foodData.oldPrice"> ¥{{foodData.oldPrice}}</span>
                  </div>
              </div>
              <div class="cartconcontrol-food">
                <my-cartConcontrol :index="index" :food="foodData"></my-cartConcontrol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <my-shopCart :selectFoods="selectFood" :seller="seller"></my-shopCart>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import shopCart from "../shopCart/shopCart.vue";
import CartConcontrol from "../cartconcontrol/cartconcontrol";
export default {
  components: {
    "my-shopCart": shopCart,
    "my-cartConcontrol": CartConcontrol
  },
  data() {
    return {
      goods: [],
      listHeight: [],
      scrolly: 0
    };
  },
  props: {
    seller: Object
  },
  created() {
    this.axios.get("/api/goods").then(response => {
      this.goods = response.data.data;
      this.$nextTick(() => {
        this._initScroll();
      });
      this.$nextTick(() => {
        this._calculateHeight();
      });
    });
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height = this.listHeight[i];
        let heightNext = this.listHeight[i + 1];
        if (
          heightNext &&
          (this.scrolly >= height && this.scrolly < heightNext)
        ) {
          return i + 1;
        }
      }
      return 0;
    },
    selectFood() {
      let selfoods = [];
      if (this.goods.length > 0) {
        this.goods.forEach(good => {
          good["foods"].forEach(item => {
            selfoods.push(item);
          });
        });
      }
      return selfoods;
    }
  },
  methods: {
    _initScroll: function() {
      this.meunScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      });
      this.goodsScroll = new BScroll(this.$refs.goodsWrapper, {
        probeType: 3,
        click: true
      });
      this.goodsScroll.on("scroll", pos => {
        this.scrolly = Math.abs(Math.round(pos.y));
      });
    },
    _calculateHeight: function() {
      let height = 0;
      let foodList = this.$refs.goodsWrapper.getElementsByClassName(
        "food-list-hook"
      );
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
    },
    selectMenu: function(index) {
      let foodList = this.$refs.goodsWrapper.getElementsByClassName(
        "food-list-hook"
      );
      let el = foodList[index];
      this.goodsScroll.scrollToElement(el, 300);
    }
  }
};
</script>
<style scoped>
.cartconcontrol-food {
  position: absolute;
  bottom: 24px;
  right: 0;
}
.goods {
  position: absolute;
  top: 342px;
  display: flex;
  bottom: 96px;
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
  color: rgb(77, 85, 93);
}
.good.active {
  margin-top: -2px;
  background-color: #fff;
  font-weight: 700;
  color: #000;
}
.good.active::after {
  display: none;
}
.good::after {
  content: "";
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  width: 112px;
  border-top: 2px solid rgba(7, 17, 27, 0.1);
}
.good:last-child::after {
  display: none;
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
.good-name {
  padding-left: 28px;
  width: 100%;
  height: 52px;
  border-left: 2px solid #d9dde1;
  font-size: 24px;
  color: rgb(147, 153, 159);
  line-height: 52px;
  background-color: #f3f5f7;
}
.good-content {
  display: flex;
  margin: 36px 36px 0 36px;
  overflow: hidden;
  position: relative;
}
.good-content:after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  border-top: 2px solid rgba(7, 17, 27, 0.1);
}
.good-content:last-child::after {
  display: none;
}
.good-img {
  flex: 0 114px;
}
.good-img img {
  width: 114px;
  height: 114px;
}
.good-details {
  flex: 1;
  padding: 4px 0 36px 20px;
}
.details-1 {
  font-size: 28px;
  color: rgb(7, 17, 27);
  line-height: 28px;
}
.details-2 {
  padding-top: 16px;
  font-size: 20px;
  color: rgb(147, 153, 159);
  line-height: 20px;
}
.details-3 {
  padding-top: 16px;
  font-size: 20px;
  color: rgb(147, 153, 159);
  line-height: 20px;
}
.details-3 span:nth-child(2) {
  padding-left: 24px;
}
.details-4 {
  font-size: 0;
  padding-top: 16px;
}
.details-4 span:nth-child(1) {
  font-size: 28px;
  color: rgb(240, 20, 20);
  font-weight: 700;
  line-height: 48px;
}
.details-4 span:nth-child(2) {
  padding-left: 16px;
  font-size: 20px;
  color: rgb(147, 153, 159);
  font-weight: 700;
  line-height: 48px;
  text-decoration: line-through;
}
</style>