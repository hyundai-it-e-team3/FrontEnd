<!-- 컴포넌트 UI 정의 -->
<template>
    <v-list>
      <div class="d-flex">
        <v-list-item @click="favClick">
          <v-list-item-title class="d-flex justify-center">선호 브랜드</v-list-item-title>
        </v-list-item>

        <v-list-item @click="brandClick">
          <v-list-item-title class="d-flex justify-center">브랜드</v-list-item-title>
        </v-list-item>
      </div>
      
      <fav-brand-list v-if="favBrandShow"/>
      <brand-list v-if="!favBrandShow"/>
    </v-list>
</template>

<script>
import FavBrandList from "./FavBrandList.vue";
import BrandList from "./BrandList.vue";

export default {
  name:"BrandMenu",
  components: {
    FavBrandList,
    BrandList
  },
  data:()=>({
    favBrandShow: true
  }),
  methods:{
    backUrl(){
      this.$router.go(-1);
    },
    favClick(){
      this.favBrandShow=true;
    },
    brandClick(){
      this.favBrandShow=false;
    },

  },
}
</script>

<style scoped>
</style>

