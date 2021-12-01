export default{
    //모듈의 이름을 루트 하위 네임스페이스로 설정
    namespaced: true,
    //상태 정의
    state: {
        product : {
            productDetailId: "Store_null",
            psize : "Store_null",
            amount : "0",
            stock : "0",
            category : "Store_null",
            productName : "Store_null",
            price : 0
        },
        cartIdList: null
    },
    //상태값을 읽는 메소드를 정의 (=getter)
    getters: {
        //root 상태값에 접근하려면 rootState 사용
        getProduct(state, getters, rootState, rootGetters) {
            return state.product;
        },
        getCartIdList(state, getters, rootState, rootGetters) {
            return state.cartIdList;
        },
    },
    //상태값을 변경하는 메소드 정의, 동기 방식 처리 (=setter)
    mutations: {
        //context : state, rootState, getters, rootGetters, commit, dispatch
        setProduct(state, payload) {
            state.product = payload;
            console.log(state.product);
        },
        setCartIdList(state, payload) {
            state.cartIdList = payload;
            console.log(state.cartIdList);
        }
    },
}