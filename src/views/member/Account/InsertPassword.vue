<template>
  <v-container>
    <v-row class="text-center mb-1">
      <v-col class="oneclickpaytitle">비밀번호 추가</v-col>
    </v-row>
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="handleInsert()">
        <validation-provider name="member.oneclickpayPassword" rules="required|integer|min:6" v-slot="{ errors }">
          <v-otp-input length="6" type="password" v-model="member.oneclickpayPassword"></v-otp-input>
          <span class="errormessage red--text col-12 mt-0 ml-15 pl-9 mb-0">{{ errors[0] }}</span>
        </validation-provider>

        <v-row class="justify-center mt-2 mb-3 mr-1">
          <v-btn class="ml-1 black white--text" large tile :disabled="invalid" type="submit">추가</v-btn>
        </v-row>
      </form>
    </validation-observer>

    <alert-dialog :message="alertDialogMessage"
                  :loading="loading"
                  v-if="alertDialog"
                  @close="goAccountList" />
  </v-container>
</template>

<script>
import { extend } from 'vee-validate';
import { required, integer, min } from 'vee-validate/dist/rules';
import memberAPI from '@/apis/member';
import AlertDialog from "@/components/alert/AlertDialog.vue";

extend('required', {
  ...required,
  message: '값을 입력해주세요.'
});
extend('integer', {
  ...integer,
  message: '숫자를 입력해주세요.'
});
extend('min', {
  ...min,
  message: '6자리 모두 입력바랍니다.'
});

export default {
  name:"",
  components: {
    AlertDialog
  },
  data() {
    return {
      member: {
        memberId: this.$store.getters.getMemberId,
        oneclickpayPassword: ''
      },
      alertDialog: false,
      alertDialogMessage: "",
      loading: false,
    };
  },
  methods: {
    handleInsert() {
      try {
        this.loading = true;
        this.alertDialog = true;

        memberAPI.updateAccountPassword(this.member);
        this.loading = false;
        this.alertDialogMessage = "등록 성공";
      } catch (error) {
        this.loading = false;
        this.alertDialogMessage = `실패: ${error.message}`;
      }
    },
    goAccountList() {
      this.$router.push("/member/account");
    }
  }
}
</script>

<style scoped>
.oneclickpaytitle {
  font-size: 25px;
  font-weight: 500;
}
</style>
