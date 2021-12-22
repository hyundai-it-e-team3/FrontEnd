<template>
  <v-container class="pa-1 mt-5">
    <v-row class="">
      <v-col class="d-flex justify-end py-0 pr-5" @click="sortList"><v-icon>mdi-swap-vertical</v-icon>
        <v-bottom-sheet v-model="sortSheet" width="100%">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="black" tile dark v-bind="attrs" v-on="on" small>
              {{ sortList[sortId] }}
            </v-btn>
          </template>
          <v-list width="100%">
            <v-list-item v-for="sort in sortList" :key="sort">
              <v-list-item-title @click="sortSelect(sort)">{{ sort }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-bottom-sheet>
      </v-col>
    </v-row>

    <div>
      <v-row dense class="mt-3">
        <v-col cols="6" v-for="index in newList.length" :key="index">
          <v-card
            tile
            v-if="index-1 >= newList.length -2"
            @click="goProductDetail(newList[index-1].productId)"
            elevation="0">
            <v-img
              v-intersect="onIntersect"
              :src="newList[index-1].thumbnail"
              class="white--text align-end"
              height="auto">
              <v-icon v-if="$store.getters['member/getWishList'].includes(newList[index-1].productId)" color="red" class="ma-2" dense>mdi-heart</v-icon>
              <v-icon v-if="!$store.getters['member/getWishList'].includes(newList[index-1].productId)" dark class="ma-2" dense>mdi-heart-outline</v-icon>
            </v-img>
            <v-card-title class="brandname body-2">{{ newList[index-1].brandName }}</v-card-title>
            <v-card-subtitle class="caption">
              <div class="content">{{ newList[index-1].name }}</div>
              <div class="content">{{ newList[index-1].price.toLocaleString() }}₩</div>
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
            <v-card-title class="brandname body-2">{{ newList[index-1].brandName }}</v-card-title>
            <v-card-subtitle class="caption">
              <div class="content">{{ newList[index-1].name }}</div>
              <div class="content">{{ newList[index-1].price.toLocaleString() }}₩</div>
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import PagerModule from "@/modules/pagerModule";
export default {
  name: "productList",
  components: {},
  data: () => ({
    newList: [],
    sortList: ["신상품", "저가순", "고가순", "인기순"],
    sortFlag: 0,
    sortSheet: false,
    sortId: 0,
    fab: false,
  }),
  props: ["listType", "categoryId", "brandName","text","pSortId"],
  methods: {
    onIntersect(entries, observer, isIntersecting) {
      if (isIntersecting == true) {
        let startRow = this.$store.getters["pager/getRowCount"];
        console.log(startRow, this.sortId);
        PagerModule.getProductList(
          this.listType,
          this.brandName,
          this.categoryId,
          startRow,
          5,
          this.sortId
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
    sortSelect(sort) {
      console.log(sort);
      this.sortSheet = false;
      if (sort == "신상품") this.sortId = 0;
      else if (sort == "저가순") this.sortId = 1;
      else if (sort == "고가순") this.sortId = 2;
      else this.sortId = 3;

      PagerModule.getProductList(
        this.listType,
        this.brandName,
        this.categoryId,
        1,
        10,
        this.sortId
      )
        .then((response) => {
          this.newList = response.data;
          this.$store.commit("pager/resetRowCount");
          this.$store.commit("pager/plusRowCount", 11);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    let stCategoryId = this.$store.getters["pager/getCategoryId"];
    let stBrandName = this.$store.getters["pager/getBrandName"];
    let stSortId = this.$store.getters["pager/getSortId"];
    console.log("----------");
    console.log(this.pSortId);
    console.log(stSortId+" "+this.sortId+" "+this.category+" "+stCategoryId);
    if(this.pSortId===undefined){
      console.log(this.sortId);
      console.log("dcac");
    }else{
      this.sortId = this.pSortId;
    }
    if(this.categoryId==stCategoryId&&this.brandName==stBrandName&&this.sortId==stSortId){
      this.newList = this.$store.getters["pager/getProductList"];
    }else{
      this.$store.commit("pager/resetRowCount");
      this.$store.commit("pager/resetProductList");
      this.$store.commit("pager/setCategoryId",this.categoryId);
      this.$store.commit("pager/setBrandName",this.brandName);
      this.$store.commit("pager/setSortId",this.sortId);
      PagerModule.getProductList(
        this.listType,
        this.brandName,
        this.categoryId,
        1,
        10,
        this.sortId
      )
        .then((response) => {
          console.log(response.data);
          this.newList = response.data;
          this.$store.commit("pager/resetRowCount");
          this.$store.commit("pager/plusRowCount", 11);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(this.newList);
    }
  },
  destroyed() {
    this.$store.commit("pager/setCategoryId",this.categoryId);
    this.$store.commit("pager/setBrandName",this.brandName);
    this.$store.commit("pager/setSortId",this.sortId);
    this.$store.commit("pager/setProductList",this.newList);
  },
  watch: {
    categoryId() {
      PagerModule.getProductList(
        this.listType,
        this.brandName,
        this.categoryId,
        1,
        10,
        this.sortId
      )
        .then((response) => {
          this.newList = response.data;
          this.$store.commit("pager/resetRowCount");
          this.$store.commit("pager/plusRowCount", 11);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
};
</script>

<style scoped>
.brandname {
  font-weight: 500;
  color: black;
  padding: 0,5em;
}
.content {
  font-weight: 500;
  font-size: 11px;
  color: black;
}
.caption {
  padding: 1;
}
</style>
