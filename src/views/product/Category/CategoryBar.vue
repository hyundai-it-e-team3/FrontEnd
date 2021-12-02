<!-- 컴포넌트 UI 정의 -->
<template>
  <v-app>
    <v-navigation-drawer app class="secondary" dark v-model="drawer" >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Application </v-list-item-title>
          <v-list-item-subtitle> with Vue + Vuetify </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/about">
          <v-list-item-icon>
            <v-icon>mdi-help-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group :value="false" prepend-icon="mdi-palette-outline" active-class="yellow--text">
          <template v-slot:activator>
            <v-list-item-title>Styles</v-list-item-title>
          </template>
          <v-list-item to="/styles/textandtypography" color="white">
            <v-list-item-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Text and Typography</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/styles/spacing" color="white">
            <v-list-item-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Margin and Padding</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-item to="/gridsystem">
          <v-list-item-icon>
            <v-icon>mdi-view-grid-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Grid System</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>


    </v-navigation-drawer>
  </v-app>
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
  props:[
    "drawer"
  ],
  //컴포넌트 메소드 정의
  methods:{
  },
  created(){
    console.log(this.drawer);
  }
}
</script>
<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>