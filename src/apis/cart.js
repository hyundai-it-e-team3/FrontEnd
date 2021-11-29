import axios from "axios";

const cartAPI = axios.create({
    baseURL: 'http://kosa1.iptime.org:50214'
  });

function getCartList(memberId) {
    return cartAPI.get("/cart", {params:{memberId}});
}

function insertCart(multipartFormData) {
    return cartAPI.post(
        "/cart",multipartFormData);
}

function updateCart(multipartFormData) {
    return axios.update("/cart", multipartFormData);
}

function deleteCart(cartno) {
    return cartAPI.delete(`/cart/${cartno}`);
}

export default {
    getCartList,
    insertCart,
    updateCart,
    deleteCart
}