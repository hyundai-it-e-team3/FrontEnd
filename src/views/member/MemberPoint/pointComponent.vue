<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
  <v-card class="d-flex ml-2 mr-2 mt-1 mb-1 pa-1" outlined>
    <v-col class="pointRegDate col-4">
      {{new Date(pointList.regDate).toLocaleDateString()}}
    </v-col>
    <v-col class="col-5 d-flex justify-end">
      <span class="pointTypeSave" v-if="pointList.type === '적립'">{{pointList.type}}</span>
      <span class="pointTypeUse" v-if="pointList.type === '사용'">{{pointList.type}}</span>
    </v-col>
    <v-col class="point col-3 d-flex justify-end">
      {{pointList.point}} 점
    </v-col>
  </v-card>
</template>

<script>
export default {
  name: "pointComponent",
  components: {
  },
  data: function () {
    return {};
  },
  methods: {},
  props:  [
    "pointList"
  ]
};
</script>

<style scoped>
.pointRegDate {
  font-size: 15px;
  font-weight: 500;
}
.pointTypeSave {
  font-size: 15px;
  color: rgb(39, 100, 232);
}
.pointTypeUse {
  font-size: 15px;
  color: crimson;
}
.point {
  font-size: 15px;
}
</style>
