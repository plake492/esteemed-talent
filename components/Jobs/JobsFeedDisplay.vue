<template>
  <div class="p-1 p-md-3 py-4 p-md-4">
    <div class="row">
      <div class="col-lg-3"></div>
      <div class="col-lg-9">
        <p class="px-3 p-md-4 h4 font-weight-bold mb-4">
          Open Positions ({{ jobsListShow.length }})
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 mb-4 mb-lg-0">
        <JobsFilter class="sticky-top" />
      </div>
      <div class="col-lg-9 jobs_list">
        <template v-if="loading">
          <div v-for="n in 5" class="skeleton bg-white mx-0 mx-md-2 p-3 mb-4">
            <div class="skeleton__title loading mb-2"></div>
            <div class="skeleton__pill loading"></div>
            <div class="skeleton__description loading mt-4"></div>
          </div>
        </template>

        <template v-else>
          <template v-for="(item, $index) in jobsListShow">
            <JobsCard
              :key="$index"
              :job="item"
              :class="$index !== jobsListShow.length - 1 && 'mb-4'"
            />
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import JobsCard from './JobsCard'
import JobsFilter from './JobsFilter'

export default {
  name: 'JobsFeedDisplay',
  components: {
    JobsCard,
    JobsFilter
  },
  scrollToTop: true,
  computed: {
    loading() {
      return this.$store.state.loading
    },
    jobsListShow() {
      return this.$store.state.jobsListShow
    }
  },
  mounted() {
    this.$store.dispatch('loadContent')
  }
}
</script>

<style scoped>
.jobs_list::-webkit-scrollbar {
  width: 0 !important;
}

.sticky-top {
  top: 100px;
  z-index: 0;
}

/*** SKELETON ***/
.skeleton {
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  height: 226px;
}

.skeleton__title.loading {
  height: 2.5rem;
  width: 70%;
  border-radius: 3px;
}

.skeleton__pill.loading {
  height: 2rem;
  width: 65%;
  border-radius: 3px;
}

.skeleton__description.loading {
  height: 4.5rem;
  border-radius: 3px;
}
</style>
