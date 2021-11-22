<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <v-card>
      <v-card-title>No.202112101137500001</v-card-title>
      <v-card-subtitle>2021.11.10. 11:25</v-card-subtitle>
      <v-divider/>
      <product-component :propA="{pname:'캐시미어 레드'}"/>
      <product-component :propA="{pname:'캐시미어 블루'}"/>
      <product-component :propA="{pname:'캐시미어 블랙'}"/>
      <product-component :propA="{pname:'캐시미어 레드'}"/>
      <v-expansion-panels accordion flat>
        <v-expansion-panel>
            <v-expansion-panel-header class="pa-0 pl-4 pr-2">
                최종 결제 정보
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-row>
                <v-col cols="4">상품 총 합계</v-col>
                <v-spacer></v-spacer>
                <v-col cols="8" class="text-right">454,000원</v-col>
                </v-row>

                <v-row>
                <v-col cols="4" class="red--text">할인 총 합계</v-col>
                <v-spacer></v-spacer>
                <v-col cols="8" class="text-right red--text">-100,000원</v-col>
                </v-row>

                <v-row>
                <v-col cols="4">결제 총 합계</v-col>
                <v-spacer></v-spacer>
                <v-col cols="8" class="text-right">354,000원</v-col>
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
                    <v-col cols="8" class="text-right">홍길동</v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">연락처</v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="8" class="text-right">010-1111-1111</v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">배송지</v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="8" class="text-right">서울특별시 송파구</v-col>
                </v-row>

            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
    </v-card>  
</template>

<script>
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
        };
    },
    //컴포넌트 메소드 정의
    methods: {
    }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>
