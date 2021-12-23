<template>
  <v-container>
    <navi />

    <event-component />

    <v-container class="black pb-3">
      <v-card-title class="mainTitle d-flex justify-center pa-1 pt-3 white--text">베스트</v-card-title>
      <v-sheet class="mb-2">
        <v-slide-group class="black pl-2">
          <v-slide-item
            v-for="index in bestList.length" :key="index"
          >
            <v-card
              class="bestCard ma-1"
              height="auto"
              width="170px"
              elevation="0"
              @click="goProductDetail(bestList[index - 1].productId)"
            >
              
              <v-img
                v-if="index - 1 >= bestList.length - 1"
                v-intersect="onIntersect2"
                :src="bestList[index - 1].thumbnail"
                class="white--text align-end"
                height="auto"
              >
                <div class="rank-tag text-center">{{ index }}</div>
                <v-icon v-if="$store.getters['member/getWishList'].includes(bestList[index-1].productId)" color="red" class="ma-2" dense>mdi-heart</v-icon>
                <v-icon v-if="!$store.getters['member/getWishList'].includes(bestList[index-1].productId)" dark class="ma-2" dense>mdi-heart-outline</v-icon>
              </v-img>
              <v-img
                v-if="index - 1 < bestList.length - 1"
                :src="bestList[index - 1].thumbnail"
                class="white--text align-end"
                height="auto"
              >
                <div class="rank-tag text-center">{{ index }}</div>
                <v-icon v-if="$store.getters['member/getWishList'].includes(bestList[index-1].productId)" color="red" class="ma-2" dense>mdi-heart</v-icon>
                <v-icon v-if="!$store.getters['member/getWishList'].includes(bestList[index-1].productId)" dark class="ma-2" dense>mdi-heart-outline</v-icon>
              </v-img>
                
                <v-card-title class="py-1 px-3 pb-0">
                  <v-col class="best col-12" style="height: 20px">BEST</v-col>
                  <v-col class="brand-name col-12 text-truncate">{{ bestList[index - 1].brandName }}</v-col>
                </v-card-title>
                <v-card-subtitle class="px-3 py-3">
                  <div class="content text-truncate">{{ bestList[index - 1].name }}</div>
                  <div class="price">￦ {{ bestList[index - 1].price.toLocaleString() }}</div>
                </v-card-subtitle>

            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-container>
    
    <v-card-title class="mainTitle d-flex justify-center pa-1 pt-3">신상품</v-card-title>
    <v-sheet class="mx-2">
      <v-row dense>
        <v-col cols="6" v-for="index in newList.length" :key="index">
          <v-card
            height="auto"
            width="auto"
            elevation="0"
            @click="goProductDetail(newList[index - 1].productId)">

            <v-img
              v-if="index - 1 >= newList.length - 1"
              v-intersect="onIntersect1"
              :src="newList[index - 1].thumbnail"
              class="white--text align-end"
              height="auto"
              width="auto"
            >
              <v-icon v-if="$store.getters['member/getWishList'].includes(newList[index-1].productId)" color="red" class="ma-2" dense>mdi-heart</v-icon>
              <v-icon v-if="!$store.getters['member/getWishList'].includes(newList[index-1].productId)" dark class="ma-2" dense>mdi-heart-outline</v-icon>
            </v-img>

            <v-img
              v-if="index - 1 < newList.length - 1"
              :src="newList[index - 1].thumbnail"
              class="white--text align-end"
              height="auto"
              width="auto"
            >
              <v-icon v-if="$store.getters['member/getWishList'].includes(newList[index-1].productId)" color="red" class="ma-2" dense>mdi-heart</v-icon>
              <v-icon v-if="!$store.getters['member/getWishList'].includes(newList[index-1].productId)" dark class="ma-2" dense>mdi-heart-outline</v-icon>
            </v-img>

            <v-card-title class="py-0 px-3">
              <v-col class="newLabel col-12" style="height: 20px">NEW</v-col>
              <v-col class="brand-name col-12 text-truncate">{{ newList[index - 1].brandName }}</v-col>
            </v-card-title>
            <v-card-subtitle class="px-3 py-3">
              <div class="content text-truncate">{{ newList[index - 1].name }}</div>
              <div class="price">￦ {{ newList[index - 1].price.toLocaleString() }}</div>
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>

  </v-container>
</template>

<script>
import PagerModule from "@/modules/pagerModule";
import EventComponent from "./eventComponent.vue";
import Navi from "./Navi.vue";
import memberAPI from "@/apis/member";

export default {
  name: "mainPage",
  components: {
    EventComponent,
    Navi,
  },
  data() {
    return {
      newList: [],
      bestList: [],
      newRowCount: 12,
      bestRowCount: 12,
    };
  },
  methods: {
    onIntersect1(entries, observer, isIntersecting) {
      if (isIntersecting == true) {
        let startRow = this.newRowCount;
        PagerModule.getProductList("list", "null", "null", startRow, 4, 0)
          .then((response) => {
            if (this.newRowCount == 1) {
              this.newList = response.data;
            } else {
              let resList = response.data;
              for (let item of resList) {
                this.newList.push(item);
              }
            }
            this.newRowCount = this.newRowCount + 5;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    onIntersect2(entries, observer, isIntersecting) {
      if (isIntersecting == true) {
        let startRow = this.bestRowCount;
        console.log(startRow);
        PagerModule.getProductList("list", "null", "null", startRow, 4, 3)
          .then((response) => {
            if (this.bestRowCount == 1) {
              this.bestList = response.data;
            } else {
              let resList = response.data;
              for (let item of resList) {
                this.bestList.push(item);
              }
            }
            this.bestRowCount = this.bestRowCount + 5;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    goProductDetail(productId) {
      this.$router.push(`/product/productDetail?productId=${productId}`);
    },
  },
  mounted() {
    this.$store.commit("setPageFlag", "main");
  },
  created() {
    PagerModule.getProductList("list", "null", "null", 1, 10, 0)
      .then((response) => {
        this.newList = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    PagerModule.getProductList("list", "null", "null", 1, 10, 3)
      .then((response) => {
        this.bestList = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.mainTitle {
  font-size: 20px;
  font-weight: bold;
}
.brand-name {
  font-size: 12px;
  font-weight: 600;
  color: black;
}
.content {
  font-size: 14px;
  color: black;
}
.price {
  font-size: 14px;
  font-weight: bold;
  color: black;
}
.best {
  font-size: 10px;
  color: #FF7916;
}
.rank-tag {
  background-color: #CF3705;
  font-size: 15px;
  width: 25px;
  height: 30px;
  padding-top: 3px;
  margin-bottom: 232px;
}
.newLabel {
  font-size: 10px;
  color: #EDDDB5;
}
</style>