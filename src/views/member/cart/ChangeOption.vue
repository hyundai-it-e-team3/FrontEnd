<template>
    <v-col>
      <v-row>
        <v-col cols="3" class="d-flex align-center">색상 </v-col>
        <v-col cols="2" v-for="(colorChip, index) in colorChip" :key="index">
          <img :src="colorChip" width="30" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3" class="d-flex align-center">사이즈</v-col>
        <v-col cols="1" v-for="(size, index) in size" :key="index">
          {{size}}
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3" class="d-flex align-center">수량 </v-col>
        <v-col>
          <v-row>
            <v-col cols="2">
              <v-icon @click="plusAmount">mdi-plus-circle-outline</v-icon>
            </v-col>
            <v-col cols="2" class="text-center">{{amount}}</v-col>
            <v-col cols="2">
              <v-icon @click="minusAmount">mdi-minus-circle-outline</v-icon>
            </v-col>
          </v-row>        
        </v-col>
      </v-row>
    </v-col>
</template>

<script>
export default {
  name:"",
  components: {
  },
  data() {
    return {
      colorChip: [
        "http://newmedia.thehandsome.com/CM/2B/SS/CM2B0KCD230W_PK_C01.jpg",
        "http://newmedia.thehandsome.com/CM/2B/SS/CM2B0KCD230W_CP_C01.jpg",
        "http://newmedia.thehandsome.com/CM/2B/SS/CM2B0KCD230W_WT_C01.jpg"
      ],
      size: [
        "85", "90"
      ],
      stock: 5,
      amount: 1
    }
  },
  methods: {
    plusAmount() {
      if(this.amount+1 > this.stock) {
        console.log("재고가 부족합니다.")
      } else {
        this.amount += 1
      }
    },
    minusAmount() {
      if(this.amount-1 <= 0) {
        console.log("1개 이상 주문하세요.")
      } else {
        this.amount -= 1
      }
    }
  }
}
</script>

<style scoped>
</style>