<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <v-app>
        <v-app-bar
        color="black"
        dark
        absolute
        hide-on-scroll
        height="50px"
        >
            <template heigth="50px">
            <v-btn icon  @click="goBack">
                <v-icon small >mdi-chevron-left</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon to="/order/cart">
                <v-icon small>mdi-cart-minus</v-icon>
            </v-btn>
            </template>
        </v-app-bar>
    </v-app>
</template>

<script>
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "ProductHeader",
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
    ,
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>