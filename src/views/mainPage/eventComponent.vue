<template>
  <v-carousel 
    hide-delimiters
    cycle="true"
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
        <v-row
          class="fill-height ml-5 pb-5"
          align="end"
          justify="start"
        >
          <div class="white--text">
            <span class="eventTitle" v-html="eventTitle[i]" />
            <br>
            <span class="eventContent" v-html="eventContent[i]" />
          </div>
        </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "eventComponent",
  components: {},
  data: function () {
    return {
      items: [
          {src: 'https://cdn.hfashionmall.com/display/plan/94/4694/4694_MAIN_PC_KOR_20211210165701.jpg',},
          {src: 'https://cdn.hfashionmall.com/display/category/THM/A05/A01/contents/280_86445_5_KOR_20211216163155.jpg',},
          {src: 'https://cdn.hfashionmall.com/display/category/THM/A05/A01/contents/283_11810_251_KOR_20211217112122.jpg?RS=850',}
      ],
      eventTitle: [
        "CHRISTMAS<br>MARKET",
        "겨울 에센셜<br>이너 아이템",
        "Holiday<br>Gift Guide"
      ],
      eventContent: [
        "연말을 특별하게!<br>쿠폰백부터 선착순 특가까지",
        "겨울 아이템 쇼핑 가이드",
        "한섬이 제안하는 선물 모음전"
      ]
    };
  },
  methods: {
  },
};
</script>

<style scoped>
.eventTitle {
  font-size: 40px;
  font-weight: bolder;
  line-height: 1.3;
}
.eventContent {
  font-size: 15px;
  letter-spacing: 2px;
}
</style>
