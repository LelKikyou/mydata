export default {
  state:{
    singer:""
  },
  getters:{
    getSinger(state){
      return state.singer;
    }
  },
  mutations:{
    setSinger(state,data){
      state.singer=data;
    }
  }
}
