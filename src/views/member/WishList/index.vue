<template>
  <v-container class="d-flex pa-0">
    <v-col class="col-6 pa-2" v-for="item in list" :key="item.productId">
      <v-card elevation="0" height="300px" tile
        @click="goProductDetail(item.productId)">

        <v-img
          :src="item.thumbnail"
          class="white--text align-end"
          height="auto">
          <v-icon
            v-if="$store.getters['member/getWishList'].includes(item.productId)"
            color="red"
            class="ml-2 mb-2">
            mdi-heart</v-icon>
        </v-img>

        <v-card-title class="brandname body-2">{{ item.brandName }}</v-card-title>
        <v-card-subtitle class="caption">
          <div class="content">{{ item.name }}</div>
          <div class="content">{{ item.price.toLocaleString() }} ₩</div>
        </v-card-subtitle>

      </v-card>
    </v-col>
  </v-container>
</template>

<script>
import ProductModule from "@/modules/productModule";

export default {
  name: "wishList",
  components: {},
  data: () => ({
    box: [],
    list: [],
  }),
  methods: {
    goProductDetail(productId) {
      console.log(productId);
      this.$router.push(`/product/productDetail?productId=${productId}`);
    },
  },
  mounted() {
    this.$store.commit("setPageFlag", "default");
  },
  created() {
    this.box = this.$store.getters["member/getWishList"];
    let idStr = "";

    for (var i = 0; i < this.box.length; i++) {
      if (i > 0) idStr = idStr + ",";
      idStr = idStr + this.box[i];
    }
    console.log(idStr);

    ProductModule.getProductWishList(idStr)
      .then((response) => {
        console.log(response.data);
        this.list = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(this.list);
  },
};
</script>

<style scoped>
.brandname {
  font-weight: 500;
  color: black;
}
.content {
  font-weight: 500;
  font-size: 11px;
  color: black;
}
</style>
