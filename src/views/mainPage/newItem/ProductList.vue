<template>
  <v-container class="pt-0">
    <navi />
      <v-row class="mt-2">
        <v-col cols="12" class="grey"></v-col>
      </v-row>
      <v-row class="mt-4">
        <v-col cols="8"></v-col>
        <v-col cols="4" @click="sortList"><v-icon>mdi-swap-vertical</v-icon>
          <v-bottom-sheet v-model="sortSheet" width="100%">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="purple"
                dark
                v-bind="attrs"
                v-on="on"
                small
              >
                {{sortList[sortId]}}
              </v-btn>
            </template>
            <v-list width="100%">
              <v-list-item
                v-for="sort in sortList"
                :key="sort"
              >
                <v-list-item-title  @click="sortSelect(sort)">{{sort}}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-bottom-sheet>
        </v-col>
      </v-row>
      <template>
        <div class="text-center">
        </div>
      </template>
      <div v-for="(index) in parseInt(newList.length/2)" :key="index">
        <v-row  dense class="mt-3">
          <v-col cols="6">
            <v-card @click="goProductDetail(newList[index*2-1].productId)">
              <v-img
                v-if="index*2-1==newList.length-2"
                v-intersect="onIntersect"
                :src="newList[index*2-1].thumbnail"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title class="body-2">{{newList[index*2].brandName}}</v-card-title>
                <v-card-subtitle class="caption">
                  <div>{{newList[index*2-1].name}}</div>
                  <div>{{newList[index*2-1].price}}₩</div>
                </v-card-subtitle>
              </v-img>
              <v-img
                v-if="index*2-1!=newList.length-2"
                v-bind:src="newList[index*2-1].thumbnail"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title class="body-2">{{newList[index*2-1].brandName}}</v-card-title>
                <v-card-subtitle class="caption">
                  <div>{{newList[index*2-1].name}}</div>
                  <div>{{newList[index*2-1].price}}₩</div>
                </v-card-subtitle>
              </v-img>
            </v-card>
          </v-col>
          <v-col cols="6" v-if="index*2<newList.length">
            <v-card @click="goProductDetail(newList[index*2].productId)">
              <v-img
                v-if="index*2==newList.length-2"
                v-intersect="onIntersect"
                :src="newList[index*2].thumbnail"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title class="body-2">{{newList[index*2].brandName}}</v-card-title>
                <v-card-subtitle class="caption">
                  <div>{{newList[index*2].name}}</div>
                  <div>{{newList[index*2].price}}₩</div>
                </v-card-subtitle>
              </v-img>
              <v-img
                v-if="index*2!=newList.length-2"
                v-bind:src="newList[index*2].thumbnail"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title class="body-2">{{newList[index*2].brandName}}</v-card-title>
                <v-card-subtitle class="caption">
                  <div>{{newList[index*2].name}}</div>
                  <div>{{newList[index*2].price}}₩</div>
                </v-card-subtitle>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </div>
  </v-container>
</template>

<script>
import pager from "@/apis/pager";
import Navi from '../Navi.vue';
export default {
  name:"productList",
  components: {
    Navi,
  },
  data:()=>({
    newList :[],
    sortList:["신상품순","저가순","고가순","인기순"],
    sortFlag : 0,
    sortSheet: false,
    sortId:0
  }),
  props:[
    "listType",
    "categoryId"
  ],
  methods: {
    async onIntersect (entries, observer,isIntersecting) {
        if(isIntersecting==true){
          let startRow = this.$store.getters["pager/getRowCount"];
          try{
            const response = await pager.getProdctList(this.listType,this.categoryId,startRow,3,0,this.sortId);
            if(this.$store.getters["pager/getRowCount"]==1){
                this.newList = response.data;
            }else{
              let resList = response.data;
              for(let item of resList){
                this.newList.push(item);
              }
            }
            this.$store.commit("pager/plusRowCount",4);
          }
          catch(err){
            console.log(err)
          }
        }
      }
      ,
    goProductDetail(productId){
      console.log(productId);
      this.$router.push(`/product/productDetail?productId=${productId}`);
    },
    async sortSelect(sort){
      console.log(sort);
      this.sortSheet = false;
      if(sort=="신상품")
        this.sortId = 0;
      else if(sort=="저가순")
        this.sortId = 1;
      else if(sort=="고가순")
        this.sortId = 2;
      try{
        const response = await pager.getProdctList(this.listType,this.categoryId,1,10,this.sortId);
        this.newList = response.data;
        this.$store.commit("pager/plusRowCount",11);
        console.log(this.newList);
      }
      catch(err){
        console.log(err)
      }
    }
  },
  async beforeMount(){
    const response = await pager.getProdctList(this.listType,this.categoryId,1,10,this.sortId);
    console.log(response.data);
    this.newList = response.data;
    this.$store.commit("pager/plusRowCount",11);
    console.log(this.newList);
  },
  destroyed(){
    this.$store.commit("pager/resetRowCount"
    );
  }
}
</script>

<style scoped>
</style>