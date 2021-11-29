import axios from "axios"

const productAPI = axios.create({
  baseURL: 'http://kosa1.iptime.org:50203'
});

function getProdct(productId){
  return productAPI.get(`/product/${productId}`);
}

export default{
  getProdct,
}