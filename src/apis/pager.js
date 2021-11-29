import axios from "axios"

const pagerAPI = axios.create({
  baseURL: 'http://kosa1.iptime.org:50203'
});

function getProdctList(listType,categoryType,startRow,endRow,sortId){
  return pagerAPI.get(`/product/${listType}/${categoryType}/${startRow}/${endRow}/${sortId}`
  )
}

export default{
  getProdctList,
}