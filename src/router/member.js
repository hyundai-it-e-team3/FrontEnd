export default[
  {
    path: "/member/join",
    //lazyloding
    component: () => import(/* webpackChunkName: "about" */ '../views/member/Join.vue')
  },
  {
    path: "/member/login",
    //lazyloding
    component: () => import(/* webpackChunkName: "about" */ '../views/member/login.vue')
  },
]