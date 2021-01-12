import Vue from 'vue'
import Vuex from 'vuex'
import * as Api from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: false,
    talentList: [],
    jobsList: [],
    focusedTalent: {},
    focusedJob: {}
  },
  mutations: {
    SET_AUTH (state, { auth }) {
      state.auth = auth
    },
    SET_TALENT_FOCUS (state, { talent }) {
      state.focusedTalent = talent
    },
    SET_JOB_FOCUS (state, { job }) {
      state.focusedJob = job
    },
    SET_JOBS (state, { jobs }) {
      state.jobsList = jobs
    },
    SET_TALENT (state, { talent }) {
      state.talentList = talent
    }
  },
  actions: {
    login ({ commit }) {
      commit('SET_AUTH', { auth: true })
    },
    logout ({ commit }) {
      commit('SET_AUTH', { auth: false })
    },
    async getJobs ({ commit }) {
      const { data } = await Api.jobs.get()
      commit('SET_JOBS', { jobs: data })
    },
    async getTalent ({ commit }) {
      const { data } = await Api.talent.get()
      commit('SET_TALENT', { talent: data })
    },
    getPerson ({ commit, state }, { id }) {
      const talent = state.talentList.find(item => item.id === id)
      commit('SET_TALENT_FOCUS', { talent })
    },
    getJob ({ commit, state }, { id }) {
      const job = state.jobsList.find(item => item.id === id)
      commit('SET_JOB_FOCUS', { job })
    },
    async submitApplication (_, { applicant, jobId }) {
      await Api.jobs.submitApplication({ applicant, jobId })
    }
  }
})
