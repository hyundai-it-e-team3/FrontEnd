<template>
  <v-card class="mb-1" outlined>
      <v-row>
        <v-col cols="4">
          <v-img :src="productDetail.thumbnail" height="auto" class="d-flex flex-row pl-2 pt-0">
          <v-row class="d-flex justify-space-between">     
            <v-checkbox x-large
              class="ma-0 mt-1"
              color="grey darken-3"
              :value="cartId"
              v-model="cartSelected"
              @click="handleCheckbox()"
          ></v-checkbox>
          </v-row>
          </v-img>
        </v-col>

        <v-col cols="8" v-if="!changeFlag" class="pa-2">
          <v-row  class="d-flex justify-space-between">
            <v-col cols="11">
              <div class="font-weight-bold">[{{productDetail.brandName}}]</div>
              <div>{{productDetail.name}}</div>
              <div>{{(productDetail.price * amount).toLocaleString()}}원</div>
            </v-col>
            <v-col cols="1">
              <v-icon small @click="handleDelete()" class="ma-0">mdi-close</v-icon>
            </v-col>
          </v-row>

          <v-row class="d-flex justify-end">
            <v-col cols="2">
              <v-icon small @click="minusAmount">mdi-minus</v-icon>
            </v-col>
            <v-col cols="3" class="text-center">{{amount}}</v-col>
            <v-col cols="2">
              <v-icon small @click="plusAmount">mdi-plus</v-icon>
            </v-col>
          </v-row>
          <v-divider/>

          <v-row class="d-flex justify-end">
            <v-col>
              <v-row class="d-flex align-center">
                <v-col cols="12" >
                  <!-- <div class="text-right mt-1">{{productDetailId}}</div> -->
                  <div class="text-right pt-1" style="font-size: 13px;">사이즈 : {{psize}}</div>
                </v-col>
                <v-col cols="12" class="text-right" style="font-size: 15px;" @click="changeDetail">변경</v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
          
          <v-col cols="8" v-if="changeFlag" class="d-flex align-center justify-center">
            
            <v-card width="100%" class="pa-3" flat>
              <v-card-text>
                <v-row>
                  <v-col cols="3" class="d-flex align-center">색상 </v-col>
                  <v-col cols="9" class="d-flex align-center">
                      <div class="mr-2" v-for="(pd, index) in productDetail.productDetailList" :key="index">
                        <img :src="pd.colorChip" width="30" @click="changeColor(index)"/>
                      </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="3" class="d-flex align-center">사이즈</v-col>
                  <v-col cols="9" class="d-flex align-center">
                    <div class="mr-2" v-for="(stock, index) in productDetail.productDetailList[this.colorIdx].stockList" :key="index">
                      <v-btn v-if="stock.amount == 0" x-small secondary disabled> {{stock.psize}} </v-btn>
                      <v-btn v-if="stock.amount != 0" x-small elevation="0" color="#E2E3DE" @click="handleUpdate(stock)" v-value="stock.psize">{{stock.psize}}</v-btn>
                    </div>
                  </v-col>
                </v-row>
                <v-divider class="mt-3 mb-3"/>
                <v-row class="d-flex justify-end">
                  <div @click="changeDetail" class="mt-7">취소</div>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>

      </v-row>
  </v-card>
</template>

<script>
import orderAPI from "@/apis/order";
import productAPI from "@/apis/product";
export default {
  name:"CartComponent",
  components: {
  },
  data() {
    return {
      changeFlag: false,
      productDetail: {
        thumbnail: null,
        productDetailList: [{}]
      },
      colorChips: null,
      cartSelected: false,
      colorIdx: 0,
    };
  },
  props: [
    "productDetailId",
    "psize",
    "amount",
    "cartId"
  ],
  methods: {
    changeDetail() {
      this.changeFlag = !this.changeFlag
    },
    changeColor(index) {
      this.colorIdx = index;
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
            const response = await orderAPI.deleteCart(this.cartId);
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
    handleProductInfo() {
      this.loading = true;
      this.alertDialog = true;
      const response = productAPI.getCartProduct(this.productDetailId).then(response => {
          this.productDetail = response.data; 

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
      this.loading = false;
      this.alertDialog = false;
    } ,
    handleCheckbox() {
      this.$emit("check-checkbox", this.cartId, this.cartSelected);
    },
    async handleUpdate(stock) {
      try {
          this.loading = true;
          this.alertDialog = true;
          
          const multipartFormData = new FormData();
          multipartFormData.append("cartId", this.cartId);
          multipartFormData.append("productDetailId", stock.productDetailId);
          multipartFormData.append("psize", stock.psize);
          multipartFormData.append("amount", this.amount);

          this.psize = stock.psize;
          this.productDetailId = stock.productDetailId;

          const response = await orderAPI.updateCart(this.cartId, multipartFormData);
          this.loading = false;
          this.alertDialog = false;
          this.$el.parentNode.replaceChild(this.$el);
      } catch(error) {
          if(error.response) {
              if(error.response.status === 403) {
                  this.loading = false;
                  this.alertDialog = false;
              } else {
                  this.loading = false;
                  this.alertDialogMessage = "네트워크 통신 오류";
              }
          }
      }
      this.changeFlag = !this.changeFlag;
    },
    async handleUpdateAmount(amount) {
      try {
          this.loading = true;
          this.alertDialog = true;
          const response = await orderAPI.updateCartAmount(this.cartId, amount);
          this.loading = false;
          this.alertDialog = false;
          this.$el.parentNode.replaceChild(this.$el);
      } catch(error) {
          if(error.response) {
              if(error.response.status === 403) {
                  this.loading = false;
                  this.alertDialog = false;
              } else {
                  this.loading = false;
                  this.alertDialogMessage = "네트워크 통신 오류";
              }
          }
      }
    },
  },
  created() {
    this.handleProductInfo();
  },
  onClickOutside () {
    this.active = false
  },
  watch: {
    amount(to, from) {
      this.handleUpdateAmount(to);
    }
  }
  
}
</script>

<style scoped>
  *{
    margin: 0px;
    padding: 0px;
    
  }
</style>