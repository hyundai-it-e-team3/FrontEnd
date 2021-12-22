<template>
  <v-app-bar height="40">
    <v-tabs v-model="tab" class="white" color="black" slider-color="#425745" centered>
      <v-tab v-for="tabs in tabs" :key="tabs" class="black--text">{{tabs}}</v-tab>
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
  }
}
</script>

<style scoped>
</style>