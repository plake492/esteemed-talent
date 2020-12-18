<template>
  <div>
    <div class="esteemed-container">
      <h4 class="px-4 pt-2">Who is looking for work?</h4>
      <div class="row px-4 pt-2">
        <div class="col-6">
          <select class="custom-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="col-6">
          <select class="custom-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <button class="mt-4 btn-block w-100 btn-success p-2">
        more filteres
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar'
}
</script>
