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
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
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

.esteemed-container {
  background-color: rgb(133, 133, 131);
}
</style>
