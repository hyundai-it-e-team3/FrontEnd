<template>
  <v-container class="pl-2 pr-2 pt-0 pb-0">
    <v-card class="pa-4"  outlined tile >
      <v-row class="accountName pt-4 pl-4">
          {{account.bank}}
          <v-col class="d-flex align-start justify-end pt-0 pb-0 pr-4">
            <v-btn outlined text @click="deleteAccount(account.accountNo)">삭제</v-btn>
          </v-col>
      </v-row>
      <v-row class="accountTel pl-4 pb-2">
          {{account.accountNo}}
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import memberAPI from '@/apis/member';

export default {
  name:"AccountList",
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
    goAccountUpdate(accountNo) {
      this.$router.push("/member/account/update?accountNo="+accountNo);
    },
    deleteAccount(accountNo) {
      memberAPI.deleteAccount(accountNo)
        .then(response =>  {
          console.log(response);
          this.$el.parentNode.removeChild(this.$el);
        })
        .catch(error => {
          console.log(error)
        })
    },
  },
  props: [
    "account"
  ]
}
</script>

<style scoped>
.accountName {
  font-size: 20px;
  font-weight: 600;
}
.accountTel {
  font-size: 13px;
}
.accountContent {
  font-size: 16px;
}
</style>