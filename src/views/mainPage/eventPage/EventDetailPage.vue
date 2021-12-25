<template>
  <v-container class="pa-0">
      <v-col  v-for="(item, i) in items" :key="i" class="pb-0">
        <v-row v-if="item.id == id">
          <v-col class="col-12 pl-4 pb-0" v-html="item.title" style="font-weight: 600; font-size: 20px;"></v-col>
          <v-col class="col-12 pt-0 pl-4 grey--text" style="font-size: 12px;">2021.12.01 ~ 2021.12.31</v-col>
          <v-col class="col-12 pa-0">
            <v-img :src="item.src"></v-img>
            <v-img :src="item.src2">
              <v-img :src="item.src3"
                style="height: 250px; width: 250px; margin-top: 200px; margin-right: 100px; margin-bottom: 50px; margin-left: 60px;" />
              <v-btn style="margin-left: 110px; margin-right: 100px;" x-large outlined color="white">쿠폰 발급하기</v-btn>
            </v-img>
          </v-col>
        </v-row>

      </v-col>
  </v-container>
</template>

<script>
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
          src2: "https://cdn.hfashionmall.com/display/html/EVT/EV202111160002277/m-evt_section01.png",
          src3: "https://cdn.hfashionmall.com/display/html/EVT/EV202111160002277/m-evt_section01_box01.png",
          title: "Chirstmas Market",
          artist: "연말을 특별하게!",
        },
        {
          id: "2",
          color: "#AEA780",
          src: "https://cdn.hfashionmall.com/display/category/THM/A05/A01/contents/265_26666_56_KOR_20211217104411.jpg",
          title: "겨울 에센셜 이너 아이템",
          artist: "겨울 아이템 쇼핑 가이드",
        },
        {
          id: "3",
          color: "#425745",
          src: "https://cdn.hfashionmall.com/promotion/event/2021/12/16/EV202112160002475/EV202112160002475_RPRST_IMG_1PCE_PC_MOBILE_KOR_20211216104848.jpg",
          title: "Holiday Gift Guide",
          artist: "한섬이 제안하는 선물 모음집",
        },
      ],
    };
  },
  methods: {
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
</style>