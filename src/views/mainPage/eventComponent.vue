<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "eventComponent",
  components: {},
  data: function () {
    return {
      items: [
          {src: 'http://cdn.thehandsome.com/pc/editorial/detail/image/20211126_24499724379568305_ko.jpg',},
          {src: 'http://cdn.thehandsome.com/mobile/editorial/list/banner/20211201_24921511958828155_ko.jpg',},
          {src: 'http://www.thehandsome.com/medias/C-pumam.jpg?context=bWFzdGVyfGltYWdlc3w4NTcwMnxpbWFnZS9qcGVnfGltYWdlcy9oYmIvaGQ3LzkyNTUzNDExNjI1MjYuanBnfDZhNjZlMGFhMTM5YTM5ODc5NjNhZWY0MTNhZGVmMTEyMmM1ZGM0NzNmZjI3N2NlZjI5NjJmYjE2YTRiYTk2NWM',},
        ],
    };
  },
  methods: {
  },
};
</script>

<style scoped>
</style>
