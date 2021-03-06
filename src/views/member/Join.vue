<template>
  <v-container class="px-6">
    <v-col class="d-flex justify-center" style="font-weight: bold; font-size: 20px; letter-spacing: 4px;">회원가입</v-col>

    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="handleJoin()">
        <validation-provider name="member.memberId" rules="memberIdRequired|memberIdType|memberIdMin:5" v-slot="{ errors }">
          <v-col>아이디<span class="red--text">*</span></v-col>
          <v-text-field placeholder="아이디"
                        v-model="member.memberId"
                        outlined
                        dense
                        color="#425745"
                        hide-details>
          </v-text-field>
          <span>{{ errors[0] }}</span>
        </validation-provider>

        <validation-provider name="member.password" rules="passwordRequired|passwordMin:8" v-slot="{ errors }">
          <v-col>비밀번호<span class="red--text">*</span></v-col>
          <v-text-field placeholder="비밀번호"
                        v-model="member.password"
                        type="password"
                        outlined
                        dense
                        color="#425745"
                        hide-details>
          </v-text-field>
          <span>{{ errors[0] }}</span>
        </validation-provider>
        
        <validation-provider name="member.name" rules="nameRequired" v-slot="{ errors }">
          <v-col>이름<span class="red--text">*</span></v-col>
          <v-text-field placeholder="이름"
                        v-model="member.name"
                        outlined
                        dense
                        color="#425745"
                        hide-details>
          </v-text-field>
          <span>{{ errors[0] }}</span>
        </validation-provider>

        <validation-provider name="member.nickname" rules="nicknameMin:10" v-slot="{ errors }">
          <v-col>닉네임</v-col>
          <v-text-field placeholder="닉네임"
                        v-model="member.nickname"
                        outlined
                        dense
                        color="#425745"
                        hide-details>
          </v-text-field>
          <span>{{ errors[0] }}</span>
        </validation-provider>

        <validation-provider name="member.email" rules="emailRequired|emailType" v-slot="{ errors }">
          <v-col>이메일<span class="red--text">*</span></v-col>
          <v-text-field placeholder="이메일"
                        v-model="member.email"
                        outlined
                        dense
                        color="#425745"
                        hide-details>
          </v-text-field>
          <span>{{ errors[0] }}</span>
        </validation-provider>

        <validation-provider name="member.tel" rules="telRequired|telType" v-slot="{ errors }">
          <v-col>전화번호<span class="red--text">*</span> <span class="telComment grey--text">'-'를 포함해 입력바랍니다.</span></v-col>
          <v-text-field placeholder="전화번호"
                        v-model="member.tel"
                        outlined
                        dense
                        color="#425745"
                        hide-details>
          </v-text-field>
          <span>{{ errors[0] }}</span>
        </validation-provider>

        <validation-provider name="member.birthday" rules="birthdayRequired|birthdayType" v-slot="{ errors }">
          <v-col>생년월일<span class="red--text">*</span> <span class="telComment grey--text">6자리만 입력바랍니다.</span></v-col>
          <v-text-field placeholder="생년월일"
                        v-model="member.birthday"
                        class="mr-2"
                        outlined
                        dense
                        color="#425745"
                        hide-details>
          </v-text-field>
          <span>{{ errors[0] }}</span>
        </validation-provider>

        <v-divider/>

        <validation-provider name="checkbox" rules="checkedRequired" v-slot="{ errors }">
          <v-checkbox label="(필수) 개인정보 이용 동의"
                      v-model="checkbox"
                      required
                      color="#425745"
                      hide-details>
          </v-checkbox>
          <span>{{ errors[0] }}</span>
        </validation-provider>

        <v-row class="justify-center mt-2 mb-10">
          <v-btn large depressed  outlined @click="goBack">취소</v-btn>
          <v-btn class="ml-2 white--text" large depressed color="#425745" :disabled="invalid" type="submit">회원가입</v-btn>
        </v-row>
      </form>
    </validation-observer>

    <alert-dialog :message="alertDialogMessage"
                      :loading="loading"
                      v-if="alertDialog"
                      @close="goMyPage" />
  </v-container>
</template>

<script>
import { extend } from 'vee-validate';
import { required, alpha_num, min, max, email } from 'vee-validate/dist/rules';
import memberAPI from '@/apis/member';
import AlertDialog from "@/components/alert/AlertDialog.vue";

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
extend('nicknameMin', {
  ...max,
  message: '최대 10자만 입력 가능합니다.'
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
  let format = /^(01[0|1|6|7|8|9])-([0-9]{3,4})-([0-9]{4})$/;
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
  let format = /^([0-9]{2})([0][1-9]|[1][0-2])([0][1-9]|[1-2][0-9]|[3][0-1])$/;
  if(format.test(value)) {
    return true;
  }
  return '올바른 형식의 입력이 아닙니다.'
});
extend('checkedRequired', {
  ...required,
  message: '개인정보 이용 동의 바랍니다.',
})

export default {
  name: "Join",
  components: {
    AlertDialog
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
        oneclickpayPassword: '',
        kakaoNo: ''
      },
      checkbox: null,
      alertDialog: false,
      alertDialogMessage: "",
      loading: false
    };
  },
  methods: {
    goBack(){
      this.$router.go(-1);
    },
    async handleJoin () {
      this.$refs.observer.validate();

      if(this.$refs.observer.validate()) {
        try {
          this.loading = true;
          this.alertDialog = true;
          
          const response = await memberAPI.joinMember(this.member);

          this.loading = false;
          if(response.data === "success") {
            this.alertDialogMessage = "회원가입 성공";

            //회원가입 실패는 모두 catch에서 처리하도록 throw 발생
          } else if(response.data === "duplicate") {
            throw {message: "아이디 중복"};
          } else if(response.data === "fail") {
            throw {message: "서버 오류 발생"};
          }
        } catch (error) {
          this.loading = false;
          this.alertDialogMessage = `회원가입 실패: ${error.message}`;
        }
      }
    },
    goMyPage() {
      this.$router.push("/member/mypage");
    }
  },
  mounted() {
    this.$store.commit("setPageFlag", "default");
  },
}
</script>

<style scoped>
.col {
  font-size: 18px;
  padding: 1%;
}
.v-text-field >>> input {
  font-size: 14px;
}
form > span > span {
  color: red;
  margin: 10px 10px 10px 10px;
}
span > span {
  font-size: 12px;
}
.col {
  font-size: 15px;
  font-weight: 500;
}
</style>