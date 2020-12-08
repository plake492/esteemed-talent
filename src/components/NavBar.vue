<template>
  <div class="navbar navbar-expand-lg">
    <router-link to="/">
      <!-- <h2>Esteemed</h2> -->
      <img src="../assets/imgs/logo/esteemed-bw-logo.svg" alt="" />
    </router-link>
    <p class="ml-5">Looking for Help?</p>
    <div class="ml-auto">
      <button class="btn btn-secondary mr-5">Login</button>
      <router-link to="/talent-feed">Get Started Here</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
/* .navbar {
  background-color: darkmagenta;
} */
</style>
