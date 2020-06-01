import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/homeContainer/Home.vue'
import App from '../App'
import auth from "../auth";

Vue.use(VueRouter)

function requireAuth(to, from, next) {
  if (!auth.loggedIn){
    next({
      path: '/login',
      query: {redirect: to.fullPath}
    })
  }
  else{
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/logout',
    redirect: {name: 'Home',}
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    component: () => import('../components/Profile/Profile.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../components/Register.vue'),
  },
  {
    path: '/addAdvert/:userID',
    name: 'AddAdvert',
    component: () => import('../components/Profile/AddAdvert.vue'),
  },
  {
    path: '/adverts/:id',
    name: 'showAdvert',
    component: () => import('../components/showAdvert.vue'),
  },
  {
    path: '*',
    redirect: {name: 'Home',}
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

export default router
