import axios from "axios"

function getProdctList(listType,categoryType,startRow,endRow){
  return axios.get(`/product/${listType}/${categoryType}/${startRow}/${endRow}`
  )
}

export default{
  getProdctList,
}