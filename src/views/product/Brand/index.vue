<!-- 컴포넌트 UI 정의 -->
<template>
  <v-card>
    <v-card
      class="mx-auto grey lighten-2"    
    >
      <v-img
        class="white--text align-end"
        src="http://newmedia.thehandsome.com/CM/2B/SS/CM2B0KVT203W_OW_W01.jpg/dims/resize/684x1032/"
        height="330"
      >
        <v-icon right dark large>mdi-heart-outline</v-icon>
      </v-img>

      <v-card-subtitle class="pb-0 black--text text-h6" >
        the CASHMERE
      </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>스스로의 가치 추구를 원하는 소비자를 위해 최상의 소재, 본질에 충실한 캐시미어 전문 브랜드입니다.</div>
      </v-card-text>
    </v-card>
    <template>
      <v-card>
        <v-system-bar></v-system-bar>
        <v-toolbar flat>
          <v-toolbar-title>MD's Pick</v-toolbar-title>
          <v-spacer></v-spacer>
          <div>
          </div>
        </v-toolbar>
        <v-banner
          single-line
          :sticky="sticky"
        >
          이곳은 브랜드 MD가 선택한 제품들이 전시됐습니다.
        </v-banner>
        <v-card-text class="grey lighten-4">
          <v-sheet
            max-width="800"
            class="mx-auto"
          >
            <v-container fluid>
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
            </v-container>
          </v-sheet>
        </v-card-text>
      </v-card>
    </template>
    <v-container fluid>
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