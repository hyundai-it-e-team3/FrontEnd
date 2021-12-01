import productAPI from "@/apis/product";


async function getProduct(productId){
  return await productAPI.getProdct(productId);
}

export default{
  getProduct
}
