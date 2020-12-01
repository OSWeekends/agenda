<template>
  <div class="home">
    <b-container>
      <BaseHeader :headerData="headerData" />
      <TwitchIsLive/>
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
import { mapActions } from 'vuex'
import TwitchIsLive from '@/views/TwitchIsLive'

export default {
  name: 'home',
  components: {
    TwitchIsLive,
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
      const { title, eventType, date, meetupLink, description, eventLink, isTimezoneSelectorEnabled } = data
      return {
        title,
        eventType,
        date,
        meetupLink,
        description,
        eventLink,
        isTimezoneSelectorEnabled
      }
    }
  },
  mounted () {
    this.setEventDate(`${data.date} ${data.startTime}`)
    if (localStorage.timezone) {
      this.updateTimezone(localStorage.timezone)
    }
  },
  methods: {
    ...mapActions({
      setEventDate: 'timezone/setFormattedEventDate',
      updateTimezone: 'timezone/updateTimezone'
    })
  }
}
</script>
