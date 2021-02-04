<template>
  <div>
    <div class="bg-dark text-white">
      <h4 class="px-4 pt-2">{{ header }}</h4>
      <div class="row px-4 pt-2">
        <div class="col-6">
          <select v-bind="select1" class="custom-select">
            <option selected>Choose...</option>
            <option
              v-for="({ text, value }, $index) in options"
              :key="$index"
              :value="value"
              >{{ text }}</option
            >
          </select>
        </div>
        <div class="col-6">
          <select v-bind="select2" class="custom-select">
            <option selected>Choose...</option>
            <option
              v-for="({ text, value }, $index) in options"
              :key="$index"
              :value="value"
              >{{ text }}</option
            >
          </select>
        </div>
      </div>
      <button class="mt-4 btn-block w-100 btn-success p-2">
        more filteres
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    header: {
      type: String,
      default: 'Search'
    },
    options: {
      type: [Array, String],
      default: () => [
        { text: 'foo', value: 'bar' },
        { text: 'foo', value: 'bar' }
      ]
    }
  },
  data() {
    return {
      select1: '',
      select2: ''
    }
  }
}
</script>
