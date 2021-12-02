<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="addressupdatetitle">배송지 수정</v-col>
    </v-row>
    
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="handleUpdate()">
        <validation-provider name="address.name" rules="required" v-slot="{ errors }">
          <v-row class="pa-3">
            <v-col class="contentname col-3 d-flex justify-center align-center">수령인</v-col>
            <v-text-field v-model="address.name"
                          outlined
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
                          hide-details>
            </v-text-field>
            <span class="errormessage col-9 mt-0 ml-15 pl-9 mb-0">{{ errors[0] }}</span>
          </v-row>
        </validation-provider>
        
        <validation-provider name="address.defaultAddress" rules="required">
          <v-row class="pa-0">
            <v-col class="contentname col-4 d-flex justify-center align-center">기본 배송지</v-col>
            <v-radio-group v-model="address.defaultAddress" row>
              <v-radio name="address.defaultAddress" label="Yes" :value="'1'"></v-radio>
              <v-radio name="address.defaultAddress" label="No" :value="'0'"></v-radio>
            </v-radio-group>
          </v-row>
        </validation-provider>

        <v-row class="justify-center mt-5 mb-3 mr-1">
          <v-btn large depressed tile outlined @click="goBack">취소</v-btn>
          <v-btn class="ml-1 black white--text" large depressed tile :disabled="invalid" type="submit">수정</v-btn>
        </v-row>
      </form>

      <alert-dialog :message="alertDialogMessage"
                    :loading="loading"
                    v-if="alertDialog"
                    @close ="goAddressList" />
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
  name:"AddressUpdate",
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
        defaultAddress: '',
        memberId: this.$store.getters.getMemberId
      },
      alertDialog: false,
      alertDialogMessage: "",
      loading: false,
    };
  },
  methods: {
    getAddress(addressSeq) {
      memberAPI.getAddress(addressSeq)
        .then(response => {
          this.address = response.data;
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

      try {
        if(this.$refs.observer.validate()) {
          this.loading = true;
          this.alertDialog = true;
          
          memberAPI.updateAddress(this.address)

          this.loading = false;
          this.alertDialogMessage = "등록 성공";
        }
      } catch (error) {
        this.loading = false;
        this.alertDialogMessage = `실패: ${error.message}`;
      }
    },
    goAddressList() {
      this.$router.push("/member/address")
    }
  },
   created() {
    let addressSeq = this.$route.query.addressSeq;
    this.getAddress(addressSeq);
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
}
</style>