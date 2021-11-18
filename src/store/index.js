import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerFlag:true
  },
  getters:{
    getHeaderFlag(state){
      return state.headerFlag;
    }
  },
  mutations: {
    setHeaderFlag(state,payload){
      state.headerFlag = payload;
    }
  },
  actions: {
  },
  modules: {
  },
  
})
