<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <v-card>
      <v-app-bar>
      <v-tabs align-with-title 
      background-color="grey darken-3" 
      dark>
        <v-tab>전체</v-tab>
        <v-tab>적립</v-tab>
        <v-tab>사용</v-tab>
        <v-tab>소멸</v-tab>
      </v-tabs>
      </v-app-bar>
      <point-component/>
      <point-component/>
      <point-component/>
    </v-card>  
</template>

<script>
import PointComponent from './pointComponent.vue';
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "MemberPoint",
    //추가하고 싶은 컴포넌트 등록
    components: {
        PointComponent
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