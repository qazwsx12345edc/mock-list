import Home from '../pages/home.vue'
import List from '../pages/list.vue'
import Details from '../pages/details.vue'
import VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/list',
    component: List,
  },
  {
    path: '/details',
    name: 'details',
    component: Details
  }
]

const router = new VueRouter({
  routes
})

export default router