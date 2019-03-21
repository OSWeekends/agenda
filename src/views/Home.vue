<template>
  <div class="home">
    <BaseHeader :title="data.title"/>
    <ScheduleList :tracks="data.tracks" />
  </div>
</template>

<script>
import BaseHeader from '@/components/BaseHeader.vue'
import ScheduleList from '@/components/ScheduleList.vue'
import data from '@/data/index'

export default {
  name: 'home',
  components: {
    BaseHeader,
    ScheduleList
  },
  data () {
    return {
      data
    }
  }
}
</script>
