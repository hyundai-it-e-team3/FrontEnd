import cartAxios from "axios";

function getCartList() {
    return cartAxios.get("/cart");
}

function createCart(product) {
    return cartAxios.post(
        "/cart",
            {
                "mid" : product.id,
                "mname" : product.name,
                "mpassword" : product.password,
                "mrole" : product.role,
                "memail" : product.email
            }
        );
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