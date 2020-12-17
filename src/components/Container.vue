<template>
  <div :style="'background-color: ' + color" class="wrapper">
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

<style>
.wrapper {
  border-bottom: 1px black solid;
}
</style>
