<template>
  <v-card
    class="mt-2 pa-0"
    >
      
      <v-row>
        <v-col cols="4">
          <v-img :src="productDetail.thumbnail" height="180" class="d-flex flex-row pl-2 pt-0"
          gradient="to top, rgba(0,0,0,.3), rgba(0,0,0,.3)" >
        <v-row class="d-flex justify-space-between">     
          <v-checkbox x-large
            class="ma-0"
            color="orange"
            :value="cartId"
            v-model="cartSelected"
            @click="handleCheckbox()"
        ></v-checkbox>
          {{cartId}}
        </v-row>
        </v-img>
              </v-col>


          <v-col cols="8" v-if="!changeFlag" class="pa-2">
            <v-row  class="d-flex justify-space-between">
              <v-col cols="11">
                <div >[{{productDetail.brandName}}]</div>
                <h2>{{productDetail.name}}</h2>
                <div class="font-weight-bold">{{productDetail.price * amount}}원</div>
              </v-col>
              <v-col cols="1">
                <v-icon small @click="handleDelete()" class="ma-0">mdi-close</v-icon>
              </v-col>
            </v-row>



            <v-row class="d-flex flex-row-reverse ">
              <v-col cols="2">
                <v-icon small @click="plusAmount">mdi-plus</v-icon>
              </v-col>
              <v-col cols="3" class="text-center">{{amount}}</v-col>
              <v-col cols="2">
                <v-icon small @click="minusAmount">mdi-minus</v-icon>
              </v-col>
            </v-row>
            <v-divider/>



            <v-row class="d-flex justify-end">
              <v-col>
                <v-row class="d-flex align-center">
                  <v-col cols="12" >
                    <div class="text-right">상품코드 : {{productDetailId}}</div>
                    <div class="text-right">사이즈 : {{psize}}</div>
                  </v-col>
                  <v-col cols="12" class="text-right" @click="changeDetail">변경</v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          




          <v-col cols="8" v-if="changeFlag">
            <v-row>
              <v-col cols="3" class="d-flex align-center">색상 </v-col>
              <v-col cols="2" v-for="(colorChip, index) in colorChips" :key="index">
                <img :src="colorChip" width="30" @click="goProductDetail(index)"/>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3" class="d-flex align-center">사이즈</v-col>
              <v-col cols="2" v-for="(stock, index) in productDetail.stockList" :key="index">
                <v-btn small v-if="sizeIdx==index" color="success" dark>{{stock.psize}}</v-btn>
                <v-btn small v-else-if="productDetail.stockList[index].amount==0" color="secondary" dark>{{stock.psize}}</v-btn>
                <v-btn small v-else-if="sizeIdx!=index" @click="selectSize(index)">{{stock.psize}}</v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn  @click="handleUpdate" >변경하기</v-btn>
              </v-col>
            </v-row>
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
        thumbnail: "@/assets/images/event.png",
        productDetailList: [{}]
      },
      colorChips: null,
      cartSelected: false
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

          for(let i = 0; i < this.productDetail.productDetailList.length; i++){
            this.colorChips.push(this.productDetail.productDetailList[i].colorChip);
          }
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
    }
  },
  created() {
    this.handleProductInfo();
    
    

  },
  onClickOutside () {
    this.active = false
  }
}
</script>

<style scoped>
  *{
    margin: 0px;
    padding: 0px;
  }
</style>