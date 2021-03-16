<template>
  <!-- <nav class="sticky-top"> -->
  <b-navbar
    toggleable="lg"
    class="navbar-expand-lg mb-2 mt-n3 mt-lg-0 bg-white d-flex justify-content-between align-items-center sticky-top pb-0 pb-lg-4"
    style="min-height: 70px;"
  >
    <!-- <router-link :to="{ name: 'RecruiterHome' }"> -->
    <a href="https://esteemed.io/">
      <img class="logo" src="../assets/imgs/logo/esteemed-bw-logo.svg" alt="" />
    </a>

    <b-navbar-toggle
      target="nav-collapse"
      style="margin-top:-0.625rem;"
      @click="toggleButton"
    >
      <BIconList
        scale="1.5"
        class="hamburger_icon"
        :class="buttonActive ? 'hamburger_icon-active' : null"
      />
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav
        class="ml-auto d-flex justify-content-lg-around justify-content-between flex-column flex-lg-row align-items-center pt-2 "
      >
        <!-------------------------- FOR JOBS BOARD ------------------------------>

        <li>
          <a class="mb-5 text-black" href="https://esteemed.io/">
            <BIconChevronLeft />
            Back to main site
          </a>
        </li>
        <li>
          <a
            class="ml-lg-5 mx-auto btn btn-primary"
            href="https://esteemed.slack.com/join/shared_invite/zt-aejwraa8-mFs6ZUEs6voPD5RCV3vwvg#/shared-invite/email"
            >Join Talent Network
          </a>
        </li>
      </b-navbar-nav>
    </b-collapse>

    <!-------------------------- FOR JOBS BOARD ------------------------------>
    <!-- <p class="ml-5 mr-4">Looking for Help?</p>
      <router-link :to="currentPage === '/talent-home' ? '/' : '/talent-h
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
          v-if="state.auth.authStatus"
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
            <router-link :to="'/profile/' + state.auth.user.username">
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
            <BaseButton class="btn btn-primary btn__nav" @click="logout()">
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
      </div> -->
  </b-navbar>
  <!------------------ Modals ------------------>
  <!-- <BaseModalWraper
      v-for="(item, $index) in formFields"
      :key="$index"
      :modalTitle="item.title"
      :ref="item.ref"
      :modalRef="item.ref"
      content-class="job_modal"
      body-class="job_modal small_screen_modal"
      dialog-class="small_screen_modal"
    >
      <template v-slot:form>
        <ul class="form_list">
          <BaseInput
            v-for="(fieldItem, $i) in item.fields"
            :key="$i"
            :label="fieldItem.label"
            v-model="form[fieldItem.ref]"
            :type="fieldItem.type"
            class="form-group"
          />
        </ul>
      </template>
      <template v-slot:button="slotProps">
        <BaseButton
          @click.prevent="handleAuth(item.type)"
          class="btn btn-primary m-0 mt-4 modal_btn"
        >
          <div>{{ slotProps.modalTitle }}</div>
        </BaseButton>
        <a
          class="ml-4"
          v-if="item.type !== 'verify'"
          href="https://slack.com/oauth/v2/authorize?user_scope=identity.basic&client_id=${ID HERE}"
          ><img
            alt="Sign in with Slack"
            class="mt-2"
            height="40"
            width="172"
            src="https://platform.slack-edge.com/img/sign_in_with_slack.png"
            srcset="
              https://platform.slack-edge.com/img/sign_in_with_slack.png    1x,
              https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x
            "
        /></a>
        <p
          v-if="state.auth.authError"
          class="d-block mt-2 pl-5 pt-2 text-danger"
        >
          {{ state.auth.authError }}
        </p>
      </template>
    </BaseModalWraper> -->
  <!------------------ Modals ------------------>
  <!-- </nav> -->
</template>

<script>
import { getState } from '@/use/getState'
import {
  ref
  // watch
} from '@vue/composition-api'
import { modalMixin } from '@/mixins/modalMixin'
import { authForm } from '@/forms'
import store from '@/store'
import { BIconList, BIconChevronLeft } from 'bootstrap-vue'

export default {
  name: 'NavBar',
  mixins: [modalMixin],
  components: { BIconList, BIconChevronLeft },
  setup(_, { root }) {
    const form = ref({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: '',
      verifyCode: ''
    })

    const buttonActive = ref(false)

    async function handleAuth(type) {
      const authStatus = await store.dispatch(type, { user: form.value })
      if (authStatus === 'verify') {
        this.hideModal(`${type}Modal`)
        return this.showModal('verifyModal')
      }
      if (authStatus === 'success') {
        return this.hideModal(`${type}Modal`)
      }
    }

    async function logout() {
      await store.dispatch('logout')
      form.value = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    }

    function toggleButton() {
      buttonActive.value = !buttonActive.value
    }

    // watch(async () => {
    //   if (root.$route.query.code) {
    //     const code = root.$route.query.code
    //     await store.dispatch('signinSlack', { code })
    //   }
    // })

    const formFields = ref(authForm)

    return {
      ...getState(root),
      form,
      handleAuth,
      logout,
      formFields,
      toggleButton,
      buttonActive
    }
  },
  computed: {
    currentPage() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
@media (max-width: 992px) {
  ul > li {
    padding: 2.5rem 0;
    border-top: rgba(0, 0, 0, 0.2) 1px solid;
    width: 100%;
  }
  ul > li:last-child {
    border-bottom: rgba(0, 0, 0, 0.2) 1px solid;
  }
}
</style>
