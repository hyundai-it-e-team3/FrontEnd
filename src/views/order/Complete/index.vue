<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <v-card flat>
      <v-card-title>No.{{this.$route.query.orderNo}}</v-card-title>
      <v-card-subtitle>{{order.orderDate}}</v-card-subtitle>
      
      <v-card-text>

        <v-divider/>
      <v-card v-for="(orderDetail, i) in orderDetailList" :key="i" class="ma-1">
        <product-component :orderDetail=orderDetail />
      </v-card>

        <v-divider/>


      <v-expansion-panels accordion flat>
        <v-expansion-panel>
            <v-expansion-panel-header class="pa-0 pl-4 pr-2">
                최종 결제 정보
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-row>
                <v-col cols="4">상품 총 합계</v-col>
                <v-spacer></v-spacer>
                <v-col cols="8" class="text-right">{{order.totalPrice}}원</v-col>
                </v-row>

                <v-row>
                <v-col cols="4" class="red--text">할인 총 합계</v-col>
                <v-spacer></v-spacer>
                <v-col cols="8" class="text-right red--text">-{{order.discountPrice}}원</v-col>
                </v-row>

                <v-row>
                <v-col cols="4">결제 총 합계</v-col>
                <v-spacer></v-spacer>
                <v-col cols="8" class="text-right">{{order.totalPrice - order.discountPrcie}}원</v-col>
                </v-row>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>

    <v-expansion-panels flat>
        <v-expansion-panel>
            <v-expansion-panel-header class="pa-0 pl-4 pr-2">
                배송지 정보
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-row>
                    <v-col cols="4">받으시는 분</v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="8" class="text-right">{{order.recName}}</v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">연락처</v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="8" class="text-right">{{order.tel}}</v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">배송지</v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="8" class="text-right">{{order.address1}}</v-col>
                    {{order.address2}}
                </v-row>
                <v-row >
                     <v-col>배송 메세지</v-col>
                     <v-col>{{order.request}}</v-col>
                </v-row>
                

            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
    </v-card-text>
    <v-card-actions>
        <v-btn tile width="70%">배송지 수정</v-btn>
        <v-btn tile width="30%">주문 취소</v-btn>
    </v-card-actions>
    </v-card>  
</template>

<script>
import orderAPI from '@/apis/order';
import ProductComponent from './ProductComponent.vue';
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "complete",
    //추가하고 싶은 컴포넌트 등록
    components: {
        ProductComponent
    },
    //컴포넌트 데이터 정의
    data: function() {
        return {
            order: null,
            orderDetailList: null,
            paymentList: null,
            orderNo: this.$route.query.orderNo
        };
    },
    //컴포넌트 메소드 정의
    methods: {
        handleOrderInfo() {
            this.loading = true;
            this.alertDialog = true;
            orderAPI.getOrder(this.$route.query.orderNo)
                .then(response => {
                
                console.log(response.data.order);

                this.order = response.data.order;
                this.orderDetailList = response.data.orderDetails;
                this.paymentList = response.data.payments;

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
        }
    },
    mounted(){
        this.$store.commit("setPageFlag",'title');
    },created() {
        this.handleOrderInfo();
    }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>
