<template>
  <div class="mb-5">
    <div v-for="(content, idx) in track.content" :key="`content-${idx}`">
      <ScheduleStartingTime :content="content"/>
      <b-row class="my-3">
        <ScheduleTimeLine :content="content"/>
        <ScheduleContentBox :content="content"/>
      </b-row>
    </div>
  </div>
</template>

<script>

import ScheduleTimeLine from '@/components/ScheduleTimeLine'
import ScheduleStartingTime from '@/components/ScheduleStartingTime'
import ScheduleContentBox from '@/components/ScheduleContentBox'

export default {
  name: 'ScheduleTable',
  components: {
    ScheduleContentBox,
    ScheduleStartingTime,
    ScheduleTimeLine
  },
  props: {
    track: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="stylus">
</style>
