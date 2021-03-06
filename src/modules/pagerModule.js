import PagerAPI from "@/apis/pager";


async function getProductList(listType,brandName,categoryId,startRow,endRow,sortId){
  if(listType=='list'){
    return await PagerAPI.getProdctList(listType,categoryId,startRow,endRow,sortId);
  }else{
    return await PagerAPI.getBrandProductList(listType,brandName,categoryId,startRow,endRow,sortId); 
  }
}

export default{
  getProductList
}