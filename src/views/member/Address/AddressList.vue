<template>
  <v-container class="pl-2 pr-2 pt-0 pb-0">
    <v-card class="pa-3" height="160" outlined tile >
      <v-row class="addressName pt-4 pl-4">
          {{address.name}}
          <v-col class="d-flex align-start justify-end pt-0 pb-0 pr-4">
            <v-btn outlined text @click="goAddressUpdate(address.addressSeq)" class="mr-1">수정</v-btn>
            <v-btn outlined text @click="deleteAddress(address.addressSeq)">삭제</v-btn>
          </v-col>
      </v-row>
      <v-row class="addressTel pl-4">
          {{address.tel}}
      </v-row>
      <v-row class="pb-2">
        <span class="defaultAddress pl-4 pt-1" v-if="address.defaultAddress === '1'">기본 배송지</span>
        <span class="pa-2" v-if="address.defaultAddress !== '1'"></span>
      </v-row>
      <v-row class="pl-4">
        {{address.zipCode}}
      </v-row>
      <v-row class="addressContent pl-4 pb-4">
        {{address.address1}} {{address.address2}}
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import memberAPI from '@/apis/member';

export default {
  name:"addressList",
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
    goAddressUpdate(addressSeq) {
      this.$router.push("/member/address/update?addressSeq="+addressSeq);
    },
    deleteAddress(addressSeq) {
      memberAPI.deleteAddress(addressSeq)
        .then(response =>  {
          this.$el.parentNode.removeChild(this.$el);
        })
        .catch(error => {
          console.log(error)
        })
    },
  },
  props: [
    "address"
  ]
}
</script>

<style scoped>
.addressName {
  font-size: 20px;
  font-weight: 600;
}
.addressTel {
  font-size: 13px;
}
.addressContent {
  font-size: 16px;
}
.defaultAddress {
  color: dodgerblue;
  font-weight: 400;
}
</style>