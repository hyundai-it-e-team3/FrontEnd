<template>
  <v-row class="pl-2 pr-2">
    <v-icon class="col-1" @click="searchOpen">mdi-magnify</v-icon>

    <v-toolbar-title class="d-flex justify-center col-10" @click="goHome">| THE | HANDSOME |</v-toolbar-title>

    <v-icon class="col-1" @click="goCart">mdi-cart-minus</v-icon>
  </v-row>

</template>

<script>
export default {
  name: "MainHeader",
  components: {},
  data: function () {
    return {};
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goHome() {
      this.$router.push("/");
    },
    goCart() {
      this.$router.push("/order/cart");
    },
    searchOpen(){
      this.$router.push("/product/searchList");
    }
  },
};
</script>

<style scoped></style>
