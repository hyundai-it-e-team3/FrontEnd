<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <v-card class="ma-3" flat>
    <v-window show-arrows>
        <template v-slot:prev="{ on, attrs }">
        <v-btn
            icon
            v-bind="attrs"
            v-on="on"
        ><v-icon small>mdi-chevron-left</v-icon></v-btn>
        </template>
        <template v-slot:next="{ on, attrs }">
        <v-btn
            icon
            v-bind="attrs"
            v-on="on"
        ><v-icon small>mdi-chevron-right</v-icon></v-btn>
        </template>



      <v-window-item>
        <v-card color="grey">
            <v-img 
                dark
                gradient="to top, rgba(30,30,30,.7), rgba(0,0,0,.0)"
                class="align-end"
                height="400"
                src="http://newmedia.thehandsome.com/CM/2B/SS/CM2B1KOT032M_DB_W01.jpg/dims/resize/684x1032/">
                <v-row>
                <div class="body-1  ml-10 mb-8">
                    the CASHMERE<br/>
                    캐시미어 크롭 니트 가디건<br/>
                    123,000₩
                </div>
                <v-spacer></v-spacer>
                <v-icon class="ma-5" color="red" large>mdi-heart</v-icon>
                </v-row>
            </v-img>
        </v-card>
      </v-window-item> 
      <v-window-item>
        <v-card color="grey">
            <v-img 
                dark
                gradient="to top, rgba(30,30,30,.7), rgba(0,0,0,.0)"
                class="align-end"
                height="400"
                src="http://newmedia.thehandsome.com/CM/2B/SS/CM2B1KOT032M_DB_W02.jpg/dims/resize/684x1032/">
                <v-row>
                <div class="body-1  ml-10 mb-8">
                    the CASHMERE<br/>
                    캐시미어 크롭 니트 가디건<br/>
                    123,000₩
                </div>
                <v-spacer></v-spacer>
                <v-icon class="ma-5" color="red" large>mdi-heart</v-icon>
                </v-row>
            </v-img>
        </v-card>
      </v-window-item> 
      <v-window-item>
        <v-card color="grey">
            <v-img 
                dark
                gradient="to top, rgba(30,30,30,.7), rgba(0,0,0,.0)"
                class="align-end"
                height="400"
                src="http://newmedia.thehandsome.com/CM/2B/SS/CM2B1KOT032M_DB_W03.jpg/dims/resize/684x1032/">
                <v-row>
                <div class="body-1  ml-10 mb-8">
                    the CASHMERE<br/>
                    캐시미어 크롭 니트 가디건<br/>
                    123,000₩
                </div>
                <v-spacer></v-spacer>
                <v-icon class="ma-5" color="red" large>mdi-heart</v-icon>
                </v-row>
            </v-img>
        </v-card>
      </v-window-item> 
    </v-window>
    
  </v-card>
</template>

<script>
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "",
    //추가하고 싶은 컴포넌트 등록
    components: {
    },
    //컴포넌트 데이터 정의
    data: function() {
        return {
            length: 3,
            onboarding: 0,
        };
    },
    //컴포넌트 메소드 정의
    methods: {
        next () {
        this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
        },
        prev () {
            this.onboarding = this.onboarding - 1 < 0
            ? this.length - 1
            : this.onboarding - 1
        },
    }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>