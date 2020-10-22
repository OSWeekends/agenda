<template>
  <div class="mb-5">
    <div v-for="(content, idx) in track.content" :key="`content-${idx}`">
      <ScheduleTime :content="content.startTime"/>
      <b-row class="my-3">
        <ScheduleTimeLine :content="content"/>
        <ScheduleContentBox :content="content"/>
      </b-row>
      <ScheduleTime v-if="content.endTime" :content="content.endTime"/>
    </div>
  </div>
</template>

<script>

import ScheduleTimeLine from '@/components/ScheduleTimeLine'
import ScheduleTime from '@/components/ScheduleTime'
import ScheduleContentBox from '@/components/ScheduleContentBox'

export default {
  name: 'ScheduleTable',
  components: {
    ScheduleContentBox,
    ScheduleTime,
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
