<template>
  <v-container>
    <v-row>
        <v-col class="logo text-center">HANSOME</v-col>
    </v-row>
    <v-row>
      <v-col class="col-12 pl-5 pr-5 pb-0">
        <v-text-field label="아이디 입력"
                      v-model="memberId"
                      :rules="[rules.memberIdInput]"
                      outlined></v-text-field>
      </v-col>
      <v-col class="col-12 pl-5 pr-5 pt-0">
        <v-text-field label="비밀번호 입력"
                      v-model="password"
                      type="password"
                      @click:append="passwordIconShow = !passwordIconShow"
                      oninput="javascript: this.value = this.value.replace(/[\s]/g, '' );"
                      :rules="[rules.passwordInput]"
                      outlined>
          <v-icon>mdi-eye</v-icon>
        </v-text-field>
      </v-col>
    </v-row>
    <v-row class="justify-center ma-0">
        <v-btn class="" width="165" depressed large color="black" dark>로그인</v-btn>
        <v-btn class="ml-2" width="165" depressed large color="#fae100">카카오로 로그인</v-btn>
    </v-row>
    <hr class="ma-4" />
    <v-row class="justify-center border">
        <v-btn class="grey--text" plain to="/member/join">회원가입</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  components: {},
  data: function () {
    return {
        memberId:  '',
        password:  '',
        rules: {
            memberIdInput: value => !!value  || '아이디를 입력하세요.',
            passwordInput: value => !!value  || '비밀번호를 입력하세요.'
        }
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
</style>