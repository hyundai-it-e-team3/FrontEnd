<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <v-card tile>
        <v-row v-if="!cartFlag">
            <product-component :orderDetail=orderDetail />
        </v-row>
        <v-card-text v-if="cartFlag">
            <v-row v-for="(orderDetail, i) in orderDetailList" :key="i">
                <product-component 
                    :orderDetail=orderDetail />
            </v-row>
        </v-card-text>
    <v-expansion-panels flat v-if="false">
        <v-expansion-panel>
            <v-expansion-panel-header>
                쿠폰 선택
            </v-expansion-panel-header>
            <v-expansion-panel-content>

            <v-card width="100%" flat>
                <v-divider></v-divider>
                <v-list
                    nav
                    dense
                >
                    <v-list-item-group
                    v-model="selectedItem"
                    color="primary"
                    >
                    <v-list-item
                        v-for="(item, i) in items"
                        :key="i"
                    >

                        <v-list-item-content>
                        <v-row>
                            <v-col cols="8" v-text="item.text"></v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="4" class="text-right" v-text="item.rate"></v-col>
                        </v-row>
                        </v-list-item-content>
                    </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-card>

            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
     <v-expansion-panels flat v-if="false">
        <v-expansion-panel>
            <v-expansion-panel-header>
                포인트 사용
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-row>
                    <v-col cols="8">
                        <v-text-field
                            label="Point"
                        ></v-text-field> 
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="4" class="text-right d-flex align-center">
                        <v-btn
                        color="black" dark
                        >적용</v-btn>
                    </v-col>
                </v-row>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
    <v-expansion-panels flat v-if="false">
        <v-expansion-panel>
            <v-expansion-panel-header>
                총 결제 금액
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-row>
                   총 상품 금액 : {{order.totalPrice}}
                   총 할인 금액 : {{order.discountPrice}}
                   총 결제 금액 : {{order.totalPrice - order.discountPrices}}
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
                <v-col cols="8" class="text-right">{{member.point}}P</v-col>
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

    <v-expansion-panels flat>
        <v-expansion-panel>
            <v-expansion-panel-header>
                결제
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-row>
                    <v-col cols="4" class="d-flex align-center">포인트</v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="8" class="text-right"><v-text-field :rules="rules" label="Point"></v-text-field></v-col>
                </v-row>
                <v-row>
                    <v-col cols="4" class="d-flex align-center">쿠폰</v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="8" class="text-right">        
                        <v-text-field
                        label="Coupon"
                        required
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
    


    
    <v-card-actions>
        <v-btn width="100%" color="#255938" dark class="font-weight-bold" @click="handleInsertOrder">주문하기</v-btn>
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
        selectedItem: 0,
        items: [
        { text: '신규회원가입 환영쿠폰', rate: '5%' },
        { text: '추석 이벤트 쿠폰', rate: '3,000₩' },
        { text: '설날 이벤트 쿠폰', rate: '5,500₩' },
        { text: '생일 쿠폰', rate: '15%' }
        ],
        member: null,
        orderDetail: null,
        orderDetailList: [],
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
        },
        paymentList : [
            {
                type: 1,
                price: 10000,
                state: 1,
                accountNo: null,
                bank: null,
                installment: 0,
            }
        ]
    }),
    //컴포넌트 메소드 정의
    methods: {
         async handleInsertOrder() { 
            this.loading = true;
            this.alertDialog = true;
            try {
                const multipartFormData = new FormData();

                multipartFormData.append("memberId", this.$store.state.memberId);
                multipartFormData.append("state", 1);
                multipartFormData.append("request", this.order.request);
                multipartFormData.append("zipCode", this.order.zipCode);
                multipartFormData.append("address1", this.order.address1);
                multipartFormData.append("address2", this.order.address2);
                multipartFormData.append("tel", this.order.tel);
                multipartFormData.append("name", this.order.name);
                multipartFormData.append("couponId", this.order.couponId);

                console.log(multipartFormData);
                const response = await orderAPI.insertOrder(multipartFormData);
                this.order.orderId = response.data;
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

            if(!this.cartFlag) {
                try {
                    const multipartFormData = new FormData();

                    multipartFormData.append("productDetailId", this.orderDetail.productDetailId);
                    multipartFormData.append("psize", this.orderDetail.psize);
                    multipartFormData.append("orderId", this.order.orderId);
                    multipartFormData.append("amount", this.orderDetail.amount);
                    multipartFormData.append("price", this.orderDetail.price);
                    multipartFormData.append("state", 1);

                    console.log(multipartFormData);
                    await orderAPI.insertOrderDetail(multipartFormData);
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
            }

            if(this.cartFlag) {
                for(let i=0; i<this.orderDetailList.length; i++) {
                    console.log(this.orderDetailList[i]);
                    try {
                        const multipartFormData = new FormData();

                        multipartFormData.append("productDetailId", this.orderDetailList[i].productDetailId);
                        multipartFormData.append("psize", this.orderDetailList[i].psize);
                        multipartFormData.append("orderId", this.order.orderId);
                        multipartFormData.append("amount", this.orderDetailList[i].amount);
                        multipartFormData.append("price", this.orderDetailList[i].price);
                        multipartFormData.append("state", 1);

                        await orderAPI.insertOrderDetail(multipartFormData);
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
                }
            }//if cart

            for(let i=0; i<this.paymentList.length; i++) {
                console.log(this.paymentList[i]);
                try {
                    const multipartFormData = new FormData();

                    multipartFormData.append("type", this.paymentList[i].type);
                    multipartFormData.append("price", this.paymentList[i].price);
                    multipartFormData.append("accountNo", this.paymentList[i].accountNo);
                    multipartFormData.append("bank", this.paymentList[i].bank);
                    multipartFormData.append("installment", this.paymentList[i].installment);
                    multipartFormData.append("state", this.paymentList[i].state);
                    multipartFormData.append("orderId", this.order.orderId);

                    console.log(multipartFormData);
                    const response = await orderAPI.insertOrderPayment(multipartFormData);
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
                
            }
            this.$router.push("/order/complete?orderNo="+this.order.orderId);
            
        },
        addOrderDetailList(id) {
            this.loading = true;
            this.alertDialog = true;

            orderAPI.getCartInfo(id).then(response => {
                    let temp = response.data;
                    const res = productAPI.getproductDetailPrice(temp.productDetailId)
                        .then(res => {
                            temp.price = res.data;
                            this.orderDetailList.push(JSON.parse(JSON.stringify(temp))); 
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
            productAPI.getCartProduct(this.orderDetail.productDetailId).then(response => {
                console.log(response.data);
                const temp = response.data; 
                this.orderDetail.price = temp.price;
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
        const linkKey = this.$route.query.link;
        if(linkKey == 'product') {
            this.orderDetail = this.$store.getters["product/getProduct"];
            console.log(this.orderDetail);
            this.addOrderDetail();
        } else if(linkKey == 'cart') {
            this.cartIdList = this.$store.getters["product/getCartIdList"];
            for(var cartId of this.cartIdList) {
                this.addOrderDetailList(cartId);
            }
            this.cartFlag = true;
        }
        this.handleAddressInfo();
        this.handleMemberInfo();
    },
    

}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>