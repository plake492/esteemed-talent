<template>
  <div class="px-4">
    <div class="d-flex justify-content-between">
      <h3>Hello {{ talent.name }}</h3>
      <div>
        <button
          class="d-block ml-auto rounded border"
          @click="$emit('closeModal')"
        >
          &#10005;
        </button>
      </div>
    </div>
    <p>{{ talent.about }}</p>
    <div>
      Skills:
      <span v-for="(skill, $index) in talent.skills" v-bind:key="$index">
        {{ skill }}
      </span>
      <div class="mt-5">
        <button class="btn btn-primary mr-2">Yes I love them</button>
        <button class="btn btn-primary">Nah, I don't love them</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScheduleModal',
  props: {
    talent: {
      type: Object,
      required: true
    }
  }
}
</script>
