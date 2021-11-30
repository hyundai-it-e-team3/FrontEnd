<template>
  <v-app>
    <app-header/>
    <v-main>
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
    this.$store.commit("category/setCategory",categoryResponse.data);

    const brandResponse = await Menu.getBrand();
    this.$store.commit("category/setBrandCategory",brandResponse.data);
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