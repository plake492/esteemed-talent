<template>
  <div>
    <NavBar />
    <nuxt />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import NavBar from '~/components/NavBar'

export default {
  name: 'default',
  components: { NavBar },
  methods: {
    ...mapActions(['loadContent'])
  },
  async mounted() {
    await this.loadContent()
  }
}
</script>
