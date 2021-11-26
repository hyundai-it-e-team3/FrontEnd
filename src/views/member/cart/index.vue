<template>
  <v-card>
  <v-container>
    <v-row>
      <v-col cols="1">
        <v-icon class="d-flex">mdi-check-circle-outline</v-icon>
      </v-col>
      <v-col cols="3">
        전체선택
      </v-col>
      <v-col cols="3">
        선택삭제
      </v-col>    
    </v-row>

    <v-row>
      <v-divider class="ml-2 mr-2 mb-2"/>
    </v-row>

    <v-row v-for="(product) in productDetail" :key="product.productDetailId">
      <product :productDetailI=product.productDetailId
               :productImg=product.productImg
               :colorCode=product.colorCode
               :productId=product.productId
               :name=product.name
               :price=product.price
               :brandName=product.brandName
               :size=product.size
               :amount=product.amount />
    </v-row>
  </v-container>
  <alert-dialog v-if="alertDialog"
              :loading="loading"
              :message="alertDialogMessage"
              @close="alertDialog=false"/>
  </v-card>
</template>

<script>
import cartAPI from "@/apis/cart";
import Product from '../cart/Product.vue';
import AlertDialog from "@/components/alert/AlertDialog"

export default {
  name:"cart",
  components: {
    Product,
    AlertDialog
  },
  data() {
    return {
      productDetail: [
        {
          productDetailId: "CM2B0KCD230WPK",
          productImg: "http://newmedia.thehandsome.com/CM/2B/SS/CM2B0KCD230W_PK_W01.jpg/dims/resize/684x1032/",
          colorCode: "PK",
          productId: "CM2B0KCD230W",
          name: "캐시미어 크롭 니트 가디건",
          price: "495000",
          brandName: "the CASHMERE",
          size: "85",
          amount: 1
        },
        {
          productDetailId: "CM2B0KJC210WOW",
          productImg: "http://newmedia.thehandsome.com/CM/2B/SS/CM2B0KJC210W_OW_W01.jpg/dims/resize/684x1032/",
          colorCode: "OW",
          productId: "CM2B0KJC210W",
          name: "벨티드 니트 재킷",
          price: "595000",
          brandName: "the CASHMERE",
          size: "85",
          amount: 1
        },
      ],
      alertDialog: false,
      alertDialogMessage: "",
      loading: false,
    };
  },
  methods: {
    getCartList() {
      this.loading = true;
      this.alertDialog = true;
      cartAPI.getCartList()
        .then(response => {
          console.log(response.data);
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

  },
  created() {
    this.getCartList();
  },
  mounted(){
    this.$store.commit("setFooterFlag",2);
  }
  ,
  destroyed(){
    this.$store.commit("setFooterFlag",1);
  }
  ,computed: { footerFlag() { return this.$store.state.footerFlag; } },
}
</script>

<style scoped>
</style>