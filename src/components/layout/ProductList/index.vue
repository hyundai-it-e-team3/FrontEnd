<template>
  <v-container class="pa-0">
    <v-row class="mt-4">
      <v-col cols="8"></v-col>
      <v-col cols="4" @click="sortList"
        ><v-icon>mdi-swap-vertical</v-icon>
        <v-bottom-sheet v-model="sortSheet" width="100%">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="purple" dark v-bind="attrs" v-on="on" small>
              {{ sortList[sortId] }}
            </v-btn>
          </template>
          <v-list width="100%">
            <v-list-item v-for="sort in sortList" :key="sort">
              <v-list-item-title @click="sortSelect(sort)">{{
                sort
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-bottom-sheet>
      </v-col>
    </v-row>
    <template>
      <div class="text-center"></div>
    </template>
    <div v-for="index in parseInt(newList.length / 2)" :key="index">
      <v-row dense class="mt-3">
        <v-col cols="6">
          <v-card
            v-if="index * 2 - 1 == newList.length - 2"
            @click="goProductDetail(newList[index * 2 - 1].productId)"
            elevation="0"
          >
            <v-img
              v-intersect="onIntersect"
              :src="newList[index * 2 - 1].thumbnail"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-icon color="red" class="ml-2 mb-2" dense>mdi-heart</v-icon>
            </v-img>
            <v-card-title class="body-2">{{
              newList[index * 2].brandName
            }}</v-card-title>
            <v-card-subtitle class="caption">
              <div>{{ newList[index * 2 - 1].name }}</div>
              <div class="font-weight-blacksss">{{ newList[index * 2 - 1].price.toLocaleString() }}₩</div>
            </v-card-subtitle>
          </v-card>
          <v-card
            v-if="index * 2 - 1 != newList.length - 2"
            @click="goProductDetail(newList[index * 2 - 1].productId)"
            elevation="0"
          >
            <v-img
              v-bind:src="newList[index * 2 - 1].thumbnail"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-icon dense color="white" class="ml-2 mb-2">mdi-heart-outline</v-icon>
            </v-img>
            <v-card-title class="body-2">{{
              newList[index * 2 - 1].brandName
            }}</v-card-title>
            <v-card-subtitle class="caption">
              <div>{{ newList[index * 2 - 1].name }}</div>
              <div class="font-weight-black">{{ newList[index * 2 - 1].price.toLocaleString() }}₩</div>
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="6" v-if="index * 2 < newList.length">
          <v-card
            v-if="index * 2 == newList.length - 2"
            @click="goProductDetail(newList[index * 2].productId)"
            elevation="0"
          >
            <v-img
              v-intersect="onIntersect"
              :src="newList[index * 2].thumbnail"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-icon  class="ml-2 mb-2" dense>mdi-heart-outline</v-icon>
            </v-img>
            <v-card-title class="body-2">{{
              newList[index * 2].brandName
            }}</v-card-title>
            <v-card-subtitle class="caption">
              <div>{{ newList[index * 2].name }}</div>
              <div>{{ newList[index * 2].price.toLocaleString() }}₩</div>
            </v-card-subtitle>
          </v-card>
          <v-card
            v-if="index * 2 != newList.length - 2"
            @click="goProductDetail(newList[index * 2].productId)"
            elevation="0"
          >
            <v-img
              v-if="index * 2 != newList.length - 2"
              v-bind:src="newList[index * 2].thumbnail"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-icon color="red" class="ml-2 mb-2" dense>mdi-heart</v-icon>
            </v-img>
            <v-card-title class="body-2">{{
              newList[index * 2].brandName
            }}</v-card-title>
            <v-card-subtitle class="caption">
              <div>{{ newList[index * 2].name }}</div>
              <div>{{ newList[index * 2].price.toLocaleString() }}₩</div>
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
  props: ["listType", "categoryId", "brandName"],
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
  },
  destroyed() {
    this.$store.commit("pager/resetRowCount");
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
    },
  },
};
</script>

<style scoped></style>
