<template>
  <div class="container">
    <div class="p-3 py-4 ">
      <router-link class="mb-5" to="/jobs"
        ><BIconChevronLeft /> <span class="ml-2">back</span></router-link
      >
      <h1 class="mt-5">{{ job.title }}</h1>
      <div
        class="d-flex flex-md-row flex-column justify-content-start flex-wrap my-5"
      >
        <div class="job_badge p-2 mt-md-0 mt-2 mr-4 mr-md-2 mr-auto">
          Remote
        </div>
        <div class="job_badge p-2 mt-md-0 mt-2 mr-4 mr-md-2 mr-auto">
          {{ job.hoursPerWeek }} Hours Per Week
        </div>
        <div class="job_badge  p-2 mt-md-0 mt-2 mr-4 mr-md-2 mr-auto">
          {{ dateFormated }}
        </div>
      </div>
      <div v-html="job.description"></div>
      <div class="d-flex flex-md-row flex-column flex-wrap job_btn mt-5">
        <div class="mr-5 mr-md-2">
          <button @click="showModal()" class="btn btn-primary">
            APPLY NOW
          </button>
        </div>
        <div class="mr-5 my-2 my-md-0 mr-md-2">
          <button class="btn btn_transparent">SHARE NOW</button>
        </div>
        <div class="mr-5 mr-md-2">
          <button class="btn btn_transparent">PRINT</button>
        </div>
      </div>
    </div>

    <b-modal
      ref="my-modal"
      hide-header
      hide-footer
      centered
      size="lg"
      content-class="job_modal"
      body-class="job_modal small_screen_modal"
      dialog-class="small_screen_modal"
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
import { BIconChevronLeft } from 'bootstrap-vue'

export default {
  name: 'Job',
  components: {
    JobModal,
    BIconChevronLeft
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
  border: 1px solid rgba(0, 0, 0, 0.1) !important;
}
</style>
