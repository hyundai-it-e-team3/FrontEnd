<template>
  <product-list listType="list" :categoryId="categoryId"/>
</template>

<script>
import ProductList from '@/views/mainPage/newItem/ProductList.vue';
export default {
  name:"categoryProduct",
  components: {
    ProductList,
  },
  data:()=>({
    newList :[],
    categoryId:"KI"
  }),
  methods: {
  },
  beforeMount(){
    this.categoryId = this.$route.query.categoryId;
    console.log(this.categoryId);
  }
}
</script>

<style scoped>
</style>