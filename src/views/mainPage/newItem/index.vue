<template>
  <v-container class="pt-0">
    <navi />

    <v-col class="mt-1">
      <v-row>
        <v-col cols="6" class="pa-0">
            <product-card/>
        </v-col>
        <v-col cols="6" class="pa-0">
            <product-card/>
        </v-col>
      </v-row>
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
  </v-container>
</template>

<script>
import Navi from '../Navi.vue';
import ProductCard from '../ProductCard.vue';

export default {
  name:"newItem",
  components: {
    Navi,
    ProductCard
  },
  data() {
    return {
    };
  },
  methods: {
  }
}
</script>

<style scoped>
</style>