<template>
  <div class="speakers mt-3">
    <div v-for="(speaker, idx) in speakers" :key="`speaker-${idx}`">
      <!-- Name / Social -->
      <div class="d-flex">
        <h5 class="speaker-name font-weight-bold mb-1"> {{ speaker.name }}</h5>
        <div class="ml-2">
          <TalkAuthorsSocial :social="speaker.social"/>
        </div>
      </div>
      <!-- Bio -->
      <div class="speaker-bio">
        <p v-for="(bio, index) in speaker.bio" :key="`bio-${index}`">
          {{ bio }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import TalkAuthorsSocial from '@/components/ScheduleTable/TalkAuthorsSocial'

export default {
  name: 'SpeakersInfo',
  components: {
    TalkAuthorsSocial
  },
  props: {
    speakers: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.speakers
  .speaker-name,
  .social-ico
    color #3F414E
  .speaker-bio > p
    color #8C8D95
</style>
