<template>
  <v-card elevation="0" tile>
    <v-app-bar dense>
      <v-tabs v-model="tab" 
        background-color="white" color="#425745" slider-color="#425745" centered grow>
        <v-tab class="ma-0 font-weight-bold" width="100%" 
          v-for="tabs in tabs" :key="tabs">{{tabs}}</v-tab>
      </v-tabs>
    </v-app-bar>

    <v-expansion-panels accordion
      v-for="(memberCoupon) in memberCoupon" :key="memberCoupon.couponId">
      <coupon-component v-if="memberCoupon.status == tab+1"
        :memberCoupon=memberCoupon />
    </v-expansion-panels>
  </v-card>
</template>

<script>
import CouponComponent from "./couponComponent.vue";
import memberAPI from '@/apis/member'

export default {
  name: "MemberCoupon",
  components: {
    CouponComponent,
  },
  data: function () {
    return {
      tab: '',
      tabs: ['사용가능 쿠폰', '사용완료 쿠폰', '만료 쿠폰'],
      memberCoupon: {
        couponId: '',
        regDate:  '', 
        expDate: '',
        status: '',
        name: '',
        amount: '',
        type: '',
        content:  ''
      },
    };
  },
  methods: {
    async getMemberCoupon(memberId) {
      try {
        const response = await memberAPI.getMemberCoupon(memberId);
        console.log(response.data)
        this.memberCoupon = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    let memberId = this.$store.getters.getMemberId;
    this.getMemberCoupon(memberId);
  },
};
</script>

<style scoped></style>
