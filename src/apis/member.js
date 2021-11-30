import member from "@/router/member";
import axios from "axios";

const memberAPI = axios.create({
  baseURL: "http://kosa1.iptime.org:50212",
});

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
    dafaultAddress: address.defaultaddress
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
  updateAccountPassword
};