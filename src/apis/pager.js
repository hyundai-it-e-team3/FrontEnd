import axios from "axios"

const pagerAPI = axios.create({
  baseURL: 'http://localhost:8081'
});

function getProdctList(listType,categoryType,startRow,endRow){
  return pagerAPI.get(`/product/${listType}/${categoryType}/${startRow}/${endRow}`
  )
}

export default{
  getProdctList,
}