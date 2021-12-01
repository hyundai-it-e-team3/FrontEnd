<!-- 컴포넌트 UI 정의 -->
<template>
  <v-sheet class="my-3" max-width="700" fixed>
    <v-slide-group multiple show-arrows>
      <v-slide-item
        v-for="(category,index) in categoryList"
        :key="category.name"
        v-slot="{ active }"
      >
        <v-btn
          class="mx-2"
          :input-value="active"
          active-class="purple white--text"
          depressed
          @click="goDetailCategory(category.categoryId,index)"
        >
          {{ category.name }}
        </v-btn>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름이다.) 이름을 정하지 않으면 파일명으로
  name: "",
  // 추가하고 싶은 컴포넌트를 등록
  components: {},
  //컴포넌트 데이터를 정의
  data: () => ({
    categoryList:[]
  }),
  props:[
    "categoryId"
  ],
  //컴포넌트 메소드 정의
  methods: {
    goDetailCategory(categoryId,index){
      this.categoryList = this.categoryList[index].categoryList;
      console.log(this.categoryList);
      this.$router.push(`/product/category/?categoryId=${categoryId}`);
    }
  },
  created(){
    this.categoryList = this.$store.getters["category/getCategory"];
    console.log(this.categoryList);
  }
};
</script>
<!-- 컴포넌트 스타일 정의 -->
<style scoped></style>
