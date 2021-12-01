<!-- 컴포넌트 UI 정의 -->
<template>
  <v-card class="mb-12">
    <v-card class="mx-auto grey lighten-2">
      <v-img
        class="white--text align-end"
        :src="brandList[index].mainImg"
        height="330"
      >
        <v-icon
          v-if="$store.getters['category/getWishBrand'].includes(brandName)"
          right
          color="red"
          large
          @click="removeWish()"
          >mdi-heart</v-icon
        >
        <v-icon
          v-if="!$store.getters['category/getWishBrand'].includes(brandName)"
          right dark large
          @click="addWish()"
          >mdi-heart-outline</v-icon
        >
      </v-img>

      <v-card-subtitle class="pb-0 black--text text-h6">
        {{ brandName }}
      </v-card-subtitle>

      <v-card-text class="text--primary">
        <v-row class="d-flex my-3">
          <v-btn
            dark
            x-small
            v-for="(item) in allCategoryList"
            :key="item"
            class="black ma-1"
            >{{item
            }}</v-btn
          >
        </v-row>
      </v-card-text>
    </v-card>
    <template>
      <v-card>
        <v-system-bar></v-system-bar>
        <v-toolbar flat>
          <v-toolbar-title>MD's Pick</v-toolbar-title>
          <v-spacer></v-spacer>
          <div></div>
        </v-toolbar>
        <v-banner single-line>
          이곳은 브랜드 MD가 선택한 제품들이 전시됐습니다.
        </v-banner>
        <v-card-text class="grey lighten-4">
          <v-sheet max-width="800" class="mx-auto">
            <v-container fluid>
              <v-row dense>
                <v-col
                  cols="6"
                  v-for="item in mdPickList"
                  :key="item.productId"
                >
                  <v-card
                    @click="goProductDetail(item.productId)"
                    elevation="0"
                  >
                    <v-img
                      :src="item.thumbnail"
                      class="white--text align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="200px"
                    >
                      <v-icon color="red" class="ml-2 mb-2" dense
                        >mdi-heart</v-icon
                      >
                    </v-img>
                    <v-card-title class="body-2">
                      {{ brandName }}
                    </v-card-title>
                    <v-card-subtitle class="caption">
                      <div>
                        <div>{{ item.name }}</div>
                      </div>
                      <div>{{ item.price.toLocaleString() }}₩</div>
                    </v-card-subtitle>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-sheet>
        </v-card-text>
      </v-card>
    </template>
    <v-container fluid>
      <v-sheet class="my-3" max-width="700">
        <div class="d-flex mb-3">
          <v-btn
            dark
            v-for="(item, index) in selectCategoryList"
            :key="item"
            class="black mr-2"
            >{{ item
            }}<v-icon
              v-if="index == selectCategoryList.length - 1"
              small
              class="ml-2"
              @click="deleteCategory"
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
      <product-list
        listType="brandProductList"
        :categoryId="categoryId"
        :brandName="brandName"
      />
    </v-container>
  </v-card>
</template>

<script>
import ProductList from "@/components/layout/ProductList/index.vue";
import category from "@/store/category";
import memberAPI from "@/apis/member";
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름이다.) 이름을 정하지 않으면 파일명으로
  name: "",
  // 추가하고 싶은 컴포넌트를 등록
  components: {
    ProductList,
  },
  //컴포넌트 데이터를 정의
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
    allCategoryList:[]
  }),
  //컴포넌트 메소드 정의
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
    async addWish(){
      let memberId = this.$store.getters.getMemberId;
      console.log(memberId,this.brandName);
      await memberAPI.insertBrand(memberId,this.brandName);
      this.$store.commit("category/addWishBrand",this.brandName);
    },
    async removeWish(){
      let memberId = this.$store.getters.getMemberId;
      console.log(memberId,this.brandName);
      await memberAPI.deleteBrand(memberId,this.brandName);
      this.$store.commit("category/removeWishBrand",this.brandName);
    }
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
    
    for (let brandCategory of this.brandList[this.index].brandCategoryTempList) {
      if (brandCategory.clevel == 1) {
        this.categoryList.push(brandCategory);
      }
    }
    console.log(this.brandList[this.index]);
    this.selectCategoryList = [];

    for(let brandCategory of this.categoryList){
      if(!this.allCategoryList.includes(brandCategory.name))
        this.allCategoryList.push();
      for(let level2 of brandCategory.categoryList){
        console.log(level2);
        if(!this.allCategoryList.includes(level2.name))
          this.allCategoryList.push(level2.name);
        for(let level3 of level2.categoryList){
          if(!this.allCategoryList.includes(level3.name))
            this.allCategoryList.push(level3.name);
        }
      }
    }
  },
};
</script>
<!-- 컴포넌트 스타일 정의 -->
<style scoped></style>
