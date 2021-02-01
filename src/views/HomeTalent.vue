<template>
  <div>
    <!-- <SectionOne/> -->
    <div class="py-4 bg_primary">
      <div class="container">
        <div class="row position-relative">
          <div class="col-6">
            <p class="h3 mb-4">
              Find the work that fits your <br />
              strengths
            </p>
            <p class="h3">
              Help us power the freelance
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus repellat facilis eaque ducimus eum, culpa unde quam
              repudiandae rem amet ut consectetur aspernatur vel, qui expedita,
              debitis aut voluptate tempore! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eaque tempora quam officiis
              incidunt, nesciunt aspernatur assumenda sed quisquam voluptatum
              temporibus nam minima? Voluptas, adipisci non fugiat reprehenderit
              mollitia voluptatibus dicta.
            </p>
            <button class="btn btn-primary mb-5">Join Now</button>
          </div>
          <!--BIG CIRCLE-->
          <div class="position-absolute circle_container">
            <div class="circle _big"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- <SectionTwo/> -->
    <div class="pt-3 bg_grey">
      <div class="container">
        <div class="row">
          <div class="col-4">
            <p class="h3">
              Fill open positions that perfectly fit your craft
            </p>
          </div>
          <div class="col-8">
            <p>suggested rates</p>
            <div class="row mx-auto">
              <div class="col" v-for="(rate, index) in rates" :key="index">
                <div class="rec mt-2 border"></div>
              </div>
            </div>
            <p class="text-center">All candidates good</p>
          </div>
        </div>
      </div>
    </div>
    <!-- <SectionThree /> -->
    <div class="py-5 bg_second">
      <div class="container">
        <div class="row">
          <div class="col-4">
            <p class="h4">
              Join and create your profile now and be found by companies that
              need your help
            </p>
          </div>
          <div class="col-1"></div>
          <div class="col-4 d-flex align-items-center">
            <button class="btn btn-secondary">
              Join and create your profile now
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- <SectionFour> -->
    <div class="py-3">
      <div class="container bg_primary">
        <div class="row mb-5">
          <div class="col-8">
            <p class="h4 pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quos
              officiis praesentium, debitis beatae minima dolorem tenetur nobis
              vero omnis quod non culpa ratione sequi rem perspiciatis saepe
              rerum quasi.
            </p>
            <p class="h4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ut
              incidunt ea omnis ipsum nobis deleniti quidem beatae cumque
              numquam excepturi aspernatur, iure est consequatur odit. Nisi
              debitis explicabo odio.
            </p>
          </div>
          <div class="col-4">
            <div class="circle shadow border"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-3 bg_grey">
      <div class="container">
        <div class="row">
          <LogoDisplay />
        </div>
      </div>
    </div>
    <!-- <SectionFive /> -->
    <div class="pt-3 bg_second">
      <div class="container">
        <GetInTouch />
      </div>
    </div>
  </div>
</template>

<script>
import LogoDisplay from '@/components/LogoDisplay'
import GetInTouch from '@/components/HomePage/GetInTouch'

export default {
  name: 'HomeTalent',
  components: { LogoDisplay, GetInTouch },
  data() {
    return {
      rates: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    }
  }
}
</script>

<style scoped>
.box {
  width: 100%;
  height: 300px;
}

.rec {
  height: 75px;
  width: 55px;
  background-color: crimson;
}

.circle_container {
  right: 45px;
  top: -45px;
}
</style>
