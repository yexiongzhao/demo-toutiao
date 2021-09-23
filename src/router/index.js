import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home/Home.vue'
import User from '@/views/User/User.vue'
import Login from '@/views/Login/Login.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/user', component: User },
  { path: '/login', component: Login }
]

const router = new VueRouter({
  routes
})

router.beforeEach(function(to, from, next) {
  const pathArr = ['/home', '/home/users', '/home/rights']
  if (pathArr.indexOf(to.path) !== -1) {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
