<template>
  <div class="speakers mt-4">
    <div v-for="(speaker, idx) in speakers" :key="`speaker-${idx}`">
      <!-- Name / Social -->
      <div class="d-flex">
        <div class="mr-3">
          <!--<b-avatar variant="light" size="2.5em"></b-avatar>-->
          <b-avatar variant="light" size="2.5rem" :src="speaker.avatar"></b-avatar>
        </div>
        <div>
          <div class="d-md-flex align-items-center mb-1">
            <h5 class="speaker-name font-weight-bold mb-0 mr-2"> {{ speaker.name }}</h5>
            <div class="ml-2">
              <TalkAuthorsSocial :social="speaker.social"/>
            </div>
          </div>
          <div class="speaker-bio">
            <p v-for="(bio, index) in speaker.bio" :key="`bio-${index}`">
              {{ bio }}
            </p>
          </div>
        </div>
      </div>
      <!-- Bio -->
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
    color var(--color-text-secondary)
  .speaker-bio > p
    color var(--color-text-light)
</style>
