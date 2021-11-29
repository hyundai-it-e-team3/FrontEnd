import axios from "axios";

const orderAPI = axios.create({
    baseURL: 'http://kosa1.iptime.org:50214'
  });

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

export default {
    getOrderList,
    getOrderDetailList,
    insertOrder,
    getOrder
}