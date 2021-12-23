<template>
  <v-container class="pa-0">
    <v-container>
      <v-row>
        <v-col cols="9" class="font-weight-bold black--text px-4" style="font-size: 20px;">{{ brandName }}</v-col>
        <v-col cols="3" class="d-flex align-center justify-end py-0">
          <v-icon
            v-if="$store.getters['category/getWishBrand'].includes(brandName)"
            right
            color="red"
            x-large
            @click="removeWish()"
            >mdi-home-heart</v-icon>
          <v-icon
            v-if="!$store.getters['category/getWishBrand'].includes(brandName)"
            right
            dark
            x-large
            color="grey"
            @click="addWish()"
            >mdi-home-heart</v-icon>
        </v-col>
      </v-row>
      <v-row>
        <v-img class="white--text align-end" height="auto" :src="brandList[index].mainImg" />
      </v-row>
    </v-container>
    
    <v-container class="black">
      <v-row class="d-flex justify-center white--text font-weight-bold py-3 " style="font-size: 18px;">MD's Pick</v-row>

      <v-row class="d-flex pb-5">
        <v-card class="ml-3" width="170px" elevation="0" 
          v-for="item in mdPickList" :key="item.productId" @click="goProductDetail(item.productId)">
          <v-img
            class="align-end"
            :src="item.thumbnail"
            height="auto"
          >
            <v-icon v-if="$store.getters['member/getWishList'].includes(item.productId)" 
              color="red" class="ma-2" dense
              >mdi-heart</v-icon
            >
            <v-icon v-if="!$store.getters['member/getWishList'].includes(item.productId)" 
              dark class="ma-2" dense
              >mdi-heart-outline</v-icon
            >
          </v-img>

          <v-card-title class="pa-0">
            <v-col class="col-12 pt-1" style="height: 20px; color: red; font-size: 10px;">MD's Pick</v-col>
            <v-col class="col-12 pt-1 text-truncate font-weight-bold" style="font-size: 12px;">{{ brandName }}</v-col>
          </v-card-title>
          <v-card-subtitle class="px-3 pt-0 pb-2">
            <div class="content pt-0 text-truncate" style="font-size: 14px;">{{ item.name }}</div>
            <div class="price font-weight-bold black--text">￦ {{ item.price.toLocaleString() }}</div>
          </v-card-subtitle>
        </v-card>
      </v-row>
    </v-container>

    <v-container>
      <v-row class="d-flex justify-center font-weight-black py-4 " style="font-size: 18px;">카테고리</v-row>

      <div class="d-flex mb-1">
        <v-btn
          dark
          small
          v-for="(item, index) in selectCategoryList" :key="item"
          color="#425745"
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
    </v-container>

    <product-list
      listType="brandProductList"
      :categoryId="categoryId"
      :brandName="brandName"
    />

  </v-container>
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
