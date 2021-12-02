export default{
  // 모듈의 이름을 루트 하위 스페이스로 설정 
  namespaced: true,
  state:{
    rowCount: 1,
    productList :[],
    categoryId:"null",
    brandName:"null",
    sortId:"null",
    text:"null"
  },
  getters:{
    getRowCount(state,getters,rootState,rootGetters){
      return state.rowCount;
    },
    getProductList(state,getters,rootState,rootGetters){
      return state.productList;
    },
    getCategoryId(state,getters,rootState,rootGetters){
      return state.categoryId
    },
    getBrandName(state,getters,rootState,rootGetters){
      return state.brandName
    },
    getSortId(state,getters,rootState,rootGetters){
      return state.sortId
    },
    getText(state,getters,rootState,rootGetters){
      return state.text
    }
  },
  mutations:{
    plusRowCount(state,payload){
      state.rowCount += payload;
    },
    resetRowCount(state,payload){
      state.rowCount = 1;
    },
    addProductList(state,payload){
      for(let item of payload){
        state.productList.push(item);
      }
    },
    setProductList(state,payload){
      state.productList = payload;
    }
    ,
    resetProductList(state,payload){
      state.productList = [];
    },
    setCategoryId(state,payload){
      state.categoryId = payload
    },
    setBrandName(state,payload){
      state.brandName = payload
    },
    setSortId(state,payload){
      state.sortId = payload;
    },
    setText(state,payload){
      state.text = payload;
    }
  },
  actions:{
    setRowCountByAsync(context,payload){
      new Promise((resolve,reject)=>{
        setTimeout(()=>{
          context.commit("setCount",payload.rowCount);
          resolve(context.state.rowCount);
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