<template>
  <v-container>
    <v-row>
      <v-col class="title text-center my-4">회원 정보 수정</v-col>
    </v-row>
    
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="handleUpdate()">
        <v-row class="contentname pa-3">
          <v-col class="col-3 d-flex justify-center align-center font-weight-bold">아이디</v-col>
          <v-card class="content col-9 d-flex align-center" min-height="55" outlined>{{member.memberId}}</v-card>
        </v-row>

        <validation-provider name="member.password" rules="passwordRequired|passwordMin:8" v-slot="{ errors }">
          <v-row class="contentname pa-3">
            <v-col class="col-3 d-flex justify-center align-center font-weight-bold">비밀번호</v-col>
            <v-text-field v-model="member.password"
                          type="password"
                          outlined
                          color="#425745"
                          hide-details>
            </v-text-field>
            <span class="errormessage col-12 mt-0 ml-15 pl-9 mb-0">{{ errors[0] }}</span>
          </v-row>
        </validation-provider>

        <v-row class="contentname pa-3">
          <v-col class="col-3 d-flex justify-center align-center font-weight-bold">이름</v-col>
          <v-card class="content col-9 d-flex align-center" min-height="55" outlined>{{member.name}}</v-card>
        </v-row>

        <validation-provider name="member.nickname" rules="nicknameMin:10" v-slot="{ errors }">
          <v-row class="contentname pa-3">
            <v-col class="col-3 d-flex justify-center align-center font-weight-bold">닉네임</v-col>
            <v-text-field v-model="member.nickname"
                          outlined
                          color="#425745"
                          hide-details>
            </v-text-field>
            <span class="errormessage col-12 mt-0 ml-15 pl-9 mb-0">{{ errors[0] }}</span>
          </v-row>
        </validation-provider>

        <v-row class="contentname pa-3">
          <v-col class="col-3 d-flex justify-center align-center font-weight-bold">이메일</v-col>
          <v-card class="content col-9 d-flex align-center" min-height="55" outlined>{{member.email}}</v-card>
        </v-row>

        <validation-provider name="member.tel" rules="telRequired|telType" v-slot="{ errors }">
          <v-row class="contentname pa-3">
            <v-col class="col-3 d-flex justify-center align-center font-weight-bold">전화번호</v-col>
            <v-text-field v-model="member.tel"
                          outlined
                          color="#425745"
                          hide-details>
            </v-text-field>
            <span class="telComment ml-15 pl-9">'-'를 포함해 입력바랍니다.</span>
            <span class="errormessage col-12 mt-0 mt-0 ml-15 pl-9 mb-0">{{ errors[0] }}</span>
          </v-row>
        </validation-provider>

        <v-row class="contentname pa-3">
          <v-col class="col-3 d-flex justify-center align-center font-weight-bold">생년월일</v-col>
          <v-card class="content col-9 d-flex align-center" min-height="55" outlined>{{member.birthday}}</v-card>
        </v-row>

        <v-row class="justify-center mt-5 mb-3 mr-1">
          <v-btn large depressed outlined @click="goBack">취소</v-btn>
          <v-btn class="ml-1" dark color="#425745" large depressed :disabled="invalid" type="submit">수정</v-btn>
        </v-row>
      </form>
    </validation-observer>
  </v-container>
</template>

<script>
import { extend } from 'vee-validate';
import { required, min, max } from 'vee-validate/dist/rules';
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
extend('nicknameMin', {
  ...max,
  message: '최대 10자만 입력 가능합니다.'
});
extend('telRequired', {
  ...required,
  message: '전화번호를 입력하세요.'
});
extend('telType', value => {
  let format = /^(01[0|1|6|7|8|9])-([0-9]{3,4})-([0-9]{4})$/;
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
    getMember(memberId) {
      memberAPI.getMember(memberId)
        .then(response => {
          this.member = response.data;
          this.dateSplit();
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
    goBack(){
      this.$router.go(-1);
    },
    async handleUpdate () {
      this.$refs.observer.validate();

      if(this.$refs.observer.validate()) {
        memberAPI.updateMember(this.member)
          .then(response => {
            console.log(response)
          })
          .catch(error =>  {
            console.log(error);
          });
      }
    },
    dateSplit() {
      this.member.birthday = dayjs(this.member.birthday).format("YYMMDD")
    }
  },
  created() {
    let memberId = this.$store.getters.getMemberId;
    this.getMember(memberId);
  },
}
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 600;
}
.contentname {
  font-size: 13px;
}
.content {
  font-size: 15px;
}
.col {
  font-size: 15px;
  padding: 1%;
}
.v-text-field >>> input {
  font-size: 15px;
}
.errormessage {
  color: red;
  margin: 10px 15px 10px 10px;
  padding: 0px 9px 0px 0px;
}
</style>