<!-- 컴포넌트 UI 정의 -->
<template>
  <v-card>
    <v-container fluid>
      <v-row dense>
        <v-col cols="6">
          <div class="text-h6 ">여성>상의</div>
        </v-col>
        <v-col cols="6">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="black"
                dark
                v-bind="attrs"
                v-on="on"
              >
                정렬 기준
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="6" @click="goProduct">
          <v-card>
            <v-img
              src="http://newmedia.thehandsome.com/CM/2B/SS/CM2B0KVT203W_OW_W01.jpg/dims/resize/684x1032/"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title class="body-2">the CASHMERE</v-card-title>
              <v-card-subtitle class="caption">
                <div>캐시미어 가디건</div>
                <div>123,000₩</div>
              </v-card-subtitle>
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card>
            <v-img
              src="http://newmedia.thehandsome.com/CM/2B/SS/CM2B0KVT203W_OW_W01.jpg/dims/resize/684x1032/"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title class="body-2">the CASHMERE</v-card-title>
              <v-card-subtitle class="caption">
                <div>캐시미어 가디건</div>
                <div>123,000₩</div>
              </v-card-subtitle>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="6">
          <v-card>
            <v-img
              src="http://newmedia.thehandsome.com/CM/2B/SS/CM2B0KVT203W_OW_W01.jpg/dims/resize/684x1032/"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title class="body-2">the CASHMERE</v-card-title>
              <v-card-subtitle class="caption">
                <div>캐시미어 가디건</div>
                <div>123,000₩</div>
              </v-card-subtitle>
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card>
            <v-img
              src="http://newmedia.thehandsome.com/CM/2B/SS/CM2B0KVT203W_OW_W01.jpg/dims/resize/684x1032/"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title class="body-2">the CASHMERE</v-card-title>
              <v-card-subtitle class="caption">
                <div>캐시미어 가디건</div>
                <div>123,000₩</div>
              </v-card-subtitle>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="6">
          <v-card>
            <v-img
              src="http://newmedia.thehandsome.com/CM/2B/SS/CM2B0KVT203W_OW_W01.jpg/dims/resize/684x1032/"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title class="body-2">the CASHMERE</v-card-title>
              <v-card-subtitle class="caption">
                <div>캐시미어 가디건</div>
                <div>123,000₩</div>
              </v-card-subtitle>
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card>
            <v-img
              src="http://newmedia.thehandsome.com/CM/2B/SS/CM2B0KVT203W_OW_W01.jpg/dims/resize/684x1032/"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title class="body-2">the CASHMERE</v-card-title>
              <v-card-subtitle class="caption">
                <div>캐시미어 가디건</div>
                <div>123,000₩</div>
              </v-card-subtitle>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름이다.) 이름을 정하지 않으면 파일명으로
  name:"",
  // 추가하고 싶은 컴포넌트를 등록
  components: {
  },
  //컴포넌트 데이터를 정의
  data:()=>({
    items: [
      { title: '신상품순' },
      { title: 'BEST' },
      { title: '높은 가격순' },
      { title: '낮은 가격순' },
    ],
  }),
  //컴포넌트 메소드 정의
  methods:{
    goProduct(){
      this.$router.push("/product/productDetail");
    }
  }
}
</script>
<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>