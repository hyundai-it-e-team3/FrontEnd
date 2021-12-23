<template>
  <v-container class="pa-0">
    <v-app-bar class="mb-1" dense elevation="0">
      <v-tabs v-model="tab"
        background-color="white" color="#425745" slider-color="#425745" centered grow>
        <v-tab class="ma-0 font-weight-bold" width="100%" 
          v-for="tabs in tabs" :key="tabs">{{tabs}}</v-tab>
      </v-tabs>
    </v-app-bar>

    <v-tabs-items
      v-for="(pointList) in pointList" :key="pointList.pointSeq">
      <point-component 
        v-if="'전체' === tabs[tab]" 
        :pointList=pointList />
      <point-component
        v-if="pointList.type == tabs[tab]" 
        :pointList=pointList />
    </v-tabs-items>
  </v-container>
</template>

<script>
import PointComponent from "./pointComponent.vue";
import memberAPI from "@/apis/member"

export default {
  name: "MemberPoint",
  components: {
    PointComponent,
  },
  data: function () {
    return {
      tab: '',
      tabs: ['전체', '적립', '사용', '소멸'],
      pointList: {
        pointSeq: '',
        memberId: '',
        orderId: '',
        type: '',
        point: '',
        regDate: ''
      }
    };
  },
  methods: {
    async getPointList(memberId) {
      try {
        const response = await memberAPI.getPointList(memberId);
        this.pointList = response.data;
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    let memberId = this.$store.getters.getMemberId;
    this.getPointList(memberId);
  }

};
</script>

<style scoped>
</style>
