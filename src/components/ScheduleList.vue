<template>
  <div>
    <template v-for="(s, i) in schedules">
      <scheduleTable :key="i" :data="s"/>
    </template>
  </div>
</template>

<script>
import scheduleTable from '@/components/ScheduleTable'

export default {
  name: 'BaseTables',
  components: [
    scheduleTable
  ],
  data () {
    return {
      schedules: []
    }
  }
}
</script>
