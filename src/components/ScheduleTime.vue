<template>
  <div>
    <div class="starting-time">
      <span class="starting-time__start-time font-weight-bold mr-1 text-monospace">
        {{ `${content.h}:${content.m}` | timezoneTime(timezoneSelected) }}
      </span>
      <span class="starting-time__circle d-inline-block"/>
    </div>
  </div>
</template>

<script>
import EventBus from '@/plugins/event-bus'
import '@/filters/timezone'

export default {
  name: 'ScheduleTime',
  props: {
    content: {
      required: true,
      type: Object
    }
  },
  data: () => ({
    timezoneSelected: 'Europe/Madrid'
  }),
  mounted () {
    const _this = this
    // Subscribe to timezone changes
    EventBus.$on('timezoneChanged', function (timezone) { _this.timezoneSelected = timezone })
  },
  destroyed () {
    // Unsubscribe event
    EventBus.$off('timezoneChanged')
  }
}
</script>

<style lang="stylus">
main-blue = #003DA5
.starting-time
  &__time-container
    display flex
    justify-content space-between
    align-items center

  &__start-time
    color main-blue

  &__circle
    position relative
    width 14px
    height 14px
    background main-blue
    border-radius 50%
    border 3.5px solid #C7D4EB
</style>
