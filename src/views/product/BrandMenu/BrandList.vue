<template>
    <v-list>
      <v-list-item v-for="(brand,index) in brandMenuList" v-bind:key="brand.name" nav
        @click="goBrand(brand.brandName,index)">
        <v-list-item-title class="ml-4">{{brand.brandName}}</v-list-item-title>
      </v-list-item>
    </v-list>
</template>

<script>
export default {
  name:"BrandList",
  components: {
  },
  data:()=>({
    brandMenuList:[]
  }),
  methods:{
    goBrand(brandName,index){
      console.log(brandName,index);
      this.$router.push(`/product/brand?brandName=${brandName}&index=${index}`).catch(()=>{});
    }
  },
  beforeMount(){
    this.brandMenuList = this.$store.getters["category/getBrandCategory"];
  }
}
</script>

<style scoped>
</style>