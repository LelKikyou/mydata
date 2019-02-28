import Vue from 'vue'
import App from './App.vue'
import cj from "./cj"

Vue.config.productionTip = false

Vue.use(cj);
Vue.directive('demo', {
    bind: function (el) {
        el.innerHTML = "哈哈哈"
    }
});
new Vue({
    render: h => h(App),
}).$mount('#app')
