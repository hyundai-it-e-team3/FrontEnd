<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <v-container>
        <v-row class="d-flex justify-center">
            <v-col cols="12" @click="goOrder">
                <v-row class="d-flex justify-center">
                    <h3>구매하기</h3>
                </v-row>
            </v-col>
        </v-row>
        
    </v-container>
</template>

<script>
import orderAPI from "@/apis/order";
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "ProductFooter",
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
        goOrder() {
            this.$router.push("/order/orderForm?link=cart");
        },
    }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>