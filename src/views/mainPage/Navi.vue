<template>
  <v-app-bar height="40">
    <v-tabs v-model="tab" background-color="black" dark color="white" slider-color="black" centered>
      <v-tab v-for="tab in tabs" :key="tab" @click="goTab(tab)">{{tab}}</v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script>
export default {
  name:"Navi",
  components: {
  },
  data() {
    return {
      tab: '',
      tabs: ['HOME', 'NEW', 'BEST', 'EVENT'],
    };
  },
  methods: {
    goTab(tab){
      if(tab=='NEW'){
        this.$store.commit("category/setSelectedCategory",[]);
        this.$store.commit("pager/setSortId",0);
        this.$router.push(`/product/categoryProduct?categoryId=`).catch(()=>{});
      }
    }
  }
}
</script>

<style scoped>
</style>