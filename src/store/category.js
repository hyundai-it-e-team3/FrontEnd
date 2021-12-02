export default{
  // 모듈의 이름을 루트 하위 스페이스로 설정 
  namespaced: true,
  state:{
    category:[],
    brandCategory:[],
    wishBrand:[],
    mainIndex:"",
    middleIndex:"",
    curCategory:null,
    selectedCategory:[]
  },
  getters:{
    getCategory(state,getters,rootState,rootGetters){
      return state.category;
    },
    getSelectedCategory(state,getters,rootState,rootGetters){
      return state.selectedCategory;
    },
    getBrandCategory(state,getters,rootState,rootGetters){
      return state.brandCategory;
    },
    getWishBrand(state,getters,rootState,rootGetters){
      return state.wishBrand;
    },
    getCurCategory(state,getters,rootState,rootGetters){
      return state.curCategory;
    }
  },
  mutations:{
    setCategory(state,payload){
      state.category = payload;
    },
    setBrandCategory(state,payload){
      state.brandCategory = payload;
    },
    setSelectedCategory(state,payload){
      state.selectedCategory = payload;
    },
    setWishBrand(state,payload){
      state.wishBrand = payload;
    },
    setCurCategory(state,payload){
      state.curCategory = payload;
    },
    addWishBrand(state,payload){
      state.wishBrand.push(payload);
    },
    removeWishBrand(state,payload){
      const idx = state.wishBrand.indexOf(payload);
      state.wishBrand.splice(idx,1);
    },
    addSelectedCategory(state,payload){
      state.selectedCategory.push(payload);
    }
    ,
    popSelectedCategory(state,payload){
      state.selectedCategory.pop();
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