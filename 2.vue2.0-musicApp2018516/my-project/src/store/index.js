import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);
import singer from "./modules/singer"
export default new Vuex.Store({
  modules:{
    singer:singer
  }
})
