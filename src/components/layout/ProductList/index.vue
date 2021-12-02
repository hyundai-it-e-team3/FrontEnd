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

    <div v-for="index in parseInt(newList.length / 2)" :key="index">
      <v-row dense class="mt-3">
        <v-col cols="6">
          <v-card
            tile
            v-if="index * 2 - 1 == newList.length - 2"
            @click="goProductDetail(newList[index * 2 - 1].productId)"
            elevation="0">
            <v-img
              v-intersect="onIntersect"
              :src="newList[index * 2 - 1].thumbnail"
              class="white--text align-end"
              height="auto">
              <v-icon v-if="$store.getters['member/getWishList'].includes(newList[index * 2 - 1].productId)" color="red" class="ma-2" dense>mdi-heart</v-icon>
              <v-icon v-if="!$store.getters['member/getWishList'].includes(newList[index * 2 - 1].productId)" dark class="ma-2" dense>mdi-heart-outline</v-icon>
            </v-img>
            <v-card-title class="brandname body-2">{{ newList[index * 2].brandName }}</v-card-title>
            <v-card-subtitle class="caption">
              <div class="content">{{ newList[index * 2 - 1].name }}</div>
              <div class="content">{{ newList[index * 2 - 1].price.toLocaleString() }}₩</div>
            </v-card-subtitle>
          </v-card>
          <v-card
            tile
            v-if="index * 2 - 1 != newList.length - 2"
            @click="goProductDetail(newList[index * 2 - 1].productId)"
            elevation="0">
            <v-img
              v-bind:src="newList[index * 2 - 1].thumbnail"
              class="white--text align-end"
              height="auto">
              <v-icon v-if="$store.getters['member/getWishList'].includes(newList[index * 2 - 1].productId)" color="red" class="ma-2" dense>mdi-heart</v-icon>
              <v-icon v-if="!$store.getters['member/getWishList'].includes(newList[index * 2 - 1].productId)"  dark class="ma-2" dense>mdi-heart-outline</v-icon>
            </v-img>
            <v-card-title class="brandname body-2">{{ newList[index * 2 - 1].brandName }}</v-card-title>
            <v-card-subtitle class="caption">
              <div class="content">{{ newList[index * 2 - 1].name }}</div>
              <div class="content">{{ newList[index * 2 - 1].price.toLocaleString() }}₩</div>
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="6" v-if="index * 2 < newList.length">
          <v-card
            tile
            v-if="index * 2 == newList.length - 2"
            @click="goProductDetail(newList[index * 2].productId)"
            elevation="0">
            <v-img
              v-intersect="onIntersect"
              :src="newList[index * 2].thumbnail"
              class="white--text align-end"
              height="auto">
              <v-icon v-if="$store.getters['member/getWishList'].includes(newList[index * 2].productId)" color="red" class="ma-2" dense>mdi-heart</v-icon>
              <v-icon v-if="!$store.getters['member/getWishList'].includes(newList[index * 2].productId)"  dark class="ma-2" dense>mdi-heart-outline</v-icon>
            </v-img>
            <v-card-title class="brandname body-2">{{ newList[index * 2].brandName }}</v-card-title>
            <v-card-subtitle class="caption">
              <div class="content">{{ newList[index * 2].name }}</div>
              <div class="content">{{ newList[index * 2].price.toLocaleString() }}₩</div>
            </v-card-subtitle>
          </v-card>
          <v-card
            tile
            v-if="index * 2 != newList.length - 2"
            @click="goProductDetail(newList[index * 2].productId)"
            elevation="0">
            <v-img
              v-if="index * 2 != newList.length - 2"
              v-bind:src="newList[index * 2].thumbnail"
              class="white--text align-end"
              height="auto">
              <v-icon v-if="$store.getters['member/getWishList'].includes(newList[index * 2].productId)" color="red" class="ma-2" dense>mdi-heart</v-icon>
              <v-icon v-if="!$store.getters['member/getWishList'].includes(newList[index * 2].productId)" dark class="ma-2" dense>mdi-heart-outline</v-icon>
            </v-img>
            <v-card-title class="brandname body-2">{{ newList[index * 2].brandName }}</v-card-title>
            <v-card-subtitle class="caption">
              <div class="content">{{ newList[index * 2].name }}</div>
              <div class="content">{{ newList[index * 2].price.toLocaleString() }}₩</div>
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
  props: ["listType", "categoryId", "brandName","text"],
  methods: {
    onIntersect(entries, observer, isIntersecting) {
      if (isIntersecting == true) {
        console.log("----------------------");
        let startRow = this.$store.getters["pager/getRowCount"];
        console.log(startRow, this.sortId);

        PagerModule.getProductList(
          this.listType,
          this.brandName,
          this.categoryId,
          startRow,
          3,
          this.sortId
        )
          .then((response) => {
            if (this.$store.getters["pager/getRowCount"] == 1) {
              this.newList = response.data;
            } else {
              let resList = response.data;
              for (let item of resList) {
                this.newList.push(item);
              }
            }
            this.$store.commit("pager/plusRowCount", 4);
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

    if(this.categoryId==stCategoryId&&this.brandName==stBrandName&&this.sortId==stSortId){
      console.log("카테고리가 같음");
      this.newList = this.$store.getters["pager/getProductList"];
    }else{
      console.log(stCategoryId+" "+stBrandName+" "+stSortId+" "+this.categoryId+" "+this.brandName+" "+this.sortId)
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
    console.log(this.categoryId,this.brandName,this.sortId,this.newList)
    console.log(this.$store.getters["pager/getCategoryId"],this.$store.getters["pager/getBrandName"],this.$store.getters["pager/getSortId"],this.newList)
  },
  watch: {
    categoryId() {
      console.log(this.categoryId);
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
