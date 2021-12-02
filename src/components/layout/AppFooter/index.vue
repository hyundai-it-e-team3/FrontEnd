<template>
  <v-footer class="pa-0" :color="bgcolor" height="50" dark fixed app>
    <main-footer v-if="pageFlag === 'main' || pageFlag === 'default'"  />
    <product-footer v-if="pageFlag === 'product'" />
    <cart-footer v-if="pageFlag === 'cart'"/>
  </v-footer>
</template>

<script>
import MainFooter from "./MainFooter";
import ProductFooter from "./ProductFooter";
import CartFooter from "./CartFooter.vue";

export default {
  name: "AppFooter",
  components: {
    MainFooter,
    ProductFooter,
    CartFooter,
  },
  data: function () {
    return {
      bgcolor: 'black',
    };
  },
  methods: {},
  computed: {
    pageFlag() {
      return this.$store.state.pageFlag;
    },
  },
  beforeUpdate() {
    if (this.pageFlag === 'cart') {
      this.bgcolor = '#085942'; 
    } else {
      this.bgcolor = 'black'; 
    }
  },
};
</script>

<style scoped></style>
