<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <v-card width="100%">
      <v-card-title @click="goDetail(`${orderId}`)">
          No.{{orderId}}
      </v-card-title>
      <v-card-subtitle>
          주문 일시 : {{orderDate}}
      </v-card-subtitle>
      <v-card-text>
          총 가격 : {{totalPrice}} / 주문 상태 : {{state}}
      <v-divider/>



      <v-list subheader>
      <v-list-item v-for="(product,i) in productList" :key="i">
        <v-list-item-avatar >
          <v-img
            :src="product.thumbnail"
          >사진</v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="product.productName"></v-list-item-title>
          {{product.brandName}}
        </v-list-item-content>
      </v-list-item>
      </v-list>
      </v-card-text>
      <v-card-actions v-if="false">
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
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "",
    //추가하고 싶은 컴포넌트 등록
    components: {
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
        goDetail(orderNo){
            this.$router.push("/order/complete?orderNo="+orderNo);
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