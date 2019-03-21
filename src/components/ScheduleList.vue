<template>
  <div>
    <template v-for="(s, i) in data.content">
      <scheduleTable :key="i" :info="s" />
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
  props: {
    data: {
      required: true,
      type: String
    }
  }
}
</script>
