export default[
  {
    path: "/mainpage",
    component: () => import(/* webpackChunkName: "about" */ '../views/mainPage')
  },
  {
    path: "/mainpage/newitem",
    component: () => import(/* webpackChunkName: "about" */ '../views/mainPage/newItem')
  },
  {
    path: "/mainpage/bestitem",
    component: () => import(/* webpackChunkName: "about" */ '../views/mainPage/bestItem')
  },
]