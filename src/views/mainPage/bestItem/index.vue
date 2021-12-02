<template>
  <v-container class="pt-0">
    <navi />

    <v-col class="mt-1">
      <v-row>
        <v-col cols="6" class="pa-0">
        </v-col>
        <v-col cols="6" class="pa-0">
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
        </v-col>
        <v-col cols="6" class="pa-0">
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import Navi from '../Navi.vue';

export default {
  name:"bestItem",
  components: {
    Navi,
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