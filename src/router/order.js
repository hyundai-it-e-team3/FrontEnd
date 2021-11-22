export default[
  {
    path: "/order/complete",
    //lazyloding
    component: () => import(/* webpackChunkName: "about" */ '../views/order/Complete')
  },
]