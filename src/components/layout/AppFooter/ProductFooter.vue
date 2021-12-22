<template>
  <v-container>
      <v-row>
        <v-col class="wishlistIcon col-2 d-flex justify-center" @click="addWishList"
            v-if="!this.$store.getters['member/getWishList'].includes(
                this.$store.getters['product/getProduct'].productDetailId.slice(0, -3))">
            <v-icon color="black">mdi-cards-heart-outline</v-icon>
        </v-col>
        <v-col class="wishlistIcon col-2 d-flex justify-center" @click="removeWishList"
            v-if="this.$store.getters['member/getWishList'].includes(
                this.$store.getters['product/getProduct'].productDetailId.slice(0, -3))">
            <v-icon color="red">mdi-cards-heart</v-icon>
        </v-col>

        <v-col class="cartIcon col-2 d-flex justify-center" @click="handleInsertCart">
            <v-icon color="white">mdi-cart-variant</v-icon>
        </v-col>

        <v-col class="productFooterContent col-8 d-flex justify-center black white--text" @click="handleOrder">
            구매하기
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
import orderAPI from "@/apis/order";
import memberAPI from "@/apis/member";

export default {
  name: "ProductFooter",
  components: {},
  data: function () {
    return {};
  },
  methods: {
    getProduct() {
      return this.$store.getters["product/getProduct"];
    },
    handleOrder() {
      this.$router.push("/order/orderForm?link=product");
    },
    async handleInsertCart() {
      let cart = this.$store.getters["product/getProduct"];
      this.loading = true;
      this.alertDialog = true;
      console.log(cart);
      try {
        const multipartFormData = new FormData();
        multipartFormData.append("productDetailId", cart.productDetailId);
        multipartFormData.append("psize", cart.psize);
        multipartFormData.append("amount", cart.amount);
        multipartFormData.append("memberId", this.$store.state.memberId);
        console.log(multipartFormData);

        const response = await orderAPI.insertCart(multipartFormData);
        console.log(response);
        this.loading = false;
        this.alertDialog = false;
      } catch (error) {
        if (error.response) {
          if (error.response.status === 403) {
            this.loading = false;
            this.alertDialog = false;
            this.$router.push("/menu07/auth/jwtauth");
          } else {
            this.loading = false;
            this.alertDialogMessage = "네트워크 통신 오류";
          }
        }
      }
    },
    insertCart() {
      this.$router.push("/member/cart");
    },
    async addWishList() {
      let productId = this.$store.getters[
        "product/getProduct"
      ].productDetailId.slice(0, -3);
      let memberId = this.$store.getters.getMemberId;
      await memberAPI.addWishList(memberId, productId);
      this.$store.commit("member/addWishList", productId);
      console.log(this.$store.getters["member/getWishList"]);
    },
    async removeWishList() {
      let productId = this.$store.getters[
        "product/getProduct"
      ].productDetailId.slice(0, -3);
      let memberId = this.$store.getters.getMemberId;
      console.log(productId + " " + memberId);
      await memberAPI.removeWishList(memberId, productId);
      this.$store.commit("member/removeWishList", productId);
      console.log(this.$store.getters["member/getWishList"]);
    },
  },
  computed: {
    computedProduct() {
      return this.$store.getters["product/getProduct"];
    },
  },
};
</script>

<style scoped>
.wishlistIcon {
    background-color: white;
}
.cartIcon {
    background-color: #E78519;
}
.productFooterContent {
    font-size: 20px;
    font-weight: 700;
}    
</style>
