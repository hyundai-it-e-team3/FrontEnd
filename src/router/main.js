export default[
  {
    path: "/mainpage",
    component: () => import(/* webpackChunkName: "about" */ '../views/mainPage')
  },
  {
    path: "/mainpage/bestitem",
    component: () => import(/* webpackChunkName: "about" */ '../views/mainPage/BestItem')
  },
  {
    path: "/mainpage/eventpage",
    component: () => import(/* webpackChunkName: "about" */ '../views/mainPage/EventPage')
  },
  {
    path: "/mainpage/eventpage/eventdetailpage",
    component: () => import(/* webpackChunkName: "about" */ '../views/mainPage/EventPage/EventDetailPage.vue')
  },
]