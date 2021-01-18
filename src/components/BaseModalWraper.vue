<template>
  <b-modal :ref="modalRef" hide-header hide-footer centered size="lg">
    <slot :modalRef="modalRef"></slot>
  </b-modal>
</template>

<script>
export default {
  name: 'BaseModalWrapper',
  props: {
    modalRef: {
      type: String,
      default: 'my-modal'
    }
  },
  methods: {
    showModal: function() {
      this.$refs[this.modalRef].show()
    },
    hideModal: function() {
      this.$refs[this.modalRef].hide()
    }
  }
}
</script>
