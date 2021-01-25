<template>
  <div class="container">
    <div class="p-3 py-4 ">
      <router-link class="mb-5" to="/jobs"
        ><BIconChevronLeft /> <span class="ml-2">back</span></router-link
      >
      <h1 class="mt-5">{{ state.focusedJob.title }}</h1>
      <div
        class="d-flex flex-md-row flex-column justify-content-start flex-wrap my-5"
      >
        <!-- <div class="job_badge p-2 mt-md-0 mt-2 mr-4 mr-md-2 mr-auto">
          Remote
        </div>
        <div class="job_badge p-2 mt-md-0 mt-2 mr-4 mr-md-2 mr-auto">
          {{ state.focusedJob.hoursPerWeek }} Hours Per Week
        </div>
        <div class="job_badge  p-2 mt-md-0 mt-2 mr-4 mr-md-2 mr-auto">
          {{ dateFormated }}
        </div> -->
      </div>
      <div v-html="state.focusedJob.description"></div>
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
      ref="jobModal"
      modalRef="jobModal"
      :modalTitle="
        state.focusedJob.title.length > 27
          ? state.focusedJob.title.substr(0, 25) + '...'
          : state.focusedJob.title
      "
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
            <input
              @change="handleFileUpload()"
              type="file"
              class="file_upload w-100 p-4 text-center"
              ref="resume"
            />
          </li>
        </ul>
      </template>
      <template v-slot:button>
        <footer class="d-flex flex-column flex-md-row">
          <BaseButton
            @click.prevent="hideModal('jobsModal')"
            class="btn btn-secondary mx-auto mx-md-2 modal_btn"
          >
            <div>CANCEL</div>
          </BaseButton>
          <BaseButton
            @click.prevent="submitApplication(applicant)"
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
import { getState } from '@/use/getState'
import { reactive, toRefs, computed, ref } from '@vue/composition-api'
import store from '@/store'

export default {
  name: 'Job',
  mixins: [modalMixin],
  components: { BIconChevronLeft },
  setup(_, { root, refs }) {
    const state = getState(root)

    const applicant = reactive({
      applicant: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        resume: ''
      }
    })

    const resume = ref({
      resume: ''
    })

    const convertedText = computed(() => {
      const text = state.state.value.focusedJob.description
      return helper.convertText(text)
    })

    const dateFormated = computed(() =>
      helper.convertDate(state.state.value.focusedJob.startDate, 'MMM dd, yyyy')
    )

    async function submitApplication(applicant) {
      await store.dispatch('submitApplication', {
        applicant: applicant,
        jobId: state.state.value.focusedJob.id,
        resume: resume.value
      })
      this.hideModal('jobModal')
    }

    function handleFileUpload() {
      const formData = new FormData()
      formData.append('file', refs.resume.files[0])
      resume.value = formData
    }

    return {
      dateFormated,
      convertedText,
      submitApplication,
      handleFileUpload,
      ...state,
      ...toRefs(applicant)
    }
  },

  data() {
    return {
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
  created() {
    document.title = this.state.focusedJob.title
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
