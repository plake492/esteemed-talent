<template>
  <div>
    <header class="p-3 px-4">
      <div class="d-flex flex-row justify-content-between align-items-center">
        <h2>
          {{
            job.title.length > 27 ? job.title.substr(0, 25) + '...' : job.title
          }}
        </h2>
        <div class="escape" @click="$emit('hideModal')">&#215;</div>
      </div>
      <h5>Remote | Contract</h5>
    </header>
    <main class="p-5">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aperiam
      ex doloribus illo maiores, quasi porro, id, explicabo repellat deleniti
      tempora perferendis culpa officia facere officiis placeat beatae ipsum
      adipisci!
    </main>
    <footer class="d-flex">
      <button @click="$emit('hideModal')" class="btn btn-secondary">
        <div>CANCEL</div>
      </button>
      <button @click="submit()" class="btn btn-primary">
        <div>APPLY</div>
      </button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'JobModal',
  props: {
    job: {
      type: Object,
      require: true
    }
  },
  methods: {
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    submit() {
      this.$emit('submitApplication', 'Bob')
    }
  }
}
</script>
<style scoped>
header {
  color: #ffffff;
  background-color: #4f5461;
  margin: 0 !important;
}

button {
  width: 50%;
  margin: 0.5rem;
}
.escape {
  width: 20px;
  /* height: 20px; */
  font-size: 2.5rem;
  cursor: pointer;
  transition: 0.3s;
}
.escape:hover {
  background-color: #474b57;
}
</style>
