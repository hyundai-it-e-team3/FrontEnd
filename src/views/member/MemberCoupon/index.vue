<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <v-card>
      <v-app-bar>
      <v-tabs align-with-title 
      background-color="grey darken-3" 
      dark>
        <v-tab>사용 가능 쿠폰</v-tab>
        <v-tab>사용 완료 쿠폰</v-tab>
        <v-tab>만료 쿠폰</v-tab>
      </v-tabs>
      </v-app-bar>
      <v-card-title>쿠폰</v-card-title>
      <v-divider/>
      <v-expansion-panels accordion>
            <coupon-component/>
            <coupon-component/>
            <coupon-component/>
            <coupon-component/>
            <coupon-component/>
            <coupon-component/>
            <coupon-component/>
        </v-expansion-panels>
    </v-card>  
</template>

<script>
import couponComponent from './couponComponent.vue';
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "memberCoupon",
    //추가하고 싶은 컴포넌트 등록
    components: {
        couponComponent,
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