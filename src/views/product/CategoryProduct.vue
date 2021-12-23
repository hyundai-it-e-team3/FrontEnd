<template>
  <v-app>
    <v-sheet>
      <div class="d-flex pa-2">
        <v-btn
          dark
          small
          color="#46614A"
          elevation="0"
          v-for="(item, index) in $store.getters[
            'category/getSelectedCategory'
          ]"
          :key="index"
          class="mr-1"
        >
          {{ item.name }}
          <v-icon
            v-if="
              index == $store.getters['category/getSelectedCategory'].length - 1
            "
            x-small
            class="ml-2"
            @click="deleteCategory(item)"
          >
            mdi-window-close
          </v-icon>
        </v-btn>
      </div>
      <v-slide-group show-arrows>
        <v-slide-item
          v-for="category in categoryList"
          :key="category.name"
          v-slot="{ active }"
        >
          <v-btn
            class="ml-2"
            :input-value="active"
            color="#AEA780"
            dark
            depressed
            small
            @click="goDetailCategory(category)"
          >
            {{ category.name }}
          </v-btn>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>

    <product-list listType="list" :categoryId="categoryId" :pSortId="sortId"/>
  </v-app>
</template>

<script>
import ProductList from "@/components/layout/ProductList/index.vue";
export default {
  name: "categoryProduct",
  components: {
    ProductList,
  },
  data: () => ({
    newList: [],
    categoryId: "KI",
    selectCategoryList: [],
    categoryList: [],
    sortId: "",
  }),
  methods: {
    deleteCategory(category) {
      this.$store.commit("category/popSelectedCategory");
      if (this.$store.getters["category/getSelectedCategory"].length == 0) {
        this.$store.commit("category/setCurCategory", null);
        this.categoryId = "0";
        this.categoryList = this.$store.getters["category/getCategory"];
      } else {
        this.$store.commit("category/setCurCategory", category.parent);
        this.categoryId = category.parent.categoryId;
        this.categoryList = category.parent.categoryList;
      }
    },
    goDetailCategory(category) {
      let parent = this.$store.getters["category/getCurCategory"];
      category["parent"] = parent;
      this.categoryId = category.categoryId;
      this.categoryList = category.categoryList;
      this.$store.commit("category/addSelectedCategory", category);
      this.$store.commit("category/setCurCategory", category);
    },
  },
  beforeMount() {
    console.log(this.$store.getters["category/getCurCategory"]);
    console.log(this.$store.getters["category/getSelectedCategory"]);
    this.selectCategoryList = [];

    if (this.$route.query.sortId != "") this.sortId = this.$route.query.sortId;

    let curCategory = this.$store.getters["category/getCurCategory"];
    if (curCategory == null) {
      this.categoryId = "0";
      this.categoryList = this.$store.getters["category/getCategory"];
    } else {
      this.categoryId = curCategory.categoryId;
      this.categoryList = curCategory.categoryList;
    }
  },
  watch: {
    categoryId() {},
  },
};
</script>

<style scoped></style>
