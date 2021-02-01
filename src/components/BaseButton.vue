<template>
  <button v-bind="$attrs" v-on="$listeners" :class="btnClasse">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: { btnClasse: String }
}
</script>
