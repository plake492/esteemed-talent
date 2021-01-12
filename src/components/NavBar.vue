<template>
  <div class="navbar navbar-expand-lg mb-2" style="min-height: 70px;">
    <router-link to="/">
      <img width="75%" src="../assets/imgs/logo/esteemed-bw-logo.svg" alt="" />
    </router-link>
    <p class="ml-5 mr-4">Looking for Help?</p>
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
          <router-link to="/jobs-feed">
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
        <button class="btn btn-secondary mr-5 btn__nav" @click="login()">
          Login
        </button>
        <router-link to="/talent-feed">
          <button class="btn btn-primary btn__nav">Get Started Here</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    auth() {
      return this.$store.state.auth
    },
    currentPage() {
      return this.$route.path
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login')
    },
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style scoped></style>
