<template>
  <div>
    <template v-for="(s, i) in schedules">
      <schedule :key="i" />
    </template>
  </div>
</template>

<script>
import schedule from '@/components/ScheduleSimple'

export default {
  name: 'BaseTables',
  components: [
    schedule
  ],
  data () {
    return {
      schedules: []
    }
  }
}
</script>
