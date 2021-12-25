<template>
  <v-container>
    <v-card elevation="0">
      <v-row>
        <v-col cols="6" class="font-weight-medium pl-4 py-2" style="font-size: 15px;">주문번호 {{ this.$route.query.orderNo }}</v-col>
        <v-col cols="6" class="pr-4 pt-3 d-flex justify-end" style="font-size: 13px;">{{ new Date(order.orderDate).toLocaleDateString() }}</v-col>
      </v-row>
      
      <v-divider />
      
      <v-card-title class="font-weight-bold px-4 py-2" style="letter-spacing: 2px;">{{ this.order.state }}</v-card-title>

      <v-card-text v-for="(orderDetail, i) in orderDetailList" :key="i">
        <product-component
          @check-button="handleCSButton"
          :orderDetail="orderDetail"
        />
      </v-card-text>
    </v-card>

    <v-expansion-panels accordion multiple>
      <v-expansion-panel>
        <v-expansion-panel-header class="font-weight-bold px-3">최종 결제 정보</v-expansion-panel-header>

        <v-expansion-panel-content>
          <v-row v-for="(payment, index) in paymentList" :key="index">
            <v-col cols="5" class="font-weight-bold" style="font-size: 14px;">{{ paymentList[index].type }} 사용 금액</v-col>
            <v-col cols="7" class="text-right" style="font-size: 14px;">{{ paymentList[index].price }} 원</v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header class="font-weight-bold px-3">배송지 정보</v-expansion-panel-header>

        <v-expansion-panel-content>
          <v-row>
            <v-col cols="4" class="font-weight-bold" style="font-size: 14px;">받으실 분</v-col>
            <v-col cols="8" class="text-right"  style="font-size: 14px;">{{ order.name }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="4" class="font-weight-bold" style="font-size: 14px;">연락처</v-col>
            <v-col cols="8" class="text-right"  style="font-size: 14px;">{{ order.tel }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="4" class="font-weight-bold" style="font-size: 14px;">배송지</v-col>
            <v-col cols="8" class="text-right" style="font-size: 14px;">{{ order.address1 }} {{ order.address2 }}</v-col>
          </v-row>
          <v-row>
            <v-col  class="font-weight-bold" style="font-size: 14px;">배송 메세지</v-col>
            <v-col  style="font-size: 14px;">{{ order.request }}</v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-card-actions v-if="this.order.stateCode != 0">
      <v-row
        class="d-flex justify-center mt-3"
        v-if="this.order.stateCode == 1"
      >
        <v-col cols="7">
          <v-btn color="#425745" dark width="100%" @click="dialog = true">
            배송지 수정
          </v-btn>
        </v-col>
        <v-col cols="4">
          <v-btn
            class="ml-1"
            color="#425745"
            dark
            width="100%"
            @click="handleCancelOrder"
            >주문 취소</v-btn
          >
        </v-col>
      </v-row>

      <v-row
        class="d-flex justify-center mt-3 px-2"
        v-if="this.order.stateCode == 2"
      >
        <v-col cols="12">
          <v-btn color="#425745" dark width="100%" @click="handleConfirm">
            주문 확정
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>

    <!-- 배송지 수정 dialog -->
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="font-weight-bold">배송지 변경</span>
            <span class="red--text pl-1" style="font-size: 12px;">* 필수입력</span>
          </v-card-title>
          <v-card-text class="pb-0">
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  class="ma-0"
                  label="받으실 분*"
                  v-model="tempOrder.name"
                  required
                  color="#255938"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  class="ma-0"
                  label="연락처*"
                  v-model="tempOrder.tel"
                  color="#255938"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  class="ma-0"
                  label="우편번호*"
                  v-model="tempOrder.zipCode"
                  color="#255938"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  class="ma-0"
                  label="주소*"
                  v-model="tempOrder.address1"
                  color="#255938"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  class="ma-0"
                  label="상세주소*"
                  v-model="tempOrder.address2"
                  color="#255938"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  class="ma-0"
                  label="배송 메세지"
                  v-model="tempOrder.request"
                  color="#255938"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions class="d-flex justify-center pb-4">
            <v-btn color="#425745" dark small @click="dialog = false">취소</v-btn>
            <v-btn color="#425745" dark small @click="handleAddressUpdate">변경</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <!-- CS dialog -->
    <v-row justify="center">
      <v-dialog v-model="CSdialogReturn" persistent max-width="600px">
        <v-card>
          <v-card-title class="font-weight-bold">
            <span class="font-weight-bold">반품</span>
            <span class="red--text pl-1" style="font-size: 12px;">* 필수입력</span>
          </v-card-title>
          <v-card-text class="pb-0">
            <v-row>
              <v-col cols="12" sm="6" md="4" class="black--text">
                <li>상품명 : {{ orderCS.productName }}</li>
                <li>사이즈 : {{ orderCS.psize }}</li>
                <li>상품코드 : {{ orderCS.productDetailId }}</li>
              </v-col>
              <v-col cols="12" sm="6" md="4" class="pt-2">
                <v-text-field
                  label="접수 사유"
                  v-model="orderCS.content"
                  color="#425745"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions class="d-flex justify-center pb-4">
            <v-btn color="#425745" dark small @click="CSdialogReturn = false">취소</v-btn>
            <v-btn color="#425745" dark small @click="handleCS">접수</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <v-row justify="center">
      <v-dialog v-model="CSdialogChange" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="font-weight-bold">교환</span>
            <span class="red--text pl-1" style="font-size: 12px;">* 필수입력</span>
          </v-card-title>
          <v-card-text class="pb-0">
            <v-row>
              <v-col cols="12" sm="6" md="4" class="black--text">
                <li>상품명 : {{ orderCS.productName }}</li>
                <li>사이즈 : {{ orderCS.psize }}</li>
                <li>상품코드 : {{ orderCS.productDetailId }}</li>
              </v-col>
              <v-select
                class="pt-4"
                :items="colorList"
                item-text="colorCode"
                item-value="productDetailId"
                label="색상*"
                required
                color="#425745"
                dense
                v-model="newColor"
                @change="handleSizeList"
              ></v-select>
              <v-select
                class="pt-1"
                :items="sizeList"
                label="사이즈*"
                required
                dense
                color="#425745"
                v-model="orderCS.newPsize"
              ></v-select>
              <v-text-field
                class="pt-1"
                label="접수 사유"
                v-model="tempOrder.request"
                color="#425745"
                dense
                required
              ></v-text-field>
            </v-row>
          </v-card-text>
          <v-card-actions class="d-flex justify-center pb-4">
            <v-btn color="#425745" dark small @click="CSdialogChange = false">취소</v-btn>
            <v-btn color="#425745" dark small @click="handleCS"> 접수 </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import dayjs from "dayjs";
import orderAPI from "@/apis/order";
import productAPI from "@/apis/product";
import ProductComponent from "./ProductComponent.vue";

export default {
  //컴포넌트의 대표이름 (devtools에 나오는 이름)
  name: "complete",
  //추가하고 싶은 컴포넌트 등록
  components: {
    ProductComponent,
  },
  //컴포넌트 데이터 정의
  data: function () {
    return {
      order: {},
      orderDetailList: [],
      paymentList: [],
      orderNo: this.$route.query.orderNo,
      tempOrder: {},
      dialog: false,
      CSdialogReturn: false,
      CSdialogChange: false,
      orderCS: {},
      colorList: [],
      sizeList: [],
      productDetail: null,
      newColor: null,
      newPsize: null,
    };
  },
  //컴포넌트 메소드 정의
  methods: {
    handleOrderInfo() {
      this.loading = true;
      this.alertDialog = true;
      orderAPI
        .getOrder(this.$route.query.orderNo)
        .then((response) => {
          console.log(response.data.order);

          this.order = response.data.order;
          this.order.orderId = this.orderNo;
          this.tempOrder = JSON.parse(JSON.stringify(this.order));

          this.orderDetailList = response.data.orderDetails;
          this.paymentList = response.data.payments;

          this.loading = false;
          this.alertDialog = false;
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status === 403) {
              this.loading = false;
              this.alertDialog = false;
              this.$router.push("/menu07/auth/jwtauth");
            }
          } else {
            this.loading = false;
            this.alertDialogMessage = "네트워크 통신 오류";
          }
        });
    },
    handleAddressUpdate() {
      orderAPI
        .updateAddress(this.tempOrder)
        .then((response) => {
          console.log(response.data);
          if (response.data.result == "success") {
            this.dialog = false;
            this.order = JSON.parse(JSON.stringify(this.tempOrder));
          }
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status === 403) {
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
      this.dialog = true;
    },
    handleCancelOrder() {
      console.log("주문 취소 실행");
      orderAPI
        .cancleOrder(this.order)
        .then((response) => {
          console.log(response.data);
          if (response.data == "success") {
            this.$router.push("/order/orderlist");
          }
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status === 403) {
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
      orderAPI
        .confirmOrder(this.order)
        .then((response) => {
          console.log(response.data);
          if (response.data == "success") {
            this.$router.push("/order/orderlist");
          }
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status === 403) {
              //
            }
          } else {
            this.loading = false;
            this.alertDialogMessage = "네트워크 통신 오류";
          }
        });
    },
    handleCSButton(productName, productDetailId, psize, type) {
      this.orderCS.productName = productName;
      this.orderCS.orderId = this.orderNo;
      this.orderCS.productDetailId = productDetailId;
      this.orderCS.psize = psize;
      this.orderCS.typeCode = type;

      if (type == 1) this.CSdialogReturn = true;
      if (type == 2) {
        this.colorList = [];
        const response = productAPI
          .getCartProduct(this.orderCS.productDetailId)
          .then((response) => {
            this.productDetail = response.data;
            for (
              let i = 0;
              i < this.productDetail.productDetailList.length;
              i++
            ) {
              this.colorList.push(
                this.productDetail.productDetailList[i].colorCode
              );
            }
            this.colorList = this.productDetail.productDetailList;
          })
          .catch((error) => {
            if (error.response) {
              if (error.response.status === 403) {
                console.log("권한 없음");
              }
            } else {
              this.loading = false;
              this.alertDialogMessage = "네트워크 통신 오류";
            }
          });
        this.colorList = [];
        this.CSdialogChange = true;
      }
      console.log(this.orderCS);
    },
    handleSizeList() {
      this.orderCS.newProductDetailId = this.newColor;
      this.sizeList = [];
      for (let i = 0; i < this.productDetail.productDetailList.length; i++) {
        if (
          this.productDetail.productDetailList[i].productDetailId ==
          this.newColor
        ) {
          for (
            let j = 0;
            j < this.productDetail.productDetailList[i].stockList.length;
            j++
          ) {
            if (this.productDetail.productDetailList[i].stockList[j].amount > 0)
              this.sizeList.push(
                this.productDetail.productDetailList[i].stockList[j].psize
              );
          }
          return;
        }
      }
    },
    handleCS() {
      console.log("반품 신청");
      if (this.orderCS.typeCode == 1) {
        this.orderCS.newProductDetailId = null;
        this.orderCS.newPsize = null;
      }
      orderAPI
        .insertOrderCS(this.orderCS)
        .then((response) => {
          console.log(response.data);
          if (response.data.result == "success") {
            console.log("성공!");
            this.$router.push("/order/orderlist");
          }
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status === 403) {
              //
            }
          } else {
            this.loading = false;
            this.alertDialogMessage = "네트워크 통신 오류";
          }
        });
    },
  },
  mounted() {
    this.$store.commit("setPageFlag", "main");
  },
  created() {
    this.handleOrderInfo();
    this.order.orderDate = dayjs(this.order.orderDate).format(
      "YYYY.MM.DD. HH:MM"
    );
  },
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
.v-expansion-panel::before {
  box-shadow: none !important;
}
</style>
