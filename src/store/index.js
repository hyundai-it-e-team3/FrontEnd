import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerFlag:1,
    footerFlag:1
  },
  getters:{
    getHeaderFlag(state){
      return state.headerFlag;
    },
    getFooterFlag(state){
      return state.footerFlag;
    }
  },
  mutations: {
    setHeaderFlag(state,payload){
      state.headerFlag = payload;
    },
    setFooterFlag(state,payload){
      state.footerFlag = payload;
    }
  },
  actions: {
  },
  modules: {
  },
  
})
