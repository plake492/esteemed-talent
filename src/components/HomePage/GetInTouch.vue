<template>
  <div class="row">
    <div class="col-4">
      <img
        width="100%"
        :src="require('@/assets/imgs/placeholder_img_mountain.png')"
        alt=""
      />
    </div>
    <div class="col-8 pl-5">
      <p class="h5 font-weight-bolder">
        Want to find out more?
      </p>
      <p class="font-weight-bold">Drop us a line and let's talk about it</p>
      <ul class="row ml-4 mb-4">
        <BaseInput
          v-for="(item, $index) in fields"
          :key="$index"
          :label="item.label"
          v-model="form[item.ref]"
          :type="item.type"
          class="form-group col-6"
        />
      </ul>
      <button class="btn btn-secondary">Get in Touch</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GetInTouch',
  data() {
    return {
      fields: [
        { ref: 'firstName', label: 'FIRST NAME', type: 'text' },
        { ref: 'lastName', label: 'LAST NAME', type: 'text' },
        { ref: 'email', label: 'EMAIL', type: 'email' },
        { ref: 'company', label: 'COMPANY', type: 'text' }
      ],
      form: {
        firstName: '',
        lastName: '',
        email: '',
        company: ''
      }
    }
  }
}
</script>

<style scoped>
img {
  position: absolute;
  bottom: 0px;
  left: 0px;
  z-index: 0;
  border: none !important;
}
</style>
