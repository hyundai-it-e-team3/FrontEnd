import axios from "axios"

const productAPI = axios.create({
  baseURL: 'http://kosa1.iptime.org:50203'
});

function getProdct(productId){
  return productAPI.get(`/product/${productId}`);
}

function getCartProduct(productDetailId){
  let productId = productDetailId.substr(0,productDetailId.indexOf("_"));
  return productAPI.get(`/product/${productId}`);
}

export default{
  getProdct,
  getCartProduct
}