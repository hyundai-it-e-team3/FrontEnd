<template>
  <v-container>
    <v-row>
        <v-col class="logo text-center">HANSOME</v-col>
    </v-row>
    <v-row>
      <v-col class="col-12 pl-5 pr-5 pb-0">
        <validation-provider name="memberId" rules="memberIdRequired" v-slot="{ errors }">
          <v-text-field label="아이디 입력"
                        v-model="memberId"
                        outlined
                        hide-details>
          </v-text-field>
          <span>{{ errors[0] }}</span>
        </validation-provider>
      </v-col>
      <v-col class="col-12 pl-5 pr-5 pt-0 mb-4">
        <validation-provider name="password" rules="passwordRequired" v-slot="{ errors }">
          <v-text-field label="비밀번호 입력"
                        v-model="password"
                        type="password"
                        @click:append="passwordIconShow = !passwordIconShow"
                        oninput="javascript: this.value = this.value.replace(/[\s]/g, '' );"
                        hide-details
                        outlined>
          </v-text-field>
          <span>{{ errors[0] }}</span>
        </validation-provider>
      </v-col>
    </v-row>
    <v-row class="justify-center ma-0">
        <v-btn class="" width="165" depressed large color="black" dark>로그인</v-btn>
        <v-btn class="ml-2" width="165" depressed large color="#fae100">카카오로 로그인</v-btn>
    </v-row>
    <v-divider class="ma-4" />
    <v-row class="justify-center border">
      <v-btn class="grey--text" plain to="/member/join">회원가입</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

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
  components: {},
  data: function () {
    return {
        memberId:  '',
        password:  ''
    };
  },
  methods: {
  },
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
.v-btn {
    font-size: 3em;
}
span {
  color: red;
  margin: 10px 10px 10px 10px;
}
</style>