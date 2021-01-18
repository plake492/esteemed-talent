import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import * as Api from '../api'

Vue.use(Vuex)

const loadVuexPlugs = () =>
  [new VuexPersistence().plugin]

export default new Vuex.Store({
  state: {
    auth: false,
    user: {},
    talentList: [],
    jobsList: [],
    focusedTalent: {},
    focusedJob: {},
    loading: true
  },
  mutations: {
    SET_LOADING (state, { loading }) {
      state.loading = loading
    },
    SET_AUTH (state, { auth }) {
      state.auth = auth
    },
    SET_USER (state, { user }) {
      state.user = user
    },
    SET_TALENT (state, { talent }) {
      state.talentList = talent
    },
    SET_TALENT_FOCUS (state, { talent }) {
      state.focusedTalent = talent
    },
    SET_JOB_FOCUS (state, { job }) {
      state.focusedJob = job
    },
    SET_JOBS (state, { jobs }) {
      state.jobsList = jobs
    }
  },
  actions: {
    loading ({ commit }, loading) {
      commit('SET_LOADING', { loading })
    },
    // ============ Auth Actions ============ //
    async getUser ({ commit }) {
      const user = await Api.auth.getUser()
      if (user) {
        commit('SET_USER', { user: user })
        commit('SET_AUTH', { auth: true })
      }
    },
    async signup ({ commit }, { user }) {
      const authStatus = await Api.auth.signUp(user)
      if (authStatus._id) {
        commit('SET_USER', { user: authStatus })
        commit('SET_AUTH', { auth: true })
        return authStatus
      }
    },
    async login ({ commit }, { user }) {
      const authStatus = await Api.auth.login(user)
      if (authStatus._id) {
        commit('SET_USER', { user: authStatus })
        commit('SET_AUTH', { auth: true })
        return authStatus
      }
    },
    async logout ({ commit }) {
      await Api.auth.logout()
      commit('SET_USER', { user: {} })
      commit('SET_AUTH', { auth: false })
    },
    // ============ Jobs Actions ============ //
    async getJobs ({ commit }) {
      const { data } = await Api.jobs.get()
      commit('SET_JOBS', { jobs: data })
    },
    getJob ({ commit, state }, { id }) {
      const job = state.jobsList.find(item => item.id === id)
      commit('SET_JOB_FOCUS', { job })
    },
    async submitApplication (_, { applicant, jobId }) {
      await Api.jobs.submitApplication({ applicant, jobId })
    },
    // ============ Talent Actions ============ //
    async getTalent ({ commit }) {
      const { data } = await Api.talent.get()
      commit('SET_TALENT', { talent: data })
    },
    getIndividualTalent ({ commit, state }, { id }) {
      const talent = state.talentList.find(item => item.id === id)
      commit('SET_TALENT_FOCUS', { talent })
    }
  },
  plugins: loadVuexPlugs()
})
