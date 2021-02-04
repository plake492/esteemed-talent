import { computed } from '@vue/composition-api'

export function getState (root) {
  const state = computed(() => root.$store.state)
  return { state }
}
