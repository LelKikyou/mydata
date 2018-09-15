<template>
    <div class="login">
        <Input v-model="login.name" placeholder="账号" style="width: 300px" />
        <Input v-model="login.paw" placeholder="密码" style="width: 300px" />
        <Button v-on:click="loginTo(login)" type="warning">登录</Button>
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
                this.$cookie.set('sdcmToken', 'hqy', 1);
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