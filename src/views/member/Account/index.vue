<template>
  <v-container class="mt-2" >
    <v-row v-for="(account) in account" :key="account.accountNo" class="mb-2">
      <account-list
        :account=account />
    </v-row>
    <v-row class="d-flex justify-center mt-4">
      <v-btn color="#425745" large dark to="/member/account/insert">결제수단 추가</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import memberAPI from '@/apis/member';
import AccountList from './AccountList.vue';

export default {
  name:"Account",
  components: {
    AccountList
  },
  data() {
    return {
      account: {
        accountNo: '',
        bank: '',
        payType: '',
        memberId: ''
      }
    };
  },
  methods: {
    getAccount(memberId) {
      memberAPI.getAccount(memberId)
        .then(response => {
          this.account = response.data;
        })
        .catch(error => {
          console.log(error);
        })
    }
  },
  created() {
    let memberId = this.$store.getters.getMemberId;
    this.getAccount(memberId);
  }
}
</script>

<style scoped>
</style>
