<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <v-card>
      <v-card-title @click="goDetail">
          No.{{orderId}}
      </v-card-title>
      <v-card-subtitle>
          주문 일시 : {{orderDate}}
      </v-card-subtitle>
      <v-card-text>
          총 가격 : {{totalPrice}} / 주문 상태 : {{state}}
      </v-card-text>
      <v-divider/>
      <v-row v-for="(product) in productList" :key="product.productDetailId">
        <product-component
                :product = product
        />
      </v-row>
      <v-card-actions>
          <v-btn>배송지 수정</v-btn>
          <v-btn>주문 확정</v-btn>
          <v-btn>환불</v-btn>
          <v-btn>반품/교환 신청</v-btn>
      </v-card-actions>
        <alert-dialog v-if="alertDialog"
            :loading="loading"
            :message="alertDialogMessage"
            @close="alertDialog=false"/>
    </v-card>  
</template>

<script>
import orderAPI from "@/apis/order";
import ProductComponent from './ProductComponent.vue';
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "",
    //추가하고 싶은 컴포넌트 등록
    components: {
        ProductComponent
    },
    //컴포넌트 데이터 정의
    data: function() {
        return {
            loading: false,
            alertDialog: false,
            alertDialogMessage: null,
            productList: null
        };
    },
    //컴포넌트 메소드 정의
    methods: {
        goDetail(){
            this.$router.push("/order/complete");
        },
        handleOrderProductList() {
            this.loading = true;
            this.alertDialog = true;
            orderAPI.getOrderDetailList(this.orderId)
                .then(response => {
                console.log(response.data);
                this.productList = response.data;
                this.loading = false;
                this.alertDialog = false;
                }).catch(error => {
                if(error.response) {
                    if(error.response.status === 403) {
                        this.loading = false;
                        this.alertDialog = false;
                        this.$router.push("/menu07/auth/jwtauth")
                    }
                } else {
                    this.loading = false;
                    this.alertDialogMessage = "네트워크 통신 오류";
                }
            });
        }
    },
    props: [
        "orderId",
        "orderDate",
        "totalPrice",
        "state"
    ],
    created() {
         this.handleOrderProductList();
    }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>