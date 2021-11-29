export default{
  // 모듈의 이름을 루트 하위 스페이스로 설정 
  namespaced: true,
  state:{
    category:[],
    brandCategory:[]
  },
  getters:{
    getCategory(state,getters,rootState,rootGetters){
      return state.category;
    },
    getBrandCategory(state,getters,rootState,rootGetters){
      return state.brandCategory;
    }
  },
  mutations:{
    setCategory(state,payload){
      state.category = payload;
    },
    setBrandCategory(state,payload){
      state.brandCategory = payload;
    }
  },
  actions:{
    setCategoryByAsync(context,payload){
      new Promise((resolve,reject)=>{
        setTimeout(()=>{
          context.commit("setCategory",payload.category);
          resolve(context.state.category);
        },payload.duration)
      })
      .then((data)=>{
        console.log(data);
      })
      .catch((error)=>{
        console.log(error);
      });
    }
  }
}