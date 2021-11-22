<template>
  <v-container fluid class="pa-0">
    <v-col absolut class="pa-0">
        <v-btn>홈</v-btn>
        <v-btn>신상품</v-btn>
        <v-btn>베스트</v-btn>
        <v-btn>이벤트</v-btn>
    </v-col>

    <v-row class="mt-2">
      <v-col class="pa-0">
        <v-layout color="#385F73" dark>
          <img src="@/assets/images/event.png" height="180">
        </v-layout>

        <v-card class="mt-2">
          <v-col>
            <v-card-title class="text-h6 pa-1">신상품</v-card-title>
          </v-col>
          <v-col>
            <v-row>
              <v-col cols="4" class="pa-0">
                  <product-card/>
              </v-col>
              <v-col cols="4" class="pa-0">
                  <product-card/>
              </v-col>
              <v-col cols="4" class="pa-0">
                  <product-card/>
              </v-col>
            </v-row>
          </v-col>
        </v-card>

        <v-card class="mt-2">
          <v-col>
            <v-card-title class="text-h6 pa-1">베스트</v-card-title>
          </v-col>
          <v-col>
            <v-row>
              <v-col cols="6" class="pa-0">
                  <product-card/>
              </v-col>
              <v-col cols="6" class="pa-0">
                  <product-card/>
              </v-col>
            </v-row>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
  name: "mainPage",
  components: {
    ProductCard
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>

</style>
