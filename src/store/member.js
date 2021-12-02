export default{
    //모듈의 이름을 루트 하위 네임스페이스로 설정
    namespaced: true,
    //상태 정의
    state: {
        wishList:[],
        wishId:[],
    },
    //상태값을 읽는 메소드를 정의 (=getter)
    getters: {
        //root 상태값에 접근하려면 rootState 사용
        getWishList(state, getters, rootState, rootGetters) {
            return state.wishList;
        },
        getWishId(state, getters, rootState, rootGetters){
            return state.wishId;
        }
    },
    //상태값을 변경하는 메소드 정의, 동기 방식 처리 (=setter)
    mutations: {
        //context : state, rootState, getters, rootGetters, commit, dispatch
        setWishList(state, payload) {
            state.wishList = payload;
            console.log(state.wishList);
        },
        addWishList(state,payload){
            state.wishList.push(payload);
        },
        removeWishList(state,payload){
            const idx = state.wishList.indexOf(payload);
            console.log(idx);
            state.wishList.splice(idx,1);
        }
    }
}