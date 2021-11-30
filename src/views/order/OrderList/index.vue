<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <v-card>
        <v-row v-for="(order) in orderList" :key="order.orderId">
            <order-component :orderId=order.orderId           
                            :orderDate=order.orderDate
                            :totalPrice=order.totalPrice
                            :state=order.state
            />
        </v-row>
        <alert-dialog v-if="alertDialog"
            :loading="loading"
            :message="alertDialogMessage"
            @close="alertDialog=false"/>
    </v-card>
</template>

<script>
import orderAPI from "@/apis/order";
import OrderComponent from './OrderComponent.vue';
import AlertDialog from "@/components/alert/AlertDialog"
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "orderList",
    //추가하고 싶은 컴포넌트 등록
    components: {
        OrderComponent,
        AlertDialog
    },
    //컴포넌트 데이터 정의
    data: function() {
        return {
            orderList: null,
            alertDialog: false,
            alertDialogMessage: null,
        };
    },
    //컴포넌트 메소드 정의
    methods: {
        handleOrderList() {
            this.loading = true;
            this.alertDialog = true;
            orderAPI.getOrderList(this.$store.state.memberId)
                .then(response => {
                console.log(response.data);
                this.orderList = response.data;
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
    created() {
        this.handleOrderList();
    }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>