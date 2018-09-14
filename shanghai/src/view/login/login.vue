<template>
    <div class="login">
        <Input v-model="login.name" placeholder="账号" style="width: 300px" />
        <Input v-model="login.paw" placeholder="密码" style="width: 300px" />
        <Button v-on:click="loginTo(login)" type="warning">登录</Button>
        <router-link to="/home">Go to Foo</router-link>
    </div>
</template>

<script>
    export default {
        name: "login",
        data:function () {
            return{
                login:{
                    name:"",
                    paw:""
                }
            }
        },
        methods:{
            loginTo:function () {
                console.log(this.$router)
                // this.$cookie.set('sdcmToken', 'hqy', 1);
                this.$router.push({
                    name: 'home',
                    path: '/home'
                })
            }
        }
    }
</script>

<style scoped>

</style>