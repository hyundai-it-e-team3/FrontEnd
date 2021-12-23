<template>
  <v-container class="pa-0">
    <v-row>
      <v-col class="pa-0" cols="3">
        <v-img height="auto" :src="product.thumbnail"/>
      </v-col>

      <v-col cols="9">
        <v-row>
          <v-col>
            <div class="font-weight-bold" style="font-size: 12px;">{{product.brandName}}</div>
            <div style="font-size: 14px;">{{product.name}}</div>
            <div class="mt-5" style="font-size: 12px;"> 컬러코드 / {{orderDetail.psize}} / {{orderDetail.amount}}개 </div>
          </v-col>
        </v-row>

        <v-divider class="my-1"/>

        <v-row>
          <v-col class="font-weight-bold text-right" style="font-size: 14px; color: #CF3705;">{{orderDetail.price.toLocaleString()}}원</v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>  
</template>

<script>
import productAPI from "@/apis/product"
export default {
    name: "productComponent",
    components: {
    },
    data: function() {
        return {
          product : null
        };
    },
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

<style scoped>

</style>