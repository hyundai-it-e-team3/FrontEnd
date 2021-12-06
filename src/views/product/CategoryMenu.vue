<template>
  <v-container class="pa-2 pl-4">
    <v-list dense 
      v-for="(mainList, mainIndex) in menuList" v-bind:key="mainList.name">
      <v-list-group active-class="black--text" :value="false">
        <template v-slot:activator>
          <v-list-item-title class="body-1">{{ mainList.name }}</v-list-item-title>
        </template>
        <v-list-group
          active-class="black--text"
          class="pl-0"
          :value="false"
          sub-group
          v-for="(middleList, middleIndex) in mainList.categoryList" v-bind:key="middleList.name">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ middleList.name }}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="(subList, subIndex) in middleList.categoryList" v-bind:key="subList.name" link>
            <v-list-item-title @click="goList(subList.categoryId, mainIndex, middleIndex, subIndex)" >
              {{ subList.name }}
            </v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>
  </v-container>
</template>

<style scoped></style>

<script>
export default {
  name: "CategoryMenu",
  components: {},
  data: () => ({
    menuList: [],
  }),
  methods: {
    backUrl() {
      this.$router.go(-1);
    },
    goList(categoryId, mainIndex, middleIndex, subIndex) {

      let main = this.menuList[mainIndex];
      main["parent"] = null;
      let middle = main.categoryList[middleIndex];
      middle["parent"] = main;
      let sub = middle.categoryList[subIndex];
      sub["parent"] = middle;
      let cateList = [main, middle, sub];

      this.$store.commit("category/setSelectedCategory",cateList);
      this.$store.commit("category/setCurCategory",sub);
      this.$router.push(`/product/categoryProduct?categoryId=${categoryId}`).catch(()=>{});
    }
  },
  created() {
    this.menuList = this.$store.getters["category/getCategory"];
  },
};
</script>

<style scoped></style>
