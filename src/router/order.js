export default[
  {
    path: '/order/orderform',
    name: 'order_orderform',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "order" */ '../views/order/OrderForm')
  },
]