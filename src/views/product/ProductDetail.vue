<!-- 컴포넌트 UI 정의 -->
<template>
  <v-card tile>
    <v-carousel
      cycle
      height="600"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(img, index) in productDetail.imgList"
        :key="index"
      >
        <v-sheet height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <v-img
              :src="img.img"
              class="white--text align-end"
              width="100%"
            ></v-img>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-card-title class="py-1">
      <v-col class="py-2">
        <v-row style="font-size: 15px;">{{ product.brandName }}</v-row>
        <v-row class="font-weight-bold">{{ product.name }}</v-row>
        <v-row class="my-1 grey--text" style="font-size: 12px;">품번: {{ productDetail.productDetailId }}</v-row>
      </v-col>
    </v-card-title>
    <v-container>
      <v-row>
        <v-col cols="3" class="d-flex align-center">색상</v-col>
        <v-col
          cols="2"
          class="pl-2"
          v-for="(colorChip, index) in colorChips"
          :key="index"
        >
          <img :src="colorChip" width="30" @click="goProductDetail(index)" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3" class="d-flex align-center">사이즈</v-col>
        <v-col
          cols="2"
          v-for="(stock, index) in productDetail.stockList"
          :key="index"
        >
          <v-btn
            small
            elevation="0"
            v-if="sizeIdx == index"
            color="#377C59"
            dark
            >{{ stock.psize }}</v-btn
          >
          <v-btn
            small
            disabled
            elevation="0"
            v-else-if="productDetail.stockList[index].amount == 0"
            >{{ stock.psize }}</v-btn
          >
          <v-btn
            small
            elevation="0"
            v-else-if="sizeIdx != index"
            @click="selectSize(index)"
            >{{ stock.psize }}</v-btn
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3" class="d-flex align-center">수량</v-col>
        <v-col>
          <v-row>
            <v-col cols="2" class="d-flex align-center">
              <v-icon @click="minusAmount()" color="#343F40">mdi-minus-circle-outline</v-icon>
            </v-col>
            <v-col cols="2" class="d-flex align-center justify-center">
              {{cart.amount}}
            </v-col>
            <v-col cols="2" class="d-flex align-center">
              <v-icon @click="plusAmount()" color="#343F40">mdi-plus-circle-outline</v-icon>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="py-1">
          <v-alert v-if="alertFlag == 1" dense outlined type="error" class="ma-0">
            <strong>재고가 부족합니다.</strong>
          </v-alert>
          <v-alert v-else-if="alertFlag == 3" dense outlined type="error" class="ma-0">
            <strong>사이즈를 선택하세요.</strong>
          </v-alert>
        </v-col>
      </v-row>
    </v-container>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <div
          class="font-weight-medium black--text"
          style="font-size: 25px"
        >
          {{ product.price.toLocaleString() }}원
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        {{ product.category }}
      </div>
    </v-card-text>
    <v-card-text class="text--primary grey lighten-3">
      <div>{{ product.content }}</div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-text>
      <v-row>
        <v-col class="col-4 py-2 pb-0" style="font-size: 12px;">포인트 적립</v-col>
        <v-col class="py-2 pb-0" style="font-size: 12px;">{{ (product.price * 0.05).toLocaleString() }}  (5%)</v-col>
      </v-row>
      <v-row>
        <v-col class="col-4 py-2 pt-0" style="font-size: 12px;">배송비</v-col>
        <v-col class="py-2 pt-0" style="font-size: 12px;">30,000원 이상 무료배송(실결제 기준)</v-col>
      </v-row>
    </v-card-text>

    <v-divider />

    <v-card elevation="0">
      <v-card-title class="font-weight-bold pt-2 pb-0" style="font-size: 15px;">함께 코디한 상품</v-card-title>
      <v-card-text class="pa-1">
        <v-item-group>
          <v-container>
            <v-row>
              <v-col
                cols="4"
                class="pa-1"
                v-for="(refProduct, i) in productDetail.withImgList"
                :key="i"
              >
                <v-item>
                  <v-card
                    class="d-flex align-center"
                    height="100%"
                    tile
                    elevation="0"
                  >
                    <v-img :src="refProduct.img" width="30px"> </v-img>
                  </v-card>
                </v-item>
              </v-col>
            </v-row>
          </v-container>
        </v-item-group>
      </v-card-text>
    </v-card>





  </v-card>
</template>

<script>
import ProductModule from "@/modules/productModule";
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름이다.) 이름을 정하지 않으면 파일명으로
  name: "",
  // 추가하고 싶은 컴포넌트를 등록
  components: {},
  //컴포넌트 데이터를 정의
  data: () => ({
    colors: ["indigo", "warning", "pink darken-2"],
    product: "",
    productDetail: "",
    colorChips: [],
    stock: -1,
    sizeIdx: -1,
    cart: {
      productDetailId: null,
      psize: null,
      amount: "0",
    },
    alertFlag: 0,
  }),
  //컴포넌트 메소드 정의
  methods: {
    getProductDetail() {
      //호출 결과를 store에 등록 (주문/카트/좋아요에 사용)
      //this.$store.commit("product/setProduct", this.cart);
    },
    plusAmount() {
      if (this.sizeIdx == -1) {
        this.alertFlag = 3;
      } else if (Number(this.cart.amount) + 1 > this.stock) {
        console.log("재고가 부족합니다.");
        console.log(Number(this.cart.amount) + 1);
        this.alertFlag = 1;
      } else {
        this.cart.amount = Number(this.cart.amount) + 1;
        this.alertFlag = 0;
      }
    },
    minusAmount() {
      if (this.sizeIdx == -1) {
        this.alertFlag = 3;
      } else if (Number(this.cart.amount) - 1 <= 0) {
        console.log("1개 이상 주문하세요.");
        this.alertFlag = 2;
      } else {
        this.cart.amount = Number(this.cart.amount) - 1;
        this.alertFlag = 0;
      }
    },
    goProductDetail(index) {
      this.productDetail = this.product.productDetailList[index];
      console.log(this.productDetail.productDetailId);
      this.sizeIdx = -1;
      this.cart.productDetailId = this.productDetail.productDetailId;
      this.alertFlag = 0;
    },
    selectSize(index) {
      this.sizeIdx = index;
      this.stock = this.productDetail.stockList[index].amount;
      this.cart.psize = this.productDetail.stockList[index].psize;
      this.cart.amount = 1;
      console.log(this.stock);
      this.alertFlag = 0;
    },
  },
  beforeMount() {
    let productId = this.$route.query.productId;
    ProductModule.getProduct(productId)
      .then((response) => {
        this.product = response.data;
        this.productDetail = this.product.productDetailList[0];
        this.cart.productDetailId = this.productDetail.productDetailId;

        for (let i = 0; i < this.product.productDetailList.length; i++) {
          this.colorChips.push(this.product.productDetailList[i].colorChip);
        }
        console.log(this.productDetail);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  mounted() {
    this.$store.commit("setPageFlag", "product");
  },
  created() {
    this.$store.commit("product/setProduct", this.cart);
  },
  destroyed() {
    this.$store.commit("setPageFlag", "main");
  },
  watch: {
    cart: {
      deep: true,
      handler: function (val) {
        console.log(this.cart);
        this.$store.commit("product/setProduct", this.cart);
      },
    },
  },
};
</script>

<style scoped>

</style>
