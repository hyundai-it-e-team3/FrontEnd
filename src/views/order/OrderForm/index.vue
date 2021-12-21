<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <v-card tile>
    <v-row v-for="(orderDetail, i) in order.orderDetailList" :key="i">
        <product-component 
            :orderDetail=orderDetail />
    </v-row>

    <v-card flat class="pa-10">
        <v-row class="text-decoration-line-through">
            총 상품 금액 : 
            {{payInfo.totalPrice}}
        </v-row>
        <v-row class="red--text">
            총 할인 금액 : {{payInfo.discountPrice}}
        </v-row>
        <v-row>
            총 결제 금액 : {{payInfo.Price}} ({{payInfo.percent}}%)
        </v-row>
    </v-card>

    <v-card>
    <v-expansion-panels flat>
        <v-expansion-panel>
            <v-expansion-panel-header>
                쿠폰 선택 -{{payInfo.couponPrice}}
            </v-expansion-panel-header>
            <v-expansion-panel-content>

            <v-card width="100%" flat>
                <v-divider></v-divider>
                <v-list
                    nav
                    dense
                >
                    <v-list-item-group
                    v-model="selectedCoupon"
                    color="primary"
                    >
                    <v-list-item
                        v-for="(item, i) in coupons"
                        :key="i"
                    >

                        <v-list-item-content>
                        <v-row>
                            <marquee>
                                {{item.name}} / ~{{item.expDate}}
                            </marquee>
                        </v-row>
                        </v-list-item-content>
                    </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-card>

            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
     <v-expansion-panels flat>
        <v-expansion-panel>
            <v-expansion-panel-header>
                포인트 사용 -{{payInfo.pointPrice}}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-row>
                    <v-col cols="4" class="d-flex align-center">포인트</v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="8" class="text-right"><v-text-field label="Point" v-model=payInfo.pointPrice></v-text-field></v-col>
                </v-row>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
    <v-expansion-panels accordion flat>
        <v-expansion-panel>
            <v-expansion-panel-header>
                주문자 정보
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-row height="50px">
                <v-col cols="4">아이디</v-col>
                <v-spacer></v-spacer>
                <v-col cols="8" class="text-right">{{member.memberId}}</v-col>
                </v-row>
                <v-row height="50px">
                <v-col cols="4" class="d-flex align-center">이름</v-col>
                <v-spacer></v-spacer>
                <v-col cols="8" class="text-right">{{member.name}}</v-col>
                </v-row>

                <v-row height="50px">
                <v-col cols="4" class="d-flex align-center">전화번호</v-col>
                <v-spacer></v-spacer>
                <v-col cols="8" class="text-right">        
                    {{member.tel}}
                </v-col>
                </v-row>

                <v-row height="50px">
                <v-col cols="4">등급</v-col>
                <v-spacer></v-spacer>
                <v-col cols="8" class="text-right">Lv.{{member.memberLevel}}</v-col>
                </v-row>
                <v-row height="50px">
                <v-col cols="4">포인트</v-col>
                <v-spacer></v-spacer>
                <v-col cols="8" class="text-right">{{member.point}}</v-col>
                </v-row>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>


    <v-expansion-panels flat>
        <v-expansion-panel>
            <v-expansion-panel-header>
                배송지 정보
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-row>
                    <v-col cols="4" class="d-flex align-center">받으시는 분</v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="8" class="text-right"><v-text-field label="Name" :value=order.name></v-text-field></v-col>
                </v-row>
                <v-row>
                    <v-col cols="4" class="d-flex align-center">연락처</v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="8" class="text-right">        
                        <v-text-field
                        label="Phone Number"
                        required
                        :value=order.tel
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="4" class="d-flex align-center">배송지</v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="8">
                        <div>
                            <v-text-field
                            label="우편번호" :value=order.zipCode
                            ></v-text-field>        
                            <v-text-field
                            label="주소"
                            :value=order.address1
                            ></v-text-field>
                            <v-text-field label="상세주소" :value=order.address2></v-text-field>
                        </div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="4" class="d-flex align-center">배송메세지</v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="8" class="text-right"><v-text-field label="request" :value=order.request></v-text-field></v-col>
                </v-row>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
    </v-card>
    
    <v-card-actions>
        <v-btn width="100%" color="#255938" dark class="font-weight-bold" @click="handleOrderInsert">주문하기</v-btn>
    </v-card-actions>
   

    </v-card>  
</template>

