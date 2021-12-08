import axios from "axios";

const orderAPI = axios.create({
    baseURL: 'http://kosa1.iptime.org:50214'
  });

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
 };

  // 요청 http에 Authorization 헤더 추가, 값은 JWT로 설정
function addAuthHeader(authToken){
    orderAPI.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
}

function getOrderList(memberId) {
    return orderAPI.get("/order/list", {params:{memberId}});
}

function getOrderDetailList(orderId) {
    return orderAPI.get(`/order/${orderId}/list`);
}

function insertOrder(order) {
    //TEST 전체 한번에 insert
    orderAPI.post("/order", order);
}

function insertOrderDetail(multipartFormData) {
    return orderAPI.post(
        "/order/detail",multipartFormData);
}
function insertOrderPayment(multipartFormData) {
    return orderAPI.post(
        "/order/payment",multipartFormData);
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

function updateCart(cartId,multipartFormData) {
    return orderAPI.post(`/cart/${cartId}`, multipartFormData);
}

function updateCartAmount(cartId, value) {
    return orderAPI.patch(`/cart/${cartId}`, 
        {amount : value}
    );
}

function deleteCart(cartno) {
    return orderAPI.delete(`/cart/${cartno}`);
}

function getCartInfo(cartId) {
    return orderAPI.get(`/cart/${cartId}`);
}

export default {
    getOrderList,
    getOrderDetailList,
    getOrder,
    getCartList,
    insertCart,
    updateCart,
    deleteCart,
    addAuthHeader,
    insertOrderDetail,
    insertOrderPayment,
    getCartInfo,
    updateCartAmount,
    insertOrder
}