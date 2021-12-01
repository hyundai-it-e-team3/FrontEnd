<!-- 컴포넌트 UI 정의 -->
<template>
  <v-card>
    <v-card-title></v-card-title>
    <v-card-text >
      <v-list dense v-for="(mainList) in menuList" v-bind:key="mainList.name">
        <v-list-group
          :value="true"
          prepend-icon="mdi-account-circle"
        >
          <template v-slot:activator>
            <v-list-item-title>{{mainList.name}}</v-list-item-title>
          </template>
          <v-list-group
            :value="true"
            no-action
            sub-group
            v-for="(middleList) in mainList.categoryList" v-bind:key="middleList.name">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{middleList.name}}</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="(subList) in middleList.categoryList" v-bind:key="subList.name"
              link
            >
              <v-list-item-title @click="goList(subList.categoryId)">{{subList.name}}</v-list-item-title>
              <v-list-item-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-card-text>
  </v-card>

</template>

<style scoped>

</style>

<script>
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름이다.) 이름을 정하지 않으면 파일명으로
  name:"",
  // 추가하고 싶은 컴포넌트를 등록
  components: {
    
  },
  //컴포넌트 데이터를 정의
  data:()=>({
    menuList:[]
  }),
  //컴포넌트 메소드 정의
  methods:{
    backUrl(){
      this.$router.go(-1);
    },
    goList(categoryId){
      console.log(categoryId);
      this.$router.push(`product/categoryProduct?categoryId=${categoryId}`).catch(()=>{});
    }
  },
  created(){
    this.menuList = this.$store.getters["category/getCategory"];
  }
}
</script>
<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>

