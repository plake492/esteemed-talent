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
  }
}
</script>