<script>
import orderAPI from "@/apis/order";
import productAPI from "@/apis/product";
import memberAPI from "@/apis/member";
import ProductComponent from './ProductComponent.vue';
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "complete",
    //추가하고 싶은 컴포넌트 등록
    components: {
        ProductComponent
    },
    //컴포넌트 데이터 정의
    data:()=> ({
        rules: [
            value => !!value || 'Required.',
            value => (value || '').length <= 20 || 'Max 20 characters',
            value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
            },
        ],
        selectedCoupon: -1,
        coupons: [
        ],
        member: null,
        orderDetail: null,
        product: null,
        cartFlag: false,
        temp: null,
        order: {
            request: null,
            zipCode: null,
            address1: null,
            address2: null,
            tel: null,
            name: null,
            couponId: null,
            orderDetailList: [],
            paymentList : [
                {
                    
                }
            ],
            totalPrice: 0
        },
        couponPayment: {
            typeCode: 1,
            price: 0,
            stateCode: 1,
            accountNo: null,
            bank: null,
            installment: 0,
        },
        pointPayment: {
            typeCode: 2,
            price: 0,
            stateCode: 1,
            accountNo: null,
            bank: null,
            installment: 0,
        },
        userPayment: {
            typeCode: 3,
            price: 0,
            stateCode: 1,
            accountNo: null,
            bank: null,
            installment: 0,
        },
        point: 0,
        couponId: null,
        payInfo: {
            totalPrice: 0,
            discountPrice: 0,
            couponPrice: 0,
            pointPrice: 0,
            Price: 0
        }
        
    }),
    //컴포넌트 메소드 정의
    methods: {
        async handleOrderInsert() {
            this.loading = true;
            this.alertDialog = true;
            this.couponPayment.price = this.payInfo.couponPrice;
            this.order.paymentList.push(this.couponPayment);
            this.pointPayment.price = this.payInfo.pointPrice;
            this.order.paymentList.push(this.pointPayment);
            this.userPayment.price = this.payInfo.Price;
            this.order.paymentList.push(this.userPayment);

            try {
                console.log(this.order);
                const response = await orderAPI.insertOrder(this.order);
                console.log("response: " + response.data.result);
                if(response.data.result == "success") {
                    this.$router.push("/order/complete?orderNo="+response.data.order.orderId);
                }
                this.loading = false;
                this.alertDialog = false;
            }   catch(error) {
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
        addOrderDetailByCart(cartId) {
            this.loading = true;
            this.alertDialog = true;

            orderAPI.getCartInfo(cartId).then(response => {
                    let cartData = response.data;
                    const res = productAPI.getproductDetailPrice(cartData.productDetailId)
                        .then(res => {
                            cartData.price = res.data;
                            this.payInfo.totalPrice += res.data;
                            this.order.orderDetailList.push(JSON.parse(JSON.stringify(cartData))); 
                        });
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
        },
        addOrderDetail() {
            productAPI.getproductDetailPrice(this.orderDetail.productDetailId).then(response => {
                console.log(response.data);
                this.orderDetail.price =  response.data; 
                this.payInfo.totalPrice += response.data;
                this.order.totalPrice += response.data;
                console.log("orderDetail : " + this.orderDetail.price);
                this.order.orderDetailList.push(JSON.parse(JSON.stringify(this.orderDetail)));
                console.log(this.orderDetail);
                }).catch(error => {
                if(error.response) {
                    if(error.response.status === 403) {
                        this.$router.push("/auth/jwtauth")
                    }
                } else {
                    console.log("네트워크 통신 오류");
                }
            });
        },
        handleMemberInfo() {
            memberAPI.getMember(this.$store.state.memberId).then(response => {
                console.log(response.data);
                this.member = response.data; 
                }).catch(error => {
                if(error.response) {
                    if(error.response.status === 403) {
                        this.$router.push("/auth/jwtauth")
                    }
                } else {
                    console.log("네트워크 통신 오류");
                }
            });

        },
        handleAddressInfo() {
            memberAPI.getDefaultAddress(this.$store.state.memberId).then(response => {
                    console.log(response.data);
                    const address = response.data; 
                    this.order.zipCode = address.zipCode;
                    this.order.address1 = address.address1;
                    this.order.address2 = address.address2;
                    this.order.tel = address.tel;
                    this.order.name = address.name;
                    
                }).catch(error => {
                if(error.response) {
                    if(error.response.status === 403) {
                        this.$router.push("/auth/jwtauth")
                    }
                } else {
                    console.log("네트워크 통신 오류");
                }
            });
        }
    },
    mounted(){
        this.$store.commit("setPageFlag",'product');
    },
    created(){
        this.order.memberId = this.$store.state.memberId;

        memberAPI.getMemberCoupon(this.$store.state.memberId).then(response => {
                console.log("COUPON : " + response.data);
                this.coupons = response.data;
            }).catch(error => {
            if(error.response) {
                if(error.response.status === 403) {
                    this.$router.push("/auth/jwtauth")
                }
            } else {
                console.log("네트워크 통신 오류");
            }
        });

        const linkKey = this.$route.query.link;
        if(linkKey == 'product') {
            this.orderDetail = this.$store.getters["product/getProduct"];
            this.addOrderDetail();
        } else if(linkKey == 'cart') {
            this.cartIdList = this.$store.getters["product/getCartIdList"];
            for(var cartId of this.cartIdList) {
                this.addOrderDetailByCart(cartId);
            }
            this.cartFlag = true;
        }
        this.handleAddressInfo();
        this.handleMemberInfo();
    },
    watch: {
        selectedCoupon (to, from) {
            this.order.couponId = this.coupons[to].couponId;
            if(this.coupons[to].type == 1) {
                this.payInfo.couponPrice = this.coupons[to].amount;
            } else {
                this.payInfo.couponPrice = parseInt(this.coupons[to].amount) / 100 * this.payInfo.totalPrice ;
            }
        },
        payInfo: {
            deep: true,
            handler: function (val) {
                console.log(val);
                this.payInfo.discountPrice = this.payInfo.couponPrice + parseInt(this.payInfo.pointPrice);
                this.payInfo.Price = this.payInfo.totalPrice - this.payInfo.discountPrice;
                this.payInfo.percent = parseInt(this.payInfo.discountPrice / this.payInfo.totalPrice * 100) ;
            }
        }
        
    }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>