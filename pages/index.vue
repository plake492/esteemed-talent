<template>
  <div class="container">
    <div style="margin-top: 15rem">
      <p class="h2 text-center">Loading Jobs</p>
      <nuxt-link class="mt-5 d-block text-center mx-auto" to="/jobs">
        <div class="hover_move">
          <BIconChevronLeft />
          <span class="ml-2">{{ !err ? 'Back' : 'Browse Open Jobs' }}</span>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { BIconChevronLeft } from 'bootstrap-vue'

export default {
  name: '404',
  components: {
    BIconChevronLeft
  },
  created() {
    this.$router.push('/jobs')
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
<!-- 
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
</script> -->
