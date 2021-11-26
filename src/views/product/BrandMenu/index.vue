<!-- 컴포넌트 UI 정의 -->
<template>
  <v-app>
    <v-list dense nav>
      <div class="d-flex justify-space-around">
        <v-list-item @click="favClick">
          <v-list-item-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>선호 브랜드</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="brandClick">
          <v-list-item-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>브랜드</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
      <fav-brand-list v-if="!favBrandShow"/>
      <brand-list v-if="favBrandShow"/>
    </v-list>
    
  </v-app>
</template>

<script>
import FavBrandList from "./FavBrandList.vue";
import BrandList from "./BrandList.vue";
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름이다.) 이름을 정하지 않으면 파일명으로
  name:"",
  // 추가하고 싶은 컴포넌트를 등록
  components: {
    FavBrandList,
    BrandList
  },
  //컴포넌트 데이터를 정의
  data:()=>({
    favBrandShow: true
  }),
  //컴포넌트 메소드 정의
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
<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>

