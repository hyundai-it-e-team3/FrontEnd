import Pager from "@/apis/pager";


async function getProductList(listType,brandName,categoryId,startRow,endRow,sortId){
  if(listType=='list'){
    return await Pager.getProdctList(listType,categoryId,startRow,endRow,sortId);
  }else{
    return await Pager.getBrandProductList(listType,brandName,categoryId,startRow,endRow,sortId); 
  }
}

export default{
  getProductList
}