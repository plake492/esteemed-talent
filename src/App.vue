<template>
  <div>
    <NavBar />
    <router-view />
    <FooterBar />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import FooterBar from '@/components/FooterBar'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar
  },
  methods: {
    ...mapActions(['getJobs', 'getTalent', 'loading', 'getUser'])
  },
  async created() {
    await this.getUser()
    await this.getJobs()
    await this.getTalent()
    this.loading(false)
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Lato', sans-serif;
}

body {
  font-family: 'Lato', Helvetica, sans-serif;
  line-height: 1.4;
  height: 100vh !important;
}

a {
  color: #4a89dc;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
}
a:hover {
  text-decoration: none !important;
  color: #3a6ec5;
}
a:link {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
a:active {
  text-decoration: none;
}
ul {
  list-style-type: none;
}

button {
  border: none;
  font-family: 'Poppins', sans-serif;
}

input:not([type='file']) {
  border: none;
  background: none;
  border-bottom: 1px black solid;
  transition: 0.3s;
  border-radius: 0 !important;
}

input:focus {
  background: none;
  outline: none !important;
  box-shadow: none !important;
  border-bottom: 1px black solid !important;
  transform: scale(1.01);
}

.btn-primary {
  background-color: #4a89dc !important;
}

.circle {
  border-radius: 50%;
  height: 300px;
  width: 300px;
  background-color: rgb(158, 157, 158);
}

._big {
  width: 475px;
  height: 475px;
}

.btn {
  padding: 1rem 1.25rem !important;
  min-width: 10em;
  border: none !important;
  font-family: 'Poppins', sans-serif;
}

.btn:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.btn__nav {
  padding: 0.75rem 1.2rem !important;
}

.btn-secondary {
  background-color: #e5c248 !important;
}

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

.job_modal {
  padding: 0 !important;
  border-radius: 0 !important;
  border: none !important;
  /* width: 100vw !important; */
}

@media (max-width: 991.98px) {
  .container {
    max-width: 100vw;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}

@media (max-width: 767.98px) {
  .small_screen_modal {
    max-width: 100vw !important;
    margin: 0 !important;
  }
  .job_modal {
    width: 100vw !important;
  }
}
</style>
