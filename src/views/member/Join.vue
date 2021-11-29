<template>
  <v-container>
    <validation-provider name="memberId" rules="memberIdRequired|memberIdType|memberIdMin:5" v-slot="{ errors }">
      <v-col>아이디<span class="red--text">*</span></v-col>
      <v-text-field placeholder="아이디"
                    v-model="memberId"
                    outlined
                    hide-details>
      </v-text-field>
      <span>{{ errors[0] }}</span>
    </validation-provider>

    <validation-provider name="password" rules="passwordRequired|passwordMin:8" v-slot="{ errors }">
      <v-col>비밀번호<span class="red--text">*</span></v-col>
      <v-text-field placeholder="비밀번호"
                    v-model="password"
                    outlined
                    hide-details>
      </v-text-field>
      <span>{{ errors[0] }}</span>
    </validation-provider>
    
    <validation-provider name="name" rules="nameRequired" v-slot="{ errors }">
      <v-col>이름<span class="red--text">*</span></v-col>
      <v-text-field placeholder="이름"
                    v-model="name"
                    outlined
                    hide-details>
      </v-text-field>
      <span>{{ errors[0] }}</span>
    </validation-provider>

    
    <v-col>닉네임</v-col>
    <v-text-field placeholder="닉네임"
                  v-model="nickname"
                  outlined>
    </v-text-field>

    <validation-provider name="email" rules="emailRequired|emailType" v-slot="{ errors }">
      <v-col>이메일<span class="red--text">*</span></v-col>
      <v-text-field placeholder="이메일"
                    v-model="email"
                    outlined
                    hide-details>
      </v-text-field>
      <span>{{ errors[0] }}</span>
    </validation-provider>

    <validation-provider name="tel" rules="telRequired|telType" v-slot="{ errors }">
      <v-col>전화번호<span class="red--text">*</span> <span class="telComment">'-'를 제외한 숫자만 입력바랍니다.</span></v-col>
      <v-text-field placeholder="전화번호"
                    v-model="tel"
                    outlined
                    hide-details>
      </v-text-field>
      <span>{{ errors[0] }}</span>
    </validation-provider>

    <validation-provider name="birthday" rules="birthdayRequired|birthdayType" v-slot="{ errors }">
      <v-col>생년월일<span class="red--text">*</span> <span class="telComment">6자리만 입력바랍니다.</span></v-col>
      <v-text-field placeholder="생년월일"
                    v-model="birthday"
                    class="mr-2"
                    outlined
                    hide-details>
      </v-text-field>
      <span>{{ errors[0] }}</span>
    </validation-provider>

    <v-divider/>

    <v-checkbox label="(필수) 개인정보 이용 동의"
                v-model="checkbox"
                class="mb-5"
                required>
    </v-checkbox>
    <v-row class="justify-center mb-10">
      <v-btn x-large depressed tile outlined @click="goBack">취소</v-btn>
      <v-btn class="ml-2 black white--text" x-large depressed tile :disabled="!checkbox">회원가입</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { extend } from 'vee-validate';
import { required, alpha_num, min, email } from 'vee-validate/dist/rules';

extend('memberIdRequired', {
  ...required,
  message: '아이디를 입력하세요.'
});
extend('memberIdType', {
  ...alpha_num,
  message: '아이디는 영문자 또는 숫자만 입력 가능합니다.'
});
extend('memberIdMin', {
  ...min,
  message: '5자 이상 입력하세요.'
});
extend('passwordRequired', {
  ...required,
  message: '비밀번호를 입력하세요.'
});
extend('passwordMin', {
  ...min,
  message: '8자 이상 입력하세요.'
});
extend('nameRequired', {
  ...required,
  message: '이름을 입력하세요.'
});
extend('emailRequired', {
  ...required,
  message: '이메일을 입력하세요.'
});
extend('emailType', {
  ...email,
  message: '올바른 형식의 입력이 아닙니다.'
});
extend('telRequired', {
  ...required,
  message: '전화번호를 입력하세요.'
});
extend('telType', value => {
  let format = /^(01[0|1|6|7|8|9])([0-9]{7,8})$/;
  if(format.test(value)) {
    return true;
  }
  return '올바른 형식의 입력이 아닙니다.'
});
extend('birthdayRequired', {
  ...required,
  message: '생일을 입력하세요.'
});
extend('birthdayType', value => {
  let format = /\d{2}([0]\d|[1][0-2])([0][1-9]|[1-2]\d|[3][0-1])/;
  if(format.test(value)) {
    return true;
  }
  return '올바른 형식의 입력이 아닙니다.'
});

export default {
  name: "Join",
  components: {
  },
  validations: {
      name: { required },
      email: { required, email },
    },
  data: function() {
    return {
      member: {
        memberId: '',
        password: '',
        name: '',
        nickname: '',
        email: '',
        tel: '',
        birthday: '',
        level: '',
        onclickpayPassword: '',
        kakaoNo: ''
      },
      checkbox: false,
    };
  },
  methods: {
    goBack(){
      this.$router.go(-1);
    },
  }
}
</script>

<style scoped>
.v-btn {
  font-size: 3em;
}
.col {
  font-size: 1.3em;
  padding: 1%;
}
.v-text-field >>> input {
  font-size: 1.3em;
}
#scrolling-techniques-3 > div > span > span {
  color: red;
  margin: 10px 10px 10px 10px;
}
</style>