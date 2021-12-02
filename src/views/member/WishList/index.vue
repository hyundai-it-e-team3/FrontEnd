<template>
  <v-container class="pa-0">
    <v-row dense class="mt-3">
      <v-col cols="6" v-for="item in list" :key="item.productId">
        <v-card
          @click="goProductDetail(item.productId)"
          elevation="0"
        >
          <v-img
            :src="item.thumbnail"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
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
          <v-card-title class="body-2">{{
            item.brandName
          }}</v-card-title>
          <v-card-subtitle class="caption">
            <div>{{ item.name }}</div>
            <div class="font-weight-blacksss">
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
  //컴포넌트의 대표이름 (devtools에 나오는 이름)
  name: "wishList",
  //추가하고 싶은 컴포넌트 등록
  components: {},
  //컴포넌트 데이터 정의
  data: () => ({
    box: [],
    list: [],
  }),
  //컴포넌트 메소드 정의
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

<style scoped></style>