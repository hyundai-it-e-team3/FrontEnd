<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
  <v-expansion-panel>
    <v-expansion-panel-header class="black--text font-weight-bold">Level {{ n }}</v-expansion-panel-header>
    <v-expansion-panel-content class="levelContent">
      <div>포인트 기준 : 최근 한 달 기준 {{n}},000,000만원 이상 구매</div>
      <div>혜택 : 등급별 특별 쿠폰 지급</div>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  name: "levelComponent",
  components: {},
  data: function () {
    return {};
  },
  methods: {},
  props: ["n"],
};
</script>

<style scoped>
.levelContent {
  font-size: 12px;
}
</style>
