<template>
  <v-container fluid class="pa-0">
    <navi />

    <v-row class="mt-2">
      <v-col class="pa-0">
        <v-layout color="#385F73" dark>
          <img src="@/assets/images/event.png" width="100%">
        </v-layout>

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

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Navi from './Navi.vue';
import ProductCard from './ProductCard.vue';

export default {
  name: "mainPage",
  components: {
    Navi,
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
