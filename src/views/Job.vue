<template>
  <div class="container">
    <router-link class="mb-5 " to="/jobs">
      <div class="hover_move">
        <BIconChevronLeft />
        <span class="ml-2">{{
          !err ? 'Back' : 'Browse Open Jobs'
        }}</span>
      </div>
    </router-link>
    <div v-if="loading">
      <p class="h3 mt-5 text-center">
        Loading Job
      </p>
    </div>
    <div v-else-if="err">
      <p class="h3 mt-5 text-danger text-center">
        {{ err }}
      </p>
    </div>
    <div v-else-if="focusedJob.id" class="p-3 py-4">
      <h1 class="mt-5">{{ focusedJob.title }}</h1>
      <div
        class="d-flex flex-md-row flex-column justify-content-start flex-wrap my-5"
      >
        <div
          v-if="focusedJob.address"
          class="job_badge p-2 mt-md-0 mt-2 mr-4 mr-md-2 mr-auto"
        >
          {{ focusedJob.address }}
        </div>
        <div
          v-if="focusedJob.employmentType"
          class="job_badge p-2 mt-md-0 mt-2 mr-4 mr-md-2 mr-auto"
        >
          {{ focusedJob.employmentType }}
        </div>

        <div
          v-if="dateFormated"
          class="job_badge  p-2 mt-md-0 mt-2 mr-4 mr-md-2 mr-auto"
        >
          {{ dateFormated }}
        </div>
      </div>
      <div v-html="focusedJob.description"></div>
      <div class="d-flex flex-md-row flex-column flex-wrap job_btn mt-5">
        <div class="mr-5 mr-md-2">
          <BaseButton @click="showModal('jobModal')" class="btn btn-primary">
            APPLY NOW
          </BaseButton>
        </div>
        <!-- <div class="mr-5 my-2 my-md-0 mr-md-2">
          <BaseButton class="btn btn_transparent">SHARE NOW</BaseButton>
        </div> -->
        <div class="mr-5 mr-md-2">
          <BaseButton @click="print" class="btn btn_transparent">
            PRINT
          </BaseButton>
        </div>
      </div>
    </div>

    <BaseModalWraper
      v-if="!loading && !err"
      ref="jobModal"
      modalRef="jobModal"
      hide-header
      hide-footer
      centered
      content-class="job_modal"
      body-class="job_modal small_screen_modal"
      dialog-class="small_screen_modal"
    >
      <template v-slot:header>
        <div>
          <h2>
            {{
              focusedJob.title.length > 27
                ? focusedJob.title.substr(0, 25) + '...'
                : focusedJob.title
            }}
          </h2>
          <!-- <p class="h6">{{ focusedJob.publishedCategory.name }}</p> -->
          <p>
            {{ focusedJob.address }}, |
            {{ focusedJob.employmentType }}
          </p>
        </div>
      </template>
      <template v-slot:form>
        <ul class="form_list mx-5" v-if="!success">
          <template v-for="(item, $index) in formFields">
            <div :key="$index" class="mb-4">
              <BaseInput
                :key="$index"
                :label="item.label"
                v-model="applicant[item.ref]"
                :type="item.type"
                class="form-group mb-n1"
              />
              <small v-if="item.ref !== 'phone'" class="text-danger">
                {{ item.label }} is required
              </small>
            </div>
          </template>
          <li class="form-group mt-5">
            <label for="resume">UPLOAD RESUME</label>
            <input
              @change="handleFileUpload()"
              type="file"
              class="file_upload w-100 p-4 text-center"
              ref="resume"
              accept=".html,.txt.doc,.docx,.pdf,.rtf,.odt"
            />
            <small
              >Accepted Resume types are html,text,txt,pdf,doc,docx,rtf,odt
            </small>
          </li>
        </ul>
        <h5 v-else style="color:#009480">{{ success }}</h5>
      </template>
      <template v-slot:button>
        <footer class="flex-md-row mx-5">
          <!-- <BaseButton
            @click.prevent="hideModal('jobsModal')"
            class="btn btn-secondary mx-auto mx-md-2 modal_btn"
          >
            <div>CANCEL</div>
          </BaseButton> -->
          <BaseButton
            v-if="!success"
            @click.prevent="submitApplication(applicant)"
            class="btn btn-primary d-block w-100 mt-5 mx-auto modal_btn"
          >
            <div>APPLY</div>
          </BaseButton>
          <div v-if="error">
            <small class="text-danger">{{ error }}</small>
          </div>
        </footer>
      </template>
    </BaseModalWraper>
  </div>
</template>

<script>
import { convertText, convertDate, timeout } from '@/helpers'
import { BIconChevronLeft } from 'bootstrap-vue'
import { modalMixin } from '@/mixins/modalMixin'
import {
  reactive,
  toRefs,
  computed,
  ref,
  onMounted
} from '@vue/composition-api'
import { jobsForm } from '@/forms'
import store from '@/store'

export default {
  name: 'Job',
  mixins: [modalMixin],
  components: { BIconChevronLeft },
  setup(_, { root, refs }) {
    onMounted(async () => {
      await store.dispatch('loadContent')
      await store.dispatch('getJob', { id: parseInt(root.$route.params.id) })
      loading.value = false
    })

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
      resume: null
    })

    const loading = ref(true)
    const error = ref('')
    const success = ref('')

    const formFields = ref(jobsForm)

    const focusedJob = computed(() => store.state.focusedJob)

    const err = computed(() => store.state.error)

    const convertedText = computed(() => {
      const text = focusedJob.value.description
      return convertText(text)
    })

    const dateFormated = computed(() =>
      convertDate(focusedJob.value.startDate, 'MMM dd, yyyy')
    )

    async function submitApplication(applicant) {
      const { firstName, lastName, email } = applicant
      if (!firstName || !lastName || !email)
        return (error.value = 'Missing Required Fields')
      if (resume.value.resume === null)
        return (error.value = 'No Resume Attached')

      const msg = await store.dispatch('submitApplication', {
        applicant: applicant,
        job: focusedJob.value,
        resume: resume.value
      })

      if (msg) {
        success.value = msg
        await timeout(() => this.hideModal('jobModal'), 3)
        // second timeout avoids showing fields as modal closes
        await timeout(() => (success.value = ''), 3.5)
      }
    }

    function handleFileUpload() {
      const formData = new FormData()
      formData.append('file', refs.resume.files[0])
      resume.value = formData
    }

    function print() {
      window.print()
    }

    return {
      dateFormated,
      convertedText,
      submitApplication,
      handleFileUpload,
      formFields,
      error,
      print,
      success,
      loading,
      focusedJob,
      err,
      ...toRefs(applicant)
    }
  },

  metaInfo() {
    return {
      title: this.focusedJob.title,
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: this.convertedText
        }
      ]
    }
  }
  // created() {
  //   document.title = this.state.focusedJob.title || 'Esteemed - Careers'
  // }
}
</script>

<style scoped>
small {
  cursor: default;
}
.btn_transparent {
  border: 1px solid rgba(0, 0, 0, 0.1) !important;
}
.file_upload {
  border: 1px dashed black;
}

.form_list {
  list-style-type: none !important;
}

>>> ul {
  margin-top: 1rem;
  padding-left: 2rem;
}
</style>
