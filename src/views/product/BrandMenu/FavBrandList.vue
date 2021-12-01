<!-- 컴포넌트 UI 정의 -->
<template>
    <v-list dense nav>
      <v-list-item   v-for="(item, index) in wishList"
            :key="index" to="/product/brand">
        <v-list-item-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{item.name}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
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
    wishList:[]
  }),
  //컴포넌트 메소드 정의
  methods:{
  },
  beforeMount(){
    let tempBrandList = this.$store.getters["category/getBrandCategory"];
    let myWishList = this.$store.getters["category/getWishBrand"];
    for(let i = 0; i < tempBrandList.length; i++){
      if(myWishList.includes(tempBrandList[i].name)){
        this.wishList.push({'name':tempBrandList[i].name,'index':i});
      }
    }
  }
}
</script>
<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>