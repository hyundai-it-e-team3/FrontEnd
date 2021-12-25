<template>
  <v-container class="grey lighten-3">
    <v-col v-for="order in orderList" :key="order.orderId" class="pb-1">
      <order-component
        :orderId="order.orderId"
        :orderDate="order.orderDate"
        :totalPrice="order.totalPrice"
        :state="order.state"
      />
    </v-col>
  </v-container>
</template>

<script>
import orderAPI from "@/apis/order";
import OrderComponent from "./OrderComponent.vue";

export default {
  //컴포넌트의 대표이름 (devtools에 나오는 이름)
  name: "orderList",
  //추가하고 싶은 컴포넌트 등록
  components: {
    OrderComponent,
  },
  //컴포넌트 데이터 정의
  data: function () {
    return {
      orderList: null,
    };
  },
  //컴포넌트 메소드 정의
  methods: {
    handleOrderList() {
      orderAPI
        .getOrderList(this.$store.state.memberId)
        .then((response) => {
          console.log(response.data);
          this.orderList = response.data;
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status === 403) {
              this.$router.push("/menu07/auth/jwtauth");
            }
          } else {
            this.loading = false;
          }
        });
    },
  },
  created() {
    this.handleOrderList();
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
