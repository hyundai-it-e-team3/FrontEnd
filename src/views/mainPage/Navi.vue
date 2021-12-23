<template>
  <v-app-bar height="40">
    <v-tabs v-model="tab" class="white" color="black" slider-color="#425745" centered>
      <v-tab v-for="tab in tabs" :key="tab" class="black--text" @click="goTab(tab)">{{tab}}</v-tab>
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
      tabs: ['HOME', 'NEW', 'BEST'],
    };
  },
  methods: {
    goTab(tab){
      if(tab=='NEW'){
        this.$store.commit("category/setSelectedCategory",[]);
        this.$router.push(`/product/categoryProduct?categoryId=&sortId=${0}`).catch(()=>{});
      }else if(tab=='BEST'){
        this.$store.commit("category/setSelectedCategory",[]);
        this.$router.push(`/product/categoryProduct?categoryId=&sortId=${3}`).catch(()=>{});
      }else if(tab=='EVENT'){
        this.$router.push(`/member/promotion`).catch(()=>{});
      }
    }
  }
}
</script>

<style scoped>
</style>