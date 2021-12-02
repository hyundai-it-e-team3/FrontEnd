<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <v-card>
      <v-row>
          <v-col cols="4" class="pa-0 pl-2 pb-2">
            <v-img width="100%" :src="product.thumbnail"/>
          </v-col>
          <v-col cols="8" class="pa-1 pl-2">
            <v-row>
              <v-col class="pa-4">
                <div class="font-weight-bold">{{product.brandName}}</div>
                <div>{{product.name}}</div>
                <div> {{orderDetail.productDetailId}} / {{orderDetail.psize}} / {{orderDetail.amount}}개 </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">주문 금액</v-col>
              <v-col cols="6" class="text-right">{{orderDetail.price}}원</v-col>
            </v-row>
          </v-col>
        </v-row>
    </v-card>  
</template>

<script>
import productAPI from "@/apis/product"
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "productComponent",
    //추가하고 싶은 컴포넌트 등록
    components: {
      
    },
    //컴포넌트 데이터 정의
    data: function() {
        return {
          product : null
        };
    },
    //컴포넌트 메소드 정의
    methods: {
      handleProductInfo() {
            this.loading = true;
            this.alertDialog = true;
            console.log(this.orderDetail);
            const response = productAPI.getCartProduct(this.orderDetail.productDetailId).then(response => {
                console.log(response.data);
                this.product = response.data; 
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
            this.loading = false;
            this.alertDialog = false;
        },
    },
    props: [
      "orderDetail"
    ],
    created() {
      this.handleProductInfo();
    }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>
  *{
    padding:0;
    margin:0;
  }
</style>