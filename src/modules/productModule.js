import productAPI from "@/apis/product";


async function getProduct(productId){
  return await productAPI.getProdct(productId);
}

async function getProductWishList(idStr){
  return await productAPI.getProductWishList(idStr);
}

async function getProductListText(text,startRow,rowCount,sortId){
  return await productAPI.getProductListText(text,startRow,rowCount,sortId);
}

export default{
  getProduct,
  getProductWishList,
  getProductListText
}
