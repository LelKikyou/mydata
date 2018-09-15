import Home from '../view/home/home'
import Login from '../view/login/login'
import Shzxjzpt from '../view/home/shzxjzpt/shzxjzpt'
import Znss from '../view/home/znss/znss'
import b1 from '../view/home/b1/b1'
import b2 from '../view/home/b2/b2'
import Sjgl from '../view/home/shzxjzpt/sjgl/sjgl'
import Glfx from '../view/home/shzxjzpt/glfx/glfx'
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
        component: Login
    },
    {
        path: '/home',
        name: 'home',
        redirect: '/home/shzxjzpt',
        component: Home,
        meta: {
            title: "首页"
        },
        children: [
            {
                path: '/home/shzxjzpt',
                name: 'shzxjzpt',
                component: Shzxjzpt,
                meta: {
                    title: "上海执行矫治平台"
                },
                children: [
                    {
                        path: '/home/shzxjzpt/sjgl',
                        name: 'sjgl',
                        component: Sjgl,
                        meta: {
                            title: "数据概览"
                        }
                    },
                    {
                        path: '/home/shzxjzpt/glfx',
                        name: 'glfx',
                        component: Glfx,
                        meta: {
                            title: "关联分析"
                        }
                    }
                ]
            }, {
                path: '/home/znss',
                name: 'znss',
                component: Znss,
                meta: {
                    title: "智能搜索"
                }
            }, {
                path: '/home/b1',
                name: 'b1',
                component: b1,
                meta: {
                    title: "标题1"
                }
            },
            {
                path: '/home/b2',
                name: 'b2',
                component: b2,
                meta: {
                    title: "标题2"
                }
            }
        ]
    }
]
