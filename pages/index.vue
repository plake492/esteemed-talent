<template>
  <div class="container">
    <div style="margin-top: 15rem">
      <template v-if="loading">
        <img
          style="margin-top: 27vh"
          class="mx-auto d-block"
          width="20%"
          src="~/assets/imgs/loading.svg"
          alt="Blue Loading Spinner"
        />
      </template>
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
  computed: {
    loading() {
      return this.$store.state.loading
    }
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
