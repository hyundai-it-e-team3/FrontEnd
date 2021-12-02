<template>
    <v-app-bar
        color="black"
        dark
        height="50px"
    >
        <template heigth="50px">
            <v-btn icon @click="searchOpen">
                <v-icon small>mdi-magnify</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-toolbar-title>THE HANDSOME</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon to="/order/cart">
                <v-icon small>mdi-cart-minus</v-icon>
            </v-btn>
            </template>
    </v-app-bar>
</template>

<script>
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "MainHeader",
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
        searchOpen(){
            console.log("ododododo");
            this.$router.push("/product/searchList");
        }
    }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>