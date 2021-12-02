<template>
  <v-card class="mb-12">
    <v-card class="mx-auto">
      <v-img class="white--text align-end" height="auto" :src="brandList[index].mainImg">
        <v-icon
          v-if="$store.getters['category/getWishBrand'].includes(brandName)"
          right
          color="red"
          x-large
          class="pa-2"
          @click="removeWish()"
          >mdi-home-heart</v-icon>
        <v-icon
          v-if="!$store.getters['category/getWishBrand'].includes(brandName)"
          right
          dark
          x-large
          class="pa-2"
          @click="addWish()"
          >mdi-home-heart</v-icon>
      </v-img>

      <v-card-subtitle class="pb-0 black--text text-h6">{{ brandName }}</v-card-subtitle>
      <v-card-text class="text--primary">
        <v-row class="d-flex my-2 pl-1">
          <v-btn
            dark
            x-small
            elevation="0"
            v-for="item in allCategoryList" :key="item"
            class="ma-1"
            color="#85A182"
            >#{{ item }}</v-btn>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card elevation="0" >
      <v-toolbar flat>
        <v-toolbar-title>MD's Pick</v-toolbar-title>
      </v-toolbar>
      <v-card-text class="py-0">
        <v-sheet class="mx-auto">
          <v-row class="d-flex">
            <v-col class="col-6" v-for="item in mdPickList" :key="item.productId">
              <v-card class="pa-0" elevation="0" tile @click="goProductDetail(item.productId)">
                <v-img
                  :src="item.thumbnail"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="auto">
                  <v-icon color="red" class="ml-2 mb-2" dense>mdi-heart</v-icon>
                </v-img>

                <v-card-title class="brandname body-2 pa-3 pb-1">{{ brandName }}</v-card-title>
                <v-card-subtitle class="caption pa-3">
                  <div class="content text-truncate" style="max-width: 130px;">{{ item.name }}</div>
                  <div class="content">{{ item.price.toLocaleString() }} ₩</div>
                </v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </v-sheet>
      </v-card-text>
    </v-card>

      <v-sheet>
        <div class="d-flex mb-1">
          <v-btn
            dark
            small
            v-for="(item, index) in selectCategoryList" :key="item"
            color="#46614A"
            elevation="0"
            class="ml-2">{{ item }}
            <v-icon
              v-if="index == selectCategoryList.length - 1"
              x-small
              class="ml-1"
              @click="deleteCategory" >mdi-window-close
            </v-icon>
          </v-btn>
        </div>

        <v-slide-group show-arrows>
          <v-slide-item
            v-for="category in categoryList" :key="category.name"
            class="ma-0">
            <v-btn
              class="ml-2"
              depressed
              small
              @click="goDetailCategory(category)">{{ category.name }}
            </v-btn>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>

      <product-list
        listType="brandProductList"
        :categoryId="categoryId"
        :brandName="brandName"
      />
  </v-card>
</template>

<script>
import ProductList from "@/components/layout/ProductList/index.vue";
import memberAPI from "@/apis/member";

export default {
  name: "",
  components: {
    ProductList,
  },
  data: () => ({
    heartFlag: 0,
    brandList: [],
    index: 0,
    brandName: "",
    categoryList: [],
    clevel: 0,
    curCategory: "",
    categoryId: "null",
    selectCategoryList: [],
    mdPickList: [],
    parentCategory: "",
    allCategoryList: [],
  }),
  methods: {
    goProduct() {
      this.$router.push("/product/productDetail");
    },
    heartClick() {
      if (this.heartFlag == 0) {
        this.heartFlag = 1;
      } else {
        this.heartFlag = 0;
      }
    },
    deleteCategory() {
      this.selectCategoryList.pop();
      if (this.categoryId.length == 2) {
        this.categoryList = [];
        this.categoryId = "null";
        for (let brandCategory of this.brandList[this.index]
          .brandCategoryTempList) {
          if (brandCategory.clevel == 1) {
            this.categoryList.push(brandCategory);
          }
        }
      } else {
        this.categoryId = this.categoryId.substr(0, this.categoryId.length - 2);
        this.categoryList = this.parentCategory.categoryList;
        this.curCategory = this.parentCategory;
      }
    },
    goDetailCategory(curCategory) {
      this.parentCategory = this.curCategory;
      this.curCategory = curCategory;
      this.categoryList = this.curCategory.categoryList;
      this.categoryId = this.curCategory.categoryId;
      this.selectCategoryList.push(this.curCategory.name);
      console.log(this.curCategory);
    },
    goProductDetail(productId) {
      console.log(productId);
      this.$router.push(`/product/productDetail?productId=${productId}`);
    },
    async addWish() {
      let memberId = this.$store.getters.getMemberId;
      console.log(memberId, this.brandName);
      await memberAPI.insertBrand(memberId, this.brandName);
      this.$store.commit("category/addWishBrand", this.brandName);
    },
    async removeWish() {
      let memberId = this.$store.getters.getMemberId;
      console.log(memberId, this.brandName);
      await memberAPI.deleteBrand(memberId, this.brandName);
      this.$store.commit("category/removeWishBrand", this.brandName);
    },
  },
  watch: {
    heartFlag() {
      return this.heartFlag;
    },
  },
  created() {
    console.log(this.$store.getters["category/getBrandCategory"]);
    this.brandList = this.$store.getters["category/getBrandCategory"];
    this.brandName = this.$route.query.brandName;
    this.index = parseInt(this.$route.query.index);
    this.mdPickList = this.brandList[this.index].mdPickList;

    for (let brandCategory of this.brandList[this.index]
      .brandCategoryTempList) {
      if (brandCategory.clevel == 1) {
        this.categoryList.push(brandCategory);
      }
    }
    console.log(this.brandList[this.index]);
    this.selectCategoryList = [];

    for (let brandCategory of this.categoryList) {
      if (!this.allCategoryList.includes(brandCategory.name))
        this.allCategoryList.push();
      for (let level2 of brandCategory.categoryList) {
        console.log(level2);
        if (!this.allCategoryList.includes(level2.name))
          this.allCategoryList.push(level2.name);
        for (let level3 of level2.categoryList) {
          if (!this.allCategoryList.includes(level3.name))
            this.allCategoryList.push(level3.name);
        }
      }
    }
  },
};
</script>

<style scoped>
.brandname {
  font-weight: 500;
  color: black;
}
.content {
  font-weight: 500;
  font-size: 11px;
  color: black;
}
</style>
