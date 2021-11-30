import axios from "axios";

const orderAPI = axios.create({
    baseURL: 'http://kosa1.iptime.org:50214'
  });

  // 요청 http에 Authorization 헤더 추가, 값은 JWT로 설정
function addAuthHeader(authToken){
    orderAPI.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
}

function getOrderList(memberId) {
    return orderAPI.get("/order/list", {params:{memberId}});
}

function getOrderDetailList(orderId) {
    return orderAPI.get(`/order/${orderId}/list`)
}

function insertOrder(multipartFormData) {
    return orderAPI.post(
        "/order",multipartFormData);
}

function getOrder(orderId) {
    return orderAPI.get(`/order/${orderId}`);
}


function getCartList(memberId) {
    return orderAPI.get("/cart", {params:{memberId}});
}

function insertCart(multipartFormData) {
    return orderAPI.post(
        "/cart",multipartFormData);
}

function updateCart(multipartFormData) {
    return axios.update("/cart", multipartFormData);
}

function deleteCart(cartno) {
    return orderAPI.delete(`/cart/${cartno}`);
}

export default {
    getOrderList,
    getOrderDetailList,
    insertOrder,
    getOrder,
    getCartList,
    insertCart,
    updateCart,
    deleteCart,
    addAuthHeader
}