<template>
    <v-app-bar
      absolute
      color="black"
      elevate-on-scroll
      app
      dark>

      <main-header v-if="pageFlag === 'main'" />
      <product-header v-if="pageFlag === 'product'" />
      <cart-header v-if="pageFlag === 'cart'" />
      <default-header v-if="pageFlag === 'default'" />

    </v-app-bar>
</template>

<script>
import CartHeader from "./CartHeader.vue";
import MainHeader from "./MainHeader.vue";
import ProductHeader from "./ProductHeader.vue";
import DefaultHeader from "./DefaultHeader.vue";

export default {
  name: "AppHeader",
  components: {
    MainHeader,
    ProductHeader,
    CartHeader,
    DefaultHeader
  },
  data: function () {
    return {};
  },
  methods: {},
  computed: {
    pageFlag() {
      return this.$store.state.pageFlag;
    },
  },
};
</script>

<style scoped></style>
