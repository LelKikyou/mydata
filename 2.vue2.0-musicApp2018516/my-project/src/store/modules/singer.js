export default {
  state: {
    singer: "",//歌手详情
    playing: false,    //播放
    fullScreen: false, //全屏
    playList: [],//播放列表
    mode: 0,
    //播放模式
    /*{
     sequence: 0, //倒序播放
     loop: 1,  //顺序播放
     random: 2 //随机播放
    }*/
    currentIndex: -1 //当前播放
  },
  getters: {
    getSinger(state) {
      return state.singer;
    },
    getPlaying(state) {
      return state.playing;
    },
    getFullScreen(state) {
      return state.fullScreen;
    },
    getPlayList(state) {
      return state.playList;
    },
    getMode(state) {
      return state.mode;
    },
    getCurrentIndex(state) {
      return state.currentIndex;
    },
    getCurrentSong(state) {
      return state.playList[state.currentIndex] || {}
    }
  },
  mutations: {
    setSinger(state, data) {
      state.singer = data;
    },
    setMusic(state, music) {
      state.playing = true;
      state.fullScreen = true;
      state.playList = music.playList;
      state.currentIndex = music.CurrentIndex;
    },
    setFullScreen(state, data) {
      state.fullScreen = data;
    }
  }
}
