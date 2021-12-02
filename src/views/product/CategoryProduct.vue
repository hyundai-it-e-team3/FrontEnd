<template>
  <v-app>
      <v-sheet class="my-3" max-width="700">
        <div class="d-flex mb-3">
          <v-btn
            dark
            v-for="(item, index) in $store.getters['category/getSelectedCategory']"
            :key="index"
            class="black mr-2"
            >{{ item.name
            }}<v-icon
              v-if="index == $store.getters['category/getSelectedCategory'].length - 1"
              small
              class="ml-2"
              @click="deleteCategory(item)"
              >mdi-window-close</v-icon
            ></v-btn
          >
        </div>
        <v-slide-group multiple show-arrows>
          <v-slide-item
            v-for="category in categoryList"
            :key="category.name"
            v-slot="{ active }"
          >
            <v-btn
              class="mx-2"
              :input-value="active"
              active-class="purple white--text"
              depressed
              @click="goDetailCategory(category)"
            >
              {{ category.name }}
            </v-btn>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    <product-list listType="list" :categoryId="categoryId"/>
  </v-app>
</template>

<script>
import ProductList from '@/components/layout/ProductList/index.vue';
export default {
  name:"categoryProduct",
  components: {
    ProductList,
  },
  data:()=>({
    newList :[],
    categoryId:"KI",
    selectCategoryList:[],
    categoryList:[]
  }),
  methods: {
    deleteCategory(category){
      this.$store.commit("category/popSelectedCategory");
      if(this.$store.getters["category/getSelectedCategory"].length==0){
        this.$store.commit("category/setCurCategory",null);
        this.categoryId = "0";
        this.categoryList = this.$store.getters["category/getCategory"];
      }else{
        this.$store.commit("category/setCurCategory",category.parent);
        this.categoryId = category.parent.categoryId;
        this.categoryList = category.parent.categoryList;
      }
    },
    goDetailCategory(category){
      let parent = this.$store.getters["category/getCurCategory"];
      category["parent"] = parent;
      this.categoryId = category.categoryId;
      this.categoryList = category.categoryList;
      this.$store.commit("category/addSelectedCategory",category);
      this.$store.commit("category/setCurCategory",category);
    }
  },
  beforeMount(){
    console.log("-------");
    console.log(this.$store.getters["category/getCurCategory"]);
    console.log("daffffffffffasfas");
    console.log(this.$store.getters["category/getSelectedCategory"])
    console.log("d-----------");
    this.selectCategoryList = [];
    let curCategory = this.$store.getters["category/getCurCategory"];
    if(curCategory==null){
      this.categoryId = "0";
      this.categoryList = this.$store.getters["category/getCategory"];
    }else{
      this.categoryId = curCategory.categoryId;
      this.categoryList = curCategory.categoryList;
    }
  }
  ,
  watch: {
    categoryId() {

    },
  },
}
</script>

<style scoped>
</style>