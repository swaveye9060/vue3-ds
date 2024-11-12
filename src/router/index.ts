import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/init/HomeView.vue'
import Hello from '../views/Hello.vue'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   redirect: '/home' // 重定向
  // },
  {
    path: '/home-view',
    name: 'home-view',
    component: HomeView
  },
  {
    path: '/about-view',
    name: 'about-view',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/init/AboutView.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
