<template>
  <div>
    <div class="head">
      <div class="back" @click="goBack()">
        <p>后退</p>
      </div>
      <p class="headLogin">登录</p>
      <div class="headReg">
        <router-link to="/register">注册</router-link>
      </div>
    </div>
    <div class="wap">
      <div class="loginText">
        <input type="text" placeholder="请输入账号" v-model="mes.userID">
      </div>
      <div class="loginPassword">
        <input type="password" placeholder="请输入密码" v-model="mes.password">
      </div>
      <p class="prompt" v-show="isPrompt" v-text="prompt"></p>
      <div class="remPassword">
        <input type="checkbox"><span>记住密码</span>
      </div>
      <div class="loginBtn">
        <button @click="loginBtn(mes)">登录</button>
      </div>
    </div>
  </div>
</template>
<script>
  import jquery from 'jquery'
  export default{
    data(){
      return {
        mes: {},
        isPrompt: false,
        prompt: ''
      }
    },
    methods: {
      goBack(){
        this.$router.go(-1)
      },
      loginBtn(mes){
        mes.status = 'login';
        jquery.get('http://datainfo.duapp.com/shopdata/userinfo.php', mes, data => {
          if (data == 0) {
            this.prompt = '用户名不存在'
            this.isPrompt = true
          } else if (data == 2) {
            this.prompt = '密码错误'
            this.isPrompt = true
          } else {
            let userId = JSON.parse(data).code
            userId ? localStorage.setItem('userId', userId) : localStorage.setItem('userId', '');
            this.$router.push('/Mymy')
            alert('登录成功')
          }
        })
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

  .back {
    float: left;
    width: 20%;
  }

  .back p {
    font-size: 1em;
  }

  .headLogin {
    float: left;
    width: 60%;
    font-size: 1em;
  }

  .headReg {
    float: left;
    width: 20%;
  }

  .headReg a {
    color: white;
    font-size: 1em;
  }

  .wap {
    overflow: hidden;
    width: 100%;
    height: 10rem;
    background-color: #ececec;
    border-radius: 10%;
  }

  .loginText {
    margin-top: 0.5rem;
    width: 100%;
    height: 1.5rem;
  }

  .loginText input {
    padding: 0.2rem;
    display: block;
    margin: 0 auto;
    width: 70%;
    height: 1rem;
    border: none;
  }

  .prompt {
    width: 100%;
    height: 0.7rem;
    font-size: 0.5em;
    color: red;
  }

  .loginPassword {
    margin-top: 0.5rem;
    width: 100%;
    height: 1.5rem;
  }

  .loginPassword input {
    padding: 0.2rem;
    display: block;
    margin: 0 auto;
    width: 70%;
    height: 1rem;
    border: none;
  }

  .remPassword {
    margin-top: 0.2rem;
    width: 100%;
    height: 1rem;
  }

  .remPassword span {
    font-size: 0.5rem;
  }

  .loginBtn {
    margin-top: 0.5rem;
    width: 100%;
    height: 1.5rem;
  }

  .loginBtn button {
    width: 2rem;
    height: 1rem;
  }
</style>
