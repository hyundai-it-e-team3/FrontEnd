export default{
  // 모듈의 이름을 루트 하위 스페이스로 설정 
  namespaced: true,
  state:{
    category:[],
    brandCategory:[],
    wishBrand:[],
  },
  getters:{
    getCategory(state,getters,rootState,rootGetters){
      return state.category;
    },
    getBrandCategory(state,getters,rootState,rootGetters){
      return state.brandCategory;
    },
    getWishBrand(state,getters,rootState,rootGetters){
      return state.wishBrand;
    }
  },
  mutations:{
    setCategory(state,payload){
      state.category = payload;
    },
    setBrandCategory(state,payload){
      state.brandCategory = payload;
    },
    setWishBrand(state,payload){
      state.wishBrand = payload;
    },
    addWishBrand(state,payload){
      state.wishBrand.push(payload);
    },
    removeWishBrand(state,payload){
      const idx = state.wishBrand.indexOf(payload);
      state.wishBrand.splice(idx,1);
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