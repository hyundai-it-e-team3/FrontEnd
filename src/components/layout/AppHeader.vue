<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <v-app-bar
      color="black"
      dark
      absolute
      elevate-on-scroll
      dense
      scroll-target="#scrolling-techniques-7"
    >
        <v-btn icon @click="goBack">
            <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn icon v-if= "headerFlag==1" to="/product/categorymenu">
            <v-icon>mdi-menu</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-toolbar-title @click="getCategory" v-if= "headerFlag==1">HANDSOME</v-toolbar-title>
        <v-toolbar-title v-if= "headerFlag==2">카테고리</v-toolbar-title>
        <v-toolbar-title v-if= "headerFlag==3">브랜드</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon v-if= "headerFlag==1">
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon to="/member/cart" v-if= "headerFlag==1">
            <v-icon>mdi-cart-outline</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
import  axios  from 'axios'
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
        getCategory(){

        },
    }
    ,computed: { headerFlag() { return this.$store.state.headerFlag; } },
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>