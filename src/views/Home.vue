<template>
  <div class="home">
    <b-container>
      <BaseHeader :headerData="headerData" />
      <ScheduleList :tracks="data.tracks"/>
    </b-container>
    <BaseFooter/>
  </div>
</template>

<script>
import BaseHeader from '@/components/BaseHeader.vue'
import ScheduleList from '@/components/ScheduleList.vue'
import BaseFooter from '@/components/BaseFooter.vue'
import data from '@/data/index'

export default {
  name: 'home',
  components: {
    BaseHeader,
    ScheduleList,
    BaseFooter
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
