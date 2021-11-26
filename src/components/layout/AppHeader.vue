<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <v-app-bar
      color="black"
      dark
      absolute
      hide-on-scroll
      scroll-target="#scrolling-techniques-5"
      height="50px"
    >
        <template heigth="50px">
        <v-btn icon  @click="goBack">
            <v-icon small >mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn icon v-if= "headerFlag==1" to="/product/categorymenu">
            <v-icon small>mdi-menu</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-toolbar-title v-if= "headerFlag==1">THE HANSOME</v-toolbar-title>
        <v-toolbar-title v-if= "headerFlag==2">카테고리</v-toolbar-title>
        <v-toolbar-title v-if= "headerFlag==3">브랜드</v-toolbar-title>
        <v-toolbar-title v-if= "headerFlag==4">좋아요</v-toolbar-title>
        <v-spacer></v-spacer>
        
        <v-btn icon v-if= "headerFlag==1">
            <v-icon small>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon to="/member/cart" v-if= "headerFlag==1">
            <v-icon small>mdi-cart-minus</v-icon>
        </v-btn>
        </template>

        <template v-slot:extension v-if="headerFlag === 1 || headerFlag === 4">
        <v-tabs v-if= "headerFlag===1"
            show-arrows-on-hover
            align-with-title
            color="grey"
        >
          <v-tab to="/">HOME</v-tab>
          <v-tab to="/mainpage/newitem">NEW</v-tab>
          <v-tab to="/mainpage/bestitem">BEST</v-tab>
          <v-tab to="/mainpage/eventpage">EVENT</v-tab>
        </v-tabs>
        <v-tabs v-if= "headerFlag===4"
            show-arrows-on-hover
            align-with-title
            color="grey"
        >
          <v-tab to="/">상품</v-tab>
          <v-tab to="/">브랜드</v-tab>
        </v-tabs>
      </template>

    </v-app-bar>
</template>

<script>
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "AppHeader",
    //추가하고 싶은 컴포넌트 등록
    components: {
    },
    //컴포넌트 데이터 정의
    data: function() {
        return {
        };
    },
    //컴포넌트 메소드 정의
    methods: {
        goBack(){
            this.$router.go(-1);
        },
        goHome(){
            this.$router.push("/");
        },
    }
    ,computed: { headerFlag() { return this.$store.state.headerFlag; } },
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>