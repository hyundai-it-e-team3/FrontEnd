<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <v-expansion-panel>
        <v-expansion-panel-header>Level 1</v-expansion-panel-header>
        <v-expansion-panel-content>
            <div>포인트 기준 : 전월 기준 1000000만원 이상</div>
            <div>혜택 : 특별 쿠폰 지급</div>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "levelComponent",
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