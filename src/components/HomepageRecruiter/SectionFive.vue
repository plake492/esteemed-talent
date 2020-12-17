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
      <p class="h5">
        Lorem ipsum dolor
      </p>
      <p>Lorem, ipsum dolor sit amet consectetur</p>
      <div class="row ml-4 mb-4">
        <div class="col-6">
          <label for="">name</label>
          <input class="w-100 mt-2" type="text" />
        </div>
        <div class="col-6">
          <label for="">name</label>
          <input class="w-100 mt-2" type="text" />
        </div>
        <div class="col-6">
          <label for="">name</label>
          <input class="w-100 mt-2" type="text" />
        </div>
        <div class="col-6">
          <label for="">name</label>
          <input class="w-100 mt-2" type="text" />
        </div>
      </div>
      <button>Get in Touch</button>
    </div>
  </div>
</template>

<style scoped>
.bg-three {
  background-color: blueviolet;
}
</style>
