import { getState } from '@/use/getState'

export const stateMixin = {
  setup (_, { root }) {
    return { ...getState(root) }
  }
}
