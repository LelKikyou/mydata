<template>
  <div class="recommend">
    <div v-if="sliderData.length" class="slider">
      <mySlide>
        <div v-for="item in sliderData">
          <a :href="item.linkUrl">
            <img :src="item.picUrl">
          </a>
        </div>
      </mySlide>
    </div>
  </div>
</template>
<script>
import getRecommend from "../../api/recommend.js";
import slider from "../../base/swipe/swipe.vue";
export default {
  data() {
    return {
      sliderData: []
    };
  },
  components: {
    "mySlide":slider
  },
  created: function() {
    getRecommend().then(data => {
      console.log(data.data);
      this.sliderData = data.data.slider;
    });
  }
};
</script>
<style scoped>
img{
  width: 100%;
}
</style>