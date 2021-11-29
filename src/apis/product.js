import axios from "axios"

const productAPI = axios.create({
  baseURL: 'http://localhost:8081'
});

function getProdct(productId){
  return productAPI.get(`/product/${productId}`);
}

export default{
  getProdct,
}