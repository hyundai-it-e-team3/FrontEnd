import axios from "axios"

const menuAPI = axios.create({
  baseURL: 'http://localhost:8081'
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