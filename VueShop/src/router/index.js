import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'
import List from '@/components/common/List'
import Buys from '@/components/common/Buys'
import Mymy from '@/components/common/Mymy'
import Search from '@/components/page/Search'
import Login from '@/components/page/login'
import Register from '@/components/page/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/List',
      component: List
    },
    {
      path: '/Buys',
      component: Buys
    },
    {
      path: '/Mymy',
      component: Mymy
    },
    {
      path: '/search',
      component: Search
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/register',
      component:Register
    }
  ]
})
