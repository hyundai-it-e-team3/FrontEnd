<template>
  <v-container class="pt-0">
    <navi />

    <v-col class="mt-1 mb-2">
      <v-row>
        <!-- <img src="@/assets/images/event.png" /> -->
      </v-row>
    </v-col>
    <v-col class="mb-2">
      <v-row>
        <!-- <img src="@/assets/images/event.png" /> -->
      </v-row>
    </v-col>
    <v-col class="mb-2">
      <v-row>
        <!-- <img src="@/assets/images/event.png" /> -->
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import Navi from '../Navi.vue';

export default {
  name:"eventPage",
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
img {
  max-width: 100%;
  height: auto;
  display: block;
}
</style>