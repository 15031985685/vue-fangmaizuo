import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '@/views/film'
import Nowplaying from '@/views/Film/nowplaying'
import Comingsoon from '@/views/Film/comingsoon'
import Cinema from '@/views/cinema'
import Center from '@/views/center'
import Detail from '@/views/Film/detail'
import Login from '@/components/login'
import City from '@/views/Cinema/city'
Vue.use(VueRouter)
const aythor = {
  isLogin () {
    if (window.localStorage.loginInfo) {
      return true
    } else {
      return false
    }
  }
}

const routes = [
  {
    path: '/film',
    component: Film,
    name: 'film',
    redirect: '/film/nowplaying',
    meta: { keepAlive: true },
    children: [
      {
        path: '/film/nowplaying', // /film/nowplaying
        meta: { keepAlive: true },
        component: Nowplaying
      },
      {
        path: 'comingsoon',
        meta: { keepAlive: true },
        component: Comingsoon
      }
    ]
  },
  {
    path: '/cinema',
    meta: { keepAlive: true },
    component: Cinema
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/center',
    meta: { keepAlive: true },
    component: Center
  },
  {
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/login',
    name: '/login',
    component: Login
  },
  {
    path: '*',
    redirect: '/film'
  }
]

const router = new VueRouter({
  //  mode: 'history',
  //  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => { // 全局路由守卫
  if (to.path === '/center') {
    if (aythor.isLogin()) {
      next()
    } else {
      next('/login')
    }
  } else if (to.path === '/login') {
    if (aythor.isLogin()) {
      next('/film')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
