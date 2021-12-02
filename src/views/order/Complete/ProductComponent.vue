<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <v-card class="my-1" outlined>
      <v-card-text>
      <v-row>
          <v-col cols="5" class=" pa-1">
            <div class="d-flex align-center">
            <v-img height="auto" :src="productDetail.thumbnail"/>
            </div>
          </v-col>
          <v-col cols="7">
            <v-row>
              <v-col class="pa-4">
                <div class="font-weight-bold black--text">[{{productDetail.brandName}}]</div>
                <div class="black--text">{{productDetail.name}}</div>
                <div class="black--text">{{orderDetail.productDetailId}}</div>
                <div>{{orderDetail.psize}} / {{orderDetail.amount}} 개 </div> 
                <div class="font-weight-medium black--text"> {{orderDetail.price.toLocaleString()}}원 </div>

                <v-divider class="my-3"/>
                <div> 처리 상태 : {{orderDetail.state}} </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>  
</template>

<script>
import dayjs from 'dayjs';
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
          productDetail : null,
        };
    },
    //컴포넌트 메소드 정의
    methods: {
      handleProductInfo() {
          this.loading = true;
          this.alertDialog = true;
          const response = productAPI.getCartProduct(this.orderDetail.productDetailId).then(response => {
              console.log(response.data);
              this.productDetail = response.data; 
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
  margin:0px;
  padding:0px;
}

</style>
