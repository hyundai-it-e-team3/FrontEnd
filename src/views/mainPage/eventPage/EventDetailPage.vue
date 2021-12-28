<template>
  <v-container class="pa-0">
      <v-col  v-for="(item, i) in items" :key="i" class="pt-1 pb-0">
        <v-row v-if="item.id == id">
          <v-col class=" col-12 pl-4 pb-0" v-html="item.title" style="font-weight: 600; font-size: 20px;"></v-col>
          <v-col class="col-12 pt-0 pl-4 grey--text" style="font-size: 12px;">2021.12.01 ~ 2021.12.31</v-col>
          <v-col class="col-12 pa-0">
            <v-img :src="item.src">
              <v-row class="eventTitle col-12 d-flex justify-center pr-0" v-html="item.subtitle"></v-row>
              <v-row class="eventContent col-12 d-flex justify-center mt-0 pt-0 pr-0" v-html="item.content"></v-row>
            </v-img>
          </v-col>
          <v-col class="col-12 d-flex justify-center">
            <v-btn x-large dark color="black" @click="insertMemberCoupon()">쿠폰 발급하기</v-btn>
          </v-col>
        </v-row>
      </v-col>
  </v-container>
</template>

<script>
import memberAPI from "@/apis/member";

export default {
  name:"EventDetailPage",
  components: {
  },
  data() {
    return {
      id: "",
      items: [
        {
          id: "1",
          color: "#DFCB9D",
          src: "https://cdn.hfashionmall.com/display/html/EVT/EV202111160002277/m-evt_intro.png",
          title: "CHRISTMAS MARKET"
        },
        {
          id: "2",
          color: "#AEA780",
          src: "https://cdn.hfashionmall.com/display/category/THM/A05/A01/contents/265_26666_56_KOR_20211217104411.jpg",
          title: "겨울 에센셜 이너 아이템",
          subtitle: "겨울 에센셜<br>이너 아이템",
          content: "겨울 아이템 쇼핑 가이드",
        },
        {
          id: "3",
          color: "#425745",
          src: "https://cdn.hfashionmall.com/promotion/event/2021/12/16/EV202112160002475/EV202112160002475_RPRST_IMG_1PCE_PC_MOBILE_KOR_20211216104848.jpg",
          title: "Holiday Gift Guide",
        },
      ],
    };
  },
  methods: {
    insertMemberCoupon() {
      let memberCoupon = {
        memberId: "",
        couponId: this.id,
        expDate: "2021-12-31"
      }

      memberCoupon.memberId = this.$store.getters.getMemberId;

      memberAPI.insertMemberCoupon(memberCoupon);
      console.log(memberCoupon);
    }
  },
  created() {
    this.id = this.$route.query.id
  },
  mounted() {
    this.$store.commit("setPageFlag", "default");
  },
}
</script>

<style scoped>
.eventTitle {
  font-size: 35px;
  font-weight: bolder;
  line-height: 1.3;
  color: white;
  margin-top: 200px;
  letter-spacing: 10px;
}
.eventContent {
  font-size: 20px;
  letter-spacing: 2px;
  color: white;
}
</style>