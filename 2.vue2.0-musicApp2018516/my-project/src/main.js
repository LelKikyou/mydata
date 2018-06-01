// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from "fastclick"
Vue.config.productionTip = false
fastClick.attach(document.body);
/* eslint-disable no-new */
import axios from "axios"
import vueAxios from "vue-axios"
import VueLazyload from 'vue-lazyload'
Vue.use(vueAxios, axios);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: '../static/img/loading.gif',
  attempt: 1
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
