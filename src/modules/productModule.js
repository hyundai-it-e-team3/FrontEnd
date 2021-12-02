import productAPI from "@/apis/product";


async function getProduct(productId){
  return await productAPI.getProdct(productId);
}

async function getProductWishList(idStr){
  return await productAPI.getProductWishList(idStr);
}

export default{
  getProduct,
  getProductWishList
}
