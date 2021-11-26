<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <v-container>
        <v-row class="d-flex justify-center">
            <v-col cols="2" @click="goWishList">
            <v-row class="d-flex justify-center">
                <v-icon>mdi-cards-heart-outline</v-icon>
            </v-row>
            </v-col>
            <v-col cols="2" @click="insertCart" color="blue">
            <v-row class="d-flex justify-center">
                <v-icon>mdi-cart-variant</v-icon>
            </v-row>
            </v-col>
            <v-col cols="8" @click="goOrderForm">
            <v-row class="d-flex justify-center">
                <h3>구매하기</h3>
            </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "ProductFooter",
    //추가하고 싶은 컴포넌트 등록
    components: {
    },
    //컴포넌트 데이터 정의
    data: function() {
        return {
            goOrderForm(){
                this.$router.push("/order/orderForm");
            },
            insertCart(){
                this.$router.push("/member/cart");
            },
            goWishList(){
                this.$router.push("/member/wishlist");
            }
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