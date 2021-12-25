<template>
  <v-container>
    <v-row class="font-weight-bold d-flex justify-center py-2" style="font-size: 20px;">
      WISHLIST
    </v-row>

    <v-row class="px-3">
      <v-col cols="6" class="pa-1"
        v-for="item in list" :key="item.productId">
        <v-card
          elevation="0"
          @click="goProductDetail(item.productId)"
        >
          <v-img
            :src="item.thumbnail"
            class="white--text align-end"
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

          <v-card-title class="brandname pt-1 px-3">{{ item.brandName }}</v-card-title>
            <v-card-subtitle class="px-3 pt-0 pb-2">
              <div class="content">{{ item.name }}</div>
              <div class="priceContent">￦ {{ item.price.toLocaleString() }}</div>
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
    if(this.$store.getters["getAuthToken"]=="")
      idStr = "";
    ProductModule.getProductWishList(idStr)
      .then((response) => {
        console.log(response.data);
        this.list = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.$router.push("/member/mypage");
      });
  },
};
</script>

<style scoped>
.brandname {
  font-weight: bold;
  font-size: 12px;
  color: black;
}
.content {
  font-weight: 500;
  font-size: 14px;
  color: black;
}
.priceContent {
  color: black;
  font-size: 14px;
  font-weight: bold;
}
</style>