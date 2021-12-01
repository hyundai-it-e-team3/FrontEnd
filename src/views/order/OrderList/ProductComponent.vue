<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <v-card
    class="ma-1 pa-0" height="100" flat
    >
      <v-row>
        <v-col cols="5">
          <v-img :src="product.thumbnail" height="100" width="100%" class="d-flex flex-row pl-2 pt-0"
          gradient="to top, rgba(0,0,0,.3), rgba(0,0,0,.3)" >
            <v-row class="d-flex justify-space-between">     
            </v-row>
          </v-img>
        </v-col>
          <v-col cols="7" class="pa-2 d-flex align-center justify-end">
              <div>
                <div class="text-right">[{{product.brandName}}]</div>
                <h2 class="text-right">{{product.name}}</h2>
                <div class="font-weight-bold text-right">{{orderDetail.price}}원</div>
                <div class="text-right ma-0" >사이즈 : {{orderDetail.psize}} / {{orderDetail.amount}} 개</div>
              </div>
          </v-col>
      </v-row>
  </v-card>
</template>

<script>
import productAPI from "@/apis/product";
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "productComponent",
    //추가하고 싶은 컴포넌트 등록
    components: {
    },
    //컴포넌트 데이터 정의
    data: function() {
        return {
          product: null,
        };
    },
    //컴포넌트 메소드 정의
    methods: {
      handleProductInfo() {
      this.loading = true;
      this.alertDialog = true;
      const response = productAPI.getCartProduct(this.orderDetail.productDetailId).then(response => {
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
    } 
        
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
    padding: 0px;
    margin: 0px;
  }
</style>
