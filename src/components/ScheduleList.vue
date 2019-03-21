<template>
  <div>
    <template v-for="(track, idx) in tracks">
      <ScheduleTable :key="idx" :track="track"/>
    </template>
  </div>
</template>

<script>
import ScheduleTable from './ScheduleTable'

export default {
  name: 'ScheduleList',
  components: {
    ScheduleTable
  },
  props: {
    tracks: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      key: 'value'
    }
  }
}
</script>
