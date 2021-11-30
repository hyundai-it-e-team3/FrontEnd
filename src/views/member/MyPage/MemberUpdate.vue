<template>
  <v-container>
    <v-row>
      <v-col class="memberupdatetitle text-center">회원 정보 수정</v-col>
    </v-row>
    
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="handleUpdate()">
        <v-row class="contentname pa-3">
          <v-col class="col-3 d-flex justify-center align-center">아이디</v-col>
          <v-card class="content col-9 d-flex align-center" min-height="55" outlined>{{member.memberId}}</v-card>
        </v-row>

        <validation-provider name="member.password" rules="passwordRequired|passwordMin:8" v-slot="{ errors }">
          <v-row class="contentname pa-3">
            <v-col class="col-3 d-flex justify-center align-center">비밀번호</v-col>
            <v-text-field v-model="member.password"
                          type="password"
                          outlined
                          hide-details>
            </v-text-field>
            <span class="errormessage col-12 mt-0 ml-15 pl-9 mb-0">{{ errors[0] }}</span>
          </v-row>
        </validation-provider>

        <v-row class="contentname pa-3">
          <v-col class="col-3 d-flex justify-center align-center">이름</v-col>
          <v-card class="content col-9 d-flex align-center" min-height="55" outlined>{{member.name}}</v-card>
        </v-row>

        <validation-provider name="member.nickname" rules="nicknameMin:10" v-slot="{ errors }">
          <v-row class="contentname pa-3">
            <v-col class="col-3 d-flex justify-center align-center">닉네임</v-col>
            <v-text-field v-model="member.nickname"
                          outlined
                          hide-details>
            </v-text-field>
            <span class="errormessage col-12 mt-0 ml-15 pl-9 mb-0">{{ errors[0] }}</span>
          </v-row>
        </validation-provider>

        <v-row class="contentname pa-3">
          <v-col class="col-3 d-flex justify-center align-center">이메일</v-col>
          <v-card class="content col-9 d-flex align-center" min-height="55" outlined>{{member.email}}</v-card>
        </v-row>

        <validation-provider name="member.tel" rules="telRequired|telType" v-slot="{ errors }">
          <v-row class="contentname pa-3">
            <v-col class="col-3 d-flex justify-center align-center">전화번호</v-col>
            <v-text-field v-model="member.tel"
                          outlined
                          hide-details>
            </v-text-field>
            <span class="telComment ml-15 pl-9">'-'를 제외한 숫자만 입력바랍니다.</span>
            <span class="errormessage col-12 mt-0 mt-0 ml-15 pl-9 mb-0">{{ errors[0] }}</span>
          </v-row>
        </validation-provider>

        <v-row class="contentname pa-3">
          <v-col class="col-3 d-flex justify-center align-center">생년월일</v-col>
          <v-card class="content col-9 d-flex align-center" min-height="55" outlined>{{member.birthday}}</v-card>
        </v-row>

        <v-row class="justify-end mt-3 mb-3 mr-1">
          <v-btn depressed tile outlined @click="goBack">취소</v-btn>
          <v-btn class="ml-1 black white--text" depressed tile :disabled="invalid" type="submit">수정</v-btn>
        </v-row>
      </form>
    </validation-observer>

    <v-divider />
  </v-container>
</template>

<script>
import { extend } from 'vee-validate';
import { required, alpha_num, min, max, email } from 'vee-validate/dist/rules';
import memberAPI from '@/apis/member';
import dayjs from 'dayjs'

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
extend('nicknameMin', {
  ...max,
  message: '최대 10자만 입력 가능합니다.'
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

export default {
  name: "MemberUpdate",
  components: {
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
        oneclickpayPassword: '',
        kakaoNo: ''
      }
    };
  },
  methods: {
    goBack(){
      this.$router.go(-1);
    },
    async handleUpdate () {
      this.$refs.observer.validate();

      if(this.$refs.observer.validate()) {
        memberAPI.updateMember(this.member)
          .then(response => {
            this.board = response.data
          })
          .catch(error =>  {
            console.log(error);
          });
      }
    },
    dateSplit() {
      this.member.birthday = dayjs(this.member.birthday).format("YYYY-MM-DD")
    }
  },
  async beforeMount() {
    const response = await memberAPI.getMember(this.$store.getters.getMemberId);
    this.member = response.data;
    this.dateSplit();
  },
}
</script>

<style scoped>
#scrolling-techniques-3 > div > div > div {
  font-size: 25px;
  font-weight: 500;
  margin: 5px  0px 10px 0px;
}
.contentname {
  font-size: 13px;
}
.content {
  font-size: 15px;
}
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
.errormessage {
  color: red;
  margin: 10px 15px 10px 10px;
  padding: 0px 9px 0px 0px;
}
</style>