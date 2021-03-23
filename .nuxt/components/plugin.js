import Vue from 'vue'

const components = {
  BaseButton: () => import('../../components/BaseButton.vue' /* webpackChunkName: "components/base-button" */).then(c => c.default || c),
  BaseInput: () => import('../../components/BaseInput.vue' /* webpackChunkName: "components/base-input" */).then(c => c.default || c),
  BaseModalWraper: () => import('../../components/BaseModalWraper.vue' /* webpackChunkName: "components/base-modal-wraper" */).then(c => c.default || c),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c),
  NavBar: () => import('../../components/NavBar.vue' /* webpackChunkName: "components/nav-bar" */).then(c => c.default || c),
  JobsCard: () => import('../../components/Jobs/JobsCard.vue' /* webpackChunkName: "components/jobs-card" */).then(c => c.default || c),
  JobsFeedDisplay: () => import('../../components/Jobs/JobsFeedDisplay.vue' /* webpackChunkName: "components/jobs-feed-display" */).then(c => c.default || c),
  JobsFilter: () => import('../../components/Jobs/JobsFilter.vue' /* webpackChunkName: "components/jobs-filter" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
