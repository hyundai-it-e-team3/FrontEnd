<template>
  <v-container class="pa-1">
    <v-row dense>
      <v-col cols="6" v-for="item in list" :key="item.productId">
        <v-card
          @click="goProductDetail(item.productId)"
          elevation="0"
          tile
        >
          <v-img
            :src="item.thumbnail"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="auto"
          >
            <v-icon
              v-if="
                $store.getters['member/getWishList'].includes(
                  item.productId
                )
              "
              color="red"
              class="ml-2 mb-2"
              dense
              >mdi-heart</v-icon
            >
          </v-img>
          <v-card-title class="brandname body-2">{{
            item.brandName
          }}</v-card-title>
          <v-card-subtitle class="caption">
            <div class="content">{{ item.name }}</div>
            <div class="content">
              {{ item.price.toLocaleString() }}₩
            </div>
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
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
  padding: 0,5em;
}
.content {
  font-weight: 500;
  font-size: 11px;
  color: black;
}
</style>