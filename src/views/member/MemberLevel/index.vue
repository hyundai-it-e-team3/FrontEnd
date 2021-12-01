<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
  <v-container>
    <v-card-text class="mt-5 mb-10">
      <v-row class="levelTitle d-flex justify-center mb-1">Level. <span class="level">{{level}}</span></v-row>
      <v-row class="d-flex justify-center black--text">고객님의 현재 레벨은 {{level}}레벨입니다.</v-row>
    </v-card-text>
    <v-expansion-panels accordion>
      <level-component v-for="n in 6" :key="n" 
        :n=n />
    </v-expansion-panels>
  </v-container>
</template>

<script>
import LevelComponent from "./levelComponent.vue";
export default {
  //컴포넌트의 대표이름 (devtools에 나오는 이름)
  name: "memberLevel",
  //추가하고 싶은 컴포넌트 등록
  components: {
    LevelComponent,
  },
  //컴포넌트 데이터 정의
  data: function () {
    return {
      level: '',
    };
  },
  //컴포넌트 메소드 정의
  methods: {},
  created() {
    this.level = this.$route.query.level;
  }
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>
.levelTitle {
  font-size: 30px;
  font-weight: 800;
  color: black;
}
.level {
  font-size: 40px;
  font-weight: 800;
  color: black;
}
</style>
