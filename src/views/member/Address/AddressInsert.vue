<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="addressupdatetitle">배송지 추가</v-col>
    </v-row>
    
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="handleInsert()">
        <validation-provider name="address.name" rules="required" v-slot="{ errors }">
          <v-row class="pa-3">
            <v-col class="contentname col-3 d-flex justify-center align-center">수령인</v-col>
            <v-text-field v-model="address.name"
                          outlined
                          color="#425745"
                          hide-details>
            </v-text-field>
            <span class="errormessage col-9 mt-0 ml-15 pl-9 mb-0">{{ errors[0] }}</span>
          </v-row>
        </validation-provider>

        <validation-provider name="address.tel" rules="required|telType" v-slot="{ errors }">
          <v-row class="pa-3">
            <v-col class="contentname col-3 d-flex justify-center align-center" >전화번호</v-col>
            <v-text-field v-model="address.tel"
                          outlined
                          color="#425745"
                          hide-details>
            </v-text-field>
            <span class="telComment ml-15 pl-9">'-'를 포함해 입력바랍니다.</span>
            <span class="errormessage col-9 mt-0 ml-15 pl-9 mb-0">{{ errors[0] }}</span>
          </v-row>
        </validation-provider>

        <validation-provider name="address.zipCode" rules="required|integer" v-slot="{ errors }">
          <v-row class="pa-3">
            <v-col class="contentname col-3 d-flex justify-center align-center">우편번호</v-col>
            <v-text-field v-model="address.zipCode"
                          outlined
                          color="#425745"
                          hide-details>
            </v-text-field>
            <span class="errormessage col-9 mt-0 ml-15 pl-9 mb-0">{{ errors[0] }}</span>
          </v-row>
        </validation-provider>

        <validation-provider name="address.address1" rules="required" v-slot="{ errors }">
          <v-row class="pa-3">
            <v-col class="contentname col-3 d-flex justify-center align-center">주소</v-col>
            <v-text-field v-model="address.address1"
                          outlined
                          color="#425745"
                          hide-details>
            </v-text-field>
            <span class="errormessage col-9 mt-0 ml-15 pl-9 mb-0">{{ errors[0] }}</span>
          </v-row>
        </validation-provider>

        <validation-provider name="address.address2" rules="required" v-slot="{ errors }">
          <v-row class="pa-3">
            <v-col class="contentname col-3 d-flex justify-center align-center">상세주소</v-col>
            <v-text-field v-model="address.address2"
                          outlined
                          color="#425745"
                          hide-details>
            </v-text-field>
            <span class="errormessage col-9 mt-0 ml-15 pl-9 mb-0">{{ errors[0] }}</span>
          </v-row>
        </validation-provider>

        <validation-provider name="address.defaultAddress" rules="required">
          <v-row class="pa-0">
            <v-col class="contentname col-4 d-flex justify-center align-center">기본 배송지</v-col>
            <v-radio-group v-model="address.defaultAddress" row >
              <v-radio name="address.defaultAddress" label="Yes" :value="1" color="#425745"></v-radio>
              <v-radio name="address.defaultAddress" label="No" :value="0" color="#425745"></v-radio>
            </v-radio-group>
          </v-row>
        </validation-provider>

        <v-row class="justify-center mt-5 mb-3 mr-1">
          <v-btn large depressed outlined @click="goBack">취소</v-btn>
          <v-btn class="ml-1 white--text" large depressed color="#425745" :disabled="invalid" type="submit">추가</v-btn>
        </v-row>
      </form>

      <alert-dialog :message="alertDialogMessage"
                    :loading="loading"
                    v-if="alertDialog"
                    @close="goAccountList" />
    </validation-observer>
  </v-container>
</template>

<script>
import { extend } from 'vee-validate';
import { required, integer } from 'vee-validate/dist/rules';
import memberAPI from '@/apis/member';
import AlertDialog from "@/components/alert/AlertDialog.vue";

extend('required', {
  ...required,
  message: '값을 입력해주세요.'
});
extend('telType', value => {
  let format = /^(01[0|1|6|7|8|9])-([0-9]{3,4})-([0-9]{4})$/;
  if(format.test(value)) {
    return true;
  }
  return '올바른 형식의 입력이 아닙니다.'
});
extend('integer', {
  ...integer,
  message: '숫자를 입력해주세요.'
});


export default {
  name:"AddressInsert",
  components: {
    AlertDialog
  },
  data() {
    return {
      address: {
        addressSeq: '',
        name: '',
        zipCode: '',
        address1: '',
        address2: '',
        tel: '',
        defaultAddress: null,
        memberId: this.$store.getters.getMemberId
      },
      alertDialog: false,
      alertDialogMessage: "",
      loading: false,
    };
  },
  methods: {
    goBack(){
      this.$router.go(-1);
    },
    handleInsert() {
      this.$refs.observer.validate();

      if(this.$refs.observer.validate()) {
        memberAPI.insertAddress(this.address)
          .then(response => {
            this.$router.push("/member/address")
          })
          .catch(error =>  {
            this.alertDialog = true;
            this.alertDialogMessage = `실패: ${error.message}`;
          });
      }
    },
  },
}
</script>

<style scoped>
.addressupdatetitle {
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
  width: auto;
}
</style>