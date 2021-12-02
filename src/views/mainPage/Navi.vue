<template>
  <v-app-bar height="40">
    <v-tabs v-model="tab" background-color="black" dark color="white" slider-color="black" centered>
      <v-tab v-for="tabs in tabs" :key="tabs">{{tabs}}</v-tab>
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