<template>
  <div class="p-1 p-md-3 py-4 p-md-4">
    <div class="jobs_list">
      <h1 v-if="state.loading" class="text-center">loading</h1>
      <template v-else>
        <p class="px-3 p-md-4 h4 font-weight-bold mb-4">
          Open Positions ({{ state.jobsList.length }})
        </p>
        <template v-for="(item, $index) in state.jobsList">
          <JobsCard :key="$index" :job="item" />
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import JobsCard from './JobsCard'
import { stateMixin } from '@/mixins/stateMixin'

export default {
  name: 'JobsFeedDisplay',
  components: { JobsCard },
  mixins: [stateMixin],
  created() {
    document.title = 'Esteemed - Careers'
  }
}
</script>

<style scoped>
/* .jobs_list {
  max-height: calc(85vh - 55px) !important;
  overflow: scroll;
} */

.jobs_list::-webkit-scrollbar {
  width: 0 !important;
}
</style>
