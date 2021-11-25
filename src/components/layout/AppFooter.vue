<template>
  <v-footer color="black footer" class="pa-2 pt-3" dark >
    <v-container>
      <v-row v-if= "footerFlag == 1">
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
      <v-row v-if= "footerFlag == 2" class="d-flex justify-center" @click="goComplete">
        <h3>주문하기</h3>
      </v-row>
      <v-row v-if= "footerFlag == 3" class="d-flex justify-center">
        <v-col cols="2" @click="goWishList">
          <v-row class="d-flex justify-center">
            <v-icon>mdi-cards-heart-outline</v-icon>
          </v-row>
        </v-col>
        <v-col cols="2" @click="goCart" color="blue">
          <v-row class="d-flex justify-center">
            <v-icon>mdi-cart-variant</v-icon>
          </v-row>
        </v-col>
        <v-col cols="8" @click="goOrderForm">
          <v-row class="d-flex justify-center">
            <h3>구매하기</h3>
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
    },
    goOrderForm(){
      this.$router.push("/order/orderForm");
    },
    goCart(){
      this.$router.push("/member/cart");
    },
    goComplete(){
      this.$router.push("/order/complete");
    }

  },
  computed: { footerFlag() { return this.$store.state.footerFlag; } },

  created(){
    console.log(this.$store.state.footerFlag);
  },
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