<template>
  <v-container class="pa-0">
    <div v-if="$store.getters.getMemberId === ''">
      <before-login />
    </div>
    <div v-if="$store.getters.getMemberId !== ''">
      <after-login />
    </div>
  </v-container>
</template>

<script>
import AfterLogin from './AfterLogin.vue'
import BeforeLogin from './BeforeLogin.vue';

export default {
  name:"MyPage",
  components: {
    AfterLogin,
    BeforeLogin,
  },
}
</script>

<style scoped>
</style>