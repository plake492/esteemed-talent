import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TalentFeed from '../views/TalentFeed'
import Talent from '../views/Talent'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/talent-feed',
    name: 'TalentFeed',
    component: TalentFeed
  },
  {
  path: '/talent/:id',
  name: 'Talent',
  component: Talent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
