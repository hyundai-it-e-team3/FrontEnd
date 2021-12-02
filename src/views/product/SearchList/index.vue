<!-- 컴포넌트 UI 정의 -->
<template>
  <v-container class="pa-0">
    
      <v-text-field
            label="Keyword"
            hide-details="auto"
            v-model="text"
            class="mx-2 mt-2"
            ></v-text-field>
    
    <v-row class="mt-4">
      <v-col cols="8"></v-col>
      <v-col cols="4" @click="sortList"
        ><v-icon>mdi-swap-vertical</v-icon>
        <v-bottom-sheet v-model="sortSheet" width="100%">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="red" dark v-bind="attrs" v-on="on" small>
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
              <v-icon v-if="$store.getters['member/getWishList'].includes(newList[index * 2 - 1].productId)" color="red" class="ml-2 mb-2" dense>mdi-heart</v-icon>
              <v-icon v-if="!$store.getters['member/getWishList'].includes(newList[index * 2 - 1].productId)" dark class="ml-2 mb-2" dense>mdi-heart-outline</v-icon>
            </v-img>
            <v-card-title class="body-2">{{
              newList[index * 2].brandName
            }}</v-card-title>
            <v-card-subtitle class="caption">
              <div>{{ newList[index * 2 - 1].name }}</div>
              <div>{{ newList[index * 2 - 1].price.toLocaleString() }}₩</div>
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
              <v-icon v-if="$store.getters['member/getWishList'].includes(newList[index * 2 - 1].productId)" color="red" class="ml-2 mb-2" dense>mdi-heart</v-icon>
              <v-icon v-if="!$store.getters['member/getWishList'].includes(newList[index * 2 - 1].productId)"  dark class="ml-2 mb-2" dense>mdi-heart-outline</v-icon>
            </v-img>
            <v-card-title class="body-2">{{
              newList[index * 2 - 1].brandName
            }}</v-card-title>
            <v-card-subtitle class="caption">
              <div>{{ newList[index * 2 - 1].name }}</div>
              <div>{{ newList[index * 2 - 1].price.toLocaleString() }}₩</div>
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
              <v-icon v-if="$store.getters['member/getWishList'].includes(newList[index * 2].productId)" color="red" class="ml-2 mb-2" dense>mdi-heart</v-icon>
              <v-icon v-if="!$store.getters['member/getWishList'].includes(newList[index * 2].productId)"  dark class="ml-2 mb-2" dense>mdi-heart-outline</v-icon>
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
              <v-icon v-if="$store.getters['member/getWishList'].includes(newList[index * 2].productId)" color="red" class="ml-2 mb-2" dense>mdi-heart</v-icon>
              <v-icon v-if="!$store.getters['member/getWishList'].includes(newList[index * 2].productId)" dark class="ml-2 mb-2" dense>mdi-heart-outline</v-icon>
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
import productModule from "@/modules/productModule";
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름이다.) 이름을 정하지 않으면 파일명으로
  name:"",
  // 추가하고 싶은 컴포넌트를 등록
  components: {
  },
  //컴포넌트 데이터를 정의
  data:()=>({
    newList: [],
    sortList: ["신상품", "저가순", "고가순", "인기순"],
    sortFlag: 0,
    sortSheet: false,
    sortId: 0,
    text:""
  }),
  //컴포넌트 메소드 정의
  methods:{
      onIntersect(entries, observer, isIntersecting) {
      if (isIntersecting == true) {
        console.log("----------------------");
        let startRow = this.$store.getters["pager/getRowCount"];
        console.log(startRow, this.sortId);

        productModule.getProductListText(
          this.text,
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

      let resText = this.text;
      if(resText=='')
        resText = '0'
      productModule.getProductListText(
        resText,
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
  watch:{
    text(){
      let resText = this.text;
      if(resText=='')
        resText = '0'
      productModule.getProductListText(
        resText,
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
  destroyed(){
    this.$store.commit("setSearchFlag",false);
  }
}
</script>
<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>