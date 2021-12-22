<template>
  <v-footer 
    class="pa-0" 
    :color="bgcolor" 
    height="50" 
    elevation="2"
    fixed 
    app>
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
      bgcolor: 'white',
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
      this.bgcolor = '#377C59'; 
    } else {
      this.bgcolor = 'white'; 
    }
  },
};
</script>

<style scoped></style>
