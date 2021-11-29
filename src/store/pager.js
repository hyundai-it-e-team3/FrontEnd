export default{
  // 모듈의 이름을 루트 하위 스페이스로 설정 
  namespaced: true,
  state:{
    rowCount: 1,
    productList :[]
  },
  getters:{
    getRowCount(state,getters,rootState,rootGetters){
      return state.rowCount;
    },
    getProductList(state,getters,rootState,rootGetters){
      return state.productList;
    },
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
        this.productList.push(item);
      }
    }
    ,
    resetProductList(state,payload){
      this.productList = [];
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