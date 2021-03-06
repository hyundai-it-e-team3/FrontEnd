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
  {
    path: '/product/brand',
    name: 'product_brand',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "product" */ '../views/product/Brand')
  },
  {
    path: '/product/productDetail',
    name: 'product_productdetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "product" */ '../views/product/ProductDetail')
  },
  {
    path: '/product/categoryProduct',
    name: 'product_categoryProduct',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "product" */ '../views/product/CategoryProduct')
  },
  {
    path: '/product/searchList',
    name: 'product_searchList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "product" */ '../views/product/SearchList')
  },
  {
    path: '/mainPage/newItem',
    name: 'mainpage_newitem',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "product" */ '../views/mainPage/NewItem')
  },
]