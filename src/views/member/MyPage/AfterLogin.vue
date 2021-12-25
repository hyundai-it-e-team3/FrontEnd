<template>
  <v-container class="py-5 px-0">
    <v-row>
      <v-col class="col-3 d-flex justify-center py-0 pr-0" style="font-size: 60px; font-weight: bold; color: #417D58;">H</v-col>
      <v-col class="col-4 py-0 d-flex align-center">
        <v-row>
          <v-col class="col-12 py-0" style="font-size: 25px; font-weight: bold; ">{{member.name}}</v-col>
          <v-col class="col-8 py-0">Level {{member.memberLevel}}</v-col>
          <v-col class="col-4 pa-0 d-flex align-center" @click="goLevel(member.memberLevel)"><v-icon size="17" color="#AEA780">mdi-information-outline</v-icon></v-col>
        </v-row>
      </v-col>
      <v-col class="col-5 py-0 d-flex align-center justify-end" @click="goMemberUpdate"><v-icon size="40">mdi-chevron-right</v-icon></v-col>
    </v-row>

    <v-divider class="my-4" />

    <v-row class="d-flex pl-4 pr-4">
      <v-col class="col-4 d-flex flex-column" @click="goOrderList">
        <img src="@/assets/images/truck.png" width="80%" style="margin: auto;" />
        <v-row class="menu3">ORDER</v-row>
      </v-col>
      <v-col class="col-4 d-flex flex-column" @click="goMemberCoupon">
        <img src="@/assets/images/coupon.png" width="80%" style="margin: auto;" />
        <v-row class="menu3">COUPON</v-row>
      </v-col>
      <v-col class="col-4 d-flex flex-column" @click="goMemberPoint">
        <img src="@/assets/images/letter.png" class="py-2" width="60%" style="margin: auto;" />
        <v-row class="menu3">{{member.point}} Point</v-row>
      </v-col>
    </v-row>

    <v-divider class="mt-4 mb-4"/>

    <v-row class="memberMenu ma-2" @click="goMemberAddress">
      주소록 관리
    </v-row>
    <v-row class="memberMenu ma-2" @click="goMemberAccount">
      결제수단 관리
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
import orderAPI from '@/apis/order';
import CategoryModule from "@/modules/categoryModule";


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
    getMember(memberId) {
      memberAPI.getMember(memberId)
        .then(response => {
          this.member = response.data;
        })
        .catch(error => {
          if(error.response) {
            if(error.response.status === 403||error.response.status === 401) {
              this.$router.push("/member/mypage");
            }
          } else {
            console.log(error);
          }
        })
    },
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
    goMemberAddress() {
      this.$router.push("/member/address");
    },
    goMemberAccount() {
      this.$router.push("/member/account");
    },
    handleLogout() {
      memberAPI.removeAuthHeader();
      orderAPI.removeAuthHeader();
      this.$store.dispatch("deleteAuth");
    },
    async handleMemberDelete() {
      try {
        const response = await memberAPI.deleteMember(this.member.memberId);
        this.$store.dispatch("deleteAuth");
      } catch (error) {
        console.log(error);
      }
    },
    goLevel(level) {
      this.$router.push(`/member/memberlevel?level=${level}`);
    }
  },
  created() {
    let memberId = this.$store.getters.getMemberId;
    this.getMember(memberId);
    console.log(memberId);
    CategoryModule.getWishBrandList(memberId)
      .then(response=>{
        let tempList = [];
        let resList = response.data;
        console.log(response.data);
        for(let res of resList){
          tempList.push(res.brandName);
        }
        this.$store.commit("category/setWishBrand",tempList);
        console.log(tempList);
        console.log("this is wish brand");
      })
      .catch(error => {
        console.log(error);
    });

    memberAPI.getWishList(memberId)
      .then(response=>{
        let tempList = [];
        let resList = response.data;
        for(let res of resList){
          tempList.push(res.productDetailId);
        }
        this.$store.commit("member/setWishList",tempList);
        console.log(tempList);
        console.log("this is wish list");
      })
      .catch(error => {
        console.log(error);
    });
  },
}
</script>

<style scoped>
.level {
  font-size:20px;
}
.menu3 {
  color: black;
  justify-content: center;
  font-weight: bold;
  padding: 12px 10px 15px 10px;
}
.memberMenu {
  color: black;
  font-size: 15px;
  font-weight: bold;
}
</style>