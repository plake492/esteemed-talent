<template>
  <div class="p-1 p-md-3 py-4 p-md-4">
    <div class="jobs_list">
      <h1 v-if="loading" class="text-center">loading</h1>
      <template v-else>
        <p class="px-3 p-md-4 h4 font-weight-bold mb-4">
          Open Positions ({{ jobs.length }})
        </p>
        <template v-for="(item, $index) in jobs">
          <JobsCard :key="$index" :job="item" />
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import JobsCard from './JobsCard'

export default {
  name: 'JobsFeedDisplay',
  components: { JobsCard },
  computed: {
    jobs() {
      return this.$store.state.jobsList
    },
    loading() {
      return this.$store.state.loading
    }
  },
  created() {
    document.title = 'Esteemed - Careers'
  }
}
</script>

<style scoped>
.jobs_list {
  max-height: calc(85vh - 55px) !important;
  overflow: scroll;
}

.jobs_list::-webkit-scrollbar {
  width: 0 !important;
}
</style>
