<template>
  <div>
    <p class="h5 font-weight-bold">
      Trusted by top agencies <br />and employers
    </p>
    <div class="row">
      <div v-for="(img, index) in imgs" :key="index" class="col-4 py-5 pr-5">
        <img width="100%" :src="require(`@/assets/imgs/${img}`)" alt="" />
      </div>
    </div>
    <p class="text-center font-weight-bold pb-4">
      Make us your end-to-end freelance solution
    </p>
  </div>
</template>

<script>
export default {
  name: 'LogoDisplay',
  data() {
    return {
      imgs: [
        'logo/logo-avianos.svg',
        'logo/logo-freshform.svg',
        'logo/logo-oomph.svg',
        'logo/logo-freshform.svg',
        'logo/logo-oomph.svg',
        'logo/logo-avianos.svg'
      ]
    }
  }
}
</script>

<style scoped>
img {
  color: black;
}
</style>
