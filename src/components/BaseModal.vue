<template>
  <div>
    <header class="p-3 px-4 header">
      <div class="d-flex flex-row justify-content-between align-items-center">
        <h2>{{ modalTitle }}</h2>
        <div class="escape" @click="$emit('hideModal', modalRef)">&#215;</div>
      </div>
    </header>
    <form class="p-5 container">
      <slot name="form"></slot>
      <slot name="button" :modalTitle="modalTitle"></slot>
    </form>
  </div>
</template>

<script>
export default {
  name: 'BaseModal',
  props: {
    modalTitle: {
      type: String,
      required: true
    },
    modalRef: String
  }
}
</script>
