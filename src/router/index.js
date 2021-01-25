import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeRecruiter from '@/views/HomeRecruiter.vue'
import HomeTalent from '@/views/HomeTalent.vue'
import TalentFeed from '@/views/TalentMain'
import TalentFeedDisplay from '@/components/Talent/TalentFeedDisplay'
import Talent from '@/views/Talent'
import JobsFeed from '@/views/JobsMain'
import JobsFeedDisplay from '@/components/Jobs/JobsFeedDisplay'
import Job from '@/views/Job'
import Profile from '@/views/Profile'

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
    component: TalentFeed,
    children: [
      {
        path: '/talent-feed',
        name: 'TalentFeedDisplay',
        component: TalentFeedDisplay
      },

      {
        path: '/talent-feed/talent/:id',
        name: 'Talent',
        component: Talent
      }
    ]
  },
  {
    path: '/jobs',
    name: 'JobsFeed',
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
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    component: Profile
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
