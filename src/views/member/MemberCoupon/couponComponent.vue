<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      <div class="couponName font-weight-bold">{{memberCoupon.name}}</div>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <div class="couponAmount font-weight-bold" style="color: #FF7916;">{{memberCoupon.amount}}
        <span v-if="memberCoupon.type === '1'">원</span>
        <span v-if="memberCoupon.type === '2'">%</span>
         할인
      </div>
      <div style="font-size: 15px;">{{memberCoupon.content}}</div>
      <div style="font-size: 13px;">{{new Date(memberCoupon.expDate).toLocaleDateString()}} 까지</div>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>

export default {
  name: "CouponComponent",
  components: {},
  data: function () {
    return {};
  },
  props: [
    "memberCoupon"
  ],
};
</script>

<style scoped>
.couponName {
  font-size: 15px;
}
.couponAmount  {
  font-size: 17px;
}
</style>
