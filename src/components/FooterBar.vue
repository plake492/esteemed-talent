<template>
  <div class="p-5 bg_footer">
    <div class="row mb_large">
      <div class="col pr-5">
        <router-link to="/"
          ><img
            class="ml-auto d-block mb-4"
            width="75%"
            src="@/assets/imgs/logo/esteemed-bw-logo.svg"
            alt=""
          />
        </router-link>
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
      <template v-for="(item, $index) in social">
        <a v-bind:key="$index" href="#">
          <img
            class="logo"
            :src="require(`@/assets/imgs/logo/${item}.svg`)"
            :alt="item + ' logo'"
          />
        </a>
      </template>
    </div>
    <div class="ml-2 pt-4">
      <small class="footer__copyrigth">
        Copywrite &#169; 2020
        <span><a href="#" class="text-muted">Esteemed privacy</a></span> |
        <span><a href="#" class="text-muted">Terms</a></span> |
        <span><a href="#" class="text-muted">Code of Conduct</a></span>
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
      social: ['facebook', 'instagram', 'twitter', 'linkedIn', 'email']
    }
  }
}
</script>

<style scoped>
.footer__copyrigth {
  color: #8a8a8a;
  font-size: 0.625rem;
  font-weight: bold;
}
.bg_footer {
  background-color: var(--bg-grey) !important;
}
.mb_large {
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
