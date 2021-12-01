<template>
  <v-app>
    <category-nav/>
    <product-list listType="list" :categoryId="categoryId" />
  </v-app>
</template>

<script>
import ProductList from '@/components/layout/ProductList/index.vue';
import CategoryNav from "@/components/layout/CategoryNav";
export default {
  name:"newItem",
  components: {
    ProductList,
    CategoryNav
  },
  data:()=>({
    categoryId:"0",
  }),
  methods: {
  },
  beforeMount(){
    this.categoryId = this.$route.query.categoryId;
    console.log(this.$route.query.categoryId);
  }
}
</script>

<style scoped>
</style>