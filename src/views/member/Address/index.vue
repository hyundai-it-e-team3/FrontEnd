<template>
  <v-container>
    <v-row v-for="(address) in address" :key="address.addressSeq" class="mb-2">
      <address-list 
        :address=address />
    </v-row>
    <v-row class="d-flex justify-center mt-4">
      <v-btn large outlined to="/member/address/insert">배송지 추가</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import memberAPI from '@/apis/member';
import AddressList from './AddressList.vue'

export default {
  name:"Address",
  components: {
    AddressList
  },
  data() {
    return {
      address: {
      }
    };
  },
  methods: {
    getAddressList(memberId) {
      memberAPI.getAddressList(memberId)
        .then(response => {
          this.address = response.data;
        })
        .catch(error => {
          if(error.response) {
            if(error.response.status === 403) {
              this.$router.push("/member/mypage");
            }
          } else {
            console.log(error);
          }
        })
    },
  },
  created() {
    let memberId = this.$store.getters.getMemberId;
    this.getAddressList(memberId);
  },
}
</script>

<style scoped>
</style>