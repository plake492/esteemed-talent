<template>
  <div class="container pb-5 mt-4">
    <h2 class="font-weigth-bolder text-center">Open Jobs</h2>
    <JobsFeedDisplay />
  </div>
</template>

<script>
import JobsFeedDisplay from '~/components/Jobs/JobsFeedDisplay'

export default {
  name: 'Jobs',
  componenets: { JobsFeedDisplay },
  head() {
    return {
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content:
            'Reach new heights in your career with Esteemed. Check out our latest job openings and opportunities.'
        }
      ]
    }
  }
}
</script>
