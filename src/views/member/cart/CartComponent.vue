<template>
  <v-container>
      <v-col class="pa-0">
        <v-row>
          <v-col cols="1"  class="pa-2">
            <v-icon class="d-flex">mdi-check-circle-outline</v-icon>
          </v-col>
          <v-col cols="10">
          </v-col>
          <v-col cols="1" class="pa-2">
            <v-icon class="d-flex" @click="handleDelete()">mdi-close</v-icon>
          </v-col>    
        </v-row>

        <v-row>
          <v-col cols="4" class="pa-0 pl-2 pb-2">
            <img :src="productImg" width="100%"/>
          </v-col>
          <v-col cols="8" class="pa-1 pl-2">
            <v-row>
              <v-col class="pa-4">
                <div >[{{brandName}}]</div>
                <div>{{productDetailId}} 정보 불러와서 넣기</div>
                <div>{{name}}</div>
                <div class="font-weight-bold">{{price}}원</div>
              </v-col>
            </v-row>

            <v-row>
              <v-col class="d-flex align-center">
                <v-row>
                  <v-col cols="2">
                    <v-icon small @click="minusAmount">mdi-minus</v-icon>
                  </v-col>
                  <v-col cols="3" class="text-center">{{amount}}</v-col>
                  <v-col cols="2">
                    <v-icon small @click="plusAmount">mdi-plus</v-icon>
                  </v-col>
                </v-row>        
              </v-col>
              <v-col>
                {{price}}원
              </v-col>
            </v-row>

            
            <v-row>
              <v-divider class="ml-4 mr-4"/>
            </v-row>
            <v-row>
              <v-col class="grey--text">
                <v-row>
                  <v-col cols="9" class="pl-4 pt-1 pb-0" :amount=amount>옵션 <span>{{colorCode}} / {{size}} / {{amount}}개</span></v-col>
                  <v-col cols="3" class="pr-4 pt-1 pb-0" @click="changeDetail">변경</v-col>
                </v-row>
              </v-col>
            </v-row>
            
          </v-col>
        </v-row>

        

        <v-row v-if="changeFlag">
          <change-option />
        </v-row>
      </v-col>

  </v-container>
</template>

<script>
import ChangeOption from './ChangeOption.vue';
import cartAPI from "@/apis/cart";
import productAPI from "@/apis/product";
export default {
  name:"CartComponent",
  components: {
    ChangeOption
  },
  data() {
    return {
      changeFlag: false,
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
      ],
      product: null,
    };
  },
  props: [
    "productDetailId",
    "productImg",
    "colorCode",
    "productId",
    "name",
    "price",
    "brandName",
    "size",
    "amount",
    "cartId"
  ],
  methods: {
    changeDetail() {
      this.changeFlag = !this.changeFlag
    },
    plusAmount() {
      if(this.amount+1 > this.stock) {
        console.log("재고가 부족합니다.")
      } else {
        this.amount += 1
      }
    },
    minusAmount() {
      if(this.amount-1 <= 0) {
        console.log("1개 이상 주문하세요.")
      } else {
        this.amount -= 1
      }
    },
    async handleDelete() {
        try {
            this.loading = true;
            this.alertDialog = true;
            const response = await cartAPI.deleteCart(this.cartId);
            console.log(response);
            this.loading = false;
            this.alertDialog = false;
            this.$destroy();
            this.$el.parentNode.removeChild(this.$el);

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
    async handleProductInfo() {
      //let response = await productAPI.getProdct(productId);
      //this.product = response.data; 
    }
  },
  created() {
    this.handleProductInfo();
  }
}
</script>

<style scoped>
</style>