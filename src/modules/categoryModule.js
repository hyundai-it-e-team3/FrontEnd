import Menu from "@/apis/menu";
import Member from "@/apis/member";

async function getCategory(){
  return await Menu.getCategory();
}

async function getBrand(){
  return await Menu.getBrand();
}

async function getWishBrandList(memberId){
  return await Member.getWishBrandList(memberId);
}

export default{
  getCategory,
  getBrand,
  getWishBrandList
}
