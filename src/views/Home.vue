<template>
  <div>
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
  </div>
</template>

<script>
import SectionOne from '@/components/Homepage/SectionOne'
import SectionTwo from '@/components/Homepage/SectionTwo'
import SectionThree from '@/components/Homepage/SectionThree'
import SectionFour from '@/components/Homepage/SectionFour'
import SectionFive from '@/components/Homepage/SectionFive'

export default {
  name: 'Home',
  components: {
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    SectionFive
  }
}
</script>

<style></style>
