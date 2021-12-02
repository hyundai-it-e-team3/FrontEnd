<template>
  <v-card class="">
  <v-container>
    <v-row v-if="false">
      <v-col cols="6" class="mb-2">
        <v-btn small>
        전체 {{cartList.length}}개
        </v-btn>
      </v-col>
      <v-col cols="6" class="d-flex flex-row-reverse">
        <v-btn small>
        선택삭제
        </v-btn>
      </v-col>    
    </v-row>

    <v-card class="pa-1" flat>
    <v-row v-for="(cart) in cartList" :key="cart.cartId">
      <cart-component   :productDetailId=cart.productDetailId
                        :psize=cart.psize
                        :amount=cart.amount
                        :cartId=cart.cartId
                        @check-checkbox="handleCheckbox" />
   </v-row>
    </v-card>
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
      cartLength: null,
      cartIdList: []
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
    },
    handleCheckbox(cartId, value) {
      if(value) {
        this.cartIdList.push(cartId);
      } else {
        const idx = this.cartIdList.indexOf(cartId);
        this.cartIdList.splice(idx,1);
      }
    }

  },
  created() {
    this.handleCartList();
  },
  mounted(){
    this.$store.commit("setPageFlag",'cart');
  },
  watch: {
    cartIdList (to, from) {
      this.$store.commit("product/setCartIdList", to);
    }
  }
}
</script>

<style scoped>
</style>