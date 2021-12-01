<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <v-footer color="black footer" class="pa-2 pt-3" dark absolute>
        <main-footer v-if="pageFlag==='main'"/>
        <product-footer v-if="pageFlag==='product'"/>
        <order-footer v-if="pageFlag==='order'" />
    </v-footer>
</template>

<script>
import MainFooter from './MainFooter';
import ProductFooter from './ProductFooter';
import OrderFooter from './OrderFooter.vue';
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "AppFooter",
    //추가하고 싶은 컴포넌트 등록
    components: {
        MainFooter,
        ProductFooter,
        OrderFooter
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
    created(){
        //console.log(this.$store.state.footerFlag);
    },
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>