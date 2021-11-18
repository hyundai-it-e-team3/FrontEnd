<template>
  <v-footer color="black" class="pa-2 pt-3" dark>
    <v-container>
      <v-row>
        <v-col cols="2.4">
          <v-row class="d-flex justify-center">
            <v-icon>mdi-format-list-bulleted</v-icon> 
          </v-row>
          <v-row class="d-flex justify-center">
            <span class="text-overline">Category</span>
          </v-row>
        </v-col>
        <v-col cols="2.4">
          <v-row class="d-flex justify-center">
            <v-icon>mdi-tag-outline</v-icon>
          </v-row>
          <v-row class="d-flex justify-center">
            <span class="text-overline">Brand</span>
          </v-row>
        </v-col>
        <v-col cols="2.4">
          <v-row class="d-flex justify-center">
            <v-icon>mdi-home</v-icon>
          </v-row>
          <v-row class="d-flex justify-center">
            <span class="text-overline">Home</span>
          </v-row>
        </v-col>
        <v-col cols="2.4">
          <v-row class="d-flex justify-center">
            <v-icon>mdi-cards-heart-outline</v-icon>
          </v-row>
          <v-row class="d-flex justify-center">
            <span class="text-overline">WishList</span>
          </v-row>
        </v-col>
        <v-col cols="2.4">
          <v-row class="d-flex justify-center">
            <v-icon>mdi-account</v-icon>
          </v-row>
          <v-row class="d-flex justify-center">
            <span class="text-overline">MyPage</span>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name:"",
  components: {
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