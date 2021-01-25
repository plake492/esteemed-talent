<template>
  <div>
    <!-- <SectionOne/> -->
    <div class="py-4 bg_primary ">
      <div class="container">
        <div class="row">
          <div class="col-4">
            <p class="h3 mb-2 pr-4">
              Quickly find and confidently hire talent from your own network
            </p>
            <p>
              Join our freelance revolution
            </p>
          </div>
          <div class="col-8">
            <div class="border">
              <div class="box shadow bg_grey"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <SectionTwo/> -->
    <div class="pt-5 bg_grey">
      <div class="container">
        <div class="row">
          <div class="col-4">
            <p class="h5 pr-5">
              Discover perfect matches to add to your team
            </p>
          </div>
          <div class="col-8">
            <p>Suggested Candidates</p>
            <div class="row mx-auto">
              <div
                class="col-3"
                v-for="(candidate, index) in exampleCandidates"
                :key="index"
              >
                <div class="rec mx-2 border"></div>
              </div>
            </div>
            <p class="text-center">
              All candidates have been assesed, vetted, <br />and are qualified
              matches for your project needs
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- <SectionThree /> -->
    <div class="py-3 bg_second">
      <div class="container">
        <div class="row">
          <div class="col-4">
            <p class="pr-5 py-4">
              Create your job posting and find the missing pieces for your team
            </p>
          </div>
          <div class="col-4 d-flex align-items-center">
            <BaseButton class="btn btn-secondary">Post a Job Now</BaseButton>
          </div>
        </div>
      </div>
    </div>
    <!-- <SectionFour> -->
    <div class="py-3 bg_primary">
      <div class="container">
        <div>
          <div class="row mb-5">
            <div class="col-8">
              <p class="h5 pr-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                quos officiis praesentium, debitis beatae minima dolorem tenetur
                nobis vero omnis quod non culpa ratione sequi rem perspiciatis
                saepe rerum quasi.
              </p>
              <p class="h5 pr-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                ut incidunt ea omnis ipsum nobis deleniti quidem beatae cumque
                numquam excepturi aspernatur, iure est consequatur odit. Nisi
                debitis explicabo odio.
              </p>
            </div>
            <div class="col-4">
              <div class="circle shadow border"></div>
            </div>
          </div>
          <div class="row">
            <LogoDisplay />
          </div>
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
  name: 'Home',
  components: {
    LogoDisplay,
    GetInTouch
  },
  data() {
    return {
      exampleCandidates: [1, 2, 3, 4],
      inputs: [1, 2, 3, 4]
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
  height: 200px;
  width: 100px;
  background-color: crimson;
}
</style>
