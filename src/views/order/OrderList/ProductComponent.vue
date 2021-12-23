<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
  <v-container class="pa-0">
    <v-row>
      <v-col cols="3">
        <v-img
          :src="product.thumbnail"
          height="auto" />
      </v-col>
      <v-col cols="9" class="pa-2">
        <v-row>
          <v-col>
            <div class="font-weight-bold" style="font-size: 15px; color: #CF3705;">주문상태</div>
            <div class="font-weight-bold black--text" style="font-size: 12px;">[{{ product.brandName }}]</div>
            <div style="font-size: 14px; color: black;">{{ product.name }}</div>
            <div class="mt-5" style="font-size: 12px;">컬러코드 / {{ orderDetail.psize }} / {{ orderDetail.amount }}개</div>
          </v-col>
        </v-row>

        <v-divider class="my-1"/>

        <v-row>
          <v-col class="font-weight-bold text-right black--texㅅ" style="font-size: 14px;">{{orderDetail.price.toLocaleString()}}원</v-col>
        </v-row>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import productAPI from "@/apis/product";
export default {
  //컴포넌트의 대표이름 (devtools에 나오는 이름)
  name: "productComponent",
  //추가하고 싶은 컴포넌트 등록
  components: {},
  //컴포넌트 데이터 정의
  data: function () {
    return {
      product: null,
    };
  },
  //컴포넌트 메소드 정의
  methods: {
    handleProductInfo() {
      this.loading = true;
      this.alertDialog = true;
      const response = productAPI
        .getCartProduct(this.orderDetail.productDetailId)
        .then((response) => {
          this.product = response.data;
          this.loading = false;
          this.alertDialog = false;
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status === 403) {
              this.loading = false;
              this.alertDialog = false;
              this.$router.push("/menu07/auth/jwtauth");
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
  props: ["orderDetail"],
  created() {
    this.handleProductInfo();
  },
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>
* {
  padding: 0px;
  margin: 0px;
}
</style>
