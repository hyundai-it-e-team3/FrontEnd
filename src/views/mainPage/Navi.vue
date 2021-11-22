<template>
  <v-col absolut class="pa-0">
        <v-btn to="/">홈</v-btn>
        <v-btn to="mainpage/newitem">신상품</v-btn>
        <v-btn>베스트</v-btn>
        <v-btn>이벤트</v-btn>
  </v-col>
</template>

<script>
export default {
  name:"Navi",
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
  }
}
</script>

<style scoped>
</style>