export default[
  {
    path: "/member/join",
    //lazyloding
    component: () => import(/* webpackChunkName: "about" */ '../views/member/Join.vue')
  },
  {
    path: "/member/mypage",
    //lazyloding
    component: () => import(/* webpackChunkName: "about" */ '../views/member/MyPage')
  },
  {
    path: "/member/update",
    //lazyloding
    component: () => import(/* webpackChunkName: "about" */ '../views/member/MyPage/MemberUpdate.vue')
  },
  {
    path: "/member/wishList",
    //lazyloding
    component: () => import(/* webpackChunkName: "about" */ '../views/member/WishList')
  },
  {
    path: "/member/memberlevel",
    //lazyloding
    component: () => import(/* webpackChunkName: "about" */ '../views/member/MemberLevel')
  },
  {
    path: "/member/membercoupon",
    //lazyloding
    component: () => import(/* webpackChunkName: "about" */ '../views/member/MemberCoupon')
  },
  {
    path: "/member/memberpoint",
    //lazyloding
    component: () => import(/* webpackChunkName: "about" */ '../views/member/MemberPoint')
  },
  {
    path: "/member/address",
    //lazyloding
    component: () => import(/* webpackChunkName: "about" */ '../views/member/Address')
  },
  {
    path: "/member/address/update",
    //lazyloding
    component: () => import(/* webpackChunkName: "about" */ '../views/member/Address/AddressUpdate')
  },
  {
    path: "/member/address/insert",
    //lazyloding
    component: () => import(/* webpackChunkName: "about" */ '../views/member/Address/AddressInsert')
  },
  {
    path: "/member/account",
    //lazyloding
    component: () => import(/* webpackChunkName: "about" */ '../views/member/Account')
  },
  {
    path: "/member/promotion",
    //lazyloding
    component: () => import(/* webpackChunkName: "about" */ '../views/member/Promotion')
  },
  {
    path: "/member/account/insert",
    //lazyloding
    component: () => import(/* webpackChunkName: "about" */ '../views/member/Account/AccountInsert')
  },
  {
    path: "/member/account/password",
    //lazyloding
    component: () => import(/* webpackChunkName: "about" */ '../views/member/Account/InsertPassword')
  },
]