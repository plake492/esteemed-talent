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

export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar
  },
  async beforeCreate() {
    await this.$store.dispatch('getJobs')
    await this.$store.dispatch('getTalent')
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
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
a {
  color: rgb(0, 0, 0);
  text-decoration: none;
}
ul {
  list-style-type: none;
}

button {
  border: none;
  font-family: 'Poppins', sans-serif;
}
input {
  border: none;
  background: none;
  border-bottom: 1px black solid;
  transition: 0.3s;
}

input:focus {
  background: none;
  outline: none;
  /* border-bottom: 1px black solid; */
  transform: scale(1.01);
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
.btn__nav {
  padding: 0.75rem 1.2rem !important;
}

.esteemed-container {
  /* background-color: rgb(133, 133, 131); */
  max-height: 1200px;
  overflow: scroll;
}

.btn-secondary {
  background-color: #e5c248 !important;
}
.job_card {
  margin: 12px 35px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  padding-bottom: 10px;
  cursor: pointer;
}
</style>
