import axios from "axios";

const memberAPI = axios.create({
  baseURL: "http://kosa1.iptime.org:50212",
});

// 요청 http에 Authorization 헤더 추가, 값은 JWT로 설정
function addAuthHeader(authToken){
  memberAPI.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
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

export default {
  joinMember,
  login,
  getMember,
  updateMember,
  addAuthHeader,
};