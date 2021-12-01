<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
  <v-expansion-panel>
    <v-expansion-panel-header class="black--text font-weight-bold">Level {{ n }}</v-expansion-panel-header>
    <v-expansion-panel-content class="black--text">
      <div>포인트 기준 : 최근 한 달 기준 {{n}},000,000만원 이상 구매</div>
      <div>혜택 : 등급별 특별 쿠폰 지급</div>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  //컴포넌트의 대표이름 (devtools에 나오는 이름)
  name: "levelComponent",
  //추가하고 싶은 컴포넌트 등록
  components: {},
  //컴포넌트 데이터 정의
  data: function () {
    return {};
  },
  //컴포넌트 메소드 정의
  methods: {},
  props: ["n"],
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped></style>
