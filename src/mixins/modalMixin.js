export const modalMixin = {
  methods: {
    showModal (type) {
      if (Array.isArray(this.$refs[type])) {
        this.$refs[type][0].showModal()
      } else {
        this.$refs[type].showModal()
      }
    },
    hideModal (type) {
      if (Array.isArray(this.$refs[type])) {
        this.$refs[type][0].hideModal()
      } else {
        this.$refs[type].hideModal()
      }
    }
  }
}
