<template>
  <div class="container pb-5">
    <SearchBar header="Who is looking for work?" class="mb-4" />
    <router-view></router-view>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'

export default {
  name: 'TalentFeed',
  components: {
    SearchBar
  }
}
</script>
