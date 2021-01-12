<template>
  <div class="esteemed-container p-4">
    <div class="row py-4">
      <div class="col-12 jobs_list">
        <p style="margin: 12px 35px;" class="h4 font-weight-bold mb-4">
          Open Positions ({{ jobs.length }})
        </p>
        <template v-for="(item, $index) in jobs">
          <JobsCard v-bind:key="$index" :job="item" />
        </template>
      </div>
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
</style>
