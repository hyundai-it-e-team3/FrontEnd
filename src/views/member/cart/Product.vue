<template>
  <v-container>
      <v-col class="pa-0">
        <v-row>
          <v-col cols="1" class="pa-2">
            <v-icon class="d-flex">mdi-check-circle-outline</v-icon>
          </v-col>
          <v-col class="pa-2">
            삭제
          </v-col>    
        </v-row>

        <v-row>
          <v-col cols="4" class="pa-0 pl-2 pb-2">
            <img :src="productImg" width="100%"/>
          </v-col>
          <v-col cols="8" class="pa-1 pl-2">
            <v-row>
              <v-col class="pa-4">
                <div class="font-weight-bold">{{brandName}}</div>
                <div>{{name}}</div>
                <div>{{price}}원</div>
              </v-col>
            </v-row>
            <v-row>
              <v-divider class="ml-4 mr-4"/>
            </v-row>
            <v-row>
              <v-col class="grey--text">
                <v-row>
                  <v-col cols="9" class="pl-4 pt-1 pb-0" :amount=amount>옵션 <span>{{colorCode}} / {{size}} / {{amount}}개</span></v-col>
                  <v-col cols="3" class="pr-4 pt-1 pb-0" @click="changeDetail">변경</v-col>
                </v-row>
                <v-row>
                  <v-col class="pl-4 pt-0 pb-0">
                    적립 <span> 0점</span>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row v-if="changeFlag">
          <change-option />
        </v-row>
      </v-col>

  </v-container>
</template>

<script>
import ChangeOption from './ChangeOption.vue';

export default {
  name:"Product",
  components: {
    ChangeOption
  },
  data() {
    return {
      changeFlag: false
    };
  },
  props: [
    "productDetailId",
    "productImg",
    "colorCode",
    "productId",
    "name",
    "price",
    "brandName",
    "size",
    "amount"
  ],
  methods: {
    changeDetail() {
      this.changeFlag = !this.changeFlag
    }
  }
}
</script>

<style scoped>
</style>