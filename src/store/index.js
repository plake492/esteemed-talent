import Vue from 'vue'
import Vuex from 'vuex'
import * as Api from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: false,
    talentList: [],
    jobsList: [],
    focusedTalent: {}
  },
  mutations: {
    SET_AUTH (state, { auth }) {
      state.auth = auth
    },
    SET_TALENT_FOCUS (state, { talent }) {
      state.focusedTalent = talent
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
      const jobs = await Api.jobs.get()
      commit('SET_JOBS', { jobs })
    },
    async getTalent ({ commit }) {
      const talent = await Api.talent.get()
      commit('SET_TALENT', { talent })
    },
    getPerson ({ commit, state }, { id }) {
      const talent = state.talentList.find(item => item.id === id)
      commit('SET_TALENT_FOCUS', { talent })
    }
  }
})
