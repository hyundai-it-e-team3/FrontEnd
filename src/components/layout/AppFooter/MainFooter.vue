<template>
    <v-container>
      <v-row>
        <v-col cols="2.4" @click="goCategory">
          <v-row class="d-flex justify-center">
            <v-icon>mdi-format-list-bulleted</v-icon> 
          </v-row>
          <v-row class="d-flex justify-center">
          </v-row>
        </v-col>
        <v-col cols="2.4" @click="goBrand">
          <v-row class="d-flex justify-center">
            <v-icon>mdi-tag-outline</v-icon>
          </v-row>
          <v-row class="d-flex justify-center">
          </v-row>
        </v-col>
        <v-col cols="2.4" @click="goHome">
          <v-row class="d-flex justify-center">
            <v-icon>mdi-home</v-icon>
          </v-row>
          <v-row class="d-flex justify-center">
          </v-row>
        </v-col>
        <v-col cols="2.4" @click="goWishList">
          <v-row class="d-flex justify-center">
            <v-icon>mdi-cards-heart</v-icon>
          </v-row>
          <v-row class="d-flex justify-center">
          </v-row>
        </v-col>
        <v-col cols="2.4" @click="goMyPage">
          <v-row class="d-flex justify-center">
            <v-icon>mdi-account</v-icon>
          </v-row>
          <v-row class="d-flex justify-center">
          </v-row>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  name:"MainFooter",
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
  .header{
    position:fixed; 
    left:0px; 
    top:0px; 
    width:100%;
  }
  @media (max-width: 991px) {
      .footer {
          position: fixed;
          left: 0px;
          bottom: 0px;
          z-index: 9999;
          width: 100%;
      }
  }
</style>