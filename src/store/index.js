import Vue from 'vue'
import Vuex from 'vuex'
import pager from './pager';
import category from './category';



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
  //루트가 아닌 자식 상태를 정의한 모듈을 가져오기
  modules: {
    pager,
    category
  }
  
})
