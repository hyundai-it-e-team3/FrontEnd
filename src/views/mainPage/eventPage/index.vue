<template>
  <v-row>
    <v-col v-for="(item, i) in items" :key="i" cols="12" class="pb-0">
      <v-card :color="item.color" height="180px" dark>
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title v-html="item.title" 
              class="py-0" style="height: 90px; line-height: 25px; font-weight: bold;"></v-card-title>

            <v-card-subtitle v-html="item.artist" style="height: 60px"></v-card-subtitle>

            <v-card-actions>
              <v-btn outlined rounded small class="ml-2" @click="goEventDetail(item.id)"> GO </v-btn>
            </v-card-actions>
          </div>

          <v-avatar class="ma-3" size="160" tile>
            <v-img :src="item.src"></v-img>
          </v-avatar>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "eventPage",
  components: {},
  data() {
    return {
      items: [
        {
          id: "1",
          color: "#DFCB9D",
          src: "https://cdn.hfashionmall.com/promotion/event/2021/11/16/EV202111160002277/EV202111160002277_RPRST_IMG_1PCE_PC_MOBILE_KOR_20211215133917.jpg",
          title: "CHRISTMAS<br>MARKET",
          artist: "연말을 특별하게!",
        },
        {
          id: "2",
          color: "#AEA780",
          src: "https://cdn.hfashionmall.com/display/category/THM/A05/A01/contents/265_26666_56_KOR_20211217104411.jpg",
          title: "겨울 에센셜<br>이너 아이템",
          artist: "겨울 아이템 쇼핑 가이드",
        },
        {
          id: "3",
          color: "#425745",
          src: "https://cdn.hfashionmall.com/promotion/event/2021/12/16/EV202112160002475/EV202112160002475_RPRST_IMG_1PCE_PC_MOBILE_KOR_20211216104848.jpg",
          title: "Holiday Gift<br>Guide",
          artist: "한섬이 제안하는<br>선물 모음집",
        },
      ],
    };
  },
  methods: {
    goEventDetail(id) {
      this.$router.push("/mainpage/eventpage/eventdetailpage?id=" + id);
    },
  },
};
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
  display: block;
}
</style>
