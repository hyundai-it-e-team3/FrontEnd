<template>
  <v-container>
    <v-row>
        <v-col class="logo text-center mt-4 pb-0 font-weight-bold">HANSOME</v-col>
    </v-row>
    <v-row>
      <v-col class="col-12 pl-5 pr-5 py-0" style="height: 90px;">
        <validation-provider name="memberId" rules="memberIdRequired" v-slot="{ errors }">
          <v-text-field label="아이디 입력"
                        v-model="member.memberId"
                        outlined
                        color="#425745"
                        value="user"
                        hide-details>
          </v-text-field>
          <span>{{ errors[0] }}</span>
        </validation-provider>
      </v-col>
      <v-col class="col-12 pl-5 pr-5 pt-0" style="height: 110px;">
        <validation-provider name="password" rules="passwordRequired" v-slot="{ errors }">
          <v-text-field label="비밀번호 입력"
                        v-model="member.password"
                        type="password"
                        color="#425745"
                        
                        @click:append="passwordIconShow = !passwordIconShow"
                        oninput="javascript: this.value = this.value.replace(/[\s]/g, '' );"
                        hide-details
                        outlined>
          </v-text-field>
          <span>{{ errors[0] }}</span>
        </validation-provider>
      </v-col>
    </v-row>
    <v-row class="justify-center mb-4">
        <v-btn class="black white--text" depressed large color="black" style="width: 130px;"
          :disabled="disableButton" @click="handleLogin">로그인</v-btn>
    </v-row>

    <v-divider class="my-4" />
    
    <v-row class="justify-center border">
      <v-btn plain to="/member/join">회원가입</v-btn>
    </v-row>

    <alert-dialog :message="alertDialogMessage"
                  :loading="loading"
                  v-if="alertDialog"
                  @close ="alertDialog=false" />
  </v-container>
</template>

<script>
import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import memberAPI from '@/apis/member';
import orderAPI from '@/apis/order';
import AlertDialog from "@/components/alert/AlertDialog.vue";


extend('memberIdRequired', {
  ...required,
  message: '아이디를 입력하세요.'
});
extend('passwordRequired', {
  ...required,
  message: '비밀번호를 입력하세요.'
});

export default {
  name: "Login",
  components: {
    AlertDialog
  },
  data: function () {
    return {
      member: {
        memberId: 'user',
        password: '12345'
      },
      alertDialog: false,
      alertDialogMessage: "",
      loading: false,
      disableButten: true
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await memberAPI.login(this.member);

        if(response.data.result === 'success') {
          this.$store.dispatch("saveAuth", {
            memberId: response.data.memberId,
            authToken: response.data.jwt
          });
          memberAPI.addAuthHeader(response.data.jwt);
          orderAPI.addAuthHeader(response.data.jwt);
        } else if(response.data.result === 'disabledMember') {
          this.alertDialog = true;
          this.alertDialogMessage = "탈퇴한 회원의 계정입니다.";
        }
      } catch (error) {
        try {
          if(error.response.status === 401) {
            this.alertDialog = true;
            this.alertDialogMessage = "아이디 또는 패스워드가 틀립니다.";
          } 
        } catch(error) {
          this.alertDialog = true;
          this.alertDialogMessage = error;
        }
      }
    }
  },
  computed: {
    disableButton() {
      let result = this.member.memberId === "" || this.member.password === "";
      return result;
    }
  }
};
</script>

<style scoped>
.logo {
    font-size: 2.5em;
    font-weight: 500;
}
.v-text-field >>> input {
    font-size: 1.2em;
    font-weight: 400;
}
span {
  color: red;
  margin: 10px 10px 10px 10px;
}
</style>