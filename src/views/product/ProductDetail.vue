<!-- 컴포넌트 UI 정의 -->
<template>
  <div>
  <v-card
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(img, index) in productDetail.imgList"
        :key="index"
      >
        <v-sheet
          height="100%"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            
          <v-img
            :src="img.img"
            class="white--text align-end"
            width="100%"
          ></v-img>
            
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-card-title>{{product.name}}</v-card-title>
    <div class="mt-3"  
      >
      <v-container>
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
          <v-col cols="3" class="d-flex align-center">수량 </v-col>
          <v-col>
            <v-row>
              <v-col cols="2">
                <v-icon @click="plusAmount()" >mdi-plus-circle-outline</v-icon>
              </v-col>
              <v-col cols="2" class="text-center">{{cart.amount}}</v-col>
              <v-col cols="2">
                <v-icon @click="minusAmount()">mdi-minus-circle-outline</v-icon>
              </v-col>
            </v-row>        
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3"></v-col>
          <v-col cols="7">
            <v-alert
              v-if="alertFlag==1"
              dense
              outlined
              type="error"
            >
              <strong>재고가 부족합니다.</strong>
            </v-alert>
            <v-alert
              v-else-if="alertFlag==2"
              dense
              outlined
              type="error"
            >
              <strong>1개 이상 선택하세요.</strong>
            </v-alert>
            <v-alert
              v-else-if="alertFlag==3"
              dense
              outlined
              type="error"
            >
              <strong>사이즈를 선택하세요.</strong>
            </v-alert>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >

        <div class="grey--text">
          {{product.price}}₩
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        {{product.category}}
      </div>
      <div>품번: {{productDetail.productDetailId}}</div>
    </v-card-text>
    <v-card-text class="text--primary grey lighten-3">
      <div>{{product.content}}</div>
    </v-card-text>
    
    <v-divider></v-divider>

    <v-card-text>
      <div><span class="mr-4">한섬 마일리지</span> <span>6,750P(5%)</span></div>
      <div><span class="mr-11">H.Point</span> <span>135P (0.1%)</span></div>
      <div><span class="mr-14">배송비</span> <span>30,000원 이상 무료배송(실결제 기준)</span></div>
      <div><span class="mr-7">카드사 혜택</span> <span>카드사 혜택 상세보기 ></span></div>
    </v-card-text>
    
    
    
    
    <v-divider/>





    <v-card class="mb-8">
      <v-card-title>함께 코디한 상품</v-card-title>
      <v-card-text>
        <div class="text-subtitle-1">
          {{productDetail.withProduct}}
        </div>
        <v-item-group>
          <v-container>
            <v-row>
              <v-col
                cols="4"
                md="4"
                v-for="(refProduct, i) in productDetail.withImgList"
                :key="i"    
              >
                <v-item>
                  <v-card
                    class="d-flex align-center"
                    height="100%"
                  >
                    <v-img
                      :src="refProduct.img"
                      width="30px"
                    >
                    </v-img>
                  </v-card>
                </v-item>
              </v-col>
            </v-row>
          </v-container>
        </v-item-group>
      </v-card-text>
    </v-card>
  </v-card>
  </div>
</template>

<script>
import product from "@/apis/product";
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름이다.) 이름을 정하지 않으면 파일명으로
  name:"",
  // 추가하고 싶은 컴포넌트를 등록
  components: {
  },
  //컴포넌트 데이터를 정의
  data:()=>({
    colors:[
      'indigo',
      'warning',
      'pink darken-2',
    ],
    product:"",
    productDetail:"",
    colorChips:[],
    stock:-1,
    sizeIdx:-1,
    cart : {
      productDetailId: "",
      psize : "-1",
      amount : "0"
    },
    alertFlag:0
  }),
  //컴포넌트 메소드 정의
  methods:{
    getProductDetail() {
      //호출 결과를 store에 등록 (주문/카트/좋아요에 사용)
      //this.$store.commit("product/setProduct", this.cart);
    },
    plusAmount() {
      if(this.sizeIdx==-1){
        this.alertFlag = 3;
      }
      else if(Number(this.cart.amount)+1 > this.stock) {
        console.log("재고가 부족합니다.");
        console.log(Number(this.cart.amount)+1);
        this.alertFlag = 1;
      } else {
        this.cart.amount = Number(this.cart.amount)+1;
        this.alertFlag = 0;
      }
    },
    minusAmount() {
      if(this.sizeIdx==-1){
        this.alertFlag = 3;
      }
      else if(Number(this.cart.amount)-1 <= 0) {
        console.log("1개 이상 주문하세요.");
        this.alertFlag = 2;
      } else {
        this.cart.amount = Number(this.cart.amount)-1;
        this.alertFlag = 0;
      }
    },
    goProductDetail(index){
      this.productDetail = this.product.productDetailList[index];
      this.sizeIdx = -1;
      this.cart.productDetailId = this.productDetail.productDetailId;
      this.alertFlag = 0;
    },
    selectSize(index){
      this.sizeIdx = index;
      this.stock = this.productDetail.stockList[index].amount;
      this.cart.psize = this.productDetail.stockList[index].psize;
      this.cart.amount = 0;
      console.log(this.stock);
      this.alertFlag = 0;
    }
  },
  async beforeMount(){
    let productId = this.$route.query.productId;
    let response = await product.getProdct(productId);
    this.product = response.data; 
    this.productDetail = this.product.productDetailList[0];
    this.cart.productDetailId = this.productDetail.productDetailId;

    for(let i = 0; i < this.product.productDetailList.length; i++){
      this.colorChips.push(this.product.productDetailList[i].colorChip);
    }
    console.log(this.productDetail);
  },
  mounted(){
    this.$store.commit("setPageFlag",'product');
  },
  created() {
    //this.$store.commit("product/setProduct", this.cart);
  }
}
</script>
<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>