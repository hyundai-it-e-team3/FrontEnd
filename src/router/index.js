import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import main from './main'
import member from './member'
import order from './order'
import product from './product'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  ...member,
  ...product,
  ...main,
  ...order,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
