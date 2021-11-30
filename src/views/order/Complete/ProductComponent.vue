<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <v-card>
      <v-row>
          <v-col cols="5" class="pa-0 pl-2 pb-2">
            <v-img max-height="170" :src="productDetail.thumbnail"/>
          </v-col>
          <v-col cols="7" class="pa-1 pl-2">
            <v-row>
              <v-col class="pa-4">
                <div class="font-weight-bold">{{orderDetail.brandName}}</div>
                <div>{{orderDetail.productName}}</div>
                <div> {{orderDetail.productDetailId}} / {{orderDetail.psize}} / {{orderDetail.amounts}}개 </div>
                <div> 처리 상태 : {{orderDetail.state}} </div>
              </v-col>
            </v-row>
            <v-expansion-panels accordion flat>
                <v-expansion-panel>
                    <v-expansion-panel-header class="pa-0 pl-4 pr-4">
                        <v-row>
                        <v-col cols="3" class="pa-0 text-left">금액</v-col>
                        <v-spacer></v-spacer>
                        <v-col cols="9" class="pa-0 text-right pr-4">{{orderDetail.price}}원</v-col>
                        </v-row>
                    </v-expansion-panel-header>
                   
                </v-expansion-panel>
            </v-expansion-panels>
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

</style>
