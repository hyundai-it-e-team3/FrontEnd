<template>
  <v-app>
    <app-header/>
    <v-main class="mt-5">
      <v-sheet
        id="scrolling-techniques-3"
        class="overflow-y-auto gray"
        max-height="750px"
      >
        <router-view/>
      </v-sheet>
    </v-main>
    
    <app-footer/>
  </v-app>
</template>

<script>
import AppFooter from './components/layout/AppFooter';
import AppHeader from './components/layout/AppHeader';
import CategoryModule from "@/modules/categoryModule";
export default {
  components: { 
    AppFooter ,
    AppHeader
  },
  name: 'App',
  data: () => ({
  }),
beforeCreate() {
    CategoryModule.getCategory()
      .then(response=>{
        this.$store.commit("category/setCategory",response.data);
        console.log(response.data);
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
	/* Default Font & Text */
	font-family: "Apple SD Gothic Neo", Roboto, "Noto Sans KR", sans-serif;
	font-size: 12px;
  padding : 0;
  margin : 0;
}
</style>