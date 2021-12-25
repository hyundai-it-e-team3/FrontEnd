<template>
  <v-container>
    
    <v-text-field
      label="검색어를 입력하세요."
      hide-details="auto"
      v-model="text"
      clearable
      color="#425745"
    ></v-text-field>
  
    <v-col @click="sortList" class="d-flex justify-end px-0">
      <v-icon small>mdi-swap-vertical</v-icon>
      <v-bottom-sheet v-model="sortSheet" width="100%">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="black" dark v-bind="attrs" v-on="on" small>
            {{ sortList[sortId] }}
          </v-btn>
        </template>
        <v-list width="100%">
          <v-list-item v-for="sort in sortList" :key="sort">
            <v-list-item-title @click="sortSelect(sort)" class="font-weight-bold">{{ sort }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-bottom-sheet>
    </v-col>

    <v-row dense class="">
      <v-col cols="6" v-for="index in newList.length" :key="index">
        <v-card
          v-if="index-1 >= newList.length-3"
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

          <v-card-title class="brandname pt-1 px-3">{{ newList[index-1].brandName }}</v-card-title>
          <v-card-subtitle class="px-3 pt-0 pb-2">
            <div class="content">{{ newList[index-1].name }}</div>
            <div class="priceContent">￦ {{ newList[index-1].price.toLocaleString() }}</div>
          </v-card-subtitle>
        </v-card>
        <v-card
          v-if="index-1 < newList.length-3"
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
        let resText = this.text;
        console.log(resText);
        if(resText=='')
          resText = '0'
        productModule.getProductListText(
          resText,
          startRow,
          4,
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
            this.$store.commit("pager/plusRowCount", 5);
            console.log("endRow: "+(startRow+4));
            console.log("startRow: "+this.$store.getters["pager/getRowCount"]);
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
  created(){
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
      ).then((response) => {
          this.newList = response.data;
          console.log(this.newList);
          console.log(this.newList.length);
          this.$store.commit("pager/resetRowCount");
      }).then(()=>{
          this.$store.commit("pager/plusRowCount", 11);
          console.log(this.$store.getters["pager/getRowCount"])
      }).catch((error) => {
          console.log("-------");
          console.log(error);
      });
    }
  },
  destroyed(){
    this.$store.commit("setSearchFlag",false);
  }
}
</script>

<style scoped>
.brandname {
  font-weight: bold;
  font-size: 12px;
  color: black;
}
.content {
  font-weight: 500;
  font-size: 14px;
  color: black;
}
.priceContent {
  color: black;
  font-size: 14px;
  font-weight: bold;
}
</style>