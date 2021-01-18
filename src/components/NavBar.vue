<template>
  <div class="sticky-top">
    <div
      class="navbar navbar-expand-lg mb-2 bg-white"
      style="min-height: 70px;"
    >
      <router-link :to="{ name: 'RecruiterHome' }">
        <img
          width="75%"
          src="../assets/imgs/logo/esteemed-bw-logo.svg"
          alt=""
        />
      </router-link>
      <p class="ml-5 mr-4">Looking for Help?</p>
      <router-link :to="currentPage === '/talent-home' ? '/' : '/talent-home'">
        <p>
          {{
            currentPage === '/talent-home'
              ? 'Show Recruiter Home'
              : 'Show Talent Home'
          }}
        </p>
      </router-link>
      <div class="ml-auto">
        <div
          v-if="auth"
          class="d-flex flex-row justify-content-between align-items-start"
        >
          <div class="mx-4">
            <router-link :to="{ name: 'TalentFeed' }">
              <img
                width="30px"
                class="d-block mx-auto"
                src="../assets/imgs/logo/search.svg"
                alt=""
              />
              <small class="align-items-center">talent</small>
            </router-link>
          </div>
          <div class="mx-4">
            <router-link to="/jobs">
              <img
                width="30px"
                class="d-block mx-auto"
                src="../assets/imgs/logo/briefcase.svg"
                alt=""
              />
              <small class="align-items-center">Hiring</small>
            </router-link>
          </div>
          <div class="mx-4">
            <router-link to="#">
              <img
                width="30px"
                class="d-block mx-auto"
                src="../assets/imgs/logo/profileRound.svg"
                alt=""
              />
              <small class="align-items-center">My Profile</small>
            </router-link>
          </div>
          <div class="ml-5">
            <BaseButton class="btn btn-secondary btn__nav" @click="logout()">
              Logout
            </BaseButton>
          </div>
        </div>
        <div v-else class="d-flex align-items-start">
          <BaseButton
            class="btn btn-secondary mr-5 btn__nav"
            @click="showModal('loginModal')"
          >
            Login
          </BaseButton>
          <BaseButton
            class="btn btn-secondary mr-5 btn__nav"
            @click="showModal('signupModal')"
          >
            Signup
          </BaseButton>
          <router-link :to="{ name: 'TalentFeed' }">
            <BaseButton class="btn btn-primary btn__nav"
              >Get Started Here</BaseButton
            >
          </router-link>
        </div>
      </div>
    </div>

    <!-- Modals -->
    <BaseModalWraper
      modalTitle="LOGIN"
      ref="loginModal"
      modalRef="loginModal"
      content-class="job_modal"
      body-class="job_modal small_screen_modal"
      dialog-class="small_screen_modal"
    >
      <template v-slot:form>
        <ul class="form_list">
          <BaseInput
            v-for="(item, $index) in fieldsLogin"
            :key="$index"
            :label="item.label"
            v-model="form[item.ref]"
            :type="item.type"
            class="form-group"
          />
        </ul>
      </template>
      <template v-slot:button="slotProps">
        <BaseButton
          @click.prevent="loginUser()"
          class="btn btn-primary m-0 mt-4 modal_btn"
          :disable="!form.email && !form.password"
        >
          <div>{{ slotProps.modalTitle }}</div>
        </BaseButton>
      </template>
    </BaseModalWraper>

    <BaseModalWraper
      ref="signupModal"
      modalRef="signupModal"
      modalTitle="SIGNUP"
      content-class="job_modal"
      body-class="job_modal small_screen_modal"
      dialog-class="small_screen_modal"
      @hideModal="hideModal('signuoModal')"
    >
      <template v-slot:form>
        <ul class="form_list">
          <BaseInput
            v-for="(item, $index) in fieldsSignup"
            :key="$index"
            :label="item.label"
            v-model="form[item.ref]"
            :type="item.type"
            class="form-group"
          />
        </ul>
      </template>
      <template v-slot:button="slotProps">
        <BaseButton
          @click.prevent="signupUser()"
          class="btn btn-primary m-0 mt-4 modal_btn"
        >
          <div>{{ slotProps.modalTitle }}</div>
        </BaseButton>
        <p v-if="error">{{ error }}</p>
      </template>
    </BaseModalWraper>
  </div>
</template>

<script>
import { modalMixin } from '@/mixins/modalMixin'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'NavBar',
  mixins: [modalMixin],
  components: {},
  data() {
    return {
      fieldsSignup: [
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
          ref: 'password',
          label: 'PASSWORD',
          type: 'password'
        }
      ],
      fieldsLogin: [
        {
          ref: 'email',
          label: 'EMAIL',
          type: 'email'
        },
        {
          ref: 'password',
          label: 'PASSWORD',
          type: 'password'
        }
      ],
      form: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      },
      error: ''
    }
  },
  computed: {
    ...mapState(['auth', 'user']),
    currentPage() {
      return this.$route.path
    }
  },
  methods: {
    ...mapActions(['signup', 'login', 'logout']),
    async signupUser() {
      const randNum = Math.floor(Math.random() * 100000000000)
      const user = {
        firstName: this.form.firstName,
        lastName: this.form.lastName,
        email: this.form.email,
        password: this.form.password,
        _id: randNum
      }
      if (user.firstName && user.lastName && user.email && user.password) {
        await this.signup({ user })
        this.clearForm()
        return this.hideModal('signupModal')
      }
      this.error = 'missing required fields'
    },
    async loginUser() {
      const user = {
        email: this.form.email,
        password: this.form.password
      }
      if (user.email && user.password) {
        await this.login({ user })
        this.clearForm()
        return this.hideModal('loginModal')
      }
      this.error = 'missing required fields'
    },
    clearForm() {
      this.form = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    }
  }
}
</script>
