import Vue from 'vue'
import Vuex from 'vuex'
import pager from './pager';
import category from './category';



import product from "./product";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    memberId: "user1",
    pageFlag:'main'
  },
  getters:{
    getMemberId(state) {
      return state.memberId;
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
  //루트가 아닌 자식 상태를 정의한 모듈을 가져오기
  modules: {
    pager,
    category
  }
  
})
