<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <v-card>
      <v-list class="ma-3">
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              홍길동
            </v-list-item-title>
            <v-list-item-subtitle>lv.5</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-chevron-right</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      
      
      <v-divider></v-divider>

      <v-container>
        
        <v-row class="ma-1">
          <v-col cols="4">
            <v-row class="d-flex justify-center">
              <v-icon large>mdi-clipboard-list-outline</v-icon> 
            </v-row>
            <v-row class="d-flex justify-center">
              <span class="text-overline">주문 내역</span>
            </v-row>
          </v-col>
          <v-col cols="4">
            <v-row class="d-flex justify-center">
              <v-icon large>mdi-ticket-percent-outline</v-icon>
            </v-row>
            <v-row class="d-flex justify-center">
              <span class="text-overline">쿠폰</span>
            </v-row>
          </v-col>
          <v-col cols="4">
            <v-row class="d-flex justify-center">
              <v-icon large>mdi-alpha-p-circle-outline</v-icon>
            </v-row>
            <v-row class="d-flex justify-center">
              <span class="text-overline">포인트</span>
            </v-row>
          </v-col>
        </v-row>
      </v-container>


      <v-divider></v-divider>

      <v-list dense>
        <v-list-item-group color="primary">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>로그아웃</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>회원탈퇴</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
</template>

<script>
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "myPage",
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
    }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>