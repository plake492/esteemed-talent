<template>
  <b-navbar
    toggleable="lg"
    class="navbar-expand-lg mb-2 mt-n3 mt-lg-0 bg-white d-flex justify-content-between align-items-center sticky-top pb-0 pb-lg-4"
    style="min-height: 70px"
  >
    <a href="https://esteemed.io/">
      <img class="logo" src="~/assets/imgs/logo/esteemed-bw-logo.svg" alt="" />
    </a>

    <b-navbar-toggle
      target="nav-collapse"
      style="margin-top: -0.625rem"
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
        class="ml-auto d-flex justify-content-lg-around justify-content-between flex-column flex-lg-row align-items-center pt-2"
      >
        <li>
          <a
            class="ml-lg-5 mx-auto btn btn-primary"
            href="https://esteemed.slack.com/join/shared_invite/zt-aejwraa8-mFs6ZUEs6voPD5RCV3vwvg#/shared-invite/email"
            >Join Talent Network
          </a>
        </li>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { BIconList } from 'bootstrap-vue'

export default {
  name: 'NavBar',
  components: { BIconList },
  data() {
    return {
      buttonActive: false
    }
  },
  computed: {
    currentPage() {
      return this.$route.path
    }
  },
  methods: {
    toggleButton() {
      this.buttonActive = !this.buttonActive
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
