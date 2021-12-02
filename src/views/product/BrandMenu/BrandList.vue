<!-- 컴포넌트 UI 정의 -->
<template>
  <v-app>
    <v-list  dense nav>
      <v-list-item v-for="(brand,index) in brandMenuList" v-bind:key="brand.name" @click="goBrand(brand.brandName,index)">
        <v-list-item-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{brand.brandName}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-app>
</template>

<script>
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름이다.) 이름을 정하지 않으면 파일명으로
  name:"",
  // 추가하고 싶은 컴포넌트를 등록
  components: {
    
  },
  //컴포넌트 데이터를 정의
  data:()=>({
    brandMenuList:[]
  }),
  //컴포넌트 메소드 정의
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
<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>