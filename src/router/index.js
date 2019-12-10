import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import referencer from '../views/referencer'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/referencer',
    name: 'referencer',
    component: referencer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
