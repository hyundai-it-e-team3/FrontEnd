import Vue from 'vue'
import Vuex from 'vuex'

import product from "./product";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: "user1",
    pageFlag:'main'
  },
  getters:{
    getUserId(state) {
      return state.userId;
    },
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
    product
  },
  
})
