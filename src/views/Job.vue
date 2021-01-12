<template>
  <div class="esteemed-container container">
    <div>
      <button class="btn btn_transparent p-1 mb-5">
        <router-link to="/jobs">+== back</router-link>
      </button>
    </div>
    <h1>{{ job.title }}</h1>
    <div class="my-5">
      <div class="job_badge d-inline mr-2">
        Remote
      </div>
      <div class="job_badge d-inline mr-2">
        {{ job.hoursPerWeek }} Hours Per Week
      </div>
      <div class="job_badge d-inline">
        {{ dateFormated }}
      </div>
    </div>
    <div v-html="job.description"></div>
    <div class="d-flex flex-row job_btn mt-5">
      <button @click="showModal()" class="btn btn-primary">
        APPLY NOW
      </button>
      <button class="btn">SHARE NOW</button>
      <button class="btn btn_transparent">PRINT</button>
    </div>
    <b-modal
      ref="my-modal"
      hide-header
      hide-footer
      centered
      content-class="job_modal"
      body-class="job_modal"
    >
      <JobModal
        :job="job"
        @hideModal="hideModal"
        @submitApplication="submitApplication"
      />
    </b-modal>
  </div>
</template>

<script>
import JobModal from '@/components/JobsFeed/JobModal'
import helper from '@/helpers'

export default {
  name: 'Job',
  components: {
    JobModal
  },
  computed: {
    job() {
      return this.$store.state.focusedJob
    },
    convertedText() {
      const text = this.job.description
      return helper.convertText(text)
    },
    dateFormated() {
      return helper.convertDate(this.job.startDate, 'MMM dd, yyyy')
    }
  },
  methods: {
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    async submitApplication(user) {
      await this.$store.dispatch('submitApplication', {
        applicant: user,
        jobId: this.job.id
      })
    }
  },
  created() {
    document.title = this.job.title
  }
}
</script>

<style scoped>
.btn_transparent {
  background: rgba(255, 255, 255, 0);
}
</style>
