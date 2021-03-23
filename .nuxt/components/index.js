export { default as BaseButton } from '../../components/BaseButton.vue'
export { default as BaseInput } from '../../components/BaseInput.vue'
export { default as BaseModalWraper } from '../../components/BaseModalWraper.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as NavBar } from '../../components/NavBar.vue'
export { default as JobsCard } from '../../components/Jobs/JobsCard.vue'
export { default as JobsFeedDisplay } from '../../components/Jobs/JobsFeedDisplay.vue'
export { default as JobsFilter } from '../../components/Jobs/JobsFilter.vue'

export const LazyBaseButton = import('../../components/BaseButton.vue' /* webpackChunkName: "components/base-button" */).then(c => c.default || c)
export const LazyBaseInput = import('../../components/BaseInput.vue' /* webpackChunkName: "components/base-input" */).then(c => c.default || c)
export const LazyBaseModalWraper = import('../../components/BaseModalWraper.vue' /* webpackChunkName: "components/base-modal-wraper" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyNavBar = import('../../components/NavBar.vue' /* webpackChunkName: "components/nav-bar" */).then(c => c.default || c)
export const LazyJobsCard = import('../../components/Jobs/JobsCard.vue' /* webpackChunkName: "components/jobs-card" */).then(c => c.default || c)
export const LazyJobsFeedDisplay = import('../../components/Jobs/JobsFeedDisplay.vue' /* webpackChunkName: "components/jobs-feed-display" */).then(c => c.default || c)
export const LazyJobsFilter = import('../../components/Jobs/JobsFilter.vue' /* webpackChunkName: "components/jobs-filter" */).then(c => c.default || c)
