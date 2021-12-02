<template>
  <v-row class="pl-1 pr-1">
    <v-icon class="col-1" @click="goBack">mdi-chevron-left</v-icon>

    <v-toolbar-title class="d-flex justify-center col-10" @click="goHome">| THE | HANDSOME |</v-toolbar-title>

    <v-icon class="col-1" @click="goCart">mdi-cart-minus</v-icon>
  </v-row>
</template>

<script>
export default {
  name: "DefaultHeader",
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
    }
  },
};
</script>

<style scoped></style>
