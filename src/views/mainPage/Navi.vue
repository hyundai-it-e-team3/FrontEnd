<template>
  <div class="d-flex justify-center">
    <div absolut class="pa-0 mt-2">
          <v-btn class="mr-2" dark color="black" to="/">홈</v-btn>
          <v-btn class="mr-2" dark color="black" to="/mainpage/newitem">신상품</v-btn>
          <v-btn class="mr-2" dark color="black" to="/mainpage/bestitem">베스트</v-btn>
          <v-btn class="mr-2" dark color="black" to="/mainpage/eventpage">이벤트</v-btn>
    </div>
  </div>
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