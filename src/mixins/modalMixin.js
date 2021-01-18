export const modalMixin = {
  methods: {
    showModal (type) {
      this.$refs[type].showModal()
    },
    hideModal (type) {
      this.$refs[type].hideModal()
    }
  }
}
