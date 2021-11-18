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
        <v-btn icon>
            <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-menu</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-toolbar-title>HANDSOME</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-cart-outline</v-icon>
        </v-btn>
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
    }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>