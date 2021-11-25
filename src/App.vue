<template>
  <v-app>
    <app-header/>
    
    <v-main class="pt-12">
      <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="800px"
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
  }),
};
</script>
