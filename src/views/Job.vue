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
          <BaseButton @click="showModal('jobModal')" class="btn btn-primary">
            APPLY NOW
          </BaseButton>
        </div>
        <div class="mr-5 my-2 my-md-0 mr-md-2">
          <BaseButton class="btn btn_transparent">SHARE NOW</BaseButton>
        </div>
        <div class="mr-5 mr-md-2">
          <BaseButton class="btn btn_transparent">PRINT</BaseButton>
        </div>
      </div>
    </div>

    <BaseModalWraper
      :modalTitle="
        job.title.length > 27 ? job.title.substr(0, 25) + '...' : job.title
      "
      ref="jobModal"
      modalRef="jobModal"
      hide-header
      hide-footer
      centered
      content-class="job_modal"
      body-class="job_modal small_screen_modal"
      dialog-class="small_screen_modal"
    >
      <template v-slot:form>
        <ul class="form_list">
          <BaseInput
            v-for="(item, $index) in fields"
            :key="$index"
            :label="item.label"
            v-model="applicant[item.ref]"
            :type="item.type"
            class="form-group"
          />
          <li class="form-group mt-5">
            <label for="resume">UPLOAD RESUME</label>
            <input type="file" class="file_upload w-100 p-4 text-center" />
          </li>
        </ul>
      </template>
      <template v-slot:button>
        <footer class="d-flex flex-column flex-md-row">
          <BaseButton
            @click.prevent="hideModal('jobModal')"
            class="btn btn-secondary mx-auto mx-md-2 modal_btn"
          >
            <div>CANCEL</div>
          </BaseButton>
          <BaseButton
            @click.prevent="submitApplication()"
            class="btn btn-primary mx-auto mx-md-2 modal_btn"
          >
            <div>APPLY</div>
          </BaseButton>
        </footer>
      </template>
    </BaseModalWraper>
  </div>
</template>

<script>
import helper from '@/helpers'
import { BIconChevronLeft } from 'bootstrap-vue'
import { modalMixin } from '@/mixins/modalMixin'

export default {
  name: 'Job',
  mixins: [modalMixin],
  components: {
    BIconChevronLeft
  },
  data() {
    return {
      applicant: {
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      },
      fields: [
        {
          ref: 'firstName',
          label: 'FIRST NAME',
          type: 'text'
        },
        {
          ref: 'lastName',
          label: 'LAST NAME',
          type: 'text'
        },
        {
          ref: 'email',
          label: 'EMAIL',
          type: 'email'
        },
        {
          ref: 'phone',
          label: 'MOBIL PHONE',
          type: 'phone'
        }
      ]
    }
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
    async submitApplication() {
      await this.$store.dispatch('submitApplication', {
        applicant: this.applicant,
        jobId: this.job.id
      })
      this.hideModal('jobModal')
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
.file_upload {
  border: 1px dashed black;
}
</style>
