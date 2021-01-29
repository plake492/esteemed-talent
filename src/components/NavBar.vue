<template>
  <div class="sticky-top">
    <div
      class="navbar navbar-expand-lg mb-2 bg-white"
      style="min-height: 70px;"
    >
      <!-- <router-link :to="{ name: 'RecruiterHome' }"> -->
      <router-link to="/">
        <img
          width="75%"
          src="../assets/imgs/logo/esteemed-bw-logo.svg"
          alt=""
        />
      </router-link>
      <!-- <p class="ml-5 mr-4">Looking for Help?</p>
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
    </div>
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
  </div>
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

export default {
  name: 'NavBar',
  mixins: [modalMixin],
  setup(_, { root }) {
    const form = ref({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: '',
      verifyCode: ''
    })

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
      formFields
    }
  },
  computed: {
    currentPage() {
      return this.$route.path
    }
  }
}
</script>
