<template>
  <div class="bg-white my-3">
    <div class="row p-2">
      <div class="mt-2 col-2 w-100">
        <img class="circle" :src="person.image_large" />
      </div>
      <div class="col">
        <h3>{{ person.full_name }}</h3>
        <h6>{{ person.title }}</h6>
        <h6>{{ person.years }}</h6>
        <h6>{{ person.date }}</h6>
        <p>
          {{ person.about }}
        </p>
        <p>
          skills:
          <span v-for="(item, $index) in person.skills" :key="$index">
            {{ item }}{{ $index !== person.skills.length - 1 ? ',' : '' }}
          </span>
        </p>
      </div>
    </div>
    <div class="bg-dark p-2">
      <router-link
        :to="'/talent-feed/talent/' + person.id"
        class="btn btn-primary mr-2"
      >
        Schedule Interview
      </router-link>
      <button class="btn btn-secondary">
        Recommend
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    person: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.circle {
  background-color: black;
  border-radius: 50%;
  width: 75px;
  height: 75px;
}
</style>
