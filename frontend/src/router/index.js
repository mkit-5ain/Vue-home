import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../page/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../page/Contact.vue')
  },
  {
    path: '/experience',
    name: 'Experience',
    component: () => import('../page/Experience.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
