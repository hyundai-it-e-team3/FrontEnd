<template>
  <v-app>
    <app-header />
    
    <v-main>
      <router-view/>
    </v-main>
    
    <app-footer v-if="!(this.$route.path === '/order/orderForm')"/>
  </v-app>
</template>

<script>
import AppFooter from './components/layout/AppFooter';
import AppHeader from './components/layout/AppHeader';
import CategoryModule from "@/modules/categoryModule";

export default {
  components: { 
    AppFooter ,
    AppHeader,
    
  },
  name: 'App',
  data: () => ({
  }),
beforeCreate() {
    CategoryModule.getCategory()
      .then(response=>{
        this.$store.commit("category/setCategory",response.data);
      })
      .catch(error => {
        console.log(error);
    });
  
    CategoryModule.getBrand()
      .then(response=>{
        this.$store.commit("category/setBrandCategory",response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
    });

    CategoryModule.getWishBrandList()
      .then(response=>{
        this.$store.commit("category/setWishBrand",response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
    });
  },
  created() {
    this.$store.dispatch("loadAuth");
  },
  methods: {
    goBack(){
      this.$router.go(-1);
    },
    goHome(){
      this.$router.push("/");
    },
  },
};
</script>

<style>
* {
  padding : 0;
  margin : 0;
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
}
</style>