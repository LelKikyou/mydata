<template>
  <div class="detail" v-show="detailShow">
    <div class="detail-wrapper">
      <div class="detail-head">
        <p>
         {{ seller.name}}
        </p>
      </div>
      <div class="detail-supports">

      </div>
      <div class="detail-bulletin">

      </div>
    </div>
    <div class="detail-close" @click="show">
     ✖
    </div>
  </div>
</template>
<script>
export default {
  props: {
    detailShow: Boolean,
    seller:Object
  },
  data() {
    return {};
  },
  methods: {
    show: function() {
      this.$emit("changeShow");
    }
  }
};
</script>
<style scoped>
.detail {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(7, 17, 27, 0.8);
  z-index: 100;
}
.detail-wrapper {
  position: absolute;
  overflow: auto;
  top: 0;
  bottom: 128px;
  width: 100%;
  color: white;
  line-height: 200px;
}
.detail-close {
  width: 64px;
  height: 64px;
  position: fixed;
  font-size: 64px;
  line-height: 64px;
  bottom: 64px;
  left: 50%;
  text-align: center;
  margin-left: -32px;
  color: rgba(255, 255, 255, 0.5);
}
.detail-head{
  margin-top: 128px;
  width: 100%;
}
.detail-head p{
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  color: rgb(255, 255, 255);
  line-height: 32px;
}
</style>