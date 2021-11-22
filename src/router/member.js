export default[
  {
    path: "/member/join",
    //lazyloding
    component: () => import(/* webpackChunkName: "about" */ '../views/member/Join.vue')
  },
  {
    path: "/member/login",
    //lazyloding
    component: () => import(/* webpackChunkName: "about" */ '../views/member/Login.vue')
  },
  {
    path: "/member/mypage",
    //lazyloding
    component: () => import(/* webpackChunkName: "about" */ '../views/member/MyPage.vue')
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
    path: "/member/cart",
    //lazyloding
    component: () => import(/* webpackChunkName: "about" */ '../views/member/cart')
  },
]