<template>
  <v-card class="d-flex mt-1 mb-1 mx-2" outlined>
    <v-col class="pointRegDate col-4">
      {{new Date(pointList.regDate).toLocaleDateString()}}
    </v-col>
    <v-col class="col-5 d-flex justify-end">
      <span class="pointTypeSave" v-if="pointList.type === '적립'">{{pointList.type}}</span>
      <span class="pointTypeUse" v-if="pointList.type === '사용'">{{pointList.type}}</span>
      <span class="pointTypeRefund" v-if="pointList.type === '환불'">{{pointList.type}}</span>
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
  font-weight: bold;
}
.pointTypeUse {
  font-size: 15px;
  color: crimson;
  font-weight: bold;
}
.pointTypeRefund {
  font-size: 15px;
  font-weight: bold;
}
.point {
  font-size: 15px;
}
</style>
