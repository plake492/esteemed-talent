<template>
  <div class="sticky-top">
    <div
      class="navbar navbar-expand-lg mb-2 bg-white"
      style="min-height: 70px;"
    >
      <router-link to="/jobs">
        <img
          width="75%"
          src="../assets/imgs/logo/esteemed-bw-logo.svg"
          alt=""
        />
      </router-link>
      <div class="ml-auto">
        <template v-if="!auth">
          <a @click="showModal('signupModal')" class="mr-4">
            SIGNUP
          </a>
          <a @click="showModal('loginModal')" class="mr-4">
            LOGIN
          </a>
        </template>

        <template v-if="auth">
          <p class="d-inline mr-4">
            {{ user.firstName + ' ' + user.lastName }}
          </p>
          <a @click="logout()" class="mr-4">
            LOGOUT
          </a>
        </template>
        <router-link class="mr-4" to="/jobs">
          JOBS
        </router-link>
        <router-link to="/">
          HOME
        </router-link>
      </div>
      <!-- <p class="ml-5 mr-4">Looking for Help?</p>
      <router-link :to="currentPage === '/talent-home' ? '/' : '/talent-home'"
        ><p>
          {{
            currentPage === '/talent-home'
              ? 'Show Recruiter Home'
              : 'Show Talent Home'
          }}
        </p></router-link
      >
      <div class="ml-auto">
        <div
          v-if="auth"
          class="d-flex flex-row justify-content-between align-items-start"
        >
          <div class="mx-4">
            <router-link to="/talent-feed">
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
            <button class="btn btn-secondary btn__nav" @click="logout()">
              Logout
            </button>
          </div>
        </div>
        <div v-else class="d-flex align-items-start">
          <button
            class="btn btn-secondary mr-5 btn__nav"
            @click="showModal('loginModal')"
          >
            Login
          </button>
          <button
            class="btn btn-secondary mr-5 btn__nav"
            @click="showModal('signupModal')"
          >
            Signup
          </button>
          <router-link to="/talent-feed">
            <button class="btn btn-primary btn__nav">Get Started Here</button>
          </router-link>
        </div>
      </div> -->
    </div>

    <!-- Modals -->
    <BaseModalWraper
      ref="loginModal"
      modalRef="loginModal"
      content-class="job_modal"
      body-class="job_modal small_screen_modal"
      dialog-class="small_screen_modal"
    >
      <template v-slot="slotProps">
        <BaseModal
          modalTitle="LOGIN"
          @hideModal="hideModal(slotProps.modalRef)"
          ref="slotProps.modalRef"
        >
          <template v-slot:form>
            <BaseInput
              v-for="(item, $index) in fieldsLogin"
              :key="$index"
              :label="item.label"
              v-model="form[item.ref]"
              :type="item.type"
              class="form-group"
            />
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
        </BaseModal>
      </template>
    </BaseModalWraper>

    <BaseModalWraper
      ref="signupModal"
      modalRef="signupModal"
      content-class="job_modal"
      body-class="job_modal small_screen_modal"
      dialog-class="small_screen_modal"
    >
      <template v-slot="slotProps">
        <BaseModal
          modalTitle="SIGNUP"
          @hideModal="hideModal(slotProps.modalRef)"
          ref="slotProps.modalRef"
        >
          <template v-slot:form>
            <BaseInput
              v-for="(item, $index) in fieldsSignup"
              :key="$index"
              :label="item.label"
              v-model="form[item.ref]"
              :type="item.type"
              class="form-group"
            />
          </template>
          <template v-slot:button="slotProps">
            <BaseButton
              @click.prevent="signupUser()"
              class="btn btn-primary m-0 mt-4 modal_btn"
              :disable="!form.email && !form.password"
            >
              <div>{{ slotProps.modalTitle }}</div>
            </BaseButton>
          </template>
        </BaseModal>
      </template>
    </BaseModalWraper>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'NavBar',
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
      }
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
      const randNum = Math.floor(Math.random() * 9999999)
      const user = {
        firstName: this.form.firstName,
        lastName: this.form.lastName,
        email: this.form.email,
        password: this.form.password,
        _id: randNum // Mock user ID
      }
      await this.signup({ user })
      this.hideModal('signupModal')
    },
    async loginUser() {
      const user = {
        email: this.form.email,
        password: this.form.password
      }
      await this.login({ user })
      this.hideModal('loginModal')
    },
    showModal(type) {
      this.clearForm()
      this.$refs[type].showModal()
    },
    hideModal(type) {
      this.clearForm()
      this.$refs[type].hideModal()
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
