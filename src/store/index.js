import Vue from 'vue'
import Vuex from 'vuex'
import pager from './pager';
import category from './category';
import axiosConfig from '@/apis/axiosConfig';
import orderAPI from '@/apis/order';
import memberAPI from '@/apis/member';
import productAPI from '@/apis/product';
import product from "./product";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    memberId: "",
    authToken: "",
    pageFlag:'main'
  },
  getters:{
    getMemberId(state) {
      return state.memberId;
    },
    getAuthToken(state) {
      return state.authToken;
    },
    getPageFlag(state){
      return state.pageFlag;
    }
  },
  mutations: {
    setMemberId(state, payload) {
      state.memberId = payload;
    },
    setAuthToken(state, payload) {
      state.authToken = payload;
    },
    setPageFlag(state, payload){
      state.pageFlag = payload
    }
  },
  actions: {
    setMemberIdbyAsync(context, payload) {
      new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit("setMemberId", payload.memberId);
          resolve(context.state.memberId);
        }, payload.duration);
      }).then((data) =>{
        console.log("memberId 상태 변경 성공: " + data);
      }).catch((err) => {
        console.log("memberId 상태 변경 실패");
      });
    },
    saveAuth(context, payload) {
      context.commit("setMemberId", payload.memberId);
      context.commit("setAuthToken", payload.authToken);

      sessionStorage.setItem("memberId", payload.memberId);
      sessionStorage.setItem("authToken", payload.authToken);

      axiosConfig.addAuthHeader(payload.authToken);
      orderAPI.addAuthHeader(payload.authToken);
      productAPI.addAuthHeader(payload.authToken);
      memberAPI.addAuthHeader(payload.authToken);
      
    },
    loadAuth(context, payload) {
      context.commit("setMemberId", sessionStorage.getItem("memberId") || "");
      context.commit("setAuthToken", sessionStorage.getItem("authToken") || "");
      
      if(context.state.authToken !== "") {
        axiosConfig.addAuthHeader(context.state.authToken);
      }
    },
    deleteAuth(context, payload) {
      context.commit("setMemberId", "");
      context.commit("setAuthToken", "");

      sessionStorage.removeItem("memberId");
      sessionStorage.removeItem("authToken");

      axiosConfig.removeAuthHeader();
    }
  },
  //루트가 아닌 자식 상태를 정의한 모듈을 가져오기
  modules: {
    pager,
    category,
    product
  }
  
})
