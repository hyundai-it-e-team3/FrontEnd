<template>
  <v-footer color="black" class="pa-2 pt-3" dark>
    <v-container absolute>
      <v-row>
        <v-col cols="2.4" @click="goCategory">
          <v-row class="d-flex justify-center">
            <v-icon>mdi-format-list-bulleted</v-icon> 
          </v-row>
          <v-row class="d-flex justify-center">
            <span class="text-overline">Category</span>
          </v-row>
        </v-col>
        <v-col cols="2.4" @click="goBrand">
          <v-row class="d-flex justify-center">
            <v-icon>mdi-tag-outline</v-icon>
          </v-row>
          <v-row class="d-flex justify-center">
            <span class="text-overline">Brand</span>
          </v-row>
        </v-col>
        <v-col cols="2.4" @click="goHome">
          <v-row class="d-flex justify-center">
            <v-icon>mdi-home</v-icon>
          </v-row>
          <v-row class="d-flex justify-center">
            <span class="text-overline">Home</span>
          </v-row>
        </v-col>
        <v-col cols="2.4" @click="goWishList">
          <v-row class="d-flex justify-center">
            <v-icon>mdi-cards-heart-outline</v-icon>
          </v-row>
          <v-row class="d-flex justify-center">
            <span class="text-overline">WishList</span>
          </v-row>
        </v-col>
        <v-col cols="2.4" @click="goMyPage">
          <v-row class="d-flex justify-center">
            <v-icon>mdi-account</v-icon>
          </v-row>
          <v-row class="d-flex justify-center">
            <span class="text-overline">MyPage</span>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name:"",
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
    goCategory(){
      this.$router.push("/product/categorymenu");
    },
    goBrand(){
      this.$router.push("/product/brandmenu");
    },
    goWishList(){
      this.$router.push("/member/wishlist");
    },
    goMyPage(){
      this.$router.push("/member/mypage");
    },
    goHome(){
      this.$router.push("/");
    }
  }
}
</script>

<style scoped>

</style>