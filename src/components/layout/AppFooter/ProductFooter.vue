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

      <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title>
          색상 / 사이즈를 선택하세요
        </v-card-title>
       <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            닫기
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import orderAPI from "@/apis/order";
import memberAPI from "@/apis/member";

export default {
  name: "ProductFooter",
  components: {},
  data: function () {
    return {
      dialog:false
    };
  },
  methods: {
    getProduct() {
      return this.$store.getters["product/getProduct"];
    },
    handleOrder() {
      let cart = this.$store.getters["product/getProduct"];
      if(cart.amount > 0  && cart.productDetailId != null && cart.psize !=  null ) {
        this.$router.push("/order/orderForm?link=product");
      } else {
        this.dialog = true;
      }
    },
    async handleInsertCart() {
      let cart = this.$store.getters["product/getProduct"];

      if(cart.amount > 0  && cart.productDetailId != null && cart.psize !=  null ) {
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
          this.$router.push("/order/cart");
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
      } else {
        this.dialog = true;
      }
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
