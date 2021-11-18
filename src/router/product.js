export default[
  {
    path: '/product/categorymenu',
    name: 'product_categorymenu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "menu01" */ '../views/product/CategoryMenu')
  },
]