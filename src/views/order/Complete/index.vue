<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <v-card flat class="ma-2">
      <v-card-title class="ma-1 mb-0">No.{{this.$route.query.orderNo}}</v-card-title>
      
      <v-card-subtitle class="ma-1 mt-0">{{new Date(order.orderDate).toLocaleDateString()}}</v-card-subtitle>

      <v-divider class="py-1"/>
      <v-card-title class="ma-1 mb-0">{{this.order.state}}</v-card-title>

        <v-card v-for="(orderDetail, i) in orderDetailList" :key="i" elevation="0">
            <product-component :orderDetail=orderDetail />
        </v-card>

      <v-card-text>
      <v-expansion-panels accordion flat>
        <v-expansion-panel>
            <v-expansion-panel-header class="pa-0 pl-4 pr-2">
                최종 결제 정보
                
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-row v-for="(payment, index) in paymentList" :key="index">
                <v-col cols="5">{{paymentList[index].type}} 사용 금액</v-col>
                <v-spacer></v-spacer>
                <v-col cols="7" class="text-right">{{paymentList[index].price}} 원</v-col>
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
                    <v-col cols="4">받으실 분</v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="8" class="text-right">{{order.name}}</v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">연락처</v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="8" class="text-right">{{order.tel}}</v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">배송지</v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="12">{{order.address1}}</v-col>
                    <v-col cols="12">{{order.address2}}</v-col>
                </v-row>
                <v-row >
                     <v-col>배송 메세지</v-col>
                     <v-col>{{order.request}}</v-col>
                </v-row>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
    </v-card-text>
    <v-card-actions v-if="this.order.stateCode != 0">
        <v-row class="d-flex justify-center mt-3" v-if="this.order.stateCode == 1">
            <v-col cols="7">
                    <v-btn
                        color="#255938"
                        dark
                        width="100%"
                        @click="dialog=true"
                    >
                    배송지 수정
                    </v-btn> 
            </v-col>
            <v-col cols="4">
            <v-btn class="ml-1" color="#255938" dark width="100%" @click="handleCancelOrder">주문 취소</v-btn>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center mt-3" v-if="this.order.stateCode == 2">
            <v-col cols="11">
                    <v-btn
                        color="#255938"
                        dark
                        width="100%"
                        @click="handleConfirm"
                    >
                    주문 확정
                    </v-btn> 
            </v-col>
            <v-col cols="4" v-if="false">
            <v-btn class="ml-1" color="#255938" dark width="100%">교환/반품</v-btn>
            </v-col>
        </v-row>
    </v-card-actions>



    <!-- 배송지 수정 dialog -->
    <v-row justify="center">
        <v-dialog
            v-model="dialog"
            persistent
            max-width="600px"
        >

        <v-card>
            <v-card-title>
            <span class="text-h5">배송지 변경</span>
            </v-card-title>
            <v-card-text>
            <v-container>
                <v-row>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                    <v-text-field
                    label="받으실 분*"
                    v-model = tempOrder.name
                    required
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                    <v-text-field
                    label="연락처*"
                    v-model = tempOrder.tel
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                    <v-text-field
                    label="우편번호*"
                    v-model = tempOrder.zipCode
                    required
                    ></v-text-field>
                </v-col>
                                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                    <v-text-field
                    label="주소*"
                    v-model = tempOrder.address1
                    required
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                    <v-text-field
                    label="상세주소*"
                    v-model = tempOrder.address2
                    required
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                    <v-text-field
                    label="배송 메세지"
                    v-model = tempOrder.request
                    required
                    ></v-text-field>
                </v-col>                
                </v-row>
            </v-container>
            <small>*필수입력</small>
            </v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="blue darken-1"
                text
                @click="dialog = false"
            >
                취소
            </v-btn>
            <v-btn
                color="blue darken-1"
                text
                @click="handleAddressUpdate"
            >
                변경
            </v-btn>
            </v-card-actions>
        </v-card>

        </v-dialog>
    </v-row>

    </v-card>      
</template>

<script>
import dayjs from 'dayjs';
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
            orderNo: this.$route.query.orderNo,
            tempOrder: null,
            dialog: false
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
                this.order.orderId = this.orderNo;
                this.tempOrder = JSON.parse(JSON.stringify(this.order));
                
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
        },
        handleAddressUpdate() {
            orderAPI.updateAddress(this.tempOrder)
                .then(response => {
                    console.log(response.data);
                    if(response.data.result == 'success') {
                        this.dialog=false;
                        this.order = JSON.parse(JSON.stringify(this.tempOrder));
                    }

                }).catch(error => {
                if(error.response) {
                    if(error.response.status === 403) {
                        this.loading = false;
                        this.alertDialog = false;
                    }
                } else {
                    this.loading = false;
                    this.alertDialogMessage = "네트워크 통신 오류";
                }
            });
        },
        handleAddressUpdateForm() {
            this.tempOrder = JSON.parse(JSON.stringify(this.order));
            this.dialog=true;
        },
        handleCancelOrder() {
            console.log("주문 취소 실행");
            orderAPI.cancleOrder(this.order)
                .then(response => {
                    console.log(response.data);
                    if(response.data == "success") {
                        this.$router.push("/order/orderlist")
                    }
                }).catch(error => {
                if(error.response) {
                    if(error.response.status === 403) {
                        //
                    }
                } else {
                    this.loading = false;
                    this.alertDialogMessage = "네트워크 통신 오류";
                }
            });
        },
        handleConfirm() {
            //주문 확정 로직
            console.log("주문 확정 실행");
            orderAPI.confirmOrder(this.order)
                .then(response => {
                    console.log(response.data);
                    if(response.data == "success") {
                        this.$router.push("/order/orderlist")
                    }
                }).catch(error => {
                if(error.response) {
                    if(error.response.status === 403) {
                        //
                    }
                } else {
                    this.loading = false;
                    this.alertDialogMessage = "네트워크 통신 오류";
                }
            });
        }
    },
    mounted(){
        this.$store.commit("setPageFlag",'main');
    }
    ,created() {
        this.handleOrderInfo();
        this.order.orderDate = dayjs(this.order.orderDate).format("YYYY.MM.DD. HH:MM")
    }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>
    *{
        margin:0px;
        padding:0px;
    }
</style>
