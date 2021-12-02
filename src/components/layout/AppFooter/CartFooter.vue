<template>
  <v-container class="orderFooter" @click="goOrder">
    <v-row class="orderButten d-flex justify-center font-weight-black pt-1">구매하기</v-row>
  </v-container>
</template>

<script>
export default {
  name: "ProductFooter",
  components: {},
  data: function () {
    return {};
  },
  methods: {
    goOrder() {
      this.$router.push("/order/orderForm?link=cart");
    },
  },
};
</script>

<style scoped>
.orderButten {
    font-size: 20px;
}
</style>
