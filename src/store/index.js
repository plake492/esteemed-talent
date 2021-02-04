import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import * as Api from '../api'

import { auth } from './auth'

import { timeout } from '../helpers'

Vue.use(Vuex)

const loadVuexPlugs = () =>
  [new VuexPersistence().plugin]

export default new Vuex.Store({
  state: {
    talentList: [],
    jobsList: [],
    focusedTalent: {},
    focusedJob: {},
    loading: true,
    error: ''
  },
  mutations: {
    SET_LOADING (state, { loading }) {
      state.loading = loading
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
    },
    SET_ERROR (state, { err }) {
      state.error = err.message
    }
  },
  actions: {
    async loadContent ({ commit, dispatch, state, rootState }) {
      if (state.error) commit('SET_ERROR', { err: '' })
      if (rootState.auth.authStatus && !rootState.auth.user) dispatch('logout', null, { root: true })
      try {
        // await dispatch('getTalent')
        await dispatch('getJobs')
        dispatch('loading', false)
      } catch (err) {
        commit('SET_ERROR', { err: err })
      }
    },
    loading ({ commit }, loading) {
      commit('SET_LOADING', { loading })
    },
    async handleErr ({ commit, dispatch }, { err }) {
      if (err.message) { await timeout(() => dispatch('handleErr', { err: '' }), 5) }
      commit('SET_ERROR', { err })
    },
    // ======================== Jobs Actions ======================== //
    async getJobs ({ commit }) {
      const { data } = await Api.jobs.get()
      commit('SET_JOBS', { jobs: data })
    },
    async getJob ({ dispatch, commit, state }, { id }) {
      if (!state.jobsList.length) {
        await dispatch('getJobs')
      }
      const job = state.jobsList.find(item => item.id === id)
      if (!job) return
      commit('SET_JOB_FOCUS', { job })
    },
    async submitApplication (_, { applicant, job, resume }) {
      await Api.jobs.postApplicant({ applicant, job })
      await Api.jobs.postResume({ resume })
    },
    // ======================== Talent Actions ======================== //
    async getTalent ({ commit }) {
      const { data } = await Api.talent.get()
      commit('SET_TALENT', { talent: data })
    },
    getIndividualTalent ({ commit, state }, { id }) {
      const talent = state.talentList.find(item => item.id === id)
      commit('SET_TALENT_FOCUS', { talent })
    }
  },
  modules: {
    auth
  },
  plugins: loadVuexPlugs()
})
