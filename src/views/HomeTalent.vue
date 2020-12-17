<template>
  <div>
    <h1>HOME TALENT</h1>
    <Container class="py-4">
      <!-- <SectionOne/> -->
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
            consectetur adipisicing elit. Eaque tempora quam officiis incidunt,
            nesciunt aspernatur assumenda sed quisquam voluptatum temporibus nam
            minima? Voluptas, adipisci non fugiat reprehenderit mollitia
            voluptatibus dicta.
          </p>
          <button class="btn btn-primary mb-5">Join Now</button>
        </div>
        <!--BIG CIRCLE-->
        <div class="position-absolute circle_container">
          <div class="circle _big"></div>
        </div>
      </div>
    </Container>
    <Container color="#615e5a" class="pt-3">
      <!-- <SectionTwo/> -->
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
    </Container>
    <Container color="blueviolet" class="py-5">
      <!-- <SectionThree /> -->
      <div class="row">
        <div class="col-4">
          <p class="h4">
            Join and create your profile now and be found by companies that need
            your help
          </p>
        </div>
        <div class="col-4 d-flex align-items-center">
          <button class="btn btn-primary">
            Join and create your profile now
          </button>
        </div>
      </div>
    </Container>
    <Container class="py-3">
      <!-- <SectionFour>
        <LogoDisplay />
      </SectionFour> -->
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
    <Container color="blueviolet" class="pt-3">
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
    </Container>
  </div>
</template>

<script>
import Container from '@/components/Container'
import LogoDisplay from '@/components/LogoDisplay'

export default {
  name: 'HomeTalent',
  components: { Container, LogoDisplay },
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
  right: 25px;
  top: -70px;
}
</style>
