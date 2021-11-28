<template>
  <v-container class="pt-0">
    <navi />
      <v-row v-for="(item,index) in newList" v-bind:key="item.productId" dense>
        <v-col cols="6">
          <v-card>
            <v-img
              v-if="index==newList.length-2"
              v-intersect="onIntersect"
              v-bind:src="item.thumbnail"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title class="body-2">{{item.brandName}}</v-card-title>
              <v-card-subtitle class="caption">
                <div>{{item.name}}</div>
                <div>{{item.price}}₩</div>
              </v-card-subtitle>
            </v-img>
            <v-img
              v-if="index!=newList.length-2"
              v-bind:src="item.thumbnail"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title class="body-2">{{item.brandName}}</v-card-title>
              <v-card-subtitle class="caption">
                <div>{{item.name}}</div>
                <div>{{item.price}}₩</div>
              </v-card-subtitle>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
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
    newList :[]
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
            const response = await pager.getProdctList(this.listType,this.categoryId,startRow,3);
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
  },
  async beforeMount(){
    const response = await pager.getProdctList(this.listType,this.categoryId,1,10);
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