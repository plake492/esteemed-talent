import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeRecruiter from '@/views/HomeRecruiter.vue'
import HomeTalent from '@/views/HomeTalent.vue'
import TalentFeed from '@/views/TalentFeed'
import JobsFeed from '@/views/JobsFeed'
import JobsFeedDisplay from '@/components/JobsFeed/JobsFeedDisplay'
import Talent from '@/views/Talent'
import Job from '@/views/Job'

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
    path: '/jobs',
    name: 'Jobs',
    component: JobsFeed,
    children: [
      {
        path: '/jobs',
        name: 'JobsFeedDisplay',
        component: JobsFeedDisplay
      },
      {
        path: '/jobs/job/:id',
        name: 'Job',
        component: Job
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
