import Menu from "@/apis/menu";


async function getCategory(){
  return await Menu.getCategory();
}

async function getBrand(){
  return await Menu.getBrand();
}

export default{
  getCategory,
  getBrand
}
