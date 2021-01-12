<template>
  <div>
    <Container class="py-4">
      <!-- <SectionOne/> -->
      <div class="row">
        <div class="col-4">
          <p class="h3 mb-2">
            Quickly find and confidently hire talent from your own network
          </p>
          <p>
            Lorem ipsum dolor sit
          </p>
        </div>
        <div class="col-8">
          <div class="border">
            <div class="box shadow"></div>
          </div>
        </div>
      </div>
    </Container>
    <Container color="#f3f3f3" class="pt-5">
      <!-- <SectionTwo/> -->
      <div class="row">
        <div class="col-4">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi,
            voluptate perferendis alias excepturi consequuntur corporis aliquam
            nam expedita doloremque assumenda odio nesciunt illo, adipisci
            explicabo. Sequi
          </p>
        </div>
        <div class="col-8">
          <p>suggested Candidates</p>
          <div class="row mx-auto">
            <div
              class="col-3"
              v-for="(candidate, index) in exampleCandidates"
              :key="index"
            >
              <div class="rec mx-2 border"></div>
            </div>
          </div>
          <p class="text-center">All candidates good</p>
        </div>
      </div>
    </Container>
    <Container color="#4488c8" class="py-3 ">
      <!-- <SectionThree /> -->
      <div class="row">
        <div class="col-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ut
            incidunt ea omnis ipsum nobis deleniti quidem beatae cumque numquam
            excepturi aspernatur, iure est consequatur odit. Nisi debitis
            explicabo odio.
          </p>
        </div>
        <div class="col-4 d-flex align-items-center">
          <button class="btn btn-secondary">Post a Job Now</button>
        </div>
      </div>
    </Container>
    <Container class="py-3">
      <!-- <SectionFour> -->
      <div>
        <div class="row mb-5">
          <div class="col-8">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quos
              officiis praesentium, debitis beatae minima dolorem tenetur nobis
              vero omnis quod non culpa ratione sequi rem perspiciatis saepe
              rerum quasi.
            </p>
            <p>
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
        <div class="row">
          <p>trusted by these guys</p>
          <LogoDisplay />
        </div>
        <p class="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
          impedit
        </p>
      </div>
    </Container>
    <Container color="#4488c8" class="pt-3">
      <!-- <SectionFive /> -->
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
          <!-- FORM -->
          <div class="row ml-4 mb-4">
            <div v-for="(items, $index) in inputs" :key="$index" class="col-6">
              <label for="">name</label>
              <input class="w-100 mt-2" type="text" />
            </div>
          </div>
          <button class="btn btn-secondary">Get in Touch</button>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import LogoDisplay from '@/components/LogoDisplay'
import Container from '@/components/Container'

export default {
  name: 'Home',
  components: {
    LogoDisplay,
    Container
  },
  data() {
    return {
      exampleCandidates: [1, 2, 3, 4],
      inputs: [1, 2, 3, 4]
    }
  },
  computed: {
    auth() {
      return this.$store.state.auth
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
