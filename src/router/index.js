import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/home/Home.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../components/register/Register.vue')
  }
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: () => import('../components/login/Login.vue')
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../components/about/About.vue')
  // },
  // {
  //   path: '/dashboard',
  //   name: 'Dashboard',
  //   component: () => import('../components/dashboard/Dashboard.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
