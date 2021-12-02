<template>
  <v-container>
    <v-row>
      <v-col class="d-flex justify-center" cols="2.4" @click="goCategory">
        <v-icon>mdi-format-list-bulleted</v-icon>
      </v-col>
      <v-col class="d-flex justify-center" cols="2.4" @click="goBrand">
        <v-icon>mdi-tag-outline</v-icon>
      </v-col>
      <v-col class="d-flex justify-center" cols="2.4" @click="goHome">
        <v-icon>mdi-home</v-icon>
      </v-col>
      <v-col class="d-flex justify-center" cols="2.4" @click="goWishList">
        <v-icon>mdi-cards-heart</v-icon>
      </v-col>
      <v-col class="d-flex justify-center" cols="2.4" @click="goMyPage">
        <v-icon>mdi-account</v-icon>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MainFooter",
  components: {},
  data() {
    return {};
  },
  methods: {
    goCategory() {
      this.$router.push("/product/categorymenu");
    },
    goBrand() {
      this.$router.push("/product/brandmenu");
    },
    goWishList() {
      this.$router.push("/member/wishlist");
    },
    goMyPage() {
      this.$router.push("/member/mypage");
    },
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
</style>
