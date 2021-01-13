<template>
  <div :style="'background-color: ' + color">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Container',
  props: {
    color: {
      type: String,
      default: '#fff'
    }
  }
}
</script>

<style></style>
