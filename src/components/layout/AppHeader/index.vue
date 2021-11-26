<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <div>
        <main-header v-if="pageFlag==='main'"/>
        <product-header v-if="pageFlag==='product'"/>
    </div>
</template>

<script>
import MainHeader from './MainHeader.vue';
import ProductHeader from './ProductHeader.vue';
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "AppHeader",
    //추가하고 싶은 컴포넌트 등록
    components: {
        MainHeader,
        ProductHeader
    },
    //컴포넌트 데이터 정의
    data: function() {
        return {
        };
    },
    //컴포넌트 메소드 정의
    methods: {
    },
    computed: { 
        pageFlag() {
            return this.$store.state.pageFlag;
        }
    },
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>