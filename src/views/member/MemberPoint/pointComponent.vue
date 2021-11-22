<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <v-card>
      <v-card-title>2021.11.01</v-card-title>
      <v-divider/>
      <v-card-text>
          <div>-1,000</div>
          <div>결제 사용</div>
      </v-card-text>
      <v-card-text>
          <div>+3,420</div>
          <div>구매 확정시 적립</div>
      </v-card-text>
    </v-card>  
</template>

<script>
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "pointComponent",
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