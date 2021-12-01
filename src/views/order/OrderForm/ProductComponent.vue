<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <v-card>
      <v-row>
          <v-col cols="4" class="pa-0 pl-2 pb-2">
            <v-img width="100%" :src="product.thumbnail"/>
          </v-col>
          <v-col cols="8" class="pa-1 pl-2">
            <v-row>
              <v-col class="pa-4">
                <div class="font-weight-bold">{{product.brandName}}</div>
                <div>{{product.name}}</div>
                <div> {{cart.productDetailId}} / {{cart.psize}} / {{cart.amount}}개 </div>
              </v-col>
            </v-row>
            <v-expansion-panels accordion flat >
                <v-expansion-panel>
                    <v-expansion-panel-header class="pa-0">
                        <v-row>
                        <v-col cols="6">주문 금액</v-col>
                        <v-spacer></v-spacer>
                        <v-col cols="6" class="text-right">{{product.price}}원</v-col>
                        </v-row>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-row>
                            <v-col cols="6">상품 금액</v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="6" class="text-right">454,000원</v-col>

                            <v-col cols="6">상품 할인</v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="6" class="text-right red--text">-80,000원</v-col>

                            <v-col cols="6">쿠폰 할인</v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="6" class="text-right red--text">-15,000원</v-col>

                            <v-col cols="6">포인트 사용</v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="6" class="text-right red--text">-5,000원</v-col>
                        </v-row>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
    </v-card>  
</template>

<script>
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "productComponent",
    //추가하고 싶은 컴포넌트 등록
    components: {
      
    },
    //컴포넌트 데이터 정의
    data: function() {
        return {
        };
    },
    //컴포넌트 메소드 정의
    methods: {
      
      
    },
    props: [
      "cart",
      "product"
    ],
    created() {

    }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>