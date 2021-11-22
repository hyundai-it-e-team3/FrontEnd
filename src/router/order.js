export default[
  {
    path: "/order/complete",
    //lazyloding
    component: () => import(/* webpackChunkName: "about" */ '../views/order/Complete')
  },
  {
    path: "/order/orderlist",
    //lazyloding
    component: () => import(/* webpackChunkName: "about" */ '../views/order/OrderList')
  },
]