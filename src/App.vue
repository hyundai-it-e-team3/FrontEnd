<template>
  <v-app>
    <app-header v-if="headerFlag"/>
    <v-main>
      <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="800px"
      >
        <v-container>
          <router-view/>
        </v-container>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from './components/layout/AppHeader.vue';

export default {
  components: { AppHeader },
  name: 'App',

  data: () => ({
    headerFlag:true
  }),
  computed: { headerFlag() { return this.$store.state.headerFlag; } }
};
</script>
