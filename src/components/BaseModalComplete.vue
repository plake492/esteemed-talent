<template>
  <BaseModalWraper
    ref="ref"
    modalRef="ref"
    content-class="job_modal"
    body-class="job_modal small_screen_modal"
    dialog-class="small_screen_modal"
  >
    <template v-slot="slotProps">
      <BaseModal
        modalTitle="String"
        @hideModal="hideModal(slotProps.modalRef)"
        ref="slotProps.modalRef"
      >
        <template v-slot:form>
          <BaseInput
            v-for="(item, $index) in field"
            :key="$index"
            :label="item.label"
            v-model="form[item.ref]"
            :type="item.type"
            class="form-group"
          />
        </template>
        <template v-slot:button="slotProps">
          <button
            @click.prevent="loginUser()"
            class="btn btn-primary modal_btn m-0 mt-4 modal_btn"
          >
            <div>{{ slotProps.modalTitle }}</div>
          </button>
        </template>
      </BaseModal>
    </template>
  </BaseModalWraper>
</template>

<script>
export default {
  props: {
    ref: String,
    field: Array,
    title: String
  },
  methods: {
    showModal(type) {
      console.log('type==>>', type)
      console.log('this.$refs==>>', this.$refs)
      this.$refs[type].showModal()
    },
    hideModal(type) {
      this.$refs[type].hideModal()
    }
  }
}
</script>
