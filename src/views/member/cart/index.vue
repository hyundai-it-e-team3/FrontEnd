<template>
  <v-card class="mt-13">
  <v-container>
    <v-row>
      <v-col cols="1">
        <v-icon class="d-flex">mdi-check-circle-outline</v-icon>
      </v-col>
      <v-col cols="2">
        전체 N개
      </v-col>
      <v-col cols="5">
      </v-col>
      <v-col cols="2">
        선택삭제
      </v-col>    
      <v-col cols="2">
        품절삭제
      </v-col> 
    </v-row>

    <v-row>
      <v-divider class="ml-2 mr-2 mb-2"/>
    </v-row>
    <v-row v-for="(cart) in cartList" :key="cart.cartId">
      <cart-component   :productDetailId=cart.productDetailId
                        :psize=cart.psize
                        :amount=cart.amount
                        :cartId=cart.cartId />
   </v-row>
  </v-container>
  <alert-dialog v-if="alertDialog"
              :loading="loading"
              :message="alertDialogMessage"
              @close="alertDialog=false"/>
  </v-card>
</template>

<script>
import orderAPI from "@/apis/order";
import CartComponent from './CartComponent.vue';
import AlertDialog from "@/components/alert/AlertDialog"

export default {
  name:"cart",
  components: {
    CartComponent,
    AlertDialog
  },
  data() {
    return {
      cartList: null,
      alertDialog: false,
      alertDialogMessage: "",
      loading: false,
      cartLength: null
    };
  },
  methods: {
    handleCartList() {
      this.loading = true;
      this.alertDialog = true;
      orderAPI.getCartList(this.$store.state.memberId)
        .then(response => {
          console.log(response.data);
          this.cartList = response.data;
          this.loading = false;
          this.alertDialog = false;
        }).catch(error => {
          if(error.response) {
              if(error.response.status === 403) {
                  this.loading = false;
                  this.alertDialog = false;
                  this.$router.push("/menu07/auth/jwtauth")
              }
          } else {
              this.loading = false;
              this.alertDialogMessage = "네트워크 통신 오류";
          }
      });
    }

  },
  created() {
    this.handleCartList();
  }
}
</script>

<style scoped>
</style>