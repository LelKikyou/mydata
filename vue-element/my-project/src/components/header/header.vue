<template>
  <div class="header">
    <div class="shop-info">
      <div class="avatar">
        <img :src="seller.avatar">
      </div>
      <div class="info">
        <div class="title">
          <span></span>
          <span>
            {{seller.name}}
          </span>
        </div>
        <div class="description">
          {{seller.description}} / {{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="supports">
          <span></span>
          <span>
            {{seller.supports[0].description}}
          </span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" @click="show">
        <span>{{seller.supports.length}}个</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gengduo"></use>
        </svg>
      </div>
    </div>
    <div class="notice" @click="show">
      <div class="title-img"></div>
      <div class="text">
        {{seller.bulletin}}
      </div>
      <div class="icon-title">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gengduo"></use>
        </svg>
      </div>
    </div>
  <div class="background">
    <img :src="seller.avatar" width="100%"  height="100%"/>
  </div>
  <my-detail :seller="seller" :detailShow="detailShow" @changeShow="show"></my-detail>
  </div>
</template>
<script>
import detail from "./detail.vue";
export default {
  components: {
    "my-detail": detail
  },
  props: {
    seller: Object
  },
  data() {
    return {
      detailShow: false
    };
  },
  methods: {
    show: function() {
      this.detailShow = !this.detailShow;
    }
  }
};
</script>
<style scoped>
.background {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  filter: blur(10px);
}
.header {
  position: relative;
  background-color: rgba(7, 17, 27, 0.5);
  overflow: hidden;
}
.shop-info {
  position: relative;
  padding: 48px 24px 26px 48px;
  font-size: 0;
}
.avatar {
  display: inline-block;
  vertical-align: top;
}
.avatar img {
  border-radius: 4px;
  width: 128px;
  height: 128px;
}
.info {
  display: inline-block;
  padding-left: 32px;
}
.title span:nth-child(1) {
  display: inline-block;
  width: 60px;
  height: 36px;
  background: url("/static/head-img/brand@2x.png") no-repeat;
  background-size: 60px 36px;
  vertical-align: top;
}
.title span:nth-child(2) {
  display: inline-block;
  padding-left: 12px;
  font-size: 32px;
  color: rgb(255, 255, 255);
  font-weight: bold;
  line-height: 36px;
}
.description {
  margin-top: 16px;
  font-size: 24px;
  color: rgb(255, 255, 255);
  font-weight: 200;
  line-height: 24px;
}
.supports {
  margin-top: 20px;
}
.supports span:nth-child(1) {
  display: inline-block;
  width: 32px;
  height: 32px;
  background: url("/static/head-img/decrease_2@2x.png") no-repeat;
  background-size: 32px 32px;
  vertical-align: top;
}
.supports span:nth-child(2) {
  padding-left: 8px;
  font-size: 20px;
  color: rgb(255, 255, 255);
  font-weight: 200;
  line-height: 32px;
}
.support-count {
  position: absolute;
  right: 24px;
  bottom: 36px;
  font-size: 20px;
  color: rgb(255, 255, 255);
  font-weight: 200;
  line-height: 24px;
  padding: 14px 16px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 14px;
}
.notice {
  position: relative;
  background-color: rgba(7, 17, 27, 0.2);
  height: 56px;
  padding: 0 40px 0 76px;
}

.title-img {
  position: absolute;
  top: 50%;
  left: 24px;
  transform: translateY(-50%);
  vertical-align: middle;
  background: url("/static/head-img/bulletin@2x.png") no-repeat;
  background-size: 44px 24px;
  width: 44px;
  height: 24px;
}
.text {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 20px;
  color: rgb(255, 255, 255);
  font-weight: 200;
  line-height: 56px;
}
.icon-title {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 24px;
  font-size: 20px;
  color: rgb(255, 255, 255);
  font-weight: 200;
}
</style>