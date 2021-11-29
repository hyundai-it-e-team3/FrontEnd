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

export default {
  joinMember,
  login,
};