<template>
  <product-list listType="list" categoryId="0"/>
</template>

<script>
import ProductList from '@/views/mainPage/newItem/ProductList.vue';
export default {
  name:"newItem",
  components: {
    ProductList,
  },
  data:()=>({
    newList :[]
  }),
  methods: {
  }
}
</script>

<style scoped>
</style>