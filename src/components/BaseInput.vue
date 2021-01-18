<template>
  <li>
    <label v-if="label">{{ label }}</label>
    <input
      :value="value"
      @input="updateValue"
      v-bind="$attrs"
      class="form-control"
    />
  </li>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'BaseInput',
  props: {
    value: [String, Number],
    label: String
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>
