<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <v-card>
      <v-row>
          <v-col cols="5" class="pa-0 pl-2 pb-2">
            <v-img max-height="170" src="http://newmedia.thehandsome.com/CM/2B/SS/CM2B1KOT032M_DB_W01.jpg/dims/resize/684x1032/"/>
          </v-col>
          <v-col cols="7" class="pa-1 pl-2">
            <v-row>
              <v-col class="pa-4">
                <div class="font-weight-bold">the CASHMERE</div>
                <div>{{propA.pname}}</div>
                <div> BE / L / 1개 </div>
                <div> 출고 준비중 </div>
              </v-col>
            </v-row>
            <v-expansion-panels accordion flat>
                <v-expansion-panel>
                    <v-expansion-panel-header class="pa-0 pl-4 pr-4">
                        <v-row>
                        <v-col cols="3" class="pa-0 text-left">금액</v-col>
                        <v-spacer></v-spacer>
                        <v-col cols="9" class="pa-0 text-right pr-4">354,000원</v-col>
                        </v-row>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="pa-0">
                        <v-row>
                            <v-col cols="6" class="pa-0 body-2">상품 금액</v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="6" class="pa-0 text-right body-2">454,000원</v-col>

                            <v-col cols="6" class="pa-0 body-2">상품 할인</v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="6" class="pa-0 text-right red--text body-2">-80,000원</v-col>

                            <v-col cols="6" class="pa-0 body-2">쿠폰 할인</v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="6" class="pa-0 text-right red--text body-2">-15,000원</v-col>

                            <v-col cols="6" class="pa-0 body-2">포인트 사용</v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="6" class="pa-0 text-right red--text body-2">-5,000원</v-col>
                        </v-row>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
    </v-card>  
</template>

<script>
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "productComponent",
    //추가하고 싶은 컴포넌트 등록
    components: {
    },
    //컴포넌트 데이터 정의
    data: function() {
        return {
        };
    },
    //컴포넌트 메소드 정의
    methods: {
    },
    props: [
        "propA"
    ]
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>
