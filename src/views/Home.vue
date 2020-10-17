<template>
  <div class="home">
    <BaseHeader :headerData="headerData" />
    <ScheduleList :tracks="data.tracks"/>
    <Sponsors v-if="data.sponsors.length !== 0" :sponsors="data.sponsors" />
    <BaseFooter/>
  </div>
</template>

<script>
import BaseHeader from '@/components/BaseHeader.vue'
import ScheduleList from '@/components/ScheduleList.vue'
import BaseFooter from '@/components/BaseFooter.vue'
import Sponsors from '@/components/Sponsors.vue'
import data from '@/data/index'

export default {
  name: 'home',
  components: {
    BaseHeader,
    ScheduleList,
    BaseFooter,
    Sponsors
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
