import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeRecruiter from '@/views/HomeRecruiter.vue'
import HomeTalent from '@/views/HomeTalent.vue'
import TalentFeed from '@/views/TalentFeed'
import JobsFeed from '@/views/JobsFeed'
import Talent from '@/views/Talent'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'RecruiterHome',
    component: HomeRecruiter
  },
  {
    path: '/talent-home',
    name: 'TalentHome',
    component: HomeTalent
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
  },
  {
    path: '/jobs-feed',
    name: 'JobsFeed',
    component: JobsFeed
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
