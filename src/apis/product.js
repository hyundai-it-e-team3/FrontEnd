import axios from "axios"

const productAPI = axios.create({
  baseURL: 'http://kosa1.iptime.org:50203'
});

function addAuthHeader(authToken){
  productAPI.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
}

function getProdct(productId){
  return productAPI.get(`/product/${productId}`);
}

function getCartProduct(productDetailId){
  let productId = productDetailId.substr(0,productDetailId.indexOf("_"));
  return productAPI.get(`/product/${productId}`);
}

function getproductDetailPrice(productDetailId){
  return productAPI.get(`/productDetail/price/${productDetailId}`);
}

function getProductWishList(idStr){
  return productAPI.get(`/product/list/${idStr}`);
}

function getProductListText(text,startRow,rowCount,sortId){
  return productAPI.get(`/product/list/text/${text}/${startRow}/${rowCount}/${sortId}`);
}

function minusStock(amount,productDetailId,psize){
  return productAPI.post("/stock/minus",{
    amount,
    productDetailId,
    psize
  })
}

function plusStock(amount,productDetailId,psize){
  return productAPI.post("/stock/plus",{
    amount,
    productDetailId,
    psize
  })
}

export default{
  getProdct,
  getCartProduct,
  addAuthHeader,
  getproductDetailPrice,
  getProductWishList,
  getProductListText,
  minusStock,
  plusStock
}