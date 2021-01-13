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
    <form class="p-5">
      <ul>
        <li class="form-group">
          <label for="first_name">FIRST NAME</label>
          <input
            v-model="applicant.firstName"
            class="form-control"
            type="text"
          />
        </li>
        <li class="form-group">
          <label for="last_name">LAST NAME</label>
          <input
            v-model="applicant.lastName"
            class="form-control"
            type="text"
          />
        </li>
        <li class="form-group">
          <label for="email">EMAIL</label>
          <input v-model="applicant.email" class="form-control" type="email" />
        </li>
        <li class="form-group">
          <label for="email">MOBILE PHONE</label>
          <input v-model="applicant.phone" class="form-control" type="phone" />
        </li>
        <li class="form-group mt-5">
          <label for="resume">UPLOAD RESUME</label>
          <input type="file" class="file_upload w-100 p-4 text-center" />
        </li>
      </ul>
    </form>
    <footer class="d-flex flex-column flex-md-row">
      <button
        @click="$emit('hideModal')"
        class="btn btn-secondary mx-auto mx-md-2"
      >
        <div>CANCEL</div>
      </button>
      <button @click="submit()" class="btn btn-primary mx-auto mx-md-2">
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
  data() {
    return {
      applicant: {
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      }
    }
  },
  methods: {
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    submit() {
      this.$emit('submitApplication', this.applicant)
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

ul li::before {
  content: '\2022';
  color: red;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
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
.file_upload {
  border: 1px dashed black;
}
</style>
