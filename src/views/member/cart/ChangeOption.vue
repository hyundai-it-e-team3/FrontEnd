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
  }
}
</script>

<style scoped>
</style>