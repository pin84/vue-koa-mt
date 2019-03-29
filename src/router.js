import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Shouye from './components/shouye/Shouye'
import Xiaoxi from './components/shouye/Xiaoxi'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/shouye',
      name: 'shouye',
      component: Shouye
    },
    {
      path: '/xiaoxi',
      name: 'xiaoxi',
      component: Xiaoxi
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
