import axios from "axios";

const orderAPI = axios.create({
    baseURL: 'http://kosa1.iptime.org:50214'
  });

function getOrderList(memberId) {
    return axios.get("/order/list", {params:{memberId}});
}

function getOrderDetailList(orderId) {
    return axios.get(`/order/${orderId}/list`)
}

function insertOrder(multipartFormData) {
    return axios.post(
        "/order",multipartFormData);
}

function getOrder(orderId) {
    return axios.get(`/order/${orderId}`);
}

export default {
    getOrderList,
    getOrderDetailList,
    insertOrder,
    getOrder
}