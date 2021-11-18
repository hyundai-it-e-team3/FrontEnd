<!-- 컴포넌트 UI 정의 -->
<template>
    <v-list dense nav>
      <v-list-item>
        <v-list-item-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>TIME</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>MINE</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
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
  }
}
</script>
<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>