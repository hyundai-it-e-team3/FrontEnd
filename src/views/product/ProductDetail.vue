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
        v-for="(slide, i) in slides"
        :key="i"
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
            :src="img[i]"
            class="white--text align-end"
            width="100%"
          ></v-img>
            
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>



    <v-card-title>{{product.productName}}</v-card-title>
    <div class="mt-3"  
      >
      <v-container>
        <v-row>
          <v-col cols="3" class="d-flex align-center">색상 </v-col>
          <v-col cols="2" v-for="(colorChip, index) in colorChips" :key="index">
            <img :src="colorChip" width="30" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3" class="d-flex align-center">사이즈</v-col>
          <v-col cols="2" v-for="(size, index) in size" :key="index">
            {{size}}
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3" class="d-flex align-center">수량 </v-col>
          <v-col>
            <v-row>
              <v-col cols="2">
                <v-icon @click="plusAmount">mdi-plus-circle-outline</v-icon>
              </v-col>
              <v-col cols="2" class="text-center">{{product.amount}}</v-col>
              <v-col cols="2">
                <v-icon @click="minusAmount">mdi-minus-circle-outline</v-icon>
              </v-col>
            </v-row>        
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
          395,000₩
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        {{product.category}}
      </div>

      <div>품번: {{product.produtDetailId}}</div>
    </v-card-text>
    <v-card-text class="text--primary grey lighten-3">
      <div>트렌디한 크롭 길이감이 매력적인 니트 가디건으로 우아한 컷과 세련된 텍스처가 돋보입니다. 넥라인과 여밈에 보다 성글게 짜여진 텍스처가 눈길을 끕니다. 촉감마저 부드러운 100% 캐시미어 소재를 사용하여 고급스럽게 완성도를 높였습니다.</div>
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
          캐시미어 니트 가디건
        </div>
        <v-item-group>
          <v-container>
            <v-row>
              <v-col
                cols="4"
                md="4"
                v-for="(refProduct, i) in refProducts"
                :key="i"    
              >
                <v-item>
                  <v-card
                    class="d-flex align-center"
                    height="100%"
                  >
                    <v-img
                      :src="refProduct"
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
    ]
    ,
    img: [
          'http://newmedia.thehandsome.com/CM/2B/SS/CM2B0KCD230W_PK_W01.jpg/dims/resize/684x1032/',
          'http://newmedia.thehandsome.com/CM/2B/SS/CM2B0KCD230W_PK_W02.jpg/dims/resize/684x1032/',
          'http://newmedia.thehandsome.com/CM/2B/SS/CM2B0KCD230W_PK_W03.jpg/dims/resize/684x1032/',
        ],
    slides: [
          'First',
          'Second',
          'Third',
    ],
    colorChips:[
      'http://newmedia.thehandsome.com/CM/2B/SS/CM2B0KCD230W_PK_C01.jpg',
      'http://newmedia.thehandsome.com/CM/2B/SS/CM2B0KCD230W_CP_C01.jpg'
    ],
    refProducts:[
      'http://newmedia.thehandsome.com/CM/2B/SS/CM2B0KCD231W_LE_W01.jpg/dims/resize/684x1032/',
      'http://newmedia.thehandsome.com/CM/2B/SS/CM2B0KCD231W_LE_W02.jpg/dims/resize/684x1032/',
      'http://newmedia.thehandsome.com/CM/2B/SS/CM2B0KCD231W_LE_W03.jpg/dims/resize/684x1032/'
    ],
    size: [
      "85", "90"
    ],
    stock: 5,
    product : {
      productDetailId: "temp2",
      psize : "L",
      amount : "1",
      stock : "3",
      category : "WOMAN>OUTER>Cardigen/Vest",
      productName : "캐시미어 크롭 니트 가디건"
    },
  }),
  //컴포넌트 메소드 정의
  methods:{
    getProductDetail() {
      //product API 호출


      //호출 결과를 store에 등록 (주문/카트/좋아요에 사용)
      this.$store.commit("product/setProduct", this.product);
    },
    plusAmount() {
      if(this.product.amount+1 > this.stock) {
        console.log("재고가 부족합니다.")
      } else {
        this.product.amount += 1
      }
    },
    minusAmount() {
      if(this.product.amount-1 <= 0) {
        console.log("1개 이상 주문하세요.")
      } else {
        this.product.amount -= 1
      }
    },
  },
  mounted(){
    this.$store.commit("setPageFlag",'product');
  },
  created() {
    this.$store.commit("product/setProduct", this.product);
  }
}
</script>
<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>