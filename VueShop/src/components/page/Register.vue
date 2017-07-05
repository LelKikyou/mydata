<template>
  <div>
    <div class="head">
      <div class="back" @click="goBack()">
        <p>后退</p>
      </div>
      <p class="headLogin">注册</p>
      <div class="headLog">
        <router-link to="/login">登录</router-link>
      </div>
    </div>
    <div class="wap">
      <div class="wap">
        <div class="loginText">
          <input type="text" placeholder="请输入账号" v-model="mes.text">
        </div>
        <div class="loginPassword">
          <input type="password" placeholder="请输入密码" v-model="mes.password">
        </div>
        <div class="loginPassword">
          <input type="password" placeholder="请再次输入密码" v-model="mes.passwordT">
        </div>
        <p class="prompt" v-show="isPrompt">2次输入密码不一致</p>
        <p class="resPrompt" v-show="isRes" v-text="res"></p>
        <div class="loginBtn">
          <button @click="register(mes)">注册</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import jquery from 'jquery'
  export default{
    data(){
      return {
        isPrompt: false,
        isRes: false,
        res: '',
        mes: {}
      }
    },
    methods: {
      goBack(){
        this.$router.go(-1)
      },
      register(mes){
        if (mes.password == mes.passwordT) {
          this.isPrompt = false;
//          delete mes.passwordT;
          mes.status = 'register';
          jquery.get(' http://datainfo.duapp.com/shopdata/userinfo.php', mes, data => {
            if (data == 0) {
              this.$router.go(-1)
              alert('注册成功')
            } else {
              this.res = "用户重名";
              this.isRes = true;
            }
          })
        } else {
          this.isRes = false;
          this.isPrompt = true
        }
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

  .headLog {
    float: left;
    width: 20%;
  }

  .headLog a {
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

  .prompt {
    width: 100%;
    height: 0.7rem;
    font-size: 0.5em;
    color: red;
  }

  .resPrompt {
    width: 100%;
    height: 0.7rem;
    font-size: 0.5em;
    color: red;
  }

  .loginBtn {
    width: 100%;
    height: 1.4rem;
  }

  .loginBtn button {
    width: 2rem;
    height: 1rem;
  }
</style>
