<template>
    <v-list>
      <v-list-item v-for="(item, index) in wishList"
            :key="index" @click="goBrand(item.name,item.index)">
        <v-list-item-title class="ml-4">{{item.name}}</v-list-item-title>
      </v-list-item>
    </v-list>
</template>

<script>
export default {
  name:"FavBrandList",
  components: {
    
  },
  data:()=>({
    wishList:[]
  }),
  methods:{
    goBrand(brandName,index){
      this.$router.push(`/product/brand?brandName=${brandName}&index=${index}`).catch(()=>{});
    }
  },
  beforeMount(){
    let tempBrandList = this.$store.getters["category/getBrandCategory"];
    let myWishList = this.$store.getters["category/getWishBrand"];
    console.log(myWishList);
    console.log(tempBrandList);
    for(let i = 0; i < tempBrandList.length; i++){
      if(myWishList.includes(tempBrandList[i].brandName)){
        this.wishList.push({'name':tempBrandList[i].brandName,'index':i});
      }
    }
  }
}
</script>

<style scoped>
</style>