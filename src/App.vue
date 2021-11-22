<template>
  <v-app>
    <app-header v-if="headerFlag"/>
    
    <v-main class="pt-12">
      <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="800px"
      mt-5
      >
        <router-view/>
      </v-sheet>
    </v-main>
    
    <app-footer/>
  </v-app>
</template>

<script>
import AppFooter from './components/layout/AppFooter.vue';
import AppHeader from './components/layout/AppHeader.vue';

export default {
  components: { 
    AppHeader,
    AppFooter 
  },
  name: 'App',

  data: () => ({
    headerFlag:true
  }),
  computed: { headerFlag() { return this.$store.state.headerFlag; } }
};
</script>
