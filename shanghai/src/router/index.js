import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import iView from 'iview'
import vueCookie from "vue-cookie"
Vue.use(vueCookie);
Vue.use(Router);
const router = new Router({
    routes,
    mode: 'history'
});
const LOGIN_NAME = 'login';
router.beforeEach((to, from, next) => {
    let token = Vue.cookie.get('sdcmToken');
    iView.LoadingBar.start();
    if (!token && to.name !== LOGIN_NAME) {
        next({
            path: '/login'
        })
    } else if (!token && to.name === LOGIN_NAME) {
        next()
    } else if (token && to.name === LOGIN_NAME) {
        next({
            path: "/home"
        })
    } else {
        next()
    }
});

router.afterEach(to => {
    iView.LoadingBar.finish();
});

export default router
