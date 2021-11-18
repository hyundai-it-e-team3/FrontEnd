export default[
  {
    path: '/product/categorymenu',
    name: 'product_categorymenu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "product" */ '../views/product/CategoryMenu')
  },
  {
    path: '/product/brandmenu',
    name: 'product_brandmenu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "product" */ '../views/product/BrandMenu')
  },
]