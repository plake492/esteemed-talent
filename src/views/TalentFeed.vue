<template>
  <div class="container pb-5">
    <SearchBar header="Who is looking for work?" class="mb-4" />
    <FeedDisplay />
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import FeedDisplay from '@/components/TalentFeed/FeedDisplay'

export default {
  name: 'TalentFeed',
  components: {
    SearchBar,
    FeedDisplay
  }
}
</script>
