<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="accountupdatetitle">결제수단 추가</v-col>
    </v-row>
    
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="handleInsert()">
        <validation-provider name="account.payType" rules="required">
          <v-row class="pa-0">
            <v-col class="contentname col-4 d-flex justify-center align-center">계좌/카드</v-col>
            <v-radio-group v-model="account.payType" row>
              <v-radio name="account.payType" label="계좌" :value="'1'"></v-radio>
              <v-radio name="account.payType" label="카드" :value="'2'"></v-radio>
            </v-radio-group>
          </v-row>
        </validation-provider>

        <validation-provider name="account.bank" rules="required" v-slot="{ errors }">
          <v-row class="pa-3">
            <v-col class="contentname col-3 pb-0 d-flex justify-center align-center">은행<br/>/카드사</v-col>
            <v-col class="col-9 pa-0" v-if="account.payType === '1'">
              <v-select :items="bankType1" outlined hide-details v-model="account.bank"></v-select>
            </v-col>
            <v-col class="col-9 pa-0" v-if="account.payType === '2'">
              <v-select :items="bankType2" outlined hide-details v-model="account.bank"></v-select>
            </v-col>
            <span class="errormessage mt-0 ml-15 pl-9 mb-0">{{ errors[0] }}</span>
          </v-row>
        </validation-provider>

        <validation-provider name="account.accountNo" rules="required|integer" v-slot="{ errors }">
          <v-row class="pa-3">
            <v-col class="contentname col-3 pb-0 d-flex justify-center align-center">계좌번호<br/>/카드번호</v-col>
            <v-text-field v-model="account.accountNo"
                          outlined
                          hide-details>
            </v-text-field>
            <span class="errormessage col-9 mt-0 ml-15 pl-9 mb-0">{{ errors[0] }}</span>
          </v-row>
        </validation-provider>

        <v-row class="justify-center mt-5 mb-3 mr-1">
          <v-btn large depressed tile outlined @click="goBack">취소</v-btn>
          <v-btn class="ml-1 black white--text" large depressed tile :disabled="invalid" type="submit">추가</v-btn>
        </v-row>
      </form>

      <account-alert-dialog :message="alertDialogMessage"
                    :loading="loading"
                    v-if="alertDialog"
                    @close ="alertDialog=false" />
    </validation-observer>
  </v-container>
</template>

<script>
import { extend } from 'vee-validate';
import { required, integer } from 'vee-validate/dist/rules';
import memberAPI from '@/apis/member';
import AccountAlertDialog from '@/components/alert/AccountAlertDialog.vue';


extend('required', {
  ...required,
  message: '값을 입력해주세요.'
});
extend('integer', {
  ...integer,
  message: '숫자를 입력해주세요.'
});


export default {
  name:"AccountUpdate",
  components: {
    AccountAlertDialog
  },
  data() {
    return {
      account: {
        bank: '',
        payType: '1',
        accountNo: '',
        memberId: this.$store.getters.getMemberId
      },
      bankType1: ['신한은행', '국민은행', '농협', '카카오뱅크'],
      bankType2: ['현대카드', '신한카드', '국민카드', '삼성카드'],
      alertDialog: false,
      alertDialogMessage: "",
      loading: false,
    };
  },
  methods: {
    goBack(){
      this.$router.go(-1);
    },
    async handleInsert() {
      this.$refs.observer.validate();

      if(this.$refs.observer.validate()) {
        try {
          const response = await memberAPI.insertAccount(this.account);

          if(response.data === 'success') {
            this.$router.push("/member/account")
          } else if(response.data === 'requiredpassword')  {
            this.alertDialog = true;
            this.alertDialogMessage = "결제비밀번호 등록 후 추가 가능합니다.";
          }
        } catch (error) {
          this.alertDialog = true;
          this.alertDialogMessage = error;
        }
      }
    },
  },
}
</script>

<style scoped>
.accountupdatetitle {
  font-size: 25px;
  font-weight: 500;
}
.contentname {
  font-size: 15px;
}
.errormessage {
  color: red;
  margin: 10px 15px 10px 10px;
  padding: 0px 9px 0px 0px;
}
</style>