import cartAxios from "axios";

function getCartList() {
    return cartAxios.get("/cart");
}

function createCart() {
    return cartAxios.post("/cart");
}

function updateCart() {
    return cartAxios.update("/cart");
}

function deleteCart() {
    return cartAxios.delete("/cart");
}

export default {
    getCartList,
    createCart,
    updateCart,
    deleteCart
}