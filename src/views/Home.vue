<template>
  <div class="home">
    <b-container>
      <BaseHeader :headerData="headerData" />
      <ScheduleList :tracks="data.tracks"/>
      <MeetupLink :eventType="data.eventType"/>
      <Sponsors v-if="data.sponsors.length !== 0" :sponsors="data.sponsors" />
    </b-container>
    <BaseFooter/>
  </div>
</template>

<script>
import BaseHeader from '@/components/BaseHeader.vue'
import ScheduleList from '@/components/ScheduleList.vue'
import BaseFooter from '@/components/BaseFooter.vue'
import Sponsors from '@/components/Sponsors.vue'
import MeetupLink from '@/components/MeetupLink.vue'
import data from '@/data/index'

export default {
  name: 'home',
  components: {
    BaseHeader,
    ScheduleList,
    BaseFooter,
    Sponsors,
    MeetupLink
  },
  data () {
    return {
      data
    }
  },
  computed: {
    headerData () {
      const { title, eventType, date, meetupLink, description, eventLink } = data
      return {
        title,
        eventType,
        date,
        meetupLink,
        description,
        eventLink
      }
    }
  }
}
</script>

<style lang="stylus">
.twitch-icon
  color #3F414E
  background-color white
  padding 35px 40px
  border-radius 50%
  align-items center
  display inline-block
.twitch-link
  color #3F414E
  font-size 24px
  font-weight bolder
  text-decoration none
</style>
