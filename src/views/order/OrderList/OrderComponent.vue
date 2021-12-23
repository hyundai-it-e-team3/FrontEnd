<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
  <v-container>
    <v-card elevation="0" flat @click="goDetail(`${orderId}`)">
      <v-card-title class="px-3 pt-1 pb-0 font-weight-bold" style="font-size: 15px;">
        <div class="col-11">{{ new Date(orderDate).toLocaleDateString() }}</div>
        <v-icon class="col-1" color="black">mdi-chevron-right</v-icon>
      </v-card-title>

      <v-card-text v-for="(orderDetail, i) in orderDetailList" :key="i">
        <product-component
          :orderDetail="orderDetail"
        />
      </v-card-text>
    </v-card>
    
    <alert-dialog
      v-if="alertDialog"
      :loading="loading"
      :message="alertDialogMessage"
      @close="alertDialog = false"
    />
  </v-container>
</template>

<script>
import orderAPI from "@/apis/order";
import ProductComponent from "./ProductComponent.vue";
import dayjs from "dayjs";
export default {
  //컴포넌트의 대표이름 (devtools에 나오는 이름)
  name: "",
  //추가하고 싶은 컴포넌트 등록
  components: {
    ProductComponent,
  },
  //컴포넌트 데이터 정의
  data: function () {
    return {
      loading: false,
      alertDialog: false,
      alertDialogMessage: null,
      orderDetailList: null,
    };
  },
  //컴포넌트 메소드 정의
  methods: {
    goDetail(orderNo) {
      this.$router.push("/order/complete?orderNo=" + orderNo);
    },
    handleOrderProductList() {
      this.loading = true;
      this.alertDialog = true;
      orderAPI
        .getOrderDetailList(this.orderId)
        .then((response) => {
          console.log(response.data);
          this.orderDetailList = response.data;
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
    },
  },
  props: ["orderId", "orderDate", "totalPrice", "state"],
  created() {
    this.handleOrderProductList();
    this.orderDate = dayjs(this.orderDate).format("YYYY.MM.DD. HH:MM");
  },
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
</style>
