import axios from "axios"

const menuAPI = axios.create({
  baseURL: 'http://kosa1.iptime.org:50303/product-api'
});

function getCategory(){
  return menuAPI.get("/category")
}

function getBrand(){
  return menuAPI.get("/category/brand")
}

export default{
  getCategory,
  getBrand
}