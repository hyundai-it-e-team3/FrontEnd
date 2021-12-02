<template>
  <v-row class="pl-2 pr-2">
    <v-icon class="col-1" small @click="goBack">mdi-chevron-left</v-icon>

    <v-toolbar-title class="cartTitle col-10 d-flex justify-center mt-1" dark>장바구니</v-toolbar-title>
  </v-row>
</template>

<script>
export default {
  name: "ProductHeader",
  components: {},
  data: function () {
    return {};
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
};
</script>

<style scoped>
.cartTitle { 
    font-size: 20px;
    font-weight: 700;
}
</style>
