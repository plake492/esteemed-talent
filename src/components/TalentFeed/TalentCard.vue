<template>
  <div class="bg-white my-3">
    <div class="row p-2">
      <div class="mt-2 col-2 w-100">
        <div class="circle"></div>
      </div>
      <div class="col">
        <h3>{{ person.name }}</h3>
        <h6>{{ person.title }}</h6>
        <h6>{{ person.years }}</h6>
        <h6>{{ person.date }}</h6>
        <p>
          {{ person.about }}
        </p>
        <p>
          skills:
          <span v-for="(item, $index) in person.skills" v-bind:key="$index">
            {{ item }}{{ $index !== item.length - 1 ? ',' : null }}
          </span>
        </p>
      </div>
    </div>
    <div class="bg-dark p-2">
      <a :href="person.link" class="btn btn-primary mr-2">
        Schedule Interview
      </a>
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
