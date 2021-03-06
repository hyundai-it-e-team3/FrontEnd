import member from "@/router/member";
import axios from "axios";

const memberAPI = axios.create({
  baseURL: "http://kosa1.iptime.org:50303/member-api",
});


// 요청 http에 Authorization 헤더 추가, 값은 JWT로 설정
function addAuthHeader(authToken){
  memberAPI.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
}

// 요청 http에 Authorization 헤더 제거
function removeAuthHeader(){
delete memberAPI.defaults.headers.common['Authorization'];
}

function joinMember(member) {
  return memberAPI.post("/member/join", {
    memberId: member.memberId,
    password: member.password,
    name: member.name,
    nickname: member.nickname,
    email: member.email,
    tel: member.tel,
    birthday: member.birthday,
  });
}

function login(member) {
  return memberAPI.patch("/member/login", {
    memberId: member.memberId,
    password: member.password
  });
}

function getMember(memberId) {
  return memberAPI.get(`/member/${memberId}`)
}

function updateMember(member) {
  return memberAPI.patch("/member", {
    memberId: member.memberId,
    password: member.password,
    nickname: member.nickname,
    tel: member.tel
  })
}

function deleteMember(memberId) {
  return memberAPI.patch(`/member/delete/${memberId}`)
}

function getAddressList(memberId) {
  return memberAPI.get(`/address/list/${memberId}`)
}

function deleteAddress(addresssSeq) {
  return memberAPI.delete(`/address/${addresssSeq}`)
}

function updateAddress(address) {
  return memberAPI.patch('/address', {
    addressSeq: address.addressSeq,
    name: address.name,
    zipCode: address.zipCode,
    address1: address.address1,
    address2: address.address2,
    tel: address.tel,
    memberId : address.memberId,
    defaultAddress: address.defaultAddress
  })
}

function getAddress(addressSeq) {
  return memberAPI.get(`/address/${addressSeq}`)
}

function insertAddress(address) {
  return memberAPI.post('/address', {
    name: address.name,
    zipCode: address.zipCode,
    address1: address.address1,
    address2: address.address2,
    tel: address.tel,
    memberId : address.memberId,
    defaultAddress: address.defaultAddress
  })
}

function getAccount(memberId) {
  return memberAPI.get(`/account/${memberId}`)
}

function insertAccount(account) {
  return memberAPI.post('/account', {
    accountNo: account.accountNo,
    bank: account.bank,
    payType: account.payType,
    memberId: account.memberId
  })
}

function deleteAccount(accountNo) {
  return memberAPI.delete('/account', {
    params: {
      accountNo
    }
  })
}

function updateAccountPassword(member) {
  return memberAPI.post('/member/oneclickpayPassword', {
    memberId: member.memberId,
    oneclickpayPassword: member.oneclickpayPassword
  })
}

function getMemberCoupon(memberId) {
  return memberAPI.get(`/member/coupon/list/${memberId}`)
}

function getPointList(memberId) {
  return memberAPI.get(`/point/list/${memberId}`)
}

function getWishBrandList(memberId){
  return memberAPI.get(`/fvbrand/${memberId}`)
}

function insertBrand(memberId,brandName){
  return memberAPI.post('/fvbrand',{
    memberId,
    brandName
  })
}

function deleteBrand(memberId,brandName){
  return memberAPI.delete(`fvbrand/${memberId}/${brandName}`);
}

function getWishList(memberId){
  return memberAPI.get(`wishlist/${memberId}`);
}

function addWishList(memberId,productDetailId){
  return memberAPI.post("wishlist",{
    memberId,
    productDetailId
  });
}

function removeWishList(memberId,productDetailId){
  return memberAPI.delete(`wishlist/${memberId}/${productDetailId}`);
}

function getDefaultAddress(memberId) {
  return memberAPI.get(`/address/member/${memberId}`)
}

function insertMemberCoupon(memberCoupon) {
  return memberAPI.post("/member/coupon", {
    memberId: memberCoupon.memberId,
    couponId: memberCoupon.couponId,
    expDate: memberCoupon.expDate
  })
}

export default {
  joinMember,
  login,
  getMember,
  updateMember,
  deleteMember,
  getAddressList,
  deleteAddress,
  getAddress,
  updateAddress,
  insertAddress,
  getAccount,
  insertAccount,
  deleteAccount,
  updateAccountPassword,
  getMemberCoupon,
  getPointList,
  getWishBrandList,
  insertBrand,
  deleteBrand,
  addWishList,
  getWishList,
  removeWishList,
  getDefaultAddress,
  addAuthHeader,
  removeAuthHeader,
  insertMemberCoupon
};