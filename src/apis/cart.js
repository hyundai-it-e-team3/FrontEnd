import axios from "axios";

const cartAPI = axios.create({
    baseURL: 'http://kosa1.iptime.org:50214'
  });

function getCartList() {
    return axios.get("/cart");
}

function insertCart(multipartFormData) {
    return axios.post(
        "/cart",multipartFormData);
}

function updateCart(multipartFormData) {
    return axios.update("/cart", multipartFormData);
}

function deleteCart(cartno) {
    return axios.delete(`/cart/${cartno}`);
}

export default {
    getCartList,
    insertCart,
    updateCart,
    deleteCart
}