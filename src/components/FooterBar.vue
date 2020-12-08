<template>
  <div class="p-5 mt-5 bg-footer">
    <div class="row mb-large">
      <div class="col pr-5">
        <img
          class="ml-auto d-block mb-4"
          width="75%"
          src="../assets/imgs/logo/esteemed-bw-logo.svg"
          alt=""
        />
        <button class="ml-auto d-block btn btn-primary">
          Join Talent Network
        </button>
      </div>
      <div
        class="col"
        v-for="([key, value], $index) in Object.entries(links)"
        v-bind:key="$index"
      >
        <p class="bold">{{ key }}</p>
        <ul>
          <li
            class="my-3"
            v-for="({ title, link }, $keyIndex) in value"
            v-bind:key="$keyIndex"
          >
            <a :href="link">{{ title }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="logos">
      <!-- <template v-for="(item, $index) in social">
        <a v-bind:key="$index" href="">
          <img
            class="logo"
            :src="require('@/assets/imgs/logo/' + item + '.svg')"
            :alt="item + ' logo'"
          />
        </a>
      </template> -->
      <a href="">
        <img class="logo" src="../assets/imgs/logo/faceook.svg" alt="" />
      </a>
      <a href="">
        <img class="logo" src="../assets/imgs/logo/instagram.svg" alt="" />
      </a>
      <a href="">
        <img class="logo" src="../assets/imgs/logo/twitter.svg" alt="" />
      </a>
      <a href="">
        <img class="logo" src="../assets/imgs/logo/linkedIn.svg" alt="" />
      </a>
      <a href="">
        <img class="logo" src="../assets/imgs/logo/email.svg" alt="" />
      </a>
    </div>
    <div class="ml-2 pt-4">
      <small>
        Copywrite &#169; 2020 Esteemed privacy | Terms | Code of Conduct
      </small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterBar',
  data() {
    return {
      links: {
        Features: [
          { title: 'Search Talent', link: '#' },
          { title: 'Search Jobs', link: '#' },
          { title: 'Give and Recieve Referals', link: '#' }
        ],
        'How it Works': [{ title: 'FAQs', link: '#' }],
        Resources: [
          { title: 'Blog', link: '#' },
          { title: 'Partner With Us', link: '#' },
          { title: 'Join Our Newsleatter', link: '#' },
          { title: 'Events', link: '#' }
        ],
        'About Us': [
          { title: 'Our Company', link: '#' },
          { title: 'Contact Us', link: '#' }
        ]
      },
      social: ['facebook', 'instagram', 'twitter', 'linkedIn', 'mail']
    }
  }
}
</script>

<style scoped>
.bg-footer {
  background-color: #e9e9e9;
  border-top: 1px black solid;
}
.mb-large {
  margin-bottom: 10em;
}
.logos > span:not(:first-of-type) {
  margin-left: 1em;
}
.logos > a > img {
  width: 18px;
  height: 18px;
  margin: 0 0.75em;
}
</style>
