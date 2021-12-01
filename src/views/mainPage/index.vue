<template>
  <v-container fluid class="pa-0">
    <v-row class="mt-2">
      <v-col class="pa-0">
        <event-component/>
        <category-nav/>
        <v-col>
          <v-card-title class="text-h6 pa-1">신상품</v-card-title>
        </v-col>
        <v-sheet
          class="mx-auto"
          elevation="8"
          max-width="800"
        >
          <v-slide-group
            class="pa-4"
            active-class="success"
            show-arrows
          >
            <v-slide-item
              v-for="(index) in newList.length" :key="index"
              v-slot="{ active }"
            >
              <v-card
                :color="active ? undefined : 'grey lighten-1'"
                class="ma-1"
                height="200"
                width="100"
                @click="goProductDetail(newList[index-1].productId)"
              >
                
                <v-img
                    v-if="index-1==newList.length-2"
                    v-intersect="onIntersect1"
                    :src="newList[index-1].thumbnail"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="200px"
                >
                  <v-card-title class="body-2">{{newList[index-1].brandName}}</v-card-title>
                  <v-card-subtitle class="caption">
                    <div>{{newList[index-1].name}}</div>
                    <div>{{newList[index-1].price}}₩</div>
                  </v-card-subtitle>
                </v-img>
                <v-img
                    v-if="index-1!=newList.length-2"
                    :src="newList[index-1].thumbnail"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="200px"
                >
                  <v-card-title class="body-2">{{newList[index-1].brandName}}</v-card-title>
                  <v-card-subtitle class="caption">
                    <div>{{newList[index-1].name}}</div>
                    <div>{{newList[index-1].price}}₩</div>
                  </v-card-subtitle>
                </v-img>
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <v-scale-transition>
                    <v-icon
                      v-if="active"
                      color="white"
                      size="24"
                      v-text="'mdi-close-circle-outline'"
                    >hjoijiojoijijio</v-icon>
                  </v-scale-transition>
                </v-row>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>

        <v-col>
          <v-card-title class="text-h6 pa-1">베스트</v-card-title>
        </v-col>
        <v-sheet
          class="mx-auto"
          elevation="8"
          max-width="800"
        >
          <v-slide-group
            class="pa-4"
            active-class="success"
            show-arrows
          >
            <v-slide-item
              v-for="(index) in bestList.length" :key="index"
              v-slot="{ active }"
            >
              <v-card
                :color="active ? undefined : 'grey lighten-1'"
                class="ma-1"
                height="200"
                width="100"
                @click="goProductDetail(bestList[index-1].productId)"
              >
                
                <v-img
                    v-if="index-1==bestList.length-2"
                    v-intersect="onIntersect2"
                    :src="bestList[index-1].thumbnail"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="200px"
                >
                  <v-card-title class="body-2">{{bestList[index-1].brandName}}</v-card-title>
                  <v-card-subtitle class="caption">
                    <div>{{bestList[index-1].name}}</div>
                    <div>{{bestList[index-1].price}}₩</div>
                  </v-card-subtitle>
                </v-img>
                <v-img
                    v-if="index-1!=bestList.length-2"
                    :src="bestList[index-1].thumbnail"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="200px"
                >
                  <v-card-title class="body-2">{{bestList[index-1].brandName}}</v-card-title>
                  <v-card-subtitle class="caption">
                    <div>{{bestList[index-1].name}}</div>
                    <div>{{bestList[index-1].price}}₩</div>
                  </v-card-subtitle>
                </v-img>
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <v-scale-transition>
                    <v-icon
                      v-if="active"
                      color="white"
                      size="24"
                      v-text="'mdi-close-circle-outline'"
                    ></v-icon>
                  </v-scale-transition>
                </v-row>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PagerModule from "@/modules/pagerModule";
import CategoryNav from "@/components/layout/CategoryNav";
import EventComponent from './eventComponent.vue';
export default {
  name: "mainPage",
  components: {
    CategoryNav,
    EventComponent
  },
  data() {
    return {
      newList :[],
      bestList:[],
      newRowCount:0,
      bestRowCount:0
    };
  },
  methods: {
    onIntersect1(entries, observer,isIntersecting) {
        if(isIntersecting==true){
          let startRow = this.newRowCount;
          PagerModule.getProductList("list","null","null",startRow,3,0)
            .then(response=>{
              if(this.newRowCount ==1){
                this.newList = response.data;
              }else{
                let resList = response.data;
                for(let item of resList){
                  this.newList.push(item);
                }
              }
              this.newRowCount = this.newRowCount+4;
            })
            .catch(error => {
              console.log(error);
          });
        }
      }
      ,
    onIntersect2 (entries, observer,isIntersecting) {
        if(isIntersecting==true){
          let startRow = this.bestRowCount;
          PagerModule.getProductList("list","null","null",startRow,3,3)
            .then(response=>{
              if(this.bestRowCount==1){
                this.bestList = response.data;
              }else{
                let resList = response.data;
                for(let item of resList){
                  this.bestList.push(item);
                }
              }
              this.bestRowCount = this.bestRowCount+4;
            })
            .catch(error => {
              console.log(error);
          });
        }
      }
    ,
    goProductDetail(productId){
      this.$router.push(`/product/productDetail?productId=${productId}`);
    },
  },
  mounted() {
    this.$store.commit("setPageFlag",'main');
  },
  created(){
    PagerModule.getProductList("list","null","null",1,10,0)
      .then(response=>{
        this.newList = response.data;
        this.$store.commit("pager/resetRowCount");
        this.$store.commit("pager/plusRowCount",11);
      })
      .catch(error => {
        console.log(error);
    });

    PagerModule.getProductList("list","null","null",1,10,3)
      .then(response=>{
        this.bestList = response.data;
        this.$store.commit("pager/resetRowCount");
        this.$store.commit("pager/plusRowCount",11);
      })
      .catch(error => {
        console.log(error);
    });
  },
};
</script>

<style scoped>

</style>