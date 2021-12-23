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

    <div>
      <v-row dense class="mt-3">
        <v-col cols="6" v-for="index in newList.length" :key="index">
          <v-card
            tile
            v-if="index-1 >= newList.length -1"
            @click="goProductDetail(newList[index-1].productId)"
            elevation="0">
            <v-img
              v-intersect="onIntersect"
              :src="newList[index-1].thumbnail"
              class="align-end"
              height="auto">
              <v-icon v-if="$store.getters['member/getWishList'].includes(newList[index-1].productId)" color="red" class="ma-2" dense>mdi-heart</v-icon>
              <v-icon v-if="!$store.getters['member/getWishList'].includes(newList[index-1].productId)" dark class="ma-2" dense>mdi-heart-outline</v-icon>
            </v-img>

            <v-card-title class="brandname pt-1 px-3">{{ newList[index-1].brandName }}</v-card-title>
            <v-card-subtitle class="px-3 pt-0 pb-2">
              <div class="content">{{ newList[index-1].name }}</div>
              <div class="priceContent">￦ {{ newList[index-1].price.toLocaleString() }}</div>
            </v-card-subtitle>
          </v-card>

          <v-card
            tile
            v-if="index-1 < newList.length -2"
            @click="goProductDetail(newList[index-1].productId)"
            elevation="0">
            <v-img
              v-bind:src="newList[index-1].thumbnail"
              class="white--text align-end"
              height="auto">
              <v-icon v-if="$store.getters['member/getWishList'].includes(newList[index-1].productId)" color="red" class="ma-2" dense>mdi-heart</v-icon>
              <v-icon v-if="!$store.getters['member/getWishList'].includes(newList[index-1].productId)"  dark class="ma-2" dense>mdi-heart-outline</v-icon>
            </v-img>

            <v-card-title class="brandname pt-1 px-3">{{ newList[index-1].brandName }}</v-card-title>
            <v-card-subtitle class="px-3 pt-0 pb-2">
              <div class="content">{{ newList[index-1].name }}</div>
              <div class="priceContent">￦ {{ newList[index-1].price.toLocaleString() }}</div>
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script>
import PagerModule from "@/modules/pagerModule";
export default {
  name: "categoryProduct",
  components: {
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
    onIntersect(entries, observer, isIntersecting) {
      if (isIntersecting == true) {
        let startRow = this.$store.getters["pager/getRowCount"];
        console.log(startRow, this.sortId);
        PagerModule.getProductList(
          "list",
          " ",
          this.categoryId,
          startRow,
          5,
          0
        )
          .then((response) => {
            let resList = response.data;
            for (let item of resList) {
                this.newList.push(item);
            }
            
            this.$store.commit("pager/plusRowCount", 6);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    goProductDetail(productId) {
      console.log(productId);
      this.$router.push(`/product/productDetail?productId=${productId}`);
    },
  },
  beforeMount() {
    console.log(this.$store.getters["category/getCurCategory"]);
    console.log(this.$store.getters["category/getSelectedCategory"]);
    this.categoryId = "0";
    this.categoryList = this.$store.getters["category/getCategory"];

    PagerModule.getProductList(
        "list",
        " ",
        this.categoryId,
        1,
        10,
        0
      )
        .then((response) => {
          console.log(response.data);
          this.newList = response.data;
          this.$store.commit("pager/resetRowCount");
          this.$store.commit("pager/plusRowCount", 1);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(this.newList);
  },
  watch: {
    categoryId() {},
  },
};
</script>

<style scoped>

</style>
