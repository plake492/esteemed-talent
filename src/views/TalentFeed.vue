<template>
  <div class="container">
    <SearchBar />
    <br />
    <FeedDisplay />
  </div>
</template>

<script>
import SearchBar from '@/components/TalentFeed/SearchBar'
import FeedDisplay from '@/components/TalentFeed/FeedDisplay'

export default {
  name: 'TalentFeed',
  components: {
    SearchBar,
    FeedDisplay
  }
}
</script>

<style></style>
