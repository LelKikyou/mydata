import Main from '../view/main/main'
import Login from '../view/login/login'
export default [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录页面',
        },
        component:Login
    },
    {
        path: '/home',
        name: 'home',
        component: Main,
        meta: {
            title:"首页"
        }
    }
]
