<template>
  <div class="row">
    <div v-for="(img, index) in imgs" :key="index" class="col-4 py-5 pr-5">
      <img width="100%" :src="require(`@/assets/imgs/${img}`)" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogoDisplay',
  data() {
    return {
      imgs: [
        'placeholder.com-logo1.jpg',
        'placeholder.com-logo2.jpg',
        'placeholder.com-logo3.jpg',
        'placeholder.com-logo4.jpg',
        'placeholder.com-logo1.jpg',
        'placeholder.com-logo2.jpg'
      ]
    }
  }
}
</script>

<style scoped></style>
