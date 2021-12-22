<template>
  <v-container>
    <navi />

    <event-component />

    <v-container class="black pb-2">
      <v-card-title class="mainTitle d-flex justify-center mt-1 pa-1 white--text">베스트</v-card-title>
      <v-sheet class="mb-2">
        <v-slide-group>
          <v-slide-item
            v-for="index in bestList.length" :key="index"
          >
            <v-card
              color="#E2E3DE"
              class="ma-1"
              height="300px"
              width="150px"
              elevation="0"
              tile
              @click="goProductDetail(bestList[index - 1].productId)"
            >
              <v-img
                v-if="index - 1 == bestList.length - 2"
                v-intersect="onIntersect2"
                :src="bestList[index - 1].thumbnail"
                class="white--text align-end"
                height="200px" />
              <v-img
                v-if="index - 1 != bestList.length - 2"
                :src="bestList[index - 1].thumbnail"
                class="white--text align-end"
                height="200px" />

                <v-card-title class="brandname body-2 pa-3 pb-1">{{ bestList[index - 1].brandName }}</v-card-title>
                <v-card-subtitle class="caption pa-3">
                  <div class="content text-truncate" style="max-width: 130px;">{{ bestList[index - 1].name }}</div>
                  <div class="content">{{ bestList[index - 1].price.toLocaleString() }} ₩</div>
                </v-card-subtitle>

            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-container>
    
    <v-card-title class="mainTitle d-flex justify-center mt-1 pa-1">신상품</v-card-title>
    <v-sheet>
      <v-slide-group >
        <v-slide-item
          v-for="index in newList.length"
          :key="index">
          <v-card
            color="#E2E3DE"
            class="ma-1"
            height="280px"
            width="150px"
            elevation="0"
            tile
            @click="goProductDetail(newList[index - 1].productId)">

            <v-img
              v-if="index - 1 == newList.length - 2"
              v-intersect="onIntersect1"
              :src="newList[index - 1].thumbnail"
              class="white--text align-end"
              height="200px"
              width="150px" />

            <v-img
              v-if="index - 1 != newList.length - 2"
              :src="newList[index - 1].thumbnail"
              class="white--text align-end"
              height="200px" />
              
            <v-card-title class="brandname body-2 pa-3 pb-1">{{ newList[index - 1].brandName }}</v-card-title>
            <v-card-subtitle class="caption pa-3">
              <div class="content text-truncate" style="max-width: 130px;">{{ newList[index - 1].name }}</div>
              <div class="content">{{ newList[index - 1].price.toLocaleString() }} ₩</div>
            </v-card-subtitle>

          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>

  </v-container>
</template>

<script>
import PagerModule from "@/modules/pagerModule";
import EventComponent from "./eventComponent.vue";
import Navi from "./Navi.vue";

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
      newRowCount: 0,
      bestRowCount: 0,
    };
  },
  methods: {
    onIntersect1(entries, observer, isIntersecting) {
      if (isIntersecting == true) {
        let startRow = this.newRowCount;
        PagerModule.getProductList("list", "null", "null", startRow, 3, 0)
          .then((response) => {
            if (this.newRowCount == 1) {
              this.newList = response.data;
            } else {
              let resList = response.data;
              for (let item of resList) {
                this.newList.push(item);
              }
            }
            this.newRowCount = this.newRowCount + 4;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    onIntersect2(entries, observer, isIntersecting) {
      if (isIntersecting == true) {
        let startRow = this.bestRowCount;
        PagerModule.getProductList("list", "null", "null", startRow, 3, 3)
          .then((response) => {
            if (this.bestRowCount == 1) {
              this.bestList = response.data;
            } else {
              let resList = response.data;
              for (let item of resList) {
                this.bestList.push(item);
              }
            }
            this.bestRowCount = this.bestRowCount + 4;
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
        this.$store.commit("pager/resetRowCount");
        this.$store.commit("pager/plusRowCount", 11);
      })
      .catch((error) => {
        console.log(error);
      });

    PagerModule.getProductList("list", "null", "null", 1, 10, 3)
      .then((response) => {
        this.bestList = response.data;
        this.$store.commit("pager/resetRowCount");
        this.$store.commit("pager/plusRowCount", 11);
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
  font-weight: 800;
}
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
