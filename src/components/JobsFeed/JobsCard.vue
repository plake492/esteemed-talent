<template>
  <div class="job_card bg-white mb-4" @click="viewJob()">
    <div class="p-3">
      <div class="mt-2 w-100">
        <div class="d-flex flex-row justify-content-between">
          <a class="job_title h4">{{ job.title }}</a>
          <div>
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
        </div>
        <p class="small my-1">Duration: {{ job.durationWeeks }} weeks</p>
        <div class="mt-4  bold job_description" v-html="shortDescription"></div>
      </div>
    </div>
  </div>
</template>

<script>
import helper from '@/helpers'

export default {
  name: 'JobsCard',
  props: {
    job: {
      type: Object,
      required: true
    }
  },
  computed: {
    dateFormated() {
      return helper.convertDate(this.job.startDate, 'MMM dd, yyyy')
    },
    shortDescription() {
      const text = this.job.description
      return helper.convertText(text)
    }
  },
  methods: {
    viewJob() {
      const id = this.job.id
      this.$store.dispatch('getJob', { id })
      this.$router.push('/jobs/job/' + id)
    }
  }
}
</script>

<style scoped>
.job_description {
  overflow: hidden;
  line-height: 28.8px;
  font-size: 1rem;
}
.job_card {
  margin: 12px 35px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  padding-bottom: 10px;
  cursor: pointer;
  transition: 0.3s;
}

.job_card:hover {
  transform: scale(1.002);
  box-shadow: 0 0 9px 1px rgba(0, 0, 0, 0.1);
}
.job_card:active {
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);

  transform: scale(0.999);
}

.job_title {
  color: #4a89dc;
}

.job_title:hover {
  color: #3a6ec5;
}

.job_badge {
  color: #0b344f;
  padding: 12px;
  margin-right: 5px;
  background-color: #f4f4f4;
  border-radius: 8px;
  align-self: center;
}
</style>
