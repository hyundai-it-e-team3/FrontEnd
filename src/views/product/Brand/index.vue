<!-- 컴포넌트 UI 정의 -->
<template>
  <v-card class="mb-12">
    <v-card
      class="mx-auto grey lighten-2"    
    >
      <v-img
        class="white--text align-end"
        src="http://newmedia.thehandsome.com/CM/2B/SS/CM2B0KVT203W_OW_W01.jpg/dims/resize/684x1032/"
        height="330"
      >
      <v-icon v-if= "heartFlag==0" right dark large @click="heartClick()">mdi-heart-outline</v-icon>
      <v-icon v-if= "heartFlag==1" right color="red" large @click="heartClick()">mdi-heart</v-icon>
      </v-img>

      <v-card-subtitle class="pb-0 black--text text-h6" >
        {{brandName}}
      </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{brandList[index].content}}</div>
      </v-card-text>
    </v-card>
    <template>
      <v-card>
        <v-system-bar></v-system-bar>
        <v-toolbar flat>
          <v-toolbar-title>MD's Pick</v-toolbar-title>
          <v-spacer></v-spacer>
          <div>
          </div>
        </v-toolbar>
        <v-banner single-line>
          이곳은 브랜드 MD가 선택한 제품들이 전시됐습니다.
        </v-banner>
        <v-card-text class="grey lighten-4">
          <v-sheet
            max-width="800"
            class="mx-auto"
          >
            <v-container fluid>
              <v-sheet
                class="mx-auto"
                max-width="700"
              >
                <v-slide-group
                  multiple
                  show-arrows
                >
                  <v-slide-item
                    v-for="category in categoryList"
                    :key="category.name"
                    v-slot="{ active}"
                  >
                    <v-btn
                      class="mx-2"
                      :input-value="active"
                      active-class="purple white--text"
                      depressed
                      rounded
                      @click="goDetailCategory(category)"
                    >
                      {{category.name}}
                    </v-btn>
                  </v-slide-item>
                </v-slide-group>
              </v-sheet>
              <v-row dense>
                <v-col cols="6" @click="goProduct">
                  <v-card>
                    <v-img
                      src="http://newmedia.thehandsome.com/CM/2B/SS/CM2B0KVT203W_OW_W01.jpg/dims/resize/684x1032/"
                      class="white--text align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="200px"
                    >
                      <v-card-title class="body-2">{{brandName}}</v-card-title>
                      <v-card-subtitle class="caption">
                        <div>캐시미어 가디건</div>
                        <div>123,000₩</div>
                      </v-card-subtitle>
                    </v-img>
                  </v-card>
                </v-col>
                <v-col cols="6">
                  <v-card>
                    <v-img
                      src="http://newmedia.thehandsome.com/CM/2B/SS/CM2B0KVT203W_OW_W01.jpg/dims/resize/684x1032/"
                      class="white--text align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="200px"
                    >
                      <v-card-title class="body-2">{{brandName}}</v-card-title>
                      <v-card-subtitle class="caption">
                        <div>캐시미어 가디건</div>
                        <div>123,000₩</div>
                      </v-card-subtitle>
                    </v-img>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-sheet>
        </v-card-text>
      </v-card>
    </template>
    <v-container fluid>
      <product-list listType="brandProductList" :categoryId="categoryId" :brandName="brandName"/>
    </v-container>
  </v-card>
</template>

<script>
import ProductList from '@/views/mainPage/newItem/ProductList.vue';
import category from '@/store/category';
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름이다.) 이름을 정하지 않으면 파일명으로
  name:"",
  // 추가하고 싶은 컴포넌트를 등록
  components: {
    ProductList,
  },
  //컴포넌트 데이터를 정의
  data:()=>({
    heartFlag : 0,
    brandList :[],
    index:0,
    brandName:"",
    categoryList:[],
    clevel :0,
    curCategory:"",
    categoryId:"null"
  }),
  //컴포넌트 메소드 정의
  methods:{
    goProduct(){
      this.$router.push("/product/productDetail");
    },
    heartClick(){
      if(this.heartFlag ==0){
        this.heartFlag = 1;
      }else{
        this.heartFlag = 0;
      }
    },

    goDetailCategory(curCategory){
      this.curCategory = curCategory;
      this.categoryList = this.curCategory.categoryList;
      this.categoryId = this.curCategory.categoryId;
      
    }
  },
  watch: { heartFlag() { return this.heartFlag; } },
  created(){
    console.log(this.$store.getters["category/getBrandCategory"]);
    this.brandList = this.$store.getters["category/getBrandCategory"];
    this.brandName = this.$route.query.brandName;
    this.index = parseInt(this.$route.query.index);
    console.log(this.brandList);
    for(let brandCategory of this.brandList[this.index].brandCategoryTempList){
    
      if(brandCategory.clevel==1){
        this.categoryList.push(brandCategory);
      }
    }
    console.log(this.categoryList);
  },
}
</script>
<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>