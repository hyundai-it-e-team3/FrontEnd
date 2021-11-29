<template>
  <v-app>
    <app-header/>
    
    <v-main class="pt-13">
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
import Menu from "@/apis/menu";
export default {
  components: { 
    AppHeader,
    AppFooter 
  },
  name: 'App',
  data: () => ({
  }),
  async beforeCreate() {
    const categoryResponse = await Menu.getCategory();
    console.log(categoryResponse);
    console.log(categoryResponse.data);
    this.$store.commit("category/setCategory",categoryResponse.data);
    console.log(this.$store.getters["category/getCategory"]);

    const brandResponse = await Menu.getBrand();
    console.log(brandResponse);
    console.log(brandResponse.data);
    this.$store.commit("category/setBrandCategory",brandResponse.data);
    console.log(this.$store.getters["category/getBrandCategory"])
  },
  created() {
    this.$store.dispatch("loadAuth");
  }
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