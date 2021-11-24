<!-- 컴포넌트 UI 정의 -->
<template>
  <v-app>
    <v-list dense nav>
      <v-list-group :value="false" prepend-icon="mdi-face-woman" active-class="yellow--text" >
        <template v-slot:activator>
          <v-list-item-title class="font-weight-bold">여성</v-list-item-title>
        </template>
        <v-list-item to="/product/productList" color="white">
          <v-list-item-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>OUTER</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/product/productList" color="white">
          <v-list-item-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>DRESS</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/product/productList" color="white">
          <v-list-item-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>TOP</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/product/productList" color="white">
          <v-list-item-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>PANTS</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/product/productList" color="white">
          <v-list-item-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>FASHION ACC</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/product/productList" color="white">
          <v-list-item-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>SKIRT</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      <v-list-group :value="false" prepend-icon="mdi-face-man" active-class="yellow--text">
        <template v-slot:activator>
          <v-list-item-title class="font-weight-bold">남성</v-list-item-title>
        </template>
        <v-list-item to="/" color="white">
          <v-list-item-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>OUTER</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/" color="white">
          <v-list-item-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>DRESS</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/" color="white">
          <v-list-item-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>TOP</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/" color="white">
          <v-list-item-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>PANTS</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/" color="white">
          <v-list-item-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>FASHION ACC</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/" color="white">
          <v-list-item-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>SKIRT</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
<v-list-group :value="false" prepend-icon="mdi-baby-face" active-class="yellow--text">
        <template v-slot:activator>
          <v-list-item-title class="font-weight-bold">키즈</v-list-item-title>
        </template>
        <v-list-item to="/" color="white">
          <v-list-item-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>OUTER</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/" color="white">
          <v-list-item-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>DRESS</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/" color="white">
          <v-list-item-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>TOP</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/" color="white">
          <v-list-item-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>PANTS</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/" color="white">
          <v-list-item-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>FASHION ACC</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/" color="white">
          <v-list-item-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>SKIRT</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      <v-list-group :value="false" prepend-icon="mdi-home" active-class="yellow--text">
        <template v-slot:activator>
          <v-list-item-title class="font-weight-bold">라이프스타일</v-list-item-title>
        </template>
        <v-list-item to="/" color="white">
          <v-list-item-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>OUTER</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/" color="white">
          <v-list-item-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>DRESS</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/" color="white">
          <v-list-item-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>TOP</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/" color="white">
          <v-list-item-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>PANTS</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/" color="white">
          <v-list-item-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>FASHION ACC</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/" color="white">
          <v-list-item-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>SKIRT</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
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

  }),
  //컴포넌트 메소드 정의
  methods:{
    backUrl(){
      this.$router.go(-1);
    }
  },
  mounted(){
    this.$store.commit("setHeaderFlag",2);
  }
  ,
  destroyed(){
    this.$store.commit("setHeaderFlag",1);
  },
  computed: { headerFlag() { return this.$store.state.headerFlag; } },
}
</script>
<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>

