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

export default {
  components: { 
    AppHeader,
    AppFooter 
  },
  name: 'App',
  data: () => ({
  }),
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