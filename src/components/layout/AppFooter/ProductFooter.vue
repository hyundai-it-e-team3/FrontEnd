<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <v-container>
        <!--
        counter/count 단방향 바인딩: {{$store.getters["product/getProduct"]}}
        {{getProduct()}}
        -->
        <v-row class="d-flex justify-center">
            <v-col cols="2" @click="goWishList">
            <v-row class="d-flex justify-center">
                <v-icon>mdi-cards-heart-outline</v-icon>
            </v-row>
            </v-col>
            <v-col cols="2" @click="handleInsertCart" style="background-color:blue">
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
import cartAPI from "@/apis/cart";
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
        getProduct() {
            //return this.$store.state.product;
            //root 상태가 아닌 하위 상태일 때는 무조건 아래와 같은 형태로 써야한다.
            return this.$store.getters["product/getProduct"];
        },
        async handleInsertCart() {
            
            let product = this.$store.getters["product/getProduct"];
            this.loading = true;
            this.alertDialog = true;
            console.log(product);
            try {
                const multipartFormData = new FormData();
                multipartFormData.append("productDetailId", product.productDetailId);
                multipartFormData.append("psize", product.psize);
                multipartFormData.append("amount", product.amount);
                multipartFormData.append("memberId", this.$store.state.memberId);
                //multipartFormData.append("memberId", 'user1');
                console.log(multipartFormData);

                const response = await cartAPI.insertCart(multipartFormData);
                console.log(response);
                this.loading = false;
                this.alertDialog = false;
            }   catch(error) {
                if(error.response) {
                    if(error.response.status === 403) {
                        this.loading = false;
                        this.alertDialog = false;
                        this.$router.push("/menu07/auth/jwtauth")
                    } else {
                        this.loading = false;
                        this.alertDialogMessage = "네트워크 통신 오류";
                    }
                }
            }
        },
        goOrderForm(){
            this.$router.push("/order/orderForm");
        },
        insertCart(){
            this.$router.push("/member/cart");
        },
        goWishList(){
            this.$router.push("/member/wishlist");
        }
    },
    computed: {
        computedProduct() {
            //return this.$store.state.counter.count;
            return this.$store.getters["product/getProduct"];
        }
    }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>