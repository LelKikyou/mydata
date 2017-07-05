<template>
  <div>
    <div class="head">个人中心</div>
    <div>
      <div class="userImg">
        <img src="http://datainfo.duapp.com/shopdata/userimgs/userimg.jpg" alt="user_img">
      </div>
      <div class="userId">
        <h2 v-text="userId"></h2>
      </div>
      <div class="userSign">
        <router-link v-if="isLogin" to="/login" @click.native="clearLocal()">退出</router-link>
        <router-link v-else to="/login" @click.native="clearLocal()">登录</router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import jquery from 'jquery'
  export default {
    data () {
      return {
        userId: '',
        isLogin: false
      }
    },
    methods: {
      clearLocal(){
        localStorage.removeItem('userId');
      }
    },
    mounted: function () {
      let userId = localStorage.getItem('userId');
      if (userId) {
        this.userId = userId
        this.isLogin = true
      } else {
        this.userId = '未登录';
      }
    }
  }
</script>
<style>
  .head {
    width: 100%;
    height: 1.17rem;
    background: #e4366b;
    font-size: 0.6em;
    color: white;
    line-height: 1.17rem;
  }

  .userImg {
    width: 100%;
    height: 6rem;
  }

  .userImg img {
    margin-top: 0.5rem;
    height: 5rem;
  }

  .userId {
    width: 100%;
    height: 2rem;
    line-height: 2rem;
  }

  .userId h2 {
    color: red;
    font-size: 1em;
  }

  .userSign {
    width: 100%;
    height: 2rem;
  }
</style>
