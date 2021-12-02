<template>
    <v-card>
    </v-card>
</template>

<script>
import orderAPI from "@/apis/order";
export default {
  name:"",
  components: {
  },
  data() {
    return {
      product : {
        psize : null,
        color : null,
        amount : null,
        cartNo : null
      },
      colorChip: [
        "http://newmedia.thehandsome.com/CM/2B/SS/CM2B0KCD230W_PK_C01.jpg",
        "http://newmedia.thehandsome.com/CM/2B/SS/CM2B0KCD230W_CP_C01.jpg",
        "http://newmedia.thehandsome.com/CM/2B/SS/CM2B0KCD230W_WT_C01.jpg"
      ],
      size: [
        "85", "90"
      ],
      stock: 5,
      amount: 1
    }
  },
  methods: {
     async handleUpdate() {
       console.log(this.cartNo);
       console.log(this.product);
        try {
            const multipartFormData = new FormData();
            multipartFormData.append("cartNo", this.cartNo);
            multipartFormData.append("color", this.product.color);
            multipartFormData.append("psize", this.product.psize);
            multipartFormData.append("amount", this.product.amount);

            this.loading = true;
            this.alertDialog = true;
            const response = await orderAPI.updateCart(multipartFormData);
            console.log(response);
            this.loading = false;
            this.alertDialog = false;

        } catch(error) {
            if(error.response) {
                if(error.response.status === 403) {
                    this.loading = false;
                    this.alertDialog = false;
                    this.$router.push("/menu07/auth/jwtauth")
                } else {
                    this.loading = false;
                    this.alertDialogMessage = "네트워크 통신 오류";
                }
            }
        }
    },
    getOption() {
      this.loading = true;
      this.alertDialog = true;
    },
  },
  props: [
      "cartNo"
  ],
  created() {
    this.getOption();
  }
}
</script>

<style scoped>
</style>