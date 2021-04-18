<template>
  <div class="container pb-5 mt-4">
    <h2 class="font-weigth-bolder text-center">Open Jobs</h2>
    <template v-if="loading">
      <img
        style="margin-top: 27vh"
        class="mx-auto d-block"
        width="20%"
        src="~/assets/imgs/loading.svg"
        alt="Blue Loading Spinner"
      />
    </template>
    <template v-else>
      <JobsFeedDisplay />
    </template>
  </div>
</template>

<script>
import JobsFeedDisplay from '~/components/Jobs/JobsFeedDisplay'

export default {
  name: 'Jobs',
  componenets: { JobsFeedDisplay },
  computed: {
    loading() {
      return this.$store.state.loading
    }
  },
  head() {
    return {
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content:
            'Reach new heights in your career with Esteemed. Check out our latest job openings and opportunities.'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Browse Open Jobs | Esteemed.io'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'Reach new heights in your career with Esteemed. Check out our latest job openings and opportunities.'
        },
        { name: 'twitter:title', content: 'Browse Open Jobs | Esteemed.io' },
        {
          name: 'twitter:description',
          content:
            'Reach new heights in your career with Esteemed. Check out our latest job openings and opportunities.'
        }
      ]
    }
  }
}
</script>
