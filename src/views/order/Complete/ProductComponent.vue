<template>
  <v-container>
    <v-row>
      <v-col cols="4">
          <v-img height="auto" :src="productDetail.thumbnail" />
      </v-col>
      <v-col cols="8">
        <v-row>
          <v-col class="pa-3">

            <div class="font-weight-bold black--text">{{ productDetail.brandName }}</div>
            <div class="black--text">{{ productDetail.name }}</div>
            <div class="font-weight-medium black--text">{{ orderDetail.price.toLocaleString() }}원</div>
            <div class="mt-6"> {{colorCode}} / {{ orderDetail.psize }} / {{ orderDetail.amount }} 개</div>

            <v-divider class="my-1" />

            <div class="pb-1" style="font-size: 15px; color: #CF3705; font-weight: 600;">처리 상태 : <span class="black--text">{{ orderDetail.state }}</span></div>

            <v-row v-if="orderDetail.state == '배송완료'">
              <v-col cols="6" class="pr-1">
                <v-btn
                  color="#425745"
                  dark
                  small
                  width="100%"
                  @click="handleSelected(2)"
                >
                  교환
                </v-btn>
              </v-col>
              <v-col cols="6" class="pl-1">
                <v-btn
                  color="#425745"
                  dark
                  small
                  width="100%"
                  @click="handleSelected(1)"
                >
                  반품
                </v-btn>
              </v-col>
            </v-row>

          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import dayjs from "dayjs";
import productAPI from "@/apis/product";
export default {
  //컴포넌트의 대표이름 (devtools에 나오는 이름)
  name: "productComponent",
  //추가하고 싶은 컴포넌트 등록
  components: {},
  //컴포넌트 데이터 정의
  data: function () {
    return {
      productDetail: null,
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
          console.log(response.data);
          this.productDetail = response.data;
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
    handleSelected(type) {
      this.$emit(
        "check-button",
        this.productDetail.name,
        this.orderDetail.productDetailId,
        this.orderDetail.psize,
        type
      );
      console.log("클릭");
    },
  },
  props: ["orderDetail"],
  created() {
    this.handleProductInfo();
  },
  computed: {
      colorCode: function () {
        return this.orderDetail.productDetailId.slice(-2);
      }
  }
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
</style>
