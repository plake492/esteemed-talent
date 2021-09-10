<template>
  <main
    class="container mt-5 mt-lg-0 d-flex align-items-center justify-content-center"
  >
    <div class="text-center">
      <h3 class="mb-5">Error Loading Page</h3>
      <nuxt-link class="mb-5" to="/jobs">
        <div class="hover_move">
          <BIconChevronLeft />
          <span class="ml-2">{{ !err ? 'Back' : 'Browse Open Jobs' }}</span>
        </div>
      </nuxt-link>
    </div>
  </main>
</template>

<script>
import { BIconChevronLeft } from 'bootstrap-vue'

export default {
  name: 'error',
  components: {
    BIconChevronLeft
  }
}
</script>

<style scoped>
main {
  min-height: 70vh;
}
</style>
