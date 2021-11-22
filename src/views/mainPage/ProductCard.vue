<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <v-card class="pa-0 ma-0">
        <v-img height="200" src="http://newmedia.thehandsome.com/CM/2B/SS/CM2B1KOT032M_DB_W01.jpg/dims/resize/684x1032/">
            <v-icon color="red" dense>mdi-heart</v-icon>
        </v-img>
        <v-card-text>
            <div>the CASHMERE</div>
            <div>캐시미어 크롭 니트 가디건</div>
            <div>123,000₩</div>
        </v-card-text>
  </v-card>
</template>

<script>
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "ProductCard",
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