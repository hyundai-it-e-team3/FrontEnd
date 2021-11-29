<template>
    <v-col>
      <v-row>
        <v-col cols="3" class="d-flex align-center">색상 </v-col>
        <v-col cols="2" v-for="(colorChip, index) in colorChip" :key="index">
          <img :src="colorChip" width="30" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3" class="d-flex align-center">사이즈</v-col>
        <v-col cols="1" v-for="(size, index) in size" :key="index">
          {{size}}
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn  @click="handleUpdate" >변경하기</v-btn>
        </v-col>
      </v-row>
    </v-col>
</template>

<script>
import cartAPI from "@/apis/cart";
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
            const response = await cartAPI.updateCart(multipartFormData);
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