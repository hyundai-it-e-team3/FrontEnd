<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-row class="ml-1 mt-1">
          <v-col class="memberName d-flex pb-0 text-center">{{member.name}} 
            <span class="pt-1 pl-1" @click="goMemberUpdate"><v-icon class="align-center" size="40">mdi-chevron-right</v-icon></span>
          </v-col>
        </v-row>
        <v-row class="ml-1 mb-2">
          <v-col class="level d-flex pl-4 pt-0 pr-0">{{member.memberLevel}} Lv. <span class="pt-1 pl-1"><v-icon size="21">mdi-information-outline</v-icon></span></v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-divider class="mb-4" />

    <v-row class="d-flex pl-4 pr-4">
      <v-col class="col-4 d-flex flex-column" @click="goOrderList">
        <v-icon size="50" color="black">mdi-truck-outline</v-icon>
        <v-row class="menu3">주문내역</v-row>
      </v-col>
      <v-col class="col-4 d-flex flex-column" @click="goMemberCoupon">
        <v-icon size="50" color="black">mdi-ticket-percent-outline</v-icon>
        <v-row class="menu3">쿠폰</v-row>
      </v-col>
      <v-col class="col-4 d-flex flex-column" @click="goMemberPoint">
        <v-icon size="50" color="black">mdi-alpha-p-circle-outline</v-icon>
        <v-row class="menu3">{{member.point}} 점</v-row>
      </v-col>
    </v-row>

    <v-divider class="mt-4 mb-4"/>
    
    <v-row class="memberMenu ma-2" @click="handleLogout">
      로그아웃
    </v-row>
    <v-row class="memberMenu ma-2" @click="handleMemberDelete">
      회원탈퇴
    </v-row>
  </v-container>
</template>

<script>
import memberAPI from '@/apis/member';

export default {
  name: "AfterLogin",
  components: {
  },
  data: function() {
    return {
      member: {
        memberId: '',
        name: '',
        memberLevel: '',
        point: ''
      }
    };
  },
  methods: {
    goMemberUpdate() {
      this.$router.push("/member/update")
    },
    goOrderList() {
      this.$router.push("/order/orderlist");
    },
    goMemberCoupon() {
      this.$router.push("/member/membercoupon");
    },
    goMemberPoint() {
      this.$router.push("/member/memberpoint");
    },
    handleLogout() {
      this.$store.dispatch("deleteAuth");
    },
    async handleMemberDelete() {
      try {
        const response = await memberAPI.deleteMember(this.member.memberId);
        this.$store.dispatch("deleteAuth");
      } catch (error) {
        console.log(error);
      }
    }
  },
  async beforeMount() {
    const response = await memberAPI.getMember(this.$store.getters.getMemberId);
    this.member = response.data;
  },
}
</script>

<style scoped>
.memberName {
  font-size: 30px;
  font-weight: 550;
}
.level {
  font-size:20px;
}
.menu3 {
  color: black;
  justify-content: center;
  padding: 12px 10px 15px 10px;
}
.memberMenu {
  color: black;
  font-size: 15px;
}
</style>