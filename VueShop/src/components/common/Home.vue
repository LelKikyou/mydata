<template>
  <div>
    <div class="head">哎呦喂</div>
    <div class="search">
      <input type="text" v-model="val">
      <router-link to="/search">
        <button></button>
      </router-link>
    </div>
    <div class="lunbo">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img :src="carousel[0]" alt="">
          </div>
          <div class="swiper-slide">
            <img :src="carousel[1]" alt="">
          </div>
          <div class="swiper-slide">
            <img :src="carousel[2]" alt="">
          </div>
          <div class="swiper-slide">
            <img :src="carousel[3]" alt="">
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from '../../assets/swiper/js/swiper'
  import jquery from 'jquery'
  export default {
    data () {
      return {
        val: '',
        carousel: []
      }
    },
    mounted: function () {
      let swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 2000,
        loop: true
      });
    },
    created: function () {
      jquery.get('http://datainfo.duapp.com/shopdata/getBanner.php', data => {
        for (let i = 0; i < data.length; i++) {
          this.carousel.push(JSON.parse(data[i].goodsBenUrl)[0])
        }
      }, 'jsonp')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/swiper/css/swiper.css";

  .head {
    width: 100%;
    height: 1.17rem;
    background: #e4366b;
    font-size: 0.6em;
    color: white;
    line-height: 1.17rem;
  }

  .search {
    width: 100%;
    height: 1rem;
    position: relative;
  }

  .search input {
    padding: 0.2rem;
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 1rem;
    border: 1px solid #e4366b;
    border-radius: 3%;
  }

  .search button {
    position: absolute;
    top: 0;
    right: 0;
    width: 1rem;
    height: 1rem;
    background: url("../../assets/search.png") no-repeat center;
    border: none;
  }

  .lunbo {
    width: 100%;
    height: 200px;
  }

  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
