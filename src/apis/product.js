import axios from "axios"

function getProdct(productId){
  return axios.get(`/product/${productId}`);
}

export default{
  getProdct,
}