import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageFlag:'main'
  },
  getters:{
    getPageFlag(state){
      return state.pageFlag;
    }
  },
  mutations: {
    setPageFlag(state,payload){
      state.pageFlag = payload
    }
  },
  actions: {
  },
  modules: {
  },
  
})
