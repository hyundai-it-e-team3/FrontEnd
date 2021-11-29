import axios from "axios"

const pagerAPI = axios.create({
  baseURL: 'http://localhost:8081'
});

function getProdctList(listType,categoryType,startRow,endRow,sortId){
  return pagerAPI.get(`/product/${listType}/${categoryType}/${startRow}/${endRow}/${sortId}`
  )
}

export default{
  getProdctList,
}