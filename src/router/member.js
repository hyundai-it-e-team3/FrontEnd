export default[
  {
    path: "/member/join",
    //lazyloding
    component: () => import(/* webpackChunkName: "about" */ '../views/member/Join.vue')
},
]