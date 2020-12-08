<template>
  <div class="esteemed-container p-4">
    <div class="row">
      <div class="col-6">
        <template v-for="(item, $index) in list">
          <TalentCard v-bind:key="$index" :person="item" />
        </template>
      </div>
      <div class="col-6">
        <p class="h6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          assumenda perferendis quaerat voluptate quia ipsum quis pariatur
          eveniet perspiciatis. Necessitatibus excepturi ut temporibus commodi
          laboriosam aliquam, magnam voluptatum vero eum? Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Distinctio voluptatibus, dolores
          error cumque doloribus ab voluptates aut possimus, sint maiores
          officiis, hic eum sequi modi recusandae harum. Veritatis, nisi
          consequuntur?
        </p>
        <br />
        <p class="h6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sit
          alias, aut repellendus tempore ullam quae sequi necessitatibus commodi
          quas eum doloribus, cumque odio deleniti asperiores similique maiores
          sint. Commodi.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import TalentCard from './TalentCard'

export default {
  name: 'FeedDisplay',
  components: { TalentCard },
  data() {
    return {
      list: [
        {
          name: 'Rebert Test',
          title: 'Tile',
          years: '15 years',
          date: '12/23/2020',
          about:
            'alias, aut repellendus tempore ullam quae sequi necessitatibus commod quas eum doloribus, cumque odio deleniti asperiores similique maiores sint. Commodi.',
          skills: ['Kayaking', 'Painting', 'Napping'],
          link: '#'
        },
        {
          name: 'Rebert Test',
          title: 'Tile',
          years: '15 years',
          date: '12/23/2020',
          about:
            'alias, aut repellendus tempore ullam quae sequi necessitatibus commod quas eum doloribus, cumque odio deleniti asperiores similique maiores sint. Commodi.',
          skills: ['Kayaking', 'Painting', 'Napping'],
          link: '#'
        },
        {
          name: 'Rebert Test',
          title: 'Tile',
          years: '15 years',
          date: '12/23/2020',
          about:
            'alias, aut repellendus tempore ullam quae sequi necessitatibus commod quas eum doloribus, cumque odio deleniti asperiores similique maiores sint. Commodi.',
          skills: ['Kayaking', 'Painting', 'Napping'],
          link: '#'
        },
        {
          name: 'Rebert Test',
          title: 'Tile',
          years: '15 years',
          date: '12/23/2020',
          about:
            'alias, aut repellendus tempore ullam quae sequi necessitatibus commod quas eum doloribus, cumque odio deleniti asperiores similique maiores sint. Commodi.',
          skills: ['Kayaking', 'Painting', 'Napping'],
          link: '#'
        }
      ]
    }
  }
}
</script>

<style></style>
